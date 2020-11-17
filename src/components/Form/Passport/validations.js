// Core
import {
  required,
  maxLength,
  minLength,
  numeric,
} from 'vuelidate/lib/validators';

// eslint-disable-next-line import/prefer-default-export
export const validations = {
  typeDocument: {
    required,
  },

  series: {
    numeric,
    maxLength: maxLength(4),
    minLength: minLength(4),
  },

  number: {
    numeric,
    maxLength: maxLength(6),
    minLength: minLength(6),
  },

  dateIssued: {
    required,
    numeric,
  },
};
