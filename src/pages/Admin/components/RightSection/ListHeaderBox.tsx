import styled from 'styled-components';

const ListHeaderContents = () => {
  return (
    <UserListHeader>
      <UserName>사용자</UserName>
      <UserNickName>닉네임</UserNickName>
      <UserEmail>이메일</UserEmail>
      <UserMbti>MBTI</UserMbti>
      <UserSignDate>가입일</UserSignDate>
    </UserListHeader>
  );
};

const UserListHeader = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr 1fr 1fr 1fr;
  margin-top: 1.875rem;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 2.5rem;
  background-color: ${props => props.theme.colors.lightGray};
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

export default ListHeaderContents;
