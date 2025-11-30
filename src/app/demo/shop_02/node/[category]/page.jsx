'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Wrapper from '@/assets/wrappers/midterm/Shop_02'
import Product_02 from '@/components/midterm/Product_02'

const FetchShopByCategory_02 = () => {
  const [shop_02, setShop_02] = useState([])
  const params = useParams()
  const category = params.category
  console.log('category', category)

  const fetchShopFromNode = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/shop2_02/${category}`
      )
      const data = await response.json()
      console.log('shop_02 data', data)
      if (data.length !== 0) {
        setShop_02(data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (category) {
      fetchShopFromNode()
    }
  }, [category])

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4 className='text-center'> 李國蘋, 213410102 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {shop_02?.map((item) => {
              const { pid, pname, price, img_url } = item
              return (
                <Product_02
                  key={pid}
                  img_url={img_url}
                  pname={pname}
                  price={price}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default FetchShopByCategory_02
