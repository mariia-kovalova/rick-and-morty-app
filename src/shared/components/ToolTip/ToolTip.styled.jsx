import styled from '@emotion/styled/macro';

export const Text = styled.div`
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  background-color: #333;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.4;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 0 6px;
    border-color: #333 transparent transparent transparent;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Trigger = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${Text} {
    opacity: 1;
  }
`;
