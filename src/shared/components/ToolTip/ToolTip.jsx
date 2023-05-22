import PropTypes from 'prop-types';
import { useState } from 'react';
import { Text, Trigger } from './ToolTip.styled';

export const Tooltip = ({ text, ariaLabel = 'tooltip', children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleTooltip = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Trigger onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
        {children}
        {isVisible && <Text aria-label={ariaLabel}>{text}</Text>}
      </Trigger>
    </>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
};
