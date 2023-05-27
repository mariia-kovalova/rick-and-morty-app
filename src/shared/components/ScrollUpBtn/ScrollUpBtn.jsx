import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';
import { ScrollBtn, Svg } from './ScrollUpBtn.styled';
import sprite from 'shared/icons/sprite.svg';
import { scrollUp } from 'shared/utils/scrollUp';

export const ScrollUpBtn = () => {
  const [showUpBtn, setShowUpBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const shouldRender = window.scrollY > 400;
      if (shouldRender) {
        if (shouldRender !== showUpBtn) setShowUpBtn(true);
      } else {
        if (shouldRender !== showUpBtn) setShowUpBtn(false);
      }
    };

    window.addEventListener('scroll', throttle(onScroll, 250));

    return () => window.removeEventListener('scroll', onScroll);
  }, [showUpBtn]);

  const handleScrollToTop = () => scrollUp();

  return (
    <>
      {showUpBtn && (
        <ScrollBtn onClick={handleScrollToTop}>
          <Svg>
            <use href={`${sprite}#icon-arrow-left-small`} />
          </Svg>
        </ScrollBtn>
      )}
    </>
  );
};
