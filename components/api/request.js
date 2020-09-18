/* eslint-disable prefer-promise-reject-errors */
import vehicles from './vehicles.json'

/** True = 65%, False = 35% */
const rejectByChance = () => {
  return Math.random() <= 0.35
}

/** Emulate request */
export const getVehicles = id =>
  new Promise(
    (resolve, reject) => {
      if (rejectByChance()) {
        return reject({ error: 'Server error' })
      }
      const delay = parseInt(Math.random() * 1000)
      setTimeout(() => {
        if (id) {
          resolve(
            vehicles.find(x => x.id === id)
          )
        } else {
          resolve(vehicles)
        }
      }, delay)
    }
  )
