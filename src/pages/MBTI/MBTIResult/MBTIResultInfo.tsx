import styled, { css } from 'styled-components/macro';
import MBTIGraph from './Graph/MBTIGraph';
import ChatroomRecommendation from './ChatroomRecommendation';
import SNSshare from './SNSshare';
import ESFC_DOG from 'assets/svg/ESFC_DOG.svg';
import ResultInfo from 'assets/svg/ResultInfoPositoin.svg';
import ResultNotice from 'assets/svg/ResultNoticePositoin.svg';
import ESFCPosition from 'assets/svg/ESFCPositoin.svg';
import { MBTI_RESULT } from './constants/Result';

const MBTIResultInfo = ({ graphResult, mbtiResultText }) => {
  const findMBTIValue = mbtiResultText.mbti;
  const getMBTIResult = Object.values(findMBTIValue);

  return (
    <MBTIResultInfoContainer>
      <MBTIDOG src={ESFC_DOG} />
      <MBTIResult>ESFC</MBTIResult>
      <MBTICharacter>천진난만 꾸러기 댕댕이</MBTICharacter>
      <MBTIContent>
        에너지가 넘치는 꾸러기 댕댕이군요! 에너지를 분출시켜주기 위해서 자주
        산책을 시켜주는 것이 좋을 것 같아요! 다른 강아지한테 장난도 많고
        나한테도 장난을 많이 치는 성격인데 확실히 교육과 놀이를 구분시켜 가르칠
        필요가 있습니다! 흥분을 절제하는 방법을 교육 시키는 것 또한
        좋아보입니다!
      </MBTIContent>
      <NoticeImage src={ResultNotice} />
      <GraphInfo src={ResultInfo} />
      <MBTIGraph graphResult={graphResult} />
      <GraphSummary src={ESFCPosition} />
      <ChatroomRecommendation />
      <SNSshare />
    </MBTIResultInfoContainer>
  );
};
const BasicText = css`
  text-align: center;
  color: #333333;
`;

const MBTIResultInfoContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  margin: 0 auto;
  width: 100%;
`;

const MBTIDOG = styled.img`
  width: 31.25rem;
`;

const MBTIResult = styled.span`
  margin-top: 3rem;
  font-size: 3.125rem;
  font-weight: 500;
  ${BasicText}
`;

const MBTICharacter = styled.span`
  margin-top: 1rem;
  font-size: 1.125rem;
  ${BasicText}
`;

const MBTIContent = styled.span`
  margin: 3rem 15rem 0 15rem;
  line-height: 2rem;
  font-size: 1.25rem;
  ${BasicText}
`;

const NoticeImage = styled.img`
  width: 58.125rem;
  margin-top: 5rem;
`;

const GraphInfo = styled.img`
  width: 60.625rem;
  margin-top: 5rem;
`;

const GraphSummary = styled.img`
  width: 37.5rem;
  margin-top: 9.375rem;
`;

export default MBTIResultInfo;
