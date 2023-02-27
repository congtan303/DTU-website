import React from 'react'
import BoxSlide from '../BoxSlide/BoxSlide'
import CarouselBanner from '../Carousel/CarouselBanner'
import DetailImage from './DetailImage/DetailImage'
import DetailNews from './DetailNews/DetailNews'
import MarketingBox from './MarketingBox/MarketingBox'
import NewsCard from './NewsCard/NewsCard'
import QuoteBox from './QuoteBox/QuoteBox'
import SchoolBox from './SchoolBox/SchoolBox'
import StudentBox from './StudentBox/StudentBox'


const MenuRepository = () => {
  return (
    <div className='sum_menu_repo'>
      <div className="ovelay_menu"></div>
      {/* <Carousel /> */}
      <div style={{ position: 'relative', marginBottom: '2px', background: 'white' }}>
        <CarouselBanner />
        <div style={{ position: 'relative' }}>
          <BoxSlide />
        </div>
      </div>
      <SchoolBox />
      <StudentBox />
      <DetailNews />
      <MarketingBox />
      <NewsCard />
      <DetailImage />
      <QuoteBox />

    </div>
  )
}

export default MenuRepository