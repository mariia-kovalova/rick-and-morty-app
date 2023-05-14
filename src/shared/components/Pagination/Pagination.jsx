import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import sprite from 'shared/icons/sprite.svg';
import { IconArrowButton, LabelButton, List, Svg } from './Pagination.styled';
import { getPaginationLabels } from 'shared/utils/getPaginationLabels';

export const Pagination = ({ page, totalPages, onPageChange }) => {
  const [labels, setLabels] = useState([]);

  const handlePageSelectClick = selectedPage => {
    if (selectedPage === page) return;
    onPageChange(selectedPage);
  };

  useEffect(() => {
    getPaginationLabels({ setLabels, totalPages, page });
  }, [page, totalPages]);

  return (
    <List>
      <li>
        <IconArrowButton
          onClick={() => handlePageSelectClick(page - 1)}
          disabled={page === 1}
          type="button"
        >
          <Svg width="20" height="20">
            <use href={`${sprite}#icon-arrow-left-small`} />
          </Svg>
        </IconArrowButton>
      </li>
      {labels.map((label, index) => (
        <li key={index}>
          {typeof label === 'number' ? (
            <LabelButton
              onClick={() => handlePageSelectClick(label)}
              type="button"
              currentPage={page === label}
            >
              {label}
            </LabelButton>
          ) : (
            <span>...</span>
          )}
        </li>
      ))}
      <li>
        <IconArrowButton
          onClick={() => handlePageSelectClick(page + 1)}
          disabled={page === totalPages}
          type="button"
        >
          <Svg width="20" height="20">
            <use href={`${sprite}#icon-arrow-right-small`} />
          </Svg>
        </IconArrowButton>
      </li>
    </List>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
