import { useEffect } from 'react'
import { clear } from '../redux/cartActions.js'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'

import Banner from '../Banner.jsx'
import HugeText from '../HugeText.jsx'
import Products from './Products.jsx'

export default function ClothingStore() {
  let [searchParams] = useSearchParams()
  let isCartCleared = searchParams.get('isCartCleared')
  let dispatch = useDispatch()
  let navigate = useNavigate()
  useEffect(() => {
    let successTimeout
    if (isCartCleared) {
      dispatch(clear())
      navigate('/')
      successTimeout = setTimeout(() => alert('Success!'), 250)
    }
    return () => clearTimeout(successTimeout)
  }, [])
  return (
    <>
      <Banner></Banner>
      <HugeText firstLine='Looking to buy some cool clothes?' secondLine='Check these out!'></HugeText>
      <Products></Products>
    </>
  )
}
