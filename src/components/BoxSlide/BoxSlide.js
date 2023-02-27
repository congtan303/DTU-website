import React from 'react'
import './BoxSlide.css'
import imgAdmissions from '../../assets/img/box_slide/box_slide.jpg'
import imgEvent from '../../assets/img/box_slide/z4049676016363_e591e0c0fbce75bf22882624d44bae90-16.png'
import studentAward from '../../assets/img/box_slide/z4027991742754_8cd429365b82c9e1b4fb5f2d5bbc56bd-37.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BoxSlide = () => {
    // tạo biến chứa slide
    const infoSlide = [
        {
            id: 1,
            image: imgEvent,
            title: ' 10 sự kiện nổi bật của ĐH Duy Tân trong năm 2022',
            date: '19/01/2023',
            description: 'Mỗi một năm qua đi, mong ước của những người đứng trên giảng đường đại học là làm được thật nhiều điều có ích để đóng góp vào tiến trình nâng cao chất lượng đào ...'
        },
        {
            id: 2,
            image: studentAward,
            title: 'Nữ sinh Khoa Y Đại học Duy Tân nhận Giải thưởng "Sao tháng Giêng" 2022',
            date: '16/01/2023',
            description: 'Với điểm trung bình học tập 3.91/4.00 cùng những nỗ lực không ngừng trong các phong trào Đoàn và Hội, cô nàng Bí thư Trần Thị Phương - đã xuất sắc trở thành 1 trong ...'
        },
        {
            id: 3,
            image: 'https://cdn.duytan.edu.vn/news/uploads/media/408_256/images/bia1-68.png',
            title: 'Hai sinh viên ĐH Duy Tân giành 3 HCV tại Đại hội Thể thao toàn quốc 2022',
            date: '15/01/2023',
            description: 'Phá vỡ những kỷ lục đã từng được xác lập trước đó, hai sinh viên của Đại học (ĐH) Duy Tân là kình ngư Nguyễn Hữu Kim Sơn và VĐV điền kinh Nguyễn Phạm Hoài Yên đã ...'
        },
        {
            id: 4,
            image: 'https://cdn.duytan.edu.vn/news/uploads/media/408_256/images/bia-63.png',
            title: "Cựu sinh viên Đại học Duy Tân là cha đẻ của 'hoa hậu mèo' 2023",
            date: '01/02/2023',
            description: 'Đúng một năm trước đó (Tết Nhâm Dần 2022), anh Tâm cũng đã nhận đơn đặt hàng từ chính quyền huyện Triệu Phong để tạo tác ra linh vật hổ. Ngay lập tức chú hổ với vóc ...'
        },
        {
            id: 5,
            image: 'https://cdn.duytan.edu.vn/news/uploads/media/408_256/images/biab-41.png',
            title: 'Đào tạo Y-Dược-Điều dưỡng tại ĐH Duy Tân với sự an tâm về chất lượng',
            date: '21/01/2023',
            description: 'Dù là cơ sở đào tạo Y-Dược với hơn 15 năm kinh nghiệm, nhưng Trường Y-Dược (CMP), ĐH Duy Tân đã tạo dựng uy tín trong hoạt động đào tạo, thu hút đông đảo các thí ...'
        },
        {
            id: 6,
            image: 'https://cdn.duytan.edu.vn/news/uploads/media/408_256/images/%E1%BA%A2nh-VinIF-1-39.png',
            title: 'Các giảng viên, nhà nghiên cứu của ĐH Duy Tân nhận học bổng của quỹ VinIF',
            date: '19/01/2023',
            description: 'Bác sĩ, giảng viên Huỳnh Lê Thái Bão và ThS. Nguyễn Duy Khôi cùng ThS. Nguyễn Huỳnh Kim Ngân (đến từ Viện Nghiên cứu Khoa học Cơ bản và Ứng dụng - IFAS của Đại học ...)'
        }
    ]
    
    
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
                breakpoint: 987,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
           
        ]
    };
    return (

        <div className='box-slide-container'>
            <div className='container'>
                <div className='row-section' style={{ display: 'flex', flexWrap: 'wrap', position: 'relative' }}>
                    <div className='box-col-1'>
                        <img src={imgAdmissions} />
                    </div>
                    <div className='box-col-2'>

                        <Slider {...settings} >
                            {infoSlide.map(item => (
                                <div key={item.id}>
                                    <div style={{ padding: '6px 6px 10px',background: '#F8F8F8', borderRight: '1px solid #e0e0e0', height: '398px' }}>
                                        <img src={item.image} style={{ width: 259.66 + 'px', height: 162.93 + 'px' }} className='img-slide'/>
                                        <div className='slide-title'>{item.title}</div>
                                        <div className='slide-date'>{item.date}</div>
                                        <p className='slide-description'>{item.description}</p>
                                        <div className='social' >
                                            <i className="fab fa-facebook-square"></i>
                                            <i className="fab fa-twitter"></i>
                                            
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </Slider>


                    </div>
                </div>

            </div>


        </div>
    )
}

export default BoxSlide