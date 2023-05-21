import styled from '@emotion/styled';
import { tablet } from 'shared/constants/deviceSizes';
import { StyledLink as LinkOnRandomizer } from '../RandomCharacter/RandomCharacter.styled';
import { StyledLink as LinkOnCharacterBlock } from '../CharacterLink/CharacterLink.styled';

export const InfoList = styled.ul`
  display: ${({ isMobile }) => (isMobile ? 'none' : 'flex')};
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: ${tablet}) {
    display: ${({ isMobile }) => (isMobile ? 'flex' : 'none')};
  }
`;

export const Item = styled.li`
  padding-bottom: 5px;
  border-bottom: 2px solid ${({ theme }) => theme.characterCardTextAccent};
`;

export const Label = styled.p`
  text-transform: capitalize;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: ${({ theme }) => theme.characterCardTextAccent};
  transition: color 250ms ${({ theme }) => theme.cubic};

  ${LinkOnRandomizer}:hover & {
    color: ${({ theme }) => theme.characterCardTexHover};
  }
`;

export const Data = styled.p`
  transition: color 250ms ${({ theme }) => theme.cubic};

  ${LinkOnCharacterBlock}:hover & {
    color: ${({ theme }) => theme.characterCardTexHover};
  }

  ${LinkOnRandomizer}:hover & {
    color: ${({ theme }) => theme.characterCardTexHover};
  }
`;
