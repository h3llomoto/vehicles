<template>
  <div class="filter" :class="{ opened: isDropdownOpen }" @click="toggleDropdown">
    <div class="filter__current">
      <span>{{ filter }}</span>
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8L0 1.99965L2.00094 0L6 4.00071L9.99906 0L12 1.99965L6 8Z" fill="#4959FF" />
      </svg>
    </div>
    <div class="filter__dropdown">
      <div v-for="item in filters" :key="item" class="filter__dropdown__item" @click="setFilter(item)">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter {
  position: relative;
}
.filter__current {
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  color: #012345;
}
.filter__current span {
  color: #4959FF;
}
.filter__current svg {
  position: relative;
  bottom: 6px;
}
.filter__dropdown {
  position: absolute;
  left: 0;
  background: #FCFCFC;
  padding: 20px 25px;
  border-radius: 32px;
  display: none;
  box-shadow: 0 20px 20px 10px rgba(73, 89, 255, 0.1);
}
.filter__dropdown__item {
  cursor: pointer;
  font-style: normal;
  font-size: 20px;
  line-height: 120%;
  color: #012345;
  margin: 5px 0;
}
.filter.opened .filter__current svg {
  transform: rotate(180deg);
}
.filter.opened .filter__dropdown {
  display: block;
}

@media (max-width: 375px) {
  .filter__current {
    font-size: 24px;
  }
  .filter__current svg {
    bottom: 3px;
    width: 8px;
  }
}
</style>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    filters () {
      const filters = ['whatever']
      this.items.forEach((x) => {
        if (filters.includes(x.type) === false) {
          filters.push(x.type)
        }
        return x
      })

      return filters
    },
    ...mapState(['filter', 'items'])
  },
  mounted () {
    document.addEventListener('click', this.closeDropdown)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.closeDropdown)
  },
  methods: {
    toggleDropdown () {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    closeDropdown (e) {
      if (!this.$el.contains(e.target)) {
        this.isDropdownOpen = false
      }
    },
    ...mapMutations(['setFilter'])
  }
}
</script>
