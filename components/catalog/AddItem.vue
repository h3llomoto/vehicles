<template>
  <div class="add">
    <div class="add-button" @click="toggleModalOpened">
      <div class="add-button__text">
        Add new
      </div>
      <div class="add-button__icon">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="#FCFCFC" />
        </svg>
      </div>
    </div>
    <div class="add-modal">
      <div class="add-modal__overlay" @click="toggleModalOpened" />
      <div class="add-modal__window">
        <div class="add-modal__header mb-40">
          <div class="add-modal__heading">
            Add new vehicle
          </div>
          <div class="add-modal__close" @click="toggleModalOpened">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z" fill="#012345" />
            </svg>
          </div>
        </div>
        <div class="add-modal__image mb-24">
          <div class="add-modal__image__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.008 3C21.556 3 22 3.445 22 3.993V13.342C21.3576 13.1151 20.6813 12.9994 20 13V5H4L4.001 19L13.293 9.707C13.465 9.53448 13.694 9.43073 13.9371 9.41526C14.1802 9.39979 14.4206 9.47367 14.613 9.623L14.706 9.708L18.252 13.258C17.4766 13.4943 16.7572 13.8851 16.1369 14.407C15.5167 14.9288 15.0086 15.5709 14.6432 16.2944C14.2779 17.0179 14.0628 17.808 14.0111 18.6169C13.9593 19.4258 14.0719 20.2368 14.342 21.001L2.992 21C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V3.993C2.00183 3.73038 2.1069 3.47902 2.29251 3.29322C2.47813 3.10742 2.72938 3.00209 2.992 3H21.008ZM8 7C8.53043 7 9.03914 7.21071 9.41421 7.58579C9.78929 7.96086 10 8.46957 10 9C10 9.53043 9.78929 10.0391 9.41421 10.4142C9.03914 10.7893 8.53043 11 8 11C7.46957 11 6.96086 10.7893 6.58579 10.4142C6.21071 10.0391 6 9.53043 6 9C6 8.46957 6.21071 7.96086 6.58579 7.58579C6.96086 7.21071 7.46957 7 8 7Z" fill="#4959FF" />
            </svg>
          </div>
        </div>
        <div class="add-modal__input mb-24">
          <input v-model="name" name="name" type="text" placeholder="Name">
        </div>
        <div class="add-modal__input mb-24">
          <input v-model="description" name="description" type="text" placeholder="Description">
        </div>
        <div class="add-modal__input add-modal__input--price mb-40">
          <input
            v-model="price"
            name="rent_price"
            type="number"
            :min="priceMin"
            :max="priceMax"
            step="1"
            placeholder="Rent price"
            @input="checkPriceValue"
          >
        </div>
        <button class="add-modal__button" @click="addNewItem">
          Complete
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mb-40 {
  margin-bottom: 40px;
}
.mb-24 {
  margin-bottom: 24px;
}
.add-button {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.add-button__text {
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  color: #4959FF;
  margin-right: 20px;
}
.add-button__icon {
  width: 48px;
  height: 48px;
  background: #4959FF;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.modal .add-modal {
  display: block;
}
.add-modal__overlay {
  backdrop-filter: blur(32px);
  width: 100%;
  height: 100%;
}
.add-modal__window {
  overflow-y: auto;
  max-height: 900px;
  height: 100%;
  width: 600px;
  bottom: 0;
  right: 0;
  position: absolute;
  background: #FCFCFC;
  border-radius: 48px 0 0 48px;
  padding: 64px 72px;
  display: flex;
  flex-direction: column;
}
.add-modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.add-modal__heading {
  font-size: 40px;
  font-weight: 700;
  line-height: 120%;
}
.add-modal__close {
  width: 48px;
  height: 48px;
  background: #F3F4F7;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.add-modal__image {
  flex: 1;
  background: #F3F4F7;
  border-radius: 24px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-modal__image__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FCFCFC;
  border-radius: 16px;
}
.add-modal__input input {
  width: 100%;
  display: block;
  padding: 21px 24px;
  font-weight: 300;
  font-size: 16px;
  line-height: 14px;
  color: #677B8F;
  background: #F3F4F7;
  border-radius: 12px;
  border: unset;
  outline: unset;
}
.add-modal__input--price {
  position: relative;
}
.add-modal__input--price::after {
  content: '$/h';
  position: absolute;
  right: 24px;
  top: 24px;
  font-size: 16px;
  line-height: 14px;
  color: #677B8F;
}
.add-modal__button {
  display: block;
  text-align: center;
  padding: 21px 0;
  background: #4959FF;
  border-radius: 12px;
  font-weight: bold;
  font-size: 16px;
  line-height: 14px;
  color: #FCFCFC;
  cursor: pointer;
  border: unset;
  outline: unset;
}
.night .add-modal__window {
  background-color: #012345;
}
.night .add-modal__heading {
  color: #FCFCFC;
}
.night .add-modal__close {
  background-color: #011C37;
}
.night .add-modal__close svg path {
  fill: #FCFCFC;
}
.night .add-modal__image {
  background-color: #011C37;
}
.night .add-modal__image__icon {
  background-color: #012345;
}
.night .add-modal__input input {
  background-color: #011C37;
  color: #99A7B5;
}
@media (max-width: 768px) {
  .mb-40 {
    margin-bottom: 24px;
  }
  .mb-24 {
    margin-bottom: 16px;
  }
  .add-button__text {
    font-size: 16px;
    margin-right: 12px;
  }
  .add-button__icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }
  .add-button__icon svg {
    width: 11.67px;
  }
  .add-modal__window {
    padding: 28px 16px 32px;
    border-radius: 24px 24px 0 0;
    max-height: 653px;
    height: 100%;
    width: 100%;
  }
  .add-modal__heading {
    font-size: 24px;
  }
  .add-modal__image {
    border-radius: 16px;
  }
  .add-modal__close,
  .add-modal__image__icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }
  .add-modal__close svg,
  .add-modal__image__icon svg {
    width: 20px;
    height: 20px;
  }
  .add-modal__input input {
    padding: 20px;
    font-size: 14px;
    line-height: 12px;
    border-radius: 12px;
  }
  .add-modal__input--price::after {
    right: 20px;
    top: 24px;
    font-size: 14px;
    line-height: 12px;
  }
  .add-modal__button {
    padding: 20px 0;
    font-size: 14px;
    line-height: 12px;
  }
}
</style>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      name: '',
      description: '',
      price: '',
      priceMin: 1,
      priceMax: 999999999
    }
  },
  methods: {
    addNewItem () {
      if (!this.name || !this.description || !this.price) {
        return
      }
      const newItem = {
        id: Date.now().toString(),
        name: this.name,
        type: 'custom',
        description: this.description,
        specifications_text: '',
        team_text: '',
        term_text: '',
        rent: parseInt(this.price, 10),
        preview: 'https://loremflickr.com/160/160/helicopter?random=5f2bb90ad1f7496180b829ce',
        image: 'https://loremflickr.com/900/900/helicopter'
      }
      this.name = ''
      this.description = ''
      this.price = ''
      this.$store.commit('addNewItem', newItem)
      this.$store.commit('setFilter', 'custom')
      this.toggleModalOpened()
    },
    checkPriceValue (e) {
      const { price, priceMin, priceMax } = this
      const { data } = e
      const validationRegex = /[0-9]/

      if (data && !data.match(validationRegex)) {
        this.price = price.slice(0, price.length - 1)
        return
      }

      const isLessThanMin = price < priceMin
      const isBiggerThanMax = price > priceMax
      if (isLessThanMin || isBiggerThanMax) {
        if (isLessThanMin) {
          this.price = priceMin
        } else if (isBiggerThanMax) {
          this.price = priceMax
        }
      }
    },
    ...mapMutations(['toggleModalOpened'])
  }
}
</script>
