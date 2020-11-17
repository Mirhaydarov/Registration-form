<template>
  <fieldset>
    <legend>Личные данные</legend>
    <div class="form__box">
      <div class="form__group">
        <label class="form__label">
            {{ formLabel.secondName }}*
          <input
            class="form__secondName"
            :class="{ 'input-error': $v.secondName.$error }"
            type="text"
            :placeholder="placeholder.secondName"
            v-model.lazy="$v.secondName.$model"
            >
        </label>
          <InputError
            :vIf="$v.secondName.$dirty && !$v.secondName.required"
            :message="`Поле ${formLabel.secondName} обязательно для заполнения`"
          />
          <InputError
            :vIf="!$v.secondName.alpha"
            :message="`Поле ${formLabel.secondName} может состоять только из букв`"
          />
      </div>

      <div class="form__group">
        <label class="form__label">
          {{ formLabel.name }}*
          <input
            class="form__name"
            :class="{ 'input-error': $v.name.$error }"
            type="text"
            :placeholder="placeholder.name"
            v-model.lazy="$v.name.$model"
            >
        <InputError
            :vIf="$v.name.$dirty && !$v.name.required"
            :message="`Поле ${formLabel.name} обязательно для заполнения`"
          />
        <InputError
            :vIf="!$v.name.alpha"
            :message="`Поле ${formLabel.name} может состоять только из букв`"
          />
        </label>
      </div>

      <div class="form__group">
        <label class="form__label">
          {{ formLabel.patronymic }}
          <input
            class="form__patronymic"
            type="text"
            :placeholder="placeholder.patronymic"
            v-model.lazy="$v.patronymic.$model"
            >
          <InputError
            :vIf="!$v.patronymic.alpha"
            :message="`Поле ${formLabel.patronymic} может состоять только из букв`"
          />
        </label>
      </div>

      <div class="form__group">
        <label class="form__label">
          {{ formLabel.birthday }}*
          <input
            class="form__birthday"
            :class="{'input-error': $v.birthday.$error}"
            type="text"
            :placeholder="placeholder.birthday"
            v-model.lazy="$v.birthday.$model"
            >
          <InputError
            :vIf="$v.birthday.$dirty && !$v.birthday.required"
            :message="`Поле ${formLabel.birthday} обязательно для заполнения`"
          />
          <InputError
            :vIf="!$v.birthday.numeric"
            :message="`Поле ${formLabel.birthday} может состоять только из цифр`"
          />
        </label>
      </div>

      <div class="form__group">
        <label class="form__label">
          {{ formLabel.phone }}*
        <input
          class="form__phone"
          :class="{'input-error': $v.phone.$error}"
          type="tel"
          :placeholder="placeholder.phone"
          v-model.lazy="$v.phone.$model"
          >
          <InputError
            :vIf="$v.phone.$dirty && !$v.phone.required"
            :message="`Поле ${formLabel.phone} обязательно для заполнения`"
          />
          <InputError
            :vIf="!$v.phone.numeric"
            :message="`Поле ${formLabel.phone} может состоять только из цифр`"
          />
          <InputError
            :vIf="!$v.phone.mustStartWithSeven"
            :message="`Поле ${formLabel.phone} должно начинаться с 7`"
          />
          <InputError
            :vIf="!$v.phone.maxLength"
            :message="`Поле ${formLabel.phone}
              не может превышать ${$v.phone.$params.maxLength.max } цифр`"
          />
          <InputError
            :vIf="!$v.phone.minLength"
            :message="`Поле ${formLabel.phone}
              не может быть меньше ${$v.phone.$params.minLength.min } цифр`"
          />
      </label>
      </div>

      <div class="form__group">
        <p>{{ formLabel.gender.role }}</p>
        <label class="form__label">
          <input
            class="form__gender gender__input"
            type="radio"
            value="Мужчина"
            v-model="formLabel.gender.radio"
            > {{ formLabel.gender.male }}
        </label>
        <label class="form__label">
          <input
            class="form__gender gender__input"
            type="radio"
            value="Женщина"
            v-model="formLabel.gender.radio"
            > {{ formLabel.gender.female }}
        </label>
      </div>

      <div class="form__group">
        <p>{{ formLabel.clientGroup }}*</p>
        <select
          class="client-select"
          multiple="true"
          v-model.lazy="$v.clients.$model"
        >
          <option value="" disabled selected>{{ placeholder.clients }}</option>
          <option
            class="client-select__option"
            v-for="(client, index) of clientList"
            :value="client"
            :key="index"
          >{{ client }}</option>
        </select>
        <InputError
          :vIf="$v.clients.$dirty && !$v.clients.required"
          :message="`Поле ${formLabel.clientGroup} обязательно для заполнения`"
        />
      </div>

      <div class="form__group">
        <p>{{ formLabel.doctor }}</p>
        <select class="doctor-select" v-model.lazy="selectedDoctor">
          <option value="" disabled selected>{{ placeholder.selectedDoctor }}</option>
          <option
            class="doctor-select__option"
            v-for="(doctor, index) of doctorList"
            :key="index"
          >{{ doctor }}</option>
        </select>
      </div>

      <div class="form__group">
        <p>{{ formLabel.sms.role }}</p>
        <label class="form__label">
          <input
            class="form__sms sms__input"
            type="radio"
            value="Да"
            v-model="formLabel.sms.radio"
            > {{ formLabel.sms.yes }}
        </label>
        <label class="form__label">
          <input
            class="form__sms sms__input"
            type="radio"
            value="Нет"
            v-model="formLabel.sms.radio"
            > {{ formLabel.sms.no }}
        </label>
      </div>

      <p class="reuqired">{{ required }}</p>
    </div>
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
      eventEmitter.$emit('isPersonalDataInvalid', this.invalid);
    },
  },
  updated() {
    this.isInvalid();
  },
};
</script>

<style lang="scss">
.sms__input, .gender__input {
  display: inline;
  width: inherit;
}
</style>
