<template>
  <div class="container">
    <Error v-if="$fetchState.error" />
    <Loading v-else-if="$fetchState.pending" />
    <Catalog v-else />
  </div>
</template>

<script>
import { getVehicles } from '../components/api/request'

export default {
  async fetch () {
    if (this.$store.state.items.length) {
      return
    }

    await getVehicles().then(
      result => this.$store.commit('setItems', [...result])
    )
  },
  data () {
    return {}
  }
}
</script>
