<template>
  <div v-if="$store.state.isNightMode" class="night-mode" @click="toggleNightMode">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11C5 9.4087 5.63214 7.88258 6.75736 6.75736C7.88258 5.63214 9.4087 5 11 5C12.5913 5 14.1174 5.63214 15.2426 6.75736C16.3679 7.88258 17 9.4087 17 11C17 12.5913 16.3679 14.1174 15.2426 15.2426C14.1174 16.3679 12.5913 17 11 17ZM11 15C12.0609 15 13.0783 14.5786 13.8284 13.8284C14.5786 13.0783 15 12.0609 15 11C15 9.93913 14.5786 8.92172 13.8284 8.17157C13.0783 7.42143 12.0609 7 11 7C9.93913 7 8.92172 7.42143 8.17157 8.17157C7.42143 8.92172 7 9.93913 7 11C7 12.0609 7.42143 13.0783 8.17157 13.8284C8.92172 14.5786 9.93913 15 11 15ZM10 0H12V3H10V0ZM10 19H12V22H10V19ZM2.515 3.929L3.929 2.515L6.05 4.636L4.636 6.05L2.515 3.93V3.929ZM15.95 17.364L17.364 15.95L19.485 18.071L18.071 19.485L15.95 17.364ZM18.071 2.514L19.485 3.929L17.364 6.05L15.95 4.636L18.071 2.515V2.514ZM4.636 15.95L6.05 17.364L3.929 19.485L2.515 18.071L4.636 15.95ZM22 10V12H19V10H22ZM3 10V12H0V10H3Z" fill="#99A7B5" />
    </svg>
    <span>
      Day mod
    </span>
  </div>
  <div v-else class="night-mode" @click="toggleNightMode">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 7C9.9998 8.39064 10.4138 9.74983 11.1892 10.9042C11.9646 12.0586 13.0663 12.9559 14.3538 13.4816C15.6412 14.0073 17.0561 14.1376 18.4179 13.8559C19.7797 13.5742 21.0268 12.8933 22 11.9V12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2H12.1C11.434 2.65113 10.9051 3.42896 10.5445 4.28768C10.1838 5.1464 9.99869 6.06862 10 7ZM4 12C3.99927 13.785 4.59553 15.5189 5.69389 16.926C6.79226 18.333 8.32963 19.3323 10.0614 19.7648C11.7932 20.1974 13.6199 20.0383 15.2508 19.313C16.8818 18.5876 18.2233 17.3377 19.062 15.762C17.5694 16.1136 16.0118 16.0781 14.5368 15.6587C13.0619 15.2394 11.7185 14.4501 10.6342 13.3658C9.54992 12.2815 8.76065 10.9381 8.34128 9.46318C7.92192 7.98821 7.88636 6.43056 8.238 4.938C6.95758 5.62014 5.88678 6.63766 5.14026 7.88164C4.39373 9.12562 3.99958 10.5492 4 12Z" fill="#99A7B5" />
    </svg>
    <span>
      Night mod
    </span>
  </div>
</template>

<style scoped>
.night-mode {
  display: flex;
  align-items: center;
  margin-right: 107px;
  cursor: pointer;
}
.night-mode svg {
  margin-right: 16px;
}
.night-mode span {
  font-weight: 300;
  font-size: 16px;
  line-height: 152%;
  color: #677B8F;
}
.night .night-mode {
  margin-right: 117px;
}
.night .night-mode span {
  color: #99A7B5;
}
@media (max-width: 1200px) {
  .night-mode,
  .night .night-mode {
    margin-right: 16px;
  }
  .night-mode span {
    display: none;
  }
  .night-mode svg {
    width: 20px;
    height: 20px;
    margin-right: 0;
  }
}
</style>

<script>
import { mapMutations } from 'vuex'
export default {
  data () { return {} },
  methods: {
    ...mapMutations(['toggleNightMode'])
  }
}
</script>
