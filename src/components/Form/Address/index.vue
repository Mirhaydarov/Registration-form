<template>
  <fieldset>
    <legend>Адрес</legend>
    <div class="form__box">
      <div class="form__group">
        <label class="form__label">
            {{ formLabel.index }}
          <input
            class="form__index"
            :class="{ 'input-error': $v.index.$error }"
            type="number"
            :placeholder="placeholder.index"
            v-model.lazy="$v.index.$model"
          >
        </label>
        <InputError
          :vIf="!$v.index.numeric"
          :message="`Поле ${formLabel.index} может состоять только из цифры`"
        />
      </div>

      <div class="form__group">
        <label class="form__label">
            {{ formLabel.country }}
          <input
            class="form__country"
            type="text"
            :placeholder="placeholder.country"
            v-model.lazy="$v.country.$model"
          >
        </label>
        <InputError
          :vIf="!$v.country.alpha"
          :message="`Поле ${formLabel.country} может состоять только из букв`"
        />
      </div>

      <div class="form__group">
        <label class="form__label">
            {{ formLabel.region }}
          <input
            class="form__region"
            type="text"
            :placeholder="placeholder.region"
            v-model.lazy="region"
          >
        </label>
      </div>

      <div class="form__group">
        <label class="form__label">
            {{ formLabel.city }}*
          <input
            class="form__city"
            :class="{ 'input-error': $v.city.$error }"
            type="text"
            :placeholder="placeholder.city"
            v-model.lazy="$v.city.$model"
          >
        </label>
        <InputError
          :vIf="$v.city.$dirty && !$v.city.required"
          :message="`Поле ${formLabel.city} обязательно для заполнения`"
        />
      </div>

      <div class="form__group">
        <label class="form__label">
            {{ formLabel.street }}
          <input
            class="form__street"
            type="text"
            :placeholder="placeholder.street"
            v-model.lazy="street"
          >
        </label>
      </div>

      <div class="form__group">
        <label class="form__label">
            {{ formLabel.house }}
          <input
            class="form__house"
            type="text"
            :placeholder="placeholder.house"
            v-model.lazy="house"
          >
        </label>
      </div>
    </div>
    <p class="reuqired">{{ required }}</p>
  </fieldset>
</template>

<script>
// Init
import { data } from './state';
import { validations } from './validations';

// Components
import InputError from '../../InputError/index.vue';

// Utils
import { eventEmitter } from '../../../main';

export default {
  data,
  validations,
  components: {
    InputError,
  },
  methods: {
    isInvalid() {
      this.invalid = this.$v.$invalid;
      eventEmitter.$emit('isAddressInvalid', this.invalid);
    },
  },
  updated() {
    this.isInvalid();
  },
};
</script>
