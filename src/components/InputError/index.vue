<template>
  <div
    class="form__error"
    v-if="vIf">
      {{ message }}.
  </div>
</template>

<script>
export default {
  props: {
    vIf: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

.form__error {
  color: red;
  font-size: 1rem;
}

</style>
