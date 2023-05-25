import styled from '@emotion/styled';
import {
  charactersType,
  episodesType,
  locationsType,
} from 'shared/constants/dataTypes';

export const Wrap = styled.div`
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

const getBackgroundGradient = ({ label, statistics, theme }) => {
  switch (label) {
    case charactersType:
      return `conic-gradient(${theme.primary} 0% ${statistics[charactersType]}%, transparent ${statistics[charactersType]}% 100%)`;

    case locationsType:
      return `conic-gradient(transparent 0% ${statistics[charactersType]}%, ${
        theme.secondary
      } ${statistics[charactersType]}% ${
        statistics[charactersType] + statistics[locationsType]
      }%, transparent ${
        statistics[charactersType] + statistics[locationsType]
      }% 100%)`;

    case episodesType:
      return `conic-gradient(transparent 0% ${
        statistics[charactersType] + statistics[locationsType]
      }%,${theme.accent} ${
        statistics[charactersType] + statistics[locationsType]
      }% 100%)`;

    default:
      return 'transparent';
  }
};

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${getBackgroundGradient};
`;
