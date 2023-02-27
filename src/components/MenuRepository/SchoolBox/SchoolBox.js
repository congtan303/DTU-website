import React from 'react'
import './SchoolBox.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SchoolBox = () => {
    const listSchool = [
        {
            id: 1,
            image: 'https://cdn.duytan.edu.vn/upload/images/26-10-2022-8-39-45-53.jpg',
            description: 'Trường Công nghệ'
        },
        {
            id: 2,
            image: 'https://cdn.duytan.edu.vn/upload/images/26-10-2022-8-40-4-96.jpg',
            description: 'Trường NN-Xã hội nhân văn'
        },
        {
            id: 3,
            image: 'https://cdn.duytan.edu.vn/upload/images/26-10-2022-8-40-52-12.jpg',
            description: 'Trường Y Dược'
        },
        {
            id: 4,
            image: 'https://cdn.duytan.edu.vn/upload/images/26-10-2022-8-41-22-11.jpg',
            description: 'Trường Du lịch'
        },
        {
            id: 5,
            image: 'https://cdn.duytan.edu.vn/upload/images/26-10-2022-8-41-43-25.jpg',
            description: 'Trường đào tạo quốc tế'
        },
        {
            id: 6,
            image: 'https://cdn.duytan.edu.vn/upload/images/26-10-2022-8-38-28-77.jpg',
            description: 'Trường KH máy tính'
        },
        {
            id: 7,
            image: 'https://cdn.duytan.edu.vn/upload/images/26-10-2022-8-39-15-41.jpg',
            description: 'Trường Kinh tế'
        }
    ]
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='module-school-box'>
            <div className='container'>
                <Slider {...settings} className="slider-container">
                    {listSchool.map(item => (
                        <img src={item.image} style={{ width: '100%' }} key={item.id} />
                    ))}

                </Slider>
            </div>
        </div>
    )
}

export default SchoolBox