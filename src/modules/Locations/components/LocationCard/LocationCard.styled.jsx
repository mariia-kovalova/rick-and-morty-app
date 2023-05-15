import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { alive, dead, unknown } from 'shared/constants/characterStatus';

const getStatus = ({ theme, marker }) => {
  switch (marker) {
    case alive:
      return theme.alive;
    case dead:
      return theme.dead;
    case unknown:
      return theme.unknown;
    default:
      return theme.unknown;
  }
};

export const StyledLink = styled(Link)`
  position: relative;

  display: block;

  color: inherit;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
`;

export const Status = styled.div`
  position: absolute;
  top: 26%;
  left: 6%;

  width: 12px;
  height: 12px;

  border-radius: 50%;
  background-color: ${getStatus};

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 18px;
    height: 18px;
    background-color: ${getStatus};
    opacity: 0.5;
    border-radius: 50%;
  }
`;

export const Img = styled.img`
  border-radius: 5px;
`;

export const Wrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 12px 16px;
  height: 60px;

  border-radius: 0 0 6px 6px;
  background-color: ${({ theme }) => theme.secondaryTransparent};
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  padding-left: 22px;

  &.location-card__name {
    font-size: 30px;
  }
`;

export const Description = styled.div`
  display: flex;
`;

export const Infobox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Number = styled.div`
  position: absolute;
  right: 5%;
  bottom: 7%;
  z-index: 1;

  font-weight: 700;
  font-size: 40px;
  line-height: 1.5;
  letter-spacing: 0.15px;
`;
