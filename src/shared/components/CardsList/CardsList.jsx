import PropTypes from 'prop-types';
import { Item, List } from './CardsList.styled';

export const CardsList = ({ items, element: Element }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <Element {...item} />
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
