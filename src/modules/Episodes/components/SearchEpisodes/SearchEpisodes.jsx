import { useEpisodes } from 'hooks/useEpisodes';
import { Wrap, Selected, Option } from './SearchEpisodes.styled';
import { nanoid } from '@reduxjs/toolkit';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import debounce from 'lodash.debounce';
import { SearchInput } from 'shared/components/SearchInput';
import { getDefaultValues } from 'shared/utils/getDefaultValues';

const searchInput = {
  id: nanoid(),
  inputName: 'name',
};

const selectInput = {
  id: nanoid(),
  inputName: 'episode',
  options: [
    { option: 'All', value: '' },
    { option: 'Season 1', value: 'S01' },
    { option: 'Season 2', value: 'S02' },
    { option: 'Season 3', value: 'S03' },
    { option: 'Season 4', value: 'S04' },
    { option: 'Season 5', value: 'S05' },
  ],
};
const inputs = [searchInput.inputName, selectInput.inputName];

const DELAY = 500;

export const SearchEpisodes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValues(inputs, searchParams),
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleSearch = debounce(async ({ target }) => {
    if (target.value.trim() === '') {
      searchParams.delete(target.name);
      setSearchParams(searchParams);
      return;
    }
    if (errors[target.name]) return;
    setSearchParams({ [target.name]: target.value, ...searchParams });
  }, DELAY);

  return (
    <Wrap>
      <Selected
        {...register(selectInput.inputName)}
        onChange={handleSearch}
        defaultValue=""
      >
        {selectInput.options.map(({ option, value }) => (
          <Option key={option} value={value}>
            {option}
          </Option>
        ))}
      </Selected>
      <SearchInput
        id={searchInput.id}
        inputName={searchInput.inputName}
        register={register}
        errors={errors}
        onChange={handleSearch}
        placeholder="Filter by name..."
      />
    </Wrap>
  );
};
