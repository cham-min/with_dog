import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import LeftSideList from 'pages/Admin/components/LeftSideMenu';
import AdminHeader from 'pages/Admin/components/AdminContainer/components/AdminHeader';
import AdminRightPage from 'pages/Admin/components/AdminRightPage';
import { BASE_URL } from 'config';
import LEFTSIDE_DB from 'pages/Admin/DATA/LEFTSIDE_LIST';
import { ListData } from 'pages/Admin/type';
import { PostDataTypes } from 'pages/Admin/type';
import backGroundImg from 'assets/images/bg1.jpg';

const AdminContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [clicked, setClicked] = useState<string>(location.pathname.slice(7));
  const [postData, setPostData] = useState<PostDataTypes[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [counts, setCounts] = useState<number>();

  //모달
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalId, setModalId] = useState<number | undefined>();

  const detailModalOpener = (): void => {
    setIsModalOpen(prev => !prev);
  };

  const onCurrentModal = (id: number): void => {
    setModalId(id);
  };

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${BASE_URL}/${location.pathname.slice(7)}${
          location.search ? location.search + '&' : '?'
        }page=${currentPage}`,
        {
          headers: {
            accept: '*/*',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        }
      );
      setPostData(response.data.items);
      setCounts(response.data.count);
    } finally {
      setLoading(false);
    }
  }, [currentPage, location.pathname, location.search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const setClick = (list: ListData): void => {
    setClicked(list.value);
  };

  return (
    <AdminPageContainer>
      <AdminHeader onCurrentModal={onCurrentModal} modalId={modalId} />
      <SectionContainer>
        <AdminLeftSection>
          <ListWrapper>
            {LEFTSIDE_DB.map(list => (
              <LeftSideList
                list={list}
                key={list.id}
                setClick={setClick}
                clicked={clicked}
                navigate={navigate}
              />
            ))}
          </ListWrapper>
        </AdminLeftSection>
        <AdminRightSection>
          <AdminRightPage
            postData={postData}
            loading={loading}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            counts={counts}
            isModalOpen={isModalOpen}
            modalId={modalId}
            detailModalOpener={detailModalOpener}
            onCurrentModal={onCurrentModal}
          />
        </AdminRightSection>
      </SectionContainer>
    </AdminPageContainer>
  );
};

const AdminPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 50rem;
  background: url(${backGroundImg}) center no-repeat;
  background-size: cover;
`;

const SectionContainer = styled.div`
  ${props => props.theme.flex.flexBox('row')}
`;

const AdminLeftSection = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'start')}
  padding-top : 1px;
  width: 12.5rem;
  height: calc(100vh - 6.25rem);
  background-color: ${props => props.theme.colors.lineLightGray};
`;

const ListWrapper = styled.ul`
  width: 100%;
  padding-top: 1.5rem;
  list-style: none;
`;

const AdminRightSection = styled.div`
  width: calc(100vw - 12.5rem);
  height: calc(100vh - 6.25rem);
  min-width: 40rem;
`;

export default AdminContainer;
