import styled from 'styled-components/macro';

interface SNSButtonProps {
  title: string;
  icon: string;
  handleSNSLogin: () => void;
}

const SNSButton = ({ title, icon, handleSNSLogin }: SNSButtonProps) => {
  return (
    <SnsButton onClick={handleSNSLogin}>
      <SnsIcon src={icon} />
      <SnsLogin>{title} 로그인</SnsLogin>
    </SnsButton>
  );
};
const SnsButton = styled.button`
  position: relative;
  margin-left: 1.25rem;
  background-color: white;
  border-radius: 0.625rem;
  border: 1px solid lightgray;
`;
const SnsIcon = styled.img`
  position: absolute;
  top: 10%;
  left: 6%;
  height: 1.375rem;
  padding-top: 0.188rem;
`;
const SnsLogin = styled.div`
  padding: 0.313rem 0.625rem 0.313rem 1.875rem;
  font-size: 1.063rem;
`;
export default SNSButton;
