import styled from '@emotion/styled/macro';
import { getHeartColor } from 'shared/utils/getHeartColor';

export const IconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 40px;

  background-color: transparent;
`;

export const Svg = styled.svg`
  stroke: ${getHeartColor};
  fill: ${getHeartColor};
  transition: trasform 250ms ${({ theme }) => theme.cubic};

  ${IconBtn}:hover & {
    transform: scale(1.2);
  }
`;
