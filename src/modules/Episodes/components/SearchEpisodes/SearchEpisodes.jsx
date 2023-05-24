import { Wrap, Selected, Option } from './SearchEpisodes.styled';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import debounce from 'lodash.debounce';
import { SearchInput } from 'shared/components/SearchInput';
import { getSearchValues } from 'shared/utils/getSearchValues';
import { inputs, searchInput, selectInput } from './inputs';
import { getCleanValues } from 'shared/utils/getCleanValues';

const DELAY = 500;

export const SearchEpisodes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: getSearchValues(inputs, searchParams),
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
    setSearchParams({
      ...getCleanValues(getSearchValues(inputs, searchParams)),
      [target.name]: target.value,
    });
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
