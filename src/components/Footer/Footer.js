import React, { useState, useEffect } from 'react'
import './Footer.css'
import $ from 'jquery';
const Footer = () => {

    const administrators = [
        {
            id: 1,
            information: 'Hội Đồng Quản Trị'
        },
        {
            id: 2,
            information: 'Ban Giám Hiệu'
        }
    ]

    const computerScienceSchool = [
        {
            id: 1,
            information: 'Khoa Công nghệ Thông tin'
        },
        {
            id: 2,
            information: 'Trung Tâm Mô Hình Hóa & Mô Phỏng (CVS)'
        },
        {
            id: 3,
            information: 'Khoa Khoa học Máy tính'
        },
        {
            id: 4,
            information: 'Khoa KTMMT & TT'
        },
        {
            id: 5,
            information: 'Trung tâm NC & CG Ứng dụng CNTT'
        },
        {
            id: 6,
            information: 'Phòng Tổng hợp'
        }
    ]

    const technologySchool = [
        {
            id: 1,
            information: 'Khoa Điện - Điện tử'
        },
        {
            id: 2,
            information: 'Khoa Môi trường & Khoa học Tự nhiên'
        },
        {
            id: 3,
            information: 'Khoa Xây dựng'
        },
        {
            id: 4,
            information: 'Khoa Kiến Trúc & Mỹ Thuật Ứng Dụng'
        },
        {
            id: 5,
            information: 'Trung tâm Điện - Điện tử (CEE)'
        },
        {
            id: 6,
            information: 'Khoa Cơ khí'
        },
        {
            id: 7,
            information: 'Trung tâm Cơ Khí (CME)'
        },
        {
            id: 8,
            information: 'Phòng Tổng hợp'
        },
    ]

    const medicalSchool = [
        {
            id: 1,
            information: 'Khoa Y'
        },
        {
            id: 2,
            information: 'Khoa Dược'
        },
        {
            id: 3,
            information: 'Khoa Điều dưỡng'
        },
        {
            id: 4,
            information: 'Trung tâm Sinh học Phân tử'
        },
        {
            id: 5,
            information: 'Trung tâm Thí nghiệm CT&KST'
        },
        {
            id: 6,
            information: 'Trung tâm TH Mô phỏng YK (MSC)'
        },
        {
            id: 7,
            information: 'Ban Dự Án PK Đa khoa'
        },
        {
            id: 8,
            information: 'Ban Dự Án TT. SK NCT'
        },
        {
            id: 9,
            information: 'Phòng Tổng hợp'
        }
    ]

    const economicalSchool = [
        {
            id: 1,
            information: 'Khoa Kế toán'
        },
        {
            id: 2,
            information: 'Khoa Quản trị Kinh doanh'
        },
        {
            id: 3,
            information: 'Phòng Tổng hợp'
        },
    ]

    const foreignLanguageSchool = [
        {
            id: 1,
            information: 'Khoa Tiếng Anh'
        },
        {
            id: 2,
            information: 'Khoa Xã hội Nhân văn'
        },
        {
            id: 3,
            information: 'Khoa Tiếng Trung'
        },
        {
            id: 4,
            information: 'Khoa Luật'
        },
        {
            id: 5,
            information: 'Khoa Tiếng Hàn'
        },
        {
            id: 6,
            information: 'Khoa Tiếng Nhật'
        },
        {
            id: 7,
            information: 'Ban Anh ngữ hóa'
        },
    ]

    const InternationalTrainingSchool = [
        {
            id: 1,
            information: 'Chương trình ADP (American Degree Program)'
        },
        {
            id: 2,
            information: 'Trung Tâm Sáng Tạo Microsoft (MIC)'
        },
        {
            id: 3,
            information: 'TT Tư vấn và Hỗ trợ SV'
        },
        {
            id: 4,
            information: 'Khoa Công nghệ Phần Mềm Việt - Mỹ (CMU)'
        },
        {
            id: 5,
            information: 'Khoa Quản lý - Kinh tế Việt - Mỹ (PSU)'
        },
        {
            id: 6,
            information: 'Khoa Kiến trúc & Xây dựng Việt - Mỹ(CSU)'
        },
    ]

    const travelSchool = [
        {
            id: 1,
            information: 'Khoa Khách sạn Nhà hàng QT'
        },
        {
            id: 2,
            information: 'Khoa Du lịch Lữ hành QT'
        },
        {
            id: 3,
            information: 'Trung tâm ĐT Nghiệp vụ Du lịch QT'
        },
        {
            id: 4,
            information: 'Trung tâm ĐT Nghiệp vụ & KNM'
        },
    ]

    const trainingBlock = [
        {
            id: 1,
            information: 'Khoa Đào Tạo Sau Đại Học'
        },
        {
            id: 2,
            information: 'Khoa Lý luận Chính trị'
        },
        {
            id: 3,
            information: 'Khoa Khoa học Tự nhiên'
        },
        {
            id: 4,
            information: 'Trung Tâm Giáo dục Thể chất - Quốc phòng'
        },
        {
            id: 5,
            information: 'Trung tâm Đào tạo Bằng 2'
        },
        {
            id: 6,
            information: 'Trung tâm Ngoại ngữ'
        },
        {
            id: 7,
            information: 'Trung Tâm Tin Học DTITC'
        },
        {
            id: 8,
            information: 'Trung Tâm Đào Tạo eUniversity'
        },
        {
            id: 9,
            information: 'Trung Tâm Huấn Luyện & Khảo Thí (LTC)'
        },
    ]
    const administrative = [
        {
            id: 1,
            information: 'Văn Phòng Trường'
        },
        {
            id: 2,
            information: 'Phòng Tổ Chức'
        },
        {
            id: 3,
            information: 'Phòng Đào Tạo'
        },
        {
            id: 4,
            information: 'Phòng Công Tác Sinh Viên'
        },
        {
            id: 5,
            information: 'Phòng Thanh Tra'
        },
        {
            id: 6,
            information: 'Phòng Quản lý Khoa học'
        },
        {
            id: 7,
            information: 'Phòng Hợp tác Doanh Nghiệp & Chuyển Giao Công Nghệ'
        },
        {
            id: 8,
            information: 'Trung Tâm Đảm Bảo Chất Lượng & Khảo Thí'
        },
        {
            id: 9,
            information: 'Thư viện'
        },
        {
            id: 10,
            information: 'Đảng Bộ'
        },
        {
            id: 11,
            information: 'Công Đoàn'
        },
        {
            id: 12,
            information: 'Đoàn Thanh Niên'
        },
    ]
    const research = [
        {
            id: 1,
            information: 'Viện Nghiên cứu và Phát triển Công nghệ cao'
        },
        {
            id: 2,
            information: 'Viện Nghiên Cứu Lý Thuyết & Ứng Dụng'
        },
        {
            id: 3,
            information: 'Trung Tâm Công Nghệ Phần Mềm (CSE)'
        },
        {
            id: 4,
            information: 'Trung Tâm Công Nghệ Thông Tin (CIT)'
        },
        {
            id: 5,
            information: 'LRC (Trung Tâm Học Liệu)'
        },
    ]

    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {

        const ul = Array.from(
            document.querySelectorAll('.box_footer_2 .nav_footer li ')
        )
        // const ulInfo = Array.from(
        //     document.querySelectorAll('.box_footer_2 .nav_footer .subnav .sub-ul')
        // )

        ul.map(item => {
            item.addEventListener('click', () => {
           
                const itemSubnav = item.querySelector('.subnav');
                const itemInfo = item.querySelector('.sub-ul')
                
                if (itemSubnav) {
                    itemSubnav.classList.remove('clicked');
                    itemInfo.style.display = 'none';
                    itemInfo.style.display = 'block';
                    itemSubnav.classList.add('clicked');
                    
                }
                else {
                    itemInfo.style.display = 'none';
                    itemSubnav.classList.remove('clicked');
                }



     // const ae = item.getAttribute('id');

                //  if(ae) {
                //     ulInfo.map(item => item.style.display = 'block')
                //  }else{
                //     ulInfo.map(item => item.style.display = 'none')
                //  }

                // const hide = itemInfo.style.display === 'none'
                // if (hide) {
                //     itemInfo.style.display = 'block'

                // } else {
                //     itemInfo.style.display = 'none'
                // }
            })
        })

    }, [])



    return (
        <section className='footer'>
            <div className='container'>
                <div className='row_section'>
                    <div className='box_footer'>
                        <div className='box_footer_1 float_col'>
                            <div className='title'>HƯỚNG DẪN</div>
                            <ul>
                                <li>Sơ đồ Trang Thông tin</li>
                                <li>Liên hệ</li>
                            </ul>
                        </div>
                        <div className='box_footer_2 float_col'>
                            <div className='title'>LIÊN KẾT WEB</div>
                            {/* col-1 */}
                            <div className='nav_footer'>
                                <ul>
                                    <li id='1'>
                                        <p className='subnav' >Hội Đồng Quản Trị & Ban Giám hiệu</p>
                                        <ul className='sub-ul'>
                                            {administrators.map(item => (
                                                <li className='sub-li' key={item.id}>
                                                    <i className='fa fa-square'></i>
                                                    <a href='/'>{item.information}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li id='2'>
                                        <p className='subnav '>Trường Khoa học Máy tính</p>
                                        <ul className='sub-ul'>
                                            {computerScienceSchool.map(item => (
                                                <li className='sub-li' key={item.id}>
                                                    <i className='fa fa-square'></i>
                                                    <a href='/'>{item.information}</a>
                                                </li>
                                            ))}


                                        </ul>
                                    </li>
                                    <li id='3'>
                                        <p className='subnav '>Trường Công Nghệ</p>
                                        <ul className='sub-ul'>
                                            {technologySchool.map(item => (
                                                <li className='sub-li' key={item.id}>
                                                    <i className='fa fa-square'></i>
                                                    <a href='/'>{item.information}</a>
                                                </li>
                                            ))}


                                        </ul>
                                    </li>
                                    <li id='4'>
                                        <p className='subnav '>Trường Y Dược</p>
                                        <ul className='sub-ul'>
                                            {medicalSchool.map(item => (
                                                <li className='sub-li' key={item.id}>
                                                    <i className='fa fa-square'></i>
                                                    <a href='/'>{item.information}</a>
                                                </li>
                                            ))}


                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/* col-2 */}
                            <div className='nav_footer'>
                                <ul>
                                    <li id='5'>
                                        <p className='subnav '>Trường Kinh tế</p>
                                        <ul className='sub-ul'>
                                            {economicalSchool.map(item => (
                                                <li className='sub-li' key={item.id}>
                                                    <i className='fa fa-square'></i>
                                                    <a href='/'>{item.information}</a>
                                                </li>
                                            ))}


                                        </ul>
                                    </li>
                                    <li id='6'>
                                        <p className='subnav '>Trường Ngoại Ngữ - Xã hội Nhân văn</p>
                                        <ul className='sub-ul'>
                                            {foreignLanguageSchool.map(item => (
                                                <li className='sub-li' key={item.id}>
                                                    <i className='fa fa-square'></i>
                                                    <a href='/'>{item.information}</a>
                                                </li>
                                            ))}


                                        </ul>
                                    </li>
                                    <li id='7'>
                                        <p className='subnav '>Trường Đào tạo Quốc tế</p>
                                        <ul className='sub-ul'>
                                            {InternationalTrainingSchool.map(item => (
                                                <li className='sub-li' key={item.id}>
                                                    <i className='fa fa-square'></i>
                                                    <a href='/'>{item.information}</a>
                                                </li>
                                            ))}


                                        </ul>
                                    </li>
                                    <li id='8'>
                                        <p className='subnav '>Trường Du Lịch</p>
                                        <ul className='sub-ul'>
                                            {travelSchool.map(item => (
                                                <li className='sub-li' key={item.id}>
                                                    <i className='fa fa-square'></i>
                                                    <a href='/'>{item.information}</a>
                                                </li>
                                            ))}


                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/* col-3 */}
                            <div className='nav_footer'>
                                <ul>
                                    <li id='9'>
                                        <p className='subnav '>Khối Đào tạo</p>
                                        <ul className='sub-ul'>
                                            {trainingBlock.map(item => (
                                                <li className='sub-li' key={item.id}>
                                                    <i className='fa fa-square'></i>
                                                    <a href='/'>{item.information}</a>
                                                </li>
                                            ))}


                                        </ul>
                                    </li>
                                    <li id='10'>
                                        <p className='subnav '>Khối Hành chính - Phục vụ</p>
                                        <ul className='sub-ul'>
                                            {administrative.map(item => (
                                                <li className='sub-li' key={item.id}>
                                                    <i className='fa fa-square'></i>
                                                    <a href='/'>{item.information}</a>
                                                </li>
                                            ))}


                                        </ul>
                                    </li>
                                    <li id='11'>
                                        <p className='subnav '>Trường Công Nghệ</p>
                                        <ul className='sub-ul'>
                                            {technologySchool.map(item => (
                                                <li className='sub-li' key={item.id}>
                                                    <i className='fa fa-square'></i>
                                                    <a href='/'>{item.information}</a>
                                                </li>
                                            ))}


                                        </ul>
                                    </li>
                                    <li id='12'>
                                        <p className='subnav '>Khối Nghiên Cứu - Ứng Dụng</p>
                                        <ul className='sub-ul'>
                                            {research.map(item => (
                                                <li className='sub-li' key={item.id}>
                                                    <i className='fa fa-square'></i>
                                                    <a href='/'>{item.information}</a>
                                                </li>
                                            ))}


                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='line_cop'>
                        <p>Copyright © 2023 - Bản quyền thuộc về Trường Đại học Duy Tân</p>
                        <p>Địa chỉ: 254 Nguyễn Văn Linh, Quận Thanh Khê - Tp. Đà Nẵng</p>
                        <p>Điện thoại: (+84) 236.3650403 - (+84) 236.3827111</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer