import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';
import imgErrorC1 from 'shared/images/404-c1.png';

export const Text = styled.p`
  margin-top: 30px;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  text-align: center;
  color: ${({ theme }) => theme.textPrimary};
`;

export const BgImg = styled.div`
  height: 200px;
  margin: 0 auto;
  background-image: url(${imgErrorC1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: ${tablet}) {
    width: 400px;
    height: 300px;
  }
`;
