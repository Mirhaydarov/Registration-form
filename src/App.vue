<template>
  <div id="app">
    <Header />
    <main>
      <div class="wrap">
        <Form />
      </div>
    </main>
  </div>
</template>

<script>
import Form from './components/Form/index.vue';
import Header from './components/Header/index.vue';

export default {
  name: 'App',
  components: {
    Form,
    Header,
  },
};
</script>

<style lang="scss">
@import 'styles/media-mixin.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 15px;
  @include media-sm {
    font-size: 18px;
  }
  @include media-lg {
    font-size: 25px;
  }
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
