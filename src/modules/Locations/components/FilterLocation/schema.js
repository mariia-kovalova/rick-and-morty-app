import { message, regex } from 'shared/constants/serchInput';
import * as Yup from 'yup';

export const schema = Yup.object({
  name: Yup.string().matches(regex, {
    message: message,
    excludeEmptyString: true,
  }),
  type: Yup.string().matches(regex, {
    message: message,
    excludeEmptyString: true,
  }),
  dimension: Yup.string().matches(regex, {
    message: message,
    excludeEmptyString: true,
  }),
});
