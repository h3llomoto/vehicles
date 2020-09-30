<template>
  <div class="catalog">
    <div class="catalog-header">
      <div class="catalog-filter">
        <span>Rent </span><FilterItems />
      </div>
      <AddItem />
    </div>
    <div v-if="itemsToShow" class="catalog-items">
      <div v-for="item in itemsToShow" :key="item.id" class="catalog-item">
        <CatalogItem :item="item" />
      </div>
    </div>
    <div v-else>
      There are no items to show
    </div>
  </div>
</template>

<style scoped>
.catalog {
  background-color: #F3F4F7;
  border-radius: 48px;
  padding: 56px 64px;
}
.catalog-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}
.catalog-items {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;
}
.catalog-item {
  flex-basis: 33.333%;
  padding: 16px;
  width: 33.333%;
}
.catalog-filter {
  display: flex;
  align-items: center;
}
.catalog-filter span {
  position: relative;
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  color: #012345;
  margin-right: 11px;
}

.night .catalog {
  background-color: #011C37;
}
.night .catalog-filter span {
  color: #FCFCFC
}
@media (max-width: 1130px) {
  .catalog-item {
    flex-basis: 50%;
    padding: 16px;
    width: 50%;
  }
}
@media (max-width: 768px) {
  .catalog {
    border-radius: 24px;
    padding: 24px 16px;
  }
  .catalog-header {
    margin-bottom: 24px;
  }
  .catalog-filter span {
    font-size: 24px;
    margin-right: 7px;
  }
  .catalog-items {
    margin: 0;
  }
  .catalog-item {
    flex-basis: 100%;
    margin: 0 0 12px;
  }
}
</style>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    itemsToShow () {
      if (this.filter !== 'whatever') {
        return this.items.filter(x => x.type === this.filter)
      }
      return this.items
    },
    ...mapState(['items', 'filter'])
  }
}
</script>
