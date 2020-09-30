<template>
  <div v-if="item" class="product">
    <div class="product-image">
      <div class="product-image__wrap">
        <img :src="item.image">
      </div>
    </div>
    <div class="product-info">
      <div class="product-info__header">
        {{ item.name }}
      </div>
      <div class="product-info__tabs">
        <Tabs :item="item" />
      </div>
      <div class="product-rent">
        <div class="product-rent__price">
          Rent for <span>{{ getFormattedCost(item.rent) }} $/h</span>
        </div>
        <div class="product-rent__button">
          Rent now
        </div>
      </div>
    </div>
  </div>
  <Error v-else :error="'404'" />
</template>

<style scoped>
.product {
  display: flex;
}
.product-image {
  width: 55%;
  max-width: 712px;
}
.product-image__wrap {
  border-radius: 24px;
  overflow: hidden;
}
.product-image__wrap > img {
  width: 100%;
  display: block;
}
.product-info {
  padding: 55px 0 0 64px;
  flex: 1;
  margin-bottom: 32px;
}
.product-info__header {
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  color: #012345;
  margin-bottom: 32px;
}
.product-info__tabs {
  margin-bottom: 45px;
}
.product-rent {
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
  background: #F3F4F7;
  border-radius: 16px;
  align-items: center;
}
.product-rent__price {
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  color: #012345;
}
.product-rent__price span {
  color: #F84AB3
}
.product-rent__button {
  background: #4959FF;
  border-radius: 12px;
  padding: 17px 32px;
  font-weight: bold;
  font-size: 16px;
  line-height: 14px;
  color: #FCFCFC;
  cursor: pointer;
}
.night .product-info__header {
  color: #FCFCFC;
}
.night .product-rent {
  background: #011C37;
}
.night .product-rent__price {
  color: #FCFCFC;
}
@media (max-width: 1200px) {
  .product-image {
    width: 40%;
  }
}
@media (max-width: 900px) {
  .product {
    display: block;
    padding: 16px;
  }
  .product-image {
    width: 100%;
    margin-bottom: 22px;
  }
  .product-info {
    padding: 0 0 70px;
    margin-bottom: 16px;
    position: relative;
  }
  .product-info__header {
    font-size: 24px;
  }
  .product-info__tabs {
    margin-bottom: 32px;
  }
  .product-rent {
    padding: 12px 24px;
    position: fixed;
    bottom: 32px;
    width: calc(100% - 160px);
    z-index: 1;
  }
  .product-info::before {
    content: '';
    width: 100%;
    height: 132px;
    left: 0;
    bottom: 0;
    position: fixed;
    background: linear-gradient(180deg, rgba(1, 35, 69, 0) 0%, #fcfcfc 32px);
    z-index: 1;
  }
  .product-rent__price {
    font-size: 16px;
  }
  .product-rent__button {
    padding: 16px 24px;
    font-size: 14px;
  }
  .night .product-info::before {
    background: linear-gradient(180deg, rgba(1, 35, 69, 0) 0%, #012345 32px);
  }
}
@media (max-width: 548px) {
  .product-rent {
    width: calc(100% - 32px);
  }
  .product-info::before {
    width: calc(100% + 32px);
    left: -16px;
  }
}
</style>

<script>
export default {
  data: () => ({}),
  computed: {
    item () {
      const { items } = this.$store.state
      const { id } = this.$route.params
      return items.find(x => x.id === id)
    }
  },
  methods: {
    getFormattedCost (value) {
      return new Intl.NumberFormat('ru-RU').format(value)
    }
  }
}
</script>
