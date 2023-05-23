import styled from '@emotion/styled/macro';
import { BasicWrapper } from 'modules/Episodes/Episodes.styled';
import { Link } from 'react-router-dom';
import { tablet } from 'shared/constants/deviceSizes';
import { Number } from 'shared/styles/components/Number.styled';
import { getHeartColor } from 'shared/utils/getHeartColor';

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  color: inherit;
  transition: transform 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Wrap = styled(BasicWrapper)`
  position: relative;

  background-color: ${({ theme }) => theme.bgPrimary};
  border: 3px solid ${({ theme }) => theme.paginationAccent};

  & ul > li:not(:first-of-type) {
    @media screen and (max-width: ${tablet}) {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;

      white-space: nowrap;
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
    }
  }

  & ul {
    @media screen and (max-width: ${tablet}) {
      top: 107px;
      left: 41px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 50px;

    background-color: ${({ theme }) => theme.bgEpisodesTransparent};

    @media screen and (max-width: ${tablet}) {
      display: none;
    }
  }
`;

export const Img = styled.img`
  margin-left: auto;

  border-radius: 0 8px 8px 0;
`;

export const StyledNumber = styled(Number)`
  position: absolute;
  bottom: 5px;
  right: 20px;

  font-size: 24px;
  transition: color 250ms ${({ theme }) => theme.cubic};

  ${StyledLink}:hover & {
    color: ${({ theme }) => theme.characterCardTextAccent};
  }

  @media screen and (min-width: ${tablet}) {
    font-size: 30px;
  }
`;

export const HeartWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 30px;
  height: 30px;

  & svg {
    stroke: ${getHeartColor};
    fill: ${getHeartColor};
  }
`;
