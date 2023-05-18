import React from 'react';
import { Tooltip } from 'shared/components/ToolTip';
import { Status } from './CharacterStatus.styled';

export const CharacterStatus = ({ status, animate }) => {
  return (
    <Tooltip text={status}>
      <Status marker={status} animate={animate} />
    </Tooltip>
  );
};
