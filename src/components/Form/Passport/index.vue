<template>
  <fieldset>
    <legend>Паспорт</legend>
    <div class="form__box">
      <div class="form__group">
        <p>{{ formLabel.typeDocument }}*</p>
        <select
          class="type-document"
          v-model.lazy="$v.typeDocument.$model"
        >
          <option value="" disabled selected>{{ placeholder.typeDocument }}</option>
          <option
            class="type-document__option"
            v-for="(document, index) of typeDocumentList"
            :key="index"
          >{{ document }}</option>
        </select>
        <InputError
          :vIf="$v.typeDocument.$dirty && !$v.typeDocument.required"
          :message="`Поле ${formLabel.typeDocument} обязательно для заполнения`"
        />
      </div>

      <div class="form__group">
        <label class="form__label">
          {{ formLabel.series }}
          <input
            class="form__series"
            :class="{'input-error': $v.series.$error}"
            type="number"
            :placeholder="placeholder.series"
            v-model.lazy="$v.series.$model"
          >
        </label>
        <InputError
          :vIf="!$v.series.numeric"
          :message="`Поле ${formLabel.series} может состоять только из цифр`"
        />
        <InputError
          :vIf="!$v.series.maxLength"
          :message="`Поле ${formLabel.series}
            не может превышать ${$v.series.$params.maxLength.max } цифр`"
        />
        <InputError
          :vIf="!$v.series.minLength"
          :message="`Поле ${formLabel.series}
            не может быть меньше ${$v.series.$params.minLength.min } цифр`"
        />
      </div>

      <div class="form__group">
        <label class="form__label">
          {{ formLabel.number }}
          <input
            class="form__number"
            :class="{'input-error': $v.number.$error}"
            type="number"
            :placeholder="placeholder.number"
            v-model.lazy="$v.number.$model"
          >
        </label>
          <InputError
            :vIf="!$v.number.numeric"
            :message="`Поле ${formLabel.number} может состоять только из цифр`"
          />
          <InputError
            :vIf="!$v.number.maxLength"
            :message="`Поле ${formLabel.number}
              не может превышать ${$v.number.$params.maxLength.max } цифр`"
          />
          <InputError
            :vIf="!$v.number.minLength"
            :message="`Поле ${formLabel.number}
              не может быть меньше ${$v.number.$params.minLength.min } цифр`"
          />
      </div>

      <div class="form__group">
        <label class="form__label">
            {{ formLabel.issued }}
          <input
            class="form__issued"
            type="text"
            :placeholder="placeholder.issued"
            v-model.lazy="issued"
          >
        </label>
      </div>

      <div class="form__group">
        <label class="form__label">
            {{ formLabel.dateIssued }}*
          <input
            class="form__dateIssued"
            :class="{ 'input-error': $v.dateIssued.$error }"
            type="text"
            :placeholder="placeholder.dateIssued"
            v-model.lazy="$v.dateIssued.$model"
          >
        </label>
        <InputError
          :vIf="$v.dateIssued.$dirty && !$v.dateIssued.required"
          :message="`Поле ${formLabel.dateIssued} обязательно для заполнения`"
        />
        <InputError
          :vIf="!$v.dateIssued.numeric"
          :message="`Поле ${formLabel.dateIssued} может состоять только из цифр`"
        />
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
      eventEmitter.$emit('isPassportInvalid', this.invalid);
    },
  },
  updated() {
    this.isInvalid();
  },
};
</script>
