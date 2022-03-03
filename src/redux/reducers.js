export function cart(cart = JSON.parse(localStorage.getItem('cart')) || [], action) {
  let newCart
  switch (action.type) {
    case 'ADD':
      newCart = [...cart, {
        _id: action.payload._id,
        imageURL: action.payload.imageURL,
        name: action.payload.name,
        nanoid: action.payload.nanoid,
        price: action.payload.price
      }]
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    case 'REMOVE':
      newCart = cart.filter((product) => product.nanoid !== action.payload.nanoid)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    case 'CLEAR':
      newCart = []
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    default:
      return cart
  }
}
