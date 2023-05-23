import styled from '@emotion/styled/macro';
import { FlexCard, TextInfo } from 'modules/Episodes/Episodes.styled';
import { StyledLink } from '../EpisodeCard/EpisodeCard.styled';

export const CradInfoText = styled(TextInfo)`
  width: 230px;

  color: ${({ theme }) => theme.characterCardTextAccent};
  background-color: ${({ theme }) => theme.bgEpisodesTransparent};
  border: 2px solid ${({ theme }) => theme.characterCardTextAccent};
  border-radius: 4px;

  transition: transform 250ms ${({ theme }) => theme.cubic},
    clip-path 250ms ${({ theme }) => theme.cubic},
    color 250ms ${({ theme }) => theme.cubic};

  ${StyledLink}:hover & {
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
`;

export const FlexInfo = styled(FlexCard)`
  position: absolute;
  top: 20px;
  left: 20px;

  align-items: start;
  gap: 10px;

  & > li:first-child ${CradInfoText} {
    width: 270px;
    font-size: 22px;
  }

  & > li:last-child ${CradInfoText} {
    width: 180px;
  }
`;
