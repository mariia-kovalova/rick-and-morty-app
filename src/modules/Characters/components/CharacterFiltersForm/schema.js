import * as Yup from 'yup';
import { alive, dead, unknown } from 'shared/constants/characterStatus';
import {
  male,
  female,
  genderless,
  genderunknown,
} from 'shared/constants/characterGender';
import { message, regex } from 'shared/constants/searchInput';

export const schema = Yup.object({
  name: Yup.string().matches(regex, {
    message: message,
    excludeEmptyString: true,
  }),
  status: Yup.string().oneOf([alive, dead, unknown, '']),
  gender: Yup.string().oneOf([male, female, genderless, genderunknown, '']),
});
