// Core
import {
  required,
  maxLength,
  minLength,
  numeric,
  helpers,
} from 'vuelidate/lib/validators';

// Utils
import { alpha } from '../../../utils';

const mustStartWithSeven = helpers.regex('phone', /^\+?[7]\d{10}$/g);

// eslint-disable-next-line import/prefer-default-export
export const validations = {
  secondName: {
    required,
    alpha,
  },

  name: {
    required,
    alpha,
  },

  patronymic: {
    alpha,
  },

  birthday: {
    required,
    numeric,
  },

  phone: {
    required,
    numeric,
    maxLength: maxLength(11),
    minLength: minLength(11),
    mustStartWithSeven,
  },

  clients: {
    required,
  },
};
