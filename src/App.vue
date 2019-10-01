<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view/>
    </main>
    <app-footer></app-footer>
  </div>
</template>
<script>

import appFooter from './components/Footer.vue';
import appHeader from './components/Header.vue';
export default {
  
  components: {
    appFooter,
    appHeader
  }
}
</script>


<style lang="scss">
// @font-face {
//   font-family: 'NeueHaas';
//   src:url('../src/assets/fonts/NeueHaasDisplay-Bold.woff') format("woff")
//       url('../src/assets/fonts/NeueHaasDisplay-BoldItalic.woff') format("woff")
//       url('../src/assets/fonts/NeueHaasDisplay-Mediu.woff') format("woff")
//       url('../src/assets/fonts/NeueHaasDisplay-MediumItalic.woff') format("woff")
//       url('../src/assets/fonts/NeueHaasDisplay-Roman.woff') format("woff")
//       url('../src/assets/fonts/NeueHaasDisplay-RomanItalic.woff') format("woff");
// }
@import url('https://unpkg.com/normalize.css@8.0.1/normalize.css');
@import url('https://fonts.googleapis.com/css?family=Yantramanav:400,500,700&display=swap');
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html,body {
  font-size: 16px;
}

#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Yantramanav', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3A3A3A;
  min-height: 100vh;
  main {
    min-height: calc(100vh - (6vh + 50px) - 140px);
    position: relative;
  }
}
</style>
