import styled from '@emotion/styled';
import {
  charactersType,
  episodesType,
  locationsType,
} from 'shared/constants/dataTypes';
import { tablet } from 'shared/constants/deviceSizes';

export const Wrap = styled.div`
  width: 240px;

  @media (min-width: ${tablet}) {
    width: 350px;
  }
`;

export const StyledH3 = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  text-align: center;
  color: ${({ theme }) => theme.textPrimary};

  @media (min-width: ${tablet}) {
    font-size: 30px;
  }
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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-left: 24px;
  max-width: 300px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.textPrimary};

  @media (min-width: ${tablet}) {
    font-size: 14px;
    margin-left: 80px;
  }
`;

const getBgColor = ({ theme, label }) => {
  const { primary, secondary, accent } = theme;
  switch (label) {
    case charactersType:
      return primary;

    case locationsType:
      return secondary;

    case episodesType:
      return accent;

    default:
      return 'transparent';
  }
};

export const Item = styled.li`
  position: relative;
  display: flex;
  gap: 5px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -25px;
    transform: translate(0, -50%);

    width: 20px;
    height: 20px;

    border-radius: 50%;
    background-color: ${getBgColor};
  }
`;
