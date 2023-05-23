import styled from '@emotion/styled';
import { StyledLink } from 'modules/Characters/components/RandomCharacter/RandomCharacter.styled';
import { Number } from 'shared/styles/components/Number.styled';
import { getHeartColor } from 'shared/utils/getHeartColor';

export const Wrap = styled.div`
  position: relative;

  & ul {
    bottom: -20%;
    left: -30%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -30%;

    width: 585px;
    height: 55px;

    background-color: ${({ theme }) => theme.bgEpisodesTransparent};
  }
`;

export const Img = styled.img`
  border-radius: 4px;
`;

export const StyledNumber = styled(Number)`
  position: absolute;
  top: 5px;
  left: -126px;

  color: ${({ theme }) => theme.textPrimary};
  transition: color 250ms ${({ theme }) => theme.cubic};

  ${StyledLink}:hover & {
    color: ${({ theme }) => theme.characterCardTextAccent};
  }
`;

export const HeartWrap = styled.div`
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 1;

  width: 30px;
  height: 30px;

  & svg {
    stroke: ${getHeartColor};
    fill: ${getHeartColor};
  }
`;
