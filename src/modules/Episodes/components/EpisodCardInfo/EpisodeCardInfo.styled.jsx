import styled from '@emotion/styled/macro';
import { FlexCard, TextInfo } from 'modules/Episodes/Episodes.styled';
import { tablet } from 'shared/constants/deviceSizes';

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

export const FlexInfo = styled(FlexCard)`
  position: absolute;
  top: 83px;
  left: 9px;

  align-items: start;
  gap: 10px;

  @media screen and (min-width: ${tablet}) {
    top: 36px;
    left: 79px;
  }

  & > li:first-of-type ${CradInfoText} {
    width: 220px;
    font-size: 20px;

    @media screen and (min-width: ${tablet}) {
      width: 270px;
      font-size: 22px;
    }
  }

  & > li:nth-of-type(2) ${CradInfoText} {
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

  & > li:last-of-type ${CradInfoText} {
    width: 180px;

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
`;
