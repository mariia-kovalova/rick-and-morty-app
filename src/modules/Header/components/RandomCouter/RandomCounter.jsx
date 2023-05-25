import sprite from 'shared/icons/sprite.svg';
import { Button, Icon, InfoCircleStyled } from './RandomCounter.styled';
import { useEffect, useMemo, useState } from 'react';
import { Modal } from 'shared/components/Modal';
import { Statistics } from '../Statistics/Statistics';
import { Tooltip } from 'shared/components/ToolTip';
import { useLibrary } from 'hooks/useLibrary';
import { getPercentage } from 'shared/utils/getPercentage';
import {
  charactersType,
  episodesType,
  locationsType,
} from 'shared/constants/dataTypes';

export const RandomCounter = () => {
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(0);
  const { randomCharactersIds, randomEpisodesIds, randomLocationsIds } =
    useLibrary();

  useEffect(() => {
    const total =
      randomCharactersIds.length +
      randomEpisodesIds.length +
      randomLocationsIds.length;
    setCounter(total);
  }, [
    randomCharactersIds.length,
    randomEpisodesIds.length,
    randomLocationsIds.length,
  ]);

  const data = useMemo(
    () => [
      {
        label: charactersType,
        count: randomCharactersIds.length,
      },
      {
        label: locationsType,
        count: randomLocationsIds.length,
      },
      {
        label: episodesType,
        count: randomEpisodesIds.length,
      },
    ],
    [
      randomCharactersIds.length,
      randomEpisodesIds.length,
      randomLocationsIds.length,
    ]
  );

  const statistics = useMemo(
    () =>
      data.reduce(
        (acc, { label, count }) => ({
          ...acc,
          [label]: getPercentage(counter, count),
        }),
        {}
      ),
    [counter, data]
  );

  const handleToggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Tooltip
        text="see statistics"
        ariaLabel="open statistics"
        position="down"
      >
        <Button onClick={handleToggleModal}>
          <Icon>
            <use href={`${sprite}#icon-shuffle-solid`} />
          </Icon>
          <InfoCircleStyled>{counter}</InfoCircleStyled>
        </Button>
      </Tooltip>

      {showModal && (
        <Modal onCloseModal={handleToggleModal}>
          <Statistics data={data} statistics={statistics} />
        </Modal>
      )}
    </>
  );
};
