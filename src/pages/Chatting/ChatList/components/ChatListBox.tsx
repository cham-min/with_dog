import styled from 'styled-components';
import ChatListLeft from './ChatListLeft';
import ChatListRight from './ChatListRight';
import { ChatListProp } from 'pages/Chatting/type';

const ChatListBox = ({
  id,
  Image,
  title,
  description,
  modalDescription,
  type,
}: ChatListProp) => {
  return (
    <ChatListContainer>
      <ChatListLeft Image={Image} title={title} description={description} />
      <ChatListRight
        id={id}
        Image={Image}
        title={title}
        modalDescription={modalDescription}
        type={type}
      />
    </ChatListContainer>
  );
};

const ChatListContainer = styled.div`
  ${props => props.theme.flex.flexBox('row')}
  width: 70%;
  margin-bottom: 1.8rem;
  border-radius: 0.05rem;
`;

export default ChatListBox;
