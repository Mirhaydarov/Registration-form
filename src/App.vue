<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header/index.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 15px;
}

body {
  font-family: Helvetica, Arial, sans-serif;
  color: #252525;
  background-color: #809cda;
}

.wrap {
  max-width: 1100px;
  margin: 0 auto;
}

</style>
