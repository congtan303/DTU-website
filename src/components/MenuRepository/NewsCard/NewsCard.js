import React from 'react'
import './NewsCard.css'
const NewsCard = () => {

    return (
        <section className='main_module5'>
            <div className='container'>
                <div className='row'>
                    <div className='box_news_index'>
                        <div className='box_news_col_1 news_col'>
                            <h2>ĐÀO TẠO</h2>
                            <div className='panels_news'>
                                <div className='img-news'>
                                    <img src='https://cdn.duytan.edu.vn/upload/images/2G6A9802-93.png' />
                                </div>
                                <h3>Đào tạo tại Trường Đại học Duy Tân</h3>
                                <span className='date_news'>15/01/2023</span>
                                <div className='social_news' >
                                    <i className="fab fa-facebook-square"></i>
                                    <i className="fab fa-twitter"></i>
                                </div>
                            </div>
                            <ul className='read_more_news'>
                                <li>
                                    <span> Các ngành học “hot” tại Đại học Duy Tân</span>
                                </li>
                                <li>
                                    <span>Đào tạo Tiến sĩ tại Đại học Duy Tân</span>
                                    </li>
                            </ul>
                        </div>
                        <div className='box_news_col_1 news_col'>
                        <h2>NGHIÊN CỨU</h2>
                            <div className='panels_news'>
                                <div className='img-news'>
                                    <img src='https://cdn.duytan.edu.vn/upload/images/IMG_6616-59.jpg' />
                                </div>
                                <h3>Hướng nghiên cứu tại Đại học Duy Tân</h3>
                                <span className='date_news'>16/01/2023</span>
                                <div className='social_news' >
                                    <i className="fab fa-facebook-square"></i>
                                    <i className="fab fa-twitter"></i>
                                </div>
                            </div>
                            <ul className='read_more_news'>
                                <li>
                                    <span>Hoạt động Nghiên cứu tại Đại học Duy Tân</span>
                                </li>
                                <li>
                                    <span>Hệ thống Phòng Thí nghiệm tại Đại học Duy Tân</span>
                                </li>
                            </ul>
                        </div>
                        <div className='box_news_col_1 news_col'>
                        <h2>HỢP TÁC</h2>
                            <div className='panels_news'>
                                <div className='img-news'>
                                    <img src='https://cdn.duytan.edu.vn/upload/images/294A0884c-28.jpg' />
                                </div>
                                <h3>Những người bạn lớn</h3>
                                <span className='date_news'>16/01/2023</span>
                                <div className='social_news' >
                                    <i className="fab fa-facebook-square"></i>
                                    <i className="fab fa-twitter"></i>
                                </div>
                            </div>
                            <ul className='read_more_news'>
                                <li>
                                    <span>Hoạt động Hợp tác Quốc tế</span>
                                </li>
                                <li>
                                    <span>Đại học Duy Tân Nỗ lực Hợp tác Trong nước và Quốc tế</span>
                                </li>
                            </ul>
                        </div>
                        <div className='box_news_col_1 news_col'>
                        <h2>HOẠT ĐỘNG</h2>
                            <div className='panels_news'>
                                <div className='img-news'>
                                    <img src='https://cdn.duytan.edu.vn/upload/images/bia0-66.png' />
                                </div>
                                <h3>Hân hoan Chào mừng Kỷ niệm 73 năm ngày Truyền thống ...</h3>
                                <span className='date_news'>09/01/2023</span>
                                <div className='social_news' >
                                    <i className="fab fa-facebook-square"></i>
                                    <i className="fab fa-twitter"></i>
                                </div>
                            </div>
                            <ul className='read_more_news'>
                                <li>
                                    <span>Dàn Khách mời Thần tượng hòa trong Không khí Chào đón Tân Sinh viên K28 Trường Du lịch</span>
                                    </li>
                                <li>
                                    <span>Ngày hội Chào đón tân sinh viên K28 của Đại học Duy Tân</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsCard