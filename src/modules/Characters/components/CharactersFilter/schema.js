import { message, regex } from 'shared/constants/searchInput';
import * as Yup from 'yup';

export const schema = Yup.object({
  name: Yup.string().matches(regex, {
    message: message,
    excludeEmptyString: true,
  }),
});
