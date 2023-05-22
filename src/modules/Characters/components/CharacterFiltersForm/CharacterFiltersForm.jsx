import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { getDefaultValues } from 'shared/utils/getDefaultValues';
import { fieldsArr, radioFieldsArr } from './inputs';
import { RadioBtnField } from '../RadioBtnField/RadioBtnField';
import { getCleanValues } from 'shared/utils/getCleanValues';
import {
  Btn,
  BtnsItem,
  BtnsList,
  FormTittle,
  List,
  ListTittle,
  ListWrap,
} from './CharacterFiltersForm.styled';
import { getValuesForReset } from 'shared/utils/getValuesForReset';

export const CharacterFiltersForm = ({ onCloseModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    register,
    reset,
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = useForm({
    defaultValues: getDefaultValues(fieldsArr, searchParams),
    resolver: yupResolver(schema),
  });

  const onSubmit = values => {
    setSearchParams(getCleanValues(values));
    onCloseModal();
  };

  return (
    <>
      <FormTittle>filter</FormTittle>
      <form onSubmit={handleSubmit(onSubmit)}>
        {radioFieldsArr.map(({ tittle, arr }, index) => (
          <ListWrap key={tittle}>
            <ListTittle>{tittle}</ListTittle>
            <List key={index}>
              {arr.map(field => (
                <li key={field.id}>
                  <RadioBtnField {...field} register={register} />
                </li>
              ))}
            </List>
          </ListWrap>
        ))}
        <BtnsList>
          <BtnsItem>
            <Btn
              className="apply"
              type="submit"
              disabled={!isDirty || isSubmitting}
            >
              Apply filters
            </Btn>
          </BtnsItem>
          <BtnsItem>
            <Btn
              className="reset"
              type="button"
              onClick={() => reset(getValuesForReset(fieldsArr))}
            >
              Reset filters
            </Btn>
          </BtnsItem>
          <BtnsItem>
            <Btn
              className="cancel"
              type="button"
              onClick={() => onCloseModal()}
            >
              Cancel
            </Btn>
          </BtnsItem>
        </BtnsList>
      </form>
    </>
  );
};
