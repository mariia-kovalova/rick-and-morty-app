import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 500px;
  height: 300px;
  opacity: 0.7;
  text-align: center;
  background-color: #c0de7f;
  /* ${({ theme }) => theme.bgCharacterCard}; */
  
  & .img-episode {
    flex: 0 1 60%;
    border: 4px solid rgba(178, 218, 228, 0.9);
    border-radius: 10px;
    margin: 0px 10px 0px 10px;
  }
  & .random-episod {
    display: flex;
    flex: 0 1 20%;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;
export const ImgWrap = styled.div`
  height: 260px;
  width: 260px;
  border: 2px solid rgba(178, 218, 228, 0.9);
`;
