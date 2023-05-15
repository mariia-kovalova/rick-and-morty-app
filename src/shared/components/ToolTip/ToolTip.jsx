import PropTypes from 'prop-types';
import { useState } from 'react';
import { Text, Trigger } from './ToolTip.styled';

export const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleTooltip = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Trigger onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
        {children}
      </Trigger>
      {isVisible && <Text aria-label="Character name">{text}</Text>}
    </>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
