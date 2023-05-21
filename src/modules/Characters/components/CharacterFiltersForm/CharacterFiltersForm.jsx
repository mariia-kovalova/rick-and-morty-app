import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { getDefaultValues } from 'shared/utils/getDefaultValues';
import { fieldsArr, radioFieldsArr } from './inputs';
import { nanoid } from '@reduxjs/toolkit';

import { SearchInput } from 'shared/components/SearchInput';
import { RadioBtnField } from '../RadioBtnField/RadioBtnField';
import { getCleanValues } from 'shared/utils/getCleanValues';

const nameId = nanoid();

export const CharacterFiltersForm = ({ onCloseModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    register,
    reset,
    handleSubmit,
    formState: { isDirty, errors, isSubmitting },
  } = useForm({
    defaultValues: getDefaultValues(fieldsArr, searchParams),
    resolver: yupResolver(schema),
  });

  const onSubmit = values => {
    setSearchParams(getCleanValues(values));
    onCloseModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SearchInput
        id={nameId}
        type="text"
        inputName="name"
        register={register}
        errors={errors}
        placeholder="Filter by name..."
      />
      {radioFieldsArr.map((item, index) => (
        <ul key={index}>
          {item.map(field => (
            <li key={field.id}>
              <RadioBtnField {...field} register={register} />
            </li>
          ))}
        </ul>
      ))}
      <button type="submit" disabled={!isDirty || isSubmitting}>
        Apply filters
      </button>
      <button type="button" onClick={() => reset()}>
        Reset filters
      </button>
      <button type="button" onClick={() => onCloseModal()}>
        Cancel
      </button>
    </form>
  );
};
