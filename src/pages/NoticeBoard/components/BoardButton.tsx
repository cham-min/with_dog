import React from 'react';
import styled from 'styled-components';
import pawsIcon from 'assets/svg/dog-paws2.svg';

const BoardButton = () => {
  return (
    <BoardButtonContainer>
      <BoardButtonWrapper>
        {BOARD_FILTERING.map(({ id, filter }) => {
          return (
            <BoardFilterButton key={id}>
              <BoardBtnIcon src={pawsIcon} />
              {filter}
            </BoardFilterButton>
          );
        })}
      </BoardButtonWrapper>

      <BoardWriteButton>
        <BoardBtnIcon src={pawsIcon} />
        새글쓰기
      </BoardWriteButton>
    </BoardButtonContainer>
  );
};

const BOARD_FILTERING = [
  {
    id: 1,
    filter: '발바닥순',
  },
  {
    id: 2,
    filter: '최신순',
  },
];

const BoardButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BoardButtonWrapper = styled.div`
  display: flex;
  width: 15rem;
  justify-content: space-between;
`;

const BoardFilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.8rem;
  height: 2rem;
  border: none;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.boxBlue};
  color: white;
`;

const BoardWriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.8rem;
  height: 2rem;
  border: none;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.mint};
  color: white;
`;

const BoardBtnIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

export default BoardButton;