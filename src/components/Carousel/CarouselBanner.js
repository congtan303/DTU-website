import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import logo1 from '../../assets/img/main_module1/1-47.jpg'
import logo2 from '../../assets/img/main_module1/xephang2022_vn3-33.jpg'
import logo3 from '../../assets/img/main_module1/harvard-mit-dtu-compressor-24-32-49.jpg'
import logo4 from '../../assets/img/main_module1/huan-chuong-lao-dong-dtu-compressor-10-81.jpg'
import { Carousel } from 'react-bootstrap';
import './CarouselBanner.css'
import BoxSlide from '../BoxSlide/BoxSlide';
const Test = () => {
    const carousel = [
        {
            id: 1,
            img: logo1,
            title: 'Các ngành học "hot" tại Đại học Duy Tân',
            description: 'Học ngành nào để việc học luôn ổn định dù cho dịch bệnh có tái diễn hay không?, Học ngành nào để...',

        },
        {
            id: 2,
            img: logo2,
            title: 'Đại học Duy Tân vào Top 500 Thế giới theo bảng Times Higher Education (THE) 2023',
            description: 'Tổ chức Times Higher Education (THE) vừa công bố bảng xếp hạng các trường đại học tốt nhất thế giới...',

        },
        {
            id: 3,
            img: logo3,
            title: 'Sinh viên Duy Tân và Bản lĩnh Chinh phục Cup Vô địch các Cuộc thi Quốc gia và Quốc tế',
            description: 'Không chỉ được biết đến là đại học uy tín với những thành tựu đáng trân trọng trong công tác đào...',

        },
        {
            id: 4,
            img: logo4,
            title: 'Đại học Duy Tân đạt các Huân chương Lao động hạng Nhất - Nhì',
            description: 'Trong quá trình xây dựng và phát triển, Đại học Duy Tân đã đạt được nhiều thành tựu trong công tác...',

        }
    ]

    

    return (
     
            <Carousel
                controls={false}
                fade={true}
                interval={3000}
                width={'100%'}
               
                wrap={true}
                indicators={false}
                style={{ position: 'relative', height: 800 + 'px'}}
            >
                {carousel.map(review => (
                    <Carousel.Item key={review.id} style={{height: 800 + 'px'}}>
                        <img
                            src={review.img}
                            style={{width: '100%', height: '100%'}}
                            
                        />
                      
                        <Carousel.Caption className='carousel-banner-caption' >
                            <h3 className='box-news-title'>{review.title}</h3>
                            <p className='box-news-description'>{review.description}</p>
                            <a className='btn-read-more'>Xem thêm...</a>
                        </Carousel.Caption>

                    </Carousel.Item>
                ))}
            
            </Carousel>


 
    )
}

export default Test