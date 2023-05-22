import PropTypes from 'prop-types';
import { Item, List } from './CardsList.styled';
import { memo } from 'react';

export const CardsList = ({ items, element: Element }) => {
  const Component = props => {
    return <Element {...props} />;
  };

  const MemoizedComponent = memo(Component);

  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <MemoizedComponent {...item} />
        </Item>
      ))}
    </List>
  );
};

CardsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
  element: PropTypes.func.isRequired,
};
