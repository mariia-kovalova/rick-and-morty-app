import debounce from 'lodash.debounce';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { schema } from './schema';
import { SearchInput } from 'shared/components/SearchInput';
import { StyledDiv } from './FilterLocation.styled';
import { getSearchValues } from 'shared/utils/getSearchValues';
import { getCleanValues } from 'shared/utils/getCleanValues';
import { inputs, filedsArr } from './inputs';

const DELAY = 500;

export const FilterLocation = () => {
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
    console.log(getSearchValues(inputs, searchParams));
    setSearchParams({
      ...getCleanValues(getSearchValues(inputs, searchParams)),
      [target.name]: target.value,
    });
  }, DELAY);

  return (
    <StyledDiv>
      {filedsArr.map(({ id, inputName, placeholder }) => (
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
