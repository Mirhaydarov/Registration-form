<template>
  <article class="success-modal" ref="successModal">
    <div class="success-modal__content" ref="modalContent">
      <h2 class="success-modal__title">Новый клиент успешно создан.</h2>
      <button class="success-modal__close" type="button" @click="closeModal">&times;</button>
  </div>
  </article>
</template>

<script>
// Utils
import { eventEmitter } from '../../main';

export default {
  methods: {
    closeModal() {
      this.$refs.successModal.style.display = 'none';
    },
  },
  created() {
    eventEmitter.$on('onSubmit', () => {
      this.$refs.successModal.style.display = 'block';
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/media-mixin.scss";

@keyframes animatetop {
  from {
    margin: -5% auto;
    opacity: 0
  }
  to {
    margin: 3% auto;
    opacity: 1
  }
}

.success-modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 100px;
    width: 80%;
    margin: 3% auto;
    animation-name: animatetop;
    animation-duration: 0.4s;
    padding: 2rem;
    background-color: #809cda;
    border: 1px solid #888;
    transition: all .3s ease-in-out;
    @include media-xs {
      padding: 1.4rem
    }
    @include media-sm {
      width: 60%;
    }
  }

  &__title {
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
    font-weight: normal;
    @include media-xs {
      font-size: 1.5rem;
    }
  }

  &__close {
    color: lighten(#809cda, 25);
    font-size: 1.2rem;
    font-weight: bold;
    width: 2rem;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 50%;
    outline: none;
    transition: all .2s ease-in-out;
    &:hover,
    &:focus {
      color: #fff;
      border: 1px solid #fff;
      border-radius: 50%;
      width: 2rem;
      cursor: pointer;
    }
    @include media-xs {
      font-size: 1.5rem;
    }
  }
}
</style>
