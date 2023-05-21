import styled from '@emotion/styled';

export const FlexCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
export const FlexInfo = styled(FlexCard)`
  flex: 0 1 20%;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  gap: 40px;
`;
export const BtnRandom = styled.button`
  font-size: 700;
  background-color: #7dd3e8;
  margin-top: 50px;
  height: 120px;
  width: 150px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
  border-radius: 10px;
`;
