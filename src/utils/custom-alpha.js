import { helpers } from 'vuelidate/lib/validators';

// eslint-disable-next-line import/prefer-default-export
export const alpha = helpers.regex('alpha', /^[a-zA-Zа-яА-Я]*$/);
