<template>
  <div class="layout" :class="{ night: $store.state.isNightMode, modal: $store.state.isModalOpened }">
    <div class="page">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: 'Codec Pro';
  src: url('~static/fonts/CodecPro-Light.eot');
  src: local('Codec Pro'), local('CodecPro'),
      url('~static/fonts/CodecPro-Light.eot?#iefix') format('embedded-opentype'),
      url('~static/fonts/CodecPro-Light.woff2') format('woff2'),
      url('~static/fonts/CodecPro-Light.woff') format('woff'),
      url('~static/fonts/CodecPro-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Codec Pro';
  src: url('~static/fonts/CodecPro-Bold.eot');
  src: local('Codec Pro'), local('CodecPro'),
      url('~static/fonts/CodecPro-Bold.eot?#iefix') format('embedded-opentype'),
      url('~static/fonts/CodecPro-Bold.woff2') format('woff2'),
      url('~static/fonts/CodecPro-Bold.woff') format('woff'),
      url('~static/fonts/CodecPro-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

html {
  font-family: 'Codec Pro', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
body {
  max-height: 100%;
  overflow: hidden;
}
.layout {
  height: 100vh;
  background-color: #FCFCFC;
  overflow-y: auto;
}
.layout.night {
  background: #012345
}
.layout.modal {
  overflow: hidden;
}
.page {
  max-width: 1430px;
  padding: 48px 64px;
  margin: 0 auto;
}
@media (max-width: 375px) {
  .page {
    padding: 12px 0 0;
  }
}
</style>
