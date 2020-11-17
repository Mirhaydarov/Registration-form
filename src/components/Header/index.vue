<template>
  <header>
    <h1 class="title">{{ title }}</h1>
  </header>
</template>

<script>
import { data } from './state';

export default {
  data,
};
</script>

<style scoped type="scss">
header {
  padding: 15px 0 25px 0;
  margin-bottom: 30px;
}

.title {
  text-align: center;
  font-size: 3.5rem;
  color: #fff;
  text-shadow: 1px 1px 1px black;
}
</style>
