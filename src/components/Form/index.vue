<template>
  <form class="form" @submit.prevent="onSubmit">
    <PersonalData />
    <button
      class="form__submit-btn"
      :class="{'disabled-btn': isInvalid}"
      type="submit"
      :disabled="isInvalid"
    > Отправить</button>
  </form>
</template>

<script>
// Components
import PersonalData from './PersonalData/index.vue';

// Utils
import { eventEmitter } from '../../main';

export default {
  data() {
    return {
      isPersonalDataInvalid: true,
    };
  },
  components: {
    PersonalData,
  },
  methods: {
    onSubmit() {
    },
  },
  computed: {
    isInvalid() {
      if (this.isPersonalDataInvalid) {
        return true;
      }
      return false;
    },
  },
  created() {
    eventEmitter.$on('isPersonalDataInvalid', (value) => {
      this.isPersonalDataInvalid = value;
    });
  },
};
</script>

<style lang="scss">
@import '../../styles/media-mixin.scss';

@keyframes shakeError {
  0% {
    transform: translateX(0);
  }
  15% {
      transform: translateX(0.375rem);
  }
  30% {
      transform: translateX(-0.375rem);
  }
  45% {
      transform: translateX(0.375rem);
  }
  60% {
      transform: translateX(-0.375rem);
  }
  75% {
      transform: translateX(0.375rem);
  }
  90% {
      transform: translateX(-0.375rem);
  }
  100% {
      transform: translateX(0);
  }
}

main {
  padding-bottom: 3rem;
  margin: 1rem;
  @include media-xs {
    margin: 2rem;
  };
}

fieldset {
  padding: 1rem;
  font-size: 1.3rem;
  position: relative;
  border-radius: 5px;
  border: none;
  background-color: #fbfbfb;
  margin-bottom: 40px;
  box-shadow: 0px 0px 5px #2f2f2f;
  @include media-sm {
    padding: 2rem;
  }
}

legend {
  font-weight: 700;
  font-size: 2rem;
  right: 0;
  left: 0;
  width: 100%;
  color: #6d6c6c;
  position: absolute;
  display: flex;

  &::before,
  &::after {
    content: "";
    color: #c1c1c1;
    flex: 1;
    border-bottom: groove 1px;
    margin: auto 1rem;
    box-shadow: 0 1px;
    @include media-sm {
      margin: auto 2rem;
    }
  }
}

.reuqired {
  margin-top: 20px;
}

.form {

  &__box {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-top: 4rem;
    @include media-xs {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__submit-btn {
    display: block;
    margin: 0 auto;
    font-weight: 500;
    border-radius: 3px;
    cursor: pointer;
    background-color: #009a00;
    transition-duration: .3s;
    font-size: 1rem;
    color: white;
    padding: 11px 100px;
    outline: none;
    border: 1px solid darken(#009a00, 5);

    &:disabled {
      border: 1px solid darken(#c52b2b, 5);
    }

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      background-color: lighten(#009a00, 5);
    }

  }
}

input {
  border: 1px solid #7d7d7d;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: .55rem;
  font-size: 1.1rem;
  display: block;
  width: 100%;
}

.input-error {
  animation-name: shakeError;
  animation-fill-mode: forwards;
  animation-duration: .6s;
  animation-timing-function: ease-in-out;
  border-color: red;
}

.client-select {
  appearance: none;
  border: 1px solid #d2d2d2;
  border-radius: 3px;
  background-color: #f7f7f7;;
  font-size: .9rem;
  resize: none;
  height: 2.375rem;
  padding: 0 0.8125rem;
  width: 100%;
}

.doctor-select, .type-document {
  border: 1px solid #d2d2d2;
  border-radius: 3px;
  background-color: #f5f5f5;
  font-size: 1.1rem;
  resize: none;
  width: 100%;
  padding: 0.55rem;
}

.disabled-btn {
  background-color: #c52b2b;

  &:hover {
    background-color: darken(#c52b2b, 5);
  }
}

.sms__input, .gender__input {
  display: inline;
  width: inherit;
}
</style>
