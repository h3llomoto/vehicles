<template>
  <div class="error">
    <h2 class="error__heading">
      An error has occurred
    </h2>
    <div v-if="is404" class="error-info">
      <div class="error__description">
        404 not found
      </div>
      <a href="/" class="error__button">
        Go to homepage
      </a>
    </div>
    <div v-else class="error-info">
      <div class="error__description">
        Please refresh the page
      </div>
      <div class="error__button" @click="$router.go()">
        Reload page
      </div>
    </div>
  </div>
</template>

<style scoped>
.error {
  height: calc(100vh - 200px);
  background: #F3F4F7;
  border-radius: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.error__heading {
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  color: #012345;
  margin-bottom: 24px;
}
.error__description {
  font-weight: 300;
  font-size: 14px;
  line-height: 146%;
  color: #677B8F;
  margin-bottom: 40px;
}
.error__button {
  background: #4959FF;
  border-radius: 12px;
  padding: 17px 32px;
  font-weight: bold;
  font-size: 16px;
  line-height: 14px;
  color: #FCFCFC;
  cursor: pointer;
}
.night .error {
  background: #011C37;
}
.night .error__heading {
  color: #FCFCFC;
}
.night .error__description {
  color: #99A7B5;
}
</style>

<script>
export default {
  props: {
    error: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {
    is404 () {
      return this.error === '404'
    }
  }
}
</script>
