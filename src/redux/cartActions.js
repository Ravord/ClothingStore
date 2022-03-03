export function add(product) {
  return {
    payload: product,
    type: 'ADD'
  }
}
export function remove(nanoid) {
  return {
    payload: {
      nanoid
    },
    type: 'REMOVE'
  }
}
export function clear() {
  return {
    type: 'CLEAR'
  }
}
