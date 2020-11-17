// Core
import {
  required,
  numeric,
} from 'vuelidate/lib/validators';

import { alpha } from '../../../utils';

// eslint-disable-next-line import/prefer-default-export
export const validations = {
  index: {
    numeric,
  },

  country: {
    alpha,
  },

  city: {
    required,
  },
};
