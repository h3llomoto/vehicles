<template>
  <a class="item" :href="'/' + itemData.id">
    <div class="item-image">
      <img :src="itemData.preview" width="88" height="88">
    </div>
    <div class="item-info">
      <div class="item-info__header">
        {{ itemData.name }}
      </div>
      <div class="item-info__description">
        {{ itemData.description }}
      </div>
      <div class="item-info__price">
        {{ getFormattedCost(itemData.rent) }} $/h
      </div>
    </div>
  </a>
</template>

<style scoped>
.item {
  background-color: #FCFCFC;
  border-radius: 32px;
  padding: 24px 32px 25px;
  display: flex;
  text-decoration: none;
}
.item-image {
  border-radius: 24px;
  overflow: hidden;
  width: 88px;
  height: 88px;
  margin-right: 24px;
  flex-shrink: 0;
}
.item-info {
  padding-top: 16px;
}
.item-info__header {
  font-weight: bold;
  font-size: 16px;
  line-height: 14px;
  color: #012345;
  margin-bottom: 12px;
}
.item-info__description {
  font-weight: 300;
  font-size: 12px;
  line-height: 148%;
  color: #677B8F;
  margin-bottom: 16px;
}
.item-info__price {
  font-weight: bold;
  font-size: 14px;
  line-height: 148%;
  color: #F84AB3;
}
.night .item {
  background: #012345;
}
.night .item-info__header {
  color: #fcfcfc;
}
.night .item-info__description {
  color: #99A7B5;
}
@media (max-width: 375px) {
  .item {
    padding: 20px;
  }
}
</style>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      itemData: this.item
    }
  },
  methods: {
    getFormattedCost (value) {
      return new Intl.NumberFormat('ru-RU').format(value)
    }
  }
}
</script>
