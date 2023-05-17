import { useCharacter } from 'hooks/useCharacter';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { getCharacterById } from 'redux/character/thunks';
import { GoBackLink } from 'shared/components/GoBackLink/GoBackLink';
import { home } from 'shared/constants/routes';
import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { nameNormalize } from 'shared/utils/nameNormalize';

const CharacterPage = () => {
  const { character, isLoading, error } = useCharacter();
  const { characterId } = useParams();
  const location = useLocation();
  const path = location.state?.from ?? home;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterById(characterId));
  }, [characterId, dispatch]);

  return (
    <>
      <Helmet>
        <title>
          {isLoading
            ? error && 'Character'
            : !error && nameNormalize(character?.name)}
        </title>
      </Helmet>
      <Section>
        <Container>
          <GoBackLink to={path} />
        </Container>
      </Section>
      <Section>
        <Container>
          <div>{character?.name}</div>
        </Container>
      </Section>
    </>
  );
};

export default CharacterPage;