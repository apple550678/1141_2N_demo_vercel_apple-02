import Link from 'next/link'
import Wrapper from '@/assets/wrappers/midterm/Shop_02'

const categories = [
  {
    id: 1,
    title: 'HATS',
    subtitle: 'SHOP NOW',
    imageUrl: '/images/midterm/homepage/hats.png',
  },
  {
    id: 2,
    title: 'JACKETS',
    subtitle: 'SHOP NOW',
    imageUrl: '/images/midterm/homepage/jackets.png',
  },
  {
    id: 3,
    title: 'SNEAKERS',
    subtitle: 'SHOP NOW',
    imageUrl: '/images/midterm/homepage/sneakers.png',
  },
  {
    id: 4,
    title: 'WOMENS',
    subtitle: 'SHOP NOW',
    imageUrl: '/images/midterm/homepage/womens.png',
    size: 'large',
    path: '/exams/midterm/p1_02',
  },
  {
    id: 5,
    title: 'MENS',
    subtitle: 'SHOP NOW',
    imageUrl: '/images/midterm/homepage/mens.png',
    size: 'large',
  },
]

const P2_StaticPage_02 = () => {
  return (
    <Wrapper>
      <div className='midterm'>
        <div className='homepage'>
          <div className='directory-menu'>
            {categories.map((category) => {
              const sizeClass = category.size === 'large' ? 'large' : ''
              return (
                <Link
                  key={category.id}
                  href={category.path || '#'}
                  className={`menu-item ${sizeClass}`}
                >
                  <div
                    className='background-image'
                    style={{ backgroundImage: `url(${category.imageUrl})` }}
                  />
                  <div className='content'>
                    <h1 className='title'>{category.title}</h1>
                    <span className='subtitle'>{category.subtitle}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default P2_StaticPage_02
