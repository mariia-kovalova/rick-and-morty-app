import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Number } from 'shared/styles/components/Number.styled';

export const StyledLink = styled(Link)`
  position: relative;

  display: block;

  color: inherit;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  transition: transform 250ms ${({ theme }) => theme.cubic},
    color 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: ${({ theme }) => theme.secondary};
  }
`;

export const HeartWrap = styled.div`
  position: absolute;
  top: 3px;
  left: 0;

  width: fit-content;
  height: fit-content;
`;

export const Img = styled.img`
  border-radius: inherit;
`;

export const MainInfo = styled.div`
  display: flex;
  gap: 8px;
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;
`;

export const Wrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 12px 16px;

  border-radius: 0 0 6px 6px;
  background-color: ${({ theme }) => theme.accentTransparent};
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

export const StyledNumber = styled(Number)`
  position: absolute;
  right: 5%;
  bottom: 7%;
  z-index: 1;

  font-size: 35px;
`;
