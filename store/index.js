export const state = () => {
  const initialState = {
    items: [],
    filter: 'whatever',
    isNightMode: false,
    isModalOpened: false
  }

  if (!localStorage.vehicles) {
    localStorage.vehicles = JSON.stringify(initialState)
  }

  return JSON.parse(localStorage.vehicles)
}

export const mutations = {
  setItems (state, items) {
    state.items = items
    localStorage.vehicles = JSON.stringify(state)
  },
  addNewItem (state, item) {
    state.items.unshift(item)
    localStorage.vehicles = JSON.stringify(state)
  },
  setFilter (state, filter) {
    state.filter = filter
    localStorage.vehicles = JSON.stringify(state)
  },
  toggleNightMode (state) {
    state.isNightMode = !state.isNightMode
    localStorage.vehicles = JSON.stringify(state)
  },
  toggleModalOpened (state) {
    state.isModalOpened = !state.isModalOpened
    localStorage.vehicles = JSON.stringify(state)
  }
}
