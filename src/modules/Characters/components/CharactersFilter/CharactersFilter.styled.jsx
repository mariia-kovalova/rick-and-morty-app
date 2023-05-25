import styled from '@emotion/styled/macro';
import { tablet } from 'shared/constants/deviceSizes';
import { InfoCircle } from 'shared/styles/components/InfoCircle.styled';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  margin: 0 auto;
  max-width: 500px;
`;

export const AvancedFilters = styled.button`
  position: relative;
  width: 60px;
  height: 49px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.crossThemeAccent};
  transition: transform 250ms ${({ theme }) => theme.cubic},
    color 250ms ${({ theme }) => theme.cubic};

  @media (min-width: ${tablet}) {
    height: 61px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
  }

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.secondary};
  }
`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);

  fill: ${({ theme }) => theme.bgPrimary};
  transition: fill 250ms ${({ theme }) => theme.cubic};

  ${AvancedFilters}:hover & {
    fill: ${({ theme }) => theme.secondary};
  }
`;

export const InfoCircleStyled = styled(InfoCircle)`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  position: absolute;
  top: -6px;
  left: 35px;

  width: 20px;
  height: 20px;

  background-color: ${({ theme }) => theme.characterCardTextAccent};
  transition: transform 250ms ${({ theme }) => theme.cubic};

  ${AvancedFilters}:hover &,
  ${AvancedFilters}:focus & {
    transform: scale(1.05);
  }

  @media (min-width: ${tablet}) {
    top: -5px;
    left: 44px;
  }
`;
