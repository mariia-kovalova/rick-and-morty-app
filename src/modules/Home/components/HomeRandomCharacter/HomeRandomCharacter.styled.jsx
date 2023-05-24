import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 400px;
`;

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

export const CharacterCardWrap = styled.div`
  padding: 60px 20px 20px 20px;

  width: 280px;
  height: 400px;

  background: ${({ theme }) => theme.bgCharacterCard};
  border: 3px solid ${({ theme }) => theme.paginationAccent};
  border-radius: 4px;
`;

export const Img = styled.img`
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
  border-radius: 6px;
`;

export const MainInfo = styled.div`
  position: relative;
`;

export const NameWrap = styled.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  transition: color 250ms ${({ theme }) => theme.cubic};

  ${StyledLink}:hover & {
    color: ${({ theme }) => theme.characterCardTexHover};
  }
`;

export const CardDecoration = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: fit-content;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: -1%;
    right: -1.5%;
    transform: rotate(-90deg);
    z-index: -1;

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.paginationAccent};
    border-width: 0 20px 20px 0;
    background-color: transparent;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1%;
    left: -1.5%;
    transform: rotate(90deg);
    z-index: -1;

    display: inline-block;
    padding: 40px;

    border: solid ${({ theme }) => theme.paginationAccent};
    border-width: 0 20px 20px 0;
    background-color: transparent;
  }
`;
