import styled from '@emotion/styled/macro';
import { FlexUl, TextInfo } from 'modules/Episodes/Episodes.styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const CradInfoText = styled(TextInfo)`
  width: 230px;

  color: ${({ theme }) => theme.characterCardTextAccent};
  background-color: ${({ theme }) => theme.bgEpisodesTransparent};
  border: 2px solid ${({ theme }) => theme.characterCardTextAccent};
  border-radius: 4px;

  clip-path: polygon(
    10% 0%,
    100% 0%,
    100% 30%,
    100% 60%,
    90% 100%,
    0% 100%,
    0% 70%,
    0% 40%
  );

  transition: transform 250ms ${({ theme }) => theme.cubic},
    clip-path 250ms ${({ theme }) => theme.cubic},
    color 250ms ${({ theme }) => theme.cubic};

  a:hover &,
  a:focus & {
    transform: scale(1.05);
    clip-path: polygon(
      0% 0%,
      100% 0,
      100% 0%,
      100% 100%,
      88% 100%,
      0% 100%,
      0% 70%,
      0% 0%
    );
  }
`;

export const FlexInfo = styled(FlexUl)`
  position: absolute;
  top: 83px;
  left: 9px;

  align-items: start;
  gap: 10px;

  @media screen and (min-width: ${tablet}) {
    top: 36px;
    left: 79px;
  }

  @media screen and (min-width: ${desktop}) {
    top: 20px;
    left: 46px;
  }

  & > li:first-of-type ${CradInfoText} {
    width: 230px;
    font-size: 18px;

    @media screen and (min-width: ${tablet}) {
      width: 270px;
      font-size: 22px;
    }
  }

  & > li:nth-of-type(2) ${CradInfoText} {
    width: 200px;

    @media screen and (min-width: ${tablet}) {
      width: 230px;
    }
  }

  & > li:last-of-type ${CradInfoText} {
    width: 160px;

    @media screen and (min-width: ${tablet}) {
      width: 180px;
    }
  }
`;
