import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';
import {
  charactersType,
  episodesType,
  locationsType,
} from 'shared/constants/dataTypes';
import { tablet } from 'shared/constants/deviceSizes';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrap = styled.div`
  margin: 0 auto 20px;
  width: 170px;
  height: 170px;

  @media (min-width: ${tablet}) {
    width: 200px;
    height: 200px;
  }
`;

export const Pie = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  border-radius: 50%;
  transition: transform 250ms ${({ theme }) => theme.cubic};

  ${Wrap}:hover & {
    transform: scale(1.1);
    animation: ${rotate} 0.7s ${({ theme }) => theme.cubic} both;
  }

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

export const getBackgroundGradient = ({ label, statistics, theme }) => {
  const { primary, secondary, accent } = theme;

  const charactersPercentage = statistics[charactersType];
  const locationsPercentage =
    statistics[charactersType] + statistics[locationsType];
  const episodesPercentage =
    statistics[charactersType] + statistics[locationsType];

  switch (label) {
    case charactersType:
      return `conic-gradient(${primary} 0% ${charactersPercentage}%, transparent ${charactersPercentage}% 100%)`;

    case locationsType:
      return `conic-gradient(transparent 0% ${charactersPercentage}%, ${secondary} ${charactersPercentage}% ${locationsPercentage}%, transparent ${locationsPercentage}% 100%)`;

    case episodesType:
      return `conic-gradient(transparent 0% ${locationsPercentage}%, ${accent} ${episodesPercentage}% 100%)`;

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

export const InfoList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  padding: 8px;
  height: fit-content;
  width: fit-content;

  border-radius: 4px;
  background-color: #333;
  color: ${({ theme }) => theme.textPrimary};
  white-space: nowrap;
  opacity: 0;
  transition: opacity 250ms ${({ theme }) => theme.cubic};

  ${Wrap}:hover & {
    opacity: 1;
  }
`;

export const InfoItem = styled.li``;
