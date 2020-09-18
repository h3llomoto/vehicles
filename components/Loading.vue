<template>
  <div class="loading">
    <div class="loading__icon">
      <div v-if="$store.state.isNightMode">
        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8" fill="#FCFCFC" />
          <path d="M7 31C10.0204 31 13.0112 30.4051 15.8017 29.2492C18.5922 28.0934 21.1277 26.3992 23.2635 24.2635C25.3992 22.1277 27.0934 19.5922 28.2492 16.8017C29.4051 14.0112 30 11.0204 30 8H21.72C21.72 9.93306 21.3393 11.8472 20.5995 13.6331C19.8598 15.419 18.7755 17.0417 17.4086 18.4086C16.0417 19.7755 14.419 20.8598 12.6331 21.5995C10.8472 22.3393 8.93306 22.72 7 22.72L7 31Z" fill="#4959FF" />
        </svg>
      </div>
      <div v-else>
        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8" fill="#012345" />
          <path d="M7 31C10.0204 31 13.0112 30.4051 15.8017 29.2492C18.5922 28.0934 21.1277 26.3992 23.2635 24.2635C25.3992 22.1277 27.0934 19.5922 28.2492 16.8017C29.4051 14.0112 30 11.0204 30 8H21.72C21.72 9.93306 21.3393 11.8472 20.5995 13.6331C19.8598 15.419 18.7755 17.0417 17.4086 18.4086C16.0417 19.7755 14.419 20.8598 12.6331 21.5995C10.8472 22.3393 8.93306 22.72 7 22.72L7 31Z" fill="#4959FF" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading {
  display: flex;
  height: calc(100vh - 200px);
  justify-content: center;
  align-items: center;
}
.loading__icon {
  animation: spin 1s linear infinite;
  width: 46px;
  height: 46px;
  padding: 15px 0 0 15px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
