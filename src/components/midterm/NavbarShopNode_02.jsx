import Wrapper from '../../assets/wrappers/midterm/Shop_02'
//import { Link } from 'react-router-dom'
import Link from 'next/link'

const NavbarShopNode_02 = () => {
  return (
    <Wrapper>
      <div className='header'>
        <Link href='/demo/shop_02/node' className='logo-container'>
          <img src='/images/midterm/assets/crown.svg' />
        </Link>
        <div className='options'>
          <Link href='/' className='option'>
            TKUdemo
          </Link>
          <Link href='./overview.html' className='option'>
            Shop
          </Link>
          <Link href='/shop' className='option'>
            Contact
          </Link>
          <Link href='/signin' className='option'>
            Sign In
          </Link>
          <div className='cart-icon'>
            <img
              src='/images/midterm/assets/shopping-bag.svg'
              alt='shopping bag'
              className='shopping-icon'
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default NavbarShopNode_02
