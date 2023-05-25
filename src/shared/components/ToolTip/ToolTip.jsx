import PropTypes from 'prop-types';
import { useState } from 'react';
import { Text, Trigger } from './ToolTip.styled';
import { down, up } from 'shared/constants/tootipPosition';

export const Tooltip = ({
  text,
  ariaLabel = 'tooltip',
  position = up,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleTooltip = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Trigger onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
        {children}
        {isVisible && (
          <Text aria-label={ariaLabel} position={position}>
            {text}
          </Text>
        )}
      </Trigger>
    </>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  position: PropTypes.oneOf([up, down]),
};
