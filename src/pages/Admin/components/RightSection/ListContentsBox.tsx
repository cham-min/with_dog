import styled from 'styled-components';

const ListContentsBox = ({ data, openModal, onCurrentModal }) => {
  return (
    <ListContents
      onClick={() => {
        openModal();
        onCurrentModal(data.id);
      }}
    >
      <UserName>{data.name}</UserName>
      <UserNickName>{data.nickname}</UserNickName>
      <UserEmail>{data.email}</UserEmail>
      <UserMbti>{data.mbti}</UserMbti>
      <UserSignDate>{data.email}</UserSignDate>
    </ListContents>
  );
};

const ListContents = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr 1fr 1fr 1fr;
  margin: 0 auto;
  margin-bottom: -1px;
  width: 90%;
  height: 2.5rem;
  border: 1px solid #cac8c8;
  cursor: pointer;

  :hover {
    background-color: rgb(202, 200, 200, 0.3);
  }
`;

const UserName = styled.span`
  width: 6.25rem;
  text-align: center;
  vertical-align: middle;
`;

const UserNickName = styled.span`
  text-align: center;
  vertical-align: middle;
`;

const UserEmail = styled.span`
  text-align: center;
  vertical-align: middle;
`;

const UserMbti = styled.span`
  text-align: center;
  vertical-align: middle;
`;

const UserSignDate = styled.span`
  text-align: center;
  vertical-align: middle;
`;

export default ListContentsBox;
