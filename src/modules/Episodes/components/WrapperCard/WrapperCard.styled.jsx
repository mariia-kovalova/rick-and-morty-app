import styled from '@emotion/styled';

export const EpisodeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 0 auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 1000px;
  height: 400px;
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
// export const CardInfo = styled(EpisodeCard)`
//   width: 300px;
//   background-color: #D1E59F;
//   background-color: rgba(178, 218, 228, 0.9);
/* background-color: #8BD046; */
// `;
export const TextInfo = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
  border-radius: 10px;
  background-color: rgba(178, 218, 228, 0.9);
  width: 180px;
  & span {
    color: #3ea7c2;
    font-weight: 700;
    font-size: 16px;
  }
`;
