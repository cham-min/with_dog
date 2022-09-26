import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { useCookies } from 'react-cookie';
import styled, { css } from 'styled-components/macro';
import TitlePaw from '../../../assets/svg/TitlePawPositoin.svg';
import { room1, room2, room3, room4 } from './constants/Result';
import RecommendationModal from './ResultModal/RecommendationModal';
import CHATLIST_DATA from 'pages/Chatting/DATA/CHATLIST_DATA';
import LoginModal from './ResultModal/LoginModal';

const ChatroomRecommendation = () => {
  const mbtiResultText = useSelector((state: RootState) => state.mbtiText);
  const getMBTIResult: string = Object.values(mbtiResultText).toString();
  const [isShowModal, setIsShowModal] = useState(false);
  const [roomID, setRoomID] = useState<number>();

  const [cookies] = useCookies(['userToken']);
  const checkLogin = cookies.userToken && true;

  const resultModal = CHATLIST_DATA.filter(item => {
    return item.id === roomID;
  });

  const handleClick = (getMBTIResult: string) => {
    if (room1.includes(getMBTIResult)) {
      setRoomID(1);
    } else if (room2.includes(getMBTIResult)) {
      setRoomID(2);
    } else if (room3.includes(getMBTIResult)) {
      setRoomID(3);
    } else if (room4.includes(getMBTIResult)) {
      setRoomID(4);
    }
  };

  const onClickToggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <ChatroomRecommendationContainer>
      <TitleContainer>
        <TitleIMG src={TitlePaw} />
        <TitleText>채팅방 추천받기</TitleText>
        <TitleIMG src={TitlePaw} />
      </TitleContainer>
      <ContentText>
        최고의 궁합을 자랑하는 함께하개의 채팅방 추천받기
      </ContentText>
      <JoinButton>
        <ButtonText
          onClick={() => {
            handleClick(getMBTIResult);
            onClickToggleModal();
          }}
        >
          참여하개
        </ButtonText>
      </JoinButton>
      {isShowModal && checkLogin ? (
        <RecommendationModal
          onClickToggleModal={onClickToggleModal}
          resultModal={resultModal}
        />
      ) : (
        <LoginModal onClickToggleModal={onClickToggleModal} />
      )}
    </ChatroomRecommendationContainer>
  );
};

const BasicText = css`
  text-align: center;
  color: #333333;
`;

const ChatroomRecommendationContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'space-between')};
  margin: 5rem 0;
`;

const TitleContainer = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')};
  width: 25rem;
`;

const TitleIMG = styled.img`
  width: 1.563rem;
`;

const TitleText = styled.span`
  ${BasicText}
  font-size: 1.563rem;
`;

const ContentText = styled.span`
  margin-top: 2.5rem;
  ${BasicText}
  font-size: 1.563rem;
  font-weight: 300;
`;

const JoinButton = styled.button`
  width: 33.75rem;
  height: 3.125rem;
  margin-top: 1.25rem;
  background-color: #888888;
  border-style: none;
  border-radius: 3.125rem;
  &:hover {
    background-color: #7dccc7;
  }
`;

const ButtonText = styled.span`
  color: white;
  font-size: 1.563rem;
  font-weight: 500;
`;

export default ChatroomRecommendation;
