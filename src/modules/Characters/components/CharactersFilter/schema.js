import * as Yup from 'yup';

const latinRegex = /^[a-zA-Z]+$/;
const nameLatinLettersMessage = 'You can use latin letters only';

export const schema = Yup.object({
  name: Yup.string().matches(latinRegex, {
    message: nameLatinLettersMessage,
    excludeEmptyString: true,
  }),
});
