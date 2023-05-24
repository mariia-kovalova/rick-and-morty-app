import { nanoid } from '@reduxjs/toolkit';
import debounce from 'lodash.debounce';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { schema } from './schema';
import { getDefaultValues } from 'shared/utils/getDefaultValues';
import { SearchInput } from 'shared/components/SearchInput';
import { StyledDiv } from './FilterLocation.styled';

const inputs = [
  { id: nanoid(), inputName: 'name', placeholder: 'Filter by name...' },
  { id: nanoid(), inputName: 'type', placeholder: 'Filter by type...' },
  { id: nanoid(), inputName: 'dimesion', placeholder: 'Filter by dimesion...' },
];

const DELAY = 500;

export const FilterLocation = () => {
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
    <StyledDiv>
      {inputs.map(({ id, inputName, placeholder }) => (
        <li key={id}>
          <SearchInput
            id={id}
            inputName={inputName}
            register={register}
            errors={errors}
            onChange={handleSearch}
            placeholder={placeholder}
          />
        </li>
      ))}
    </StyledDiv>
  );
};
