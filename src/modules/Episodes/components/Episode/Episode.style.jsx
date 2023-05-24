import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';
import { Number } from 'shared/styles/components/Number.styled';
import { getHeartColor } from 'shared/utils/getHeartColor';

export const Wrap = styled.div`
  position: relative;

  transition: transform 250ms ${({ theme }) => theme.cubic};

  & ul {
    bottom: -175%;
    left: 0;

    @media screen and (min-width: ${tablet}) {
      bottom: -8%;
      left: -30%;
    }
  }

  a:hover &,
  a:focus & {
    transform: scale(1.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 40px;

    background-color: ${({ theme }) => theme.bgEpisodesTransparent};

    @media screen and (min-width: ${tablet}) {
      left: -30%;
      width: 585px;
      height: 55px;
    }
  }
`;

export const LoaderWrap = styled.div`
  position: absolute;

  top: 53px;
  left: 40px;

  @media screen and (min-width: ${tablet}) {
    top: 75px;
    left: 258px;
  }

  @media screen and (min-width: ${desktop}) {
    top: 0;
    left: 123px;
  }
`;

export const Img = styled.img`
  border-radius: 4px;
`;

export const StyledNumber = styled(Number)`
  position: absolute;
  top: 5px;
  left: 10px;

  font-size: 20px;
  color: ${({ theme }) => theme.textPrimary};
  transition: color 250ms ${({ theme }) => theme.cubic};

  @media screen and (min-width: ${tablet}) {
    top: 5px;
    left: -126px;
    font-size: 30px;
  }

  a:hover & {
    color: ${({ theme }) => theme.characterCardTextAccent};
  }
`;

export const HeartWrap = styled.div`
  position: absolute;
  top: 0;
  right: 3%;
  z-index: 1;

  @media screen and (min-width: ${tablet}) {
    top: 3%;
    right: 3%;
  }

  width: 30px;
  height: 30px;

  & svg {
    stroke: ${getHeartColor};
    fill: ${getHeartColor};
  }
`;
