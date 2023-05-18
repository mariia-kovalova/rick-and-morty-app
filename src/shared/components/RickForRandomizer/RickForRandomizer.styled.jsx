import styled from '@emotion/styled';

const getDeviceWidth = ({ showOnDeviceWidth }) => showOnDeviceWidth;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: ${getDeviceWidth}) {
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
`;

export const SvgRick = styled.svg``;

export const RicksText = styled.p`
  font-size: 24px;
  text-align: center;
`;
