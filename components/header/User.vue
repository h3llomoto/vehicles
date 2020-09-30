<template>
  <div class="user">
    <div class="user__name">
      Bessie Cooper
    </div>
    <div class="user__avatar" />
  </div>
</template>

<style scoped>
.user {
  display: flex;
  align-items: center;
}
.user__name {
  font-weight: bold;
  font-size: 16px;
  line-height: 152%;
  color: #012345;
  margin-right: 16px;
}
.user__avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  background: url('~static/images/avatar.png');
  background-size: contain;
}
.night .user__name {
  color: #FCFCFC;
}
@media (max-width: 1200px) {
  .user__name {
    display: none;
  }
  .user__avatar {
    width: 32px;
    height: 32px;
  }
}
</style>
