import styled from '@emotion/styled/macro';
import { BasicWrapper } from 'modules/Episodes/Episodes.styled';
import { Link } from 'react-router-dom';
import { Number } from 'shared/styles/components/Number.styled';
import { getHeartColor } from 'shared/utils/getHeartColor';

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  color: inherit;
  transition: transform 250ms ${({ theme }) => theme.cubic};

  &:hover {
    transform: scale(1.05);
  }
`;

export const Wrap = styled(BasicWrapper)`
  position: relative;

  background-color: ${({ theme }) => theme.bgPrimary};
  border: 3px solid ${({ theme }) => theme.paginationAccent};

  &::before {
    content: '';
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 50px;

    background-color: ${({ theme }) => theme.bgEpisodesTransparent};
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

  transition: color 250ms ${({ theme }) => theme.cubic};

  ${StyledLink}:hover & {
    color: ${({ theme }) => theme.characterCardTextAccent};
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
