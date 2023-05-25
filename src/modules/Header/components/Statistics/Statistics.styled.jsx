import styled from '@emotion/styled';

export const Wrap = styled.div`
  width: 400px;
`;

export const StyledH3 = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  text-align: center;
  color: ${({ theme }) => theme.textPrimary};
`;

export const Text = styled.p`
  margin: 0 auto 20px;
  max-width: 230px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  text-align: center;
  color: ${({ theme }) => theme.textPrimary};
`;

export const PieChart = styled.div`
  position: relative;

  width: 200px;
  height: 200px;
  border-radius: 50%;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 60%;
    height: 60%;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.bgPrimary};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 0 auto;
  max-width: 300px;

  color: ${({ theme }) => theme.textPrimary};
`;

export const Item = styled.li`
  display: flex;
  gap: 5px;
`;
