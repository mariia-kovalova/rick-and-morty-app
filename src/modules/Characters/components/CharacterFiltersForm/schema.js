import * as Yup from 'yup';
import { alive, dead, unknown } from 'shared/constants/characterStatus';
import {
  male,
  female,
  genderless,
  genderunknown,
} from 'shared/constants/characterGender';

const latinRegex = /^[a-zA-Z]+$/;
const nameLatinLettersMessage = 'You can use latin letters only';

export const schema = Yup.object({
  name: Yup.string().matches(latinRegex, {
    message: nameLatinLettersMessage,
    excludeEmptyString: true,
  }),
  status: Yup.string().oneOf([alive, dead, unknown, '']),
  gender: Yup.string().oneOf([male, female, genderless, genderunknown, '']),
});
