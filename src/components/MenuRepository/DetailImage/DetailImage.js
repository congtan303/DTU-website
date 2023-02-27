import React, { useEffect } from 'react'
import { useState } from 'react'
import './DetailImage.css'
import img1 from '../.././../assets/img/img_module6/15-11-2022-9-10-55-26.png'
import img2 from '../.././../assets/img/img_module6/9-11-2022-8-43-59-19.png'
import img3 from '../.././../assets/img/img_module6/6-9-2022-9-58-0-17.png'
import img4 from '../.././../assets/img/img_module6/23-8-2022-9-5-18-22.png'
import img5 from '../.././../assets/img/img_module6/19-5-2022-9-54-48-56.jpg'
import img6 from '../.././../assets/img/img_module6/28-4-2022-15-31-24-4.png'
import img7 from '../.././../assets/img/img_module6/26-2-2022-9-37-29-48.jpg'
import img8 from '../.././../assets/img/img_module6/9-12-2021-9-0-35-17.jpg'

const  DetailImage = () => {
    

    useEffect(() => {
        const module6_galery = Array.from(
            document.querySelectorAll('.main_module6 .galery')
        )
        const module6_item_gale = Array.from(
            document.querySelectorAll('.main_module6 .galery .item_gale')
        )
        // console.log(module6_item_gale);
        const module6_ovelay = Array.from(
            document.querySelectorAll('.main_module6 .galery .item_gale .ovelay')
        )

        // EVENT MOUSE ENTER    

        module6_item_gale.map(element => {
            element.addEventListener('mouseenter', () => {
                
            //   console.log(element);  
                module6_item_gale.find(item => item.classList.remove('active'))
                module6_ovelay.map(item => item.style.display = 'block')    // mouseEnter hiện overlay
                
                const abc = element.querySelector('.item_gale_show_info')   // tạo biến chứa cart info
                abc.style.display = 'block'                                // chuột trỏ tới đối tượng => hiện info
                const congtan = element.querySelector('.ovelay')
                congtan.style.display = 'none'                              //chuột trỏ tới đối tượng => ẩn overlay

            })
            // event mouse rời item
            element.addEventListener('mouseleave', (e) => {
                const abcd = element.querySelector('.item_gale_show_info')

                abcd.style.display = 'none'
                // module6_ovelay.map(item => item.style.display = 'none')

            })
        })

        //  EVENT MOUSE LEAVE
        module6_galery.map(element => {


            element.addEventListener('mouseleave', () => {

                const aff = element.querySelector('.main_module6 .galery .item_gale')
                aff.classList.add('active')
                // element.classList.add('active')
                const abc = element.querySelector('.main_module6 .galery .item_gale_show_info')
                // abc.style.display = 'none'
                module6_ovelay.map(item => item.style.display = 'none')

            })
        })

    }, [])
    const [isActive, setisActive] = useState(false)

    const mouseEnter = (e) => {
        setisActive(!isActive)
    }
    // console.log(í);
    const mouseLeave = (e) => {
        console.log(e.target)
    }
    return (
        <section className="main_module6">
            <div className="galery float_col" style={{ overflow: 'hidden' }}>
                <div className='item_gale active' id="1" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <figure>
                        <a
                            href="https://duytan.edu.vn/Galleries/truong-dh-duy-tan-dat-chung-nhan-kiem-dinh-chat-luong-co-so-giao-duc-chu-ky-2">
                            <img src={img1}
                                alt="Trường ĐH Duy Tân đạt chứng nhận kiểm định Chất lượng Cơ sở Giáo dục Chu kỳ 2" />
                        </a>
                    </figure>

                    <div className="item_gale_show_info item_gale_show_info_1" style={isActive ? {display: 'block'} : {display: 'none'}}>
                        <h2><a
                            href="https://duytan.edu.vn/Galleries/truong-dh-duy-tan-dat-chung-nhan-kiem-dinh-chat-luong-co-so-giao-duc-chu-ky-2">Trường
                            ĐH Duy Tân đạt chứng nhận kiểm định Chất lượng Cơ sở Giáo dục ...</a></h2>
                        <p>Trường ĐH Duy Tân đón nhận Cờ thi đua năm học 2021 - 2022 của UBND Đà Nẵng và ...</p>
                        <a
                            href="https://duytan.edu.vn/Galleries/truong-dh-duy-tan-dat-chung-nhan-kiem-dinh-chat-luong-co-so-giao-duc-chu-ky-2"><i
                                className="fa fa-instagram"></i>Xem gallery</a>
                    </div>
                    <div className='ovelay info_1' ></div>
                </div>
                <div className="item_gale" id="2" >
                    <figure>
                        <a
                            href="https://duytan.edu.vn/Galleries/dh-duy-tan-ky-ket-hop-tac-voi-so-khoa-hoc-cong-nghe-tp-can-tho">
                            <img src={img2}
                                alt="ĐH Duy Tân ký kết hợp tác với Sở Khoa học - Công nghệ TP Cần Thơ" />
                        </a>
                    </figure>
                    <div className="item_gale_show_info item_gale_show_info_2" >
                        <h2><a
                            href="https://duytan.edu.vn/Galleries/dh-duy-tan-ky-ket-hop-tac-voi-so-khoa-hoc-cong-nghe-tp-can-tho">ĐH
                            Duy Tân ký kết hợp tác với Sở Khoa học - Công nghệ TP Cần Thơ</a></h2>
                        <p>Ngày 4-11, Trường ĐH Duy Tân tổ chức lễ ký kết hợp tác với Sở Khoa học - Công ...</p>
                        <a
                            href="https://duytan.edu.vn/Galleries/dh-duy-tan-ky-ket-hop-tac-voi-so-khoa-hoc-cong-nghe-tp-can-tho"><i
                                className="fa fa-instagram"></i>Xem gallery</a>
                    </div>
                    <div className="ovelay info_2" ></div>
                </div>
                <div className="item_gale" id="3" style={{ overflow: 'visible' }}>
                    <figure>
                        <a
                            href="https://duytan.edu.vn/Galleries/dh-duy-tan-hop-tac-toan-dien-voi-to-chuc-bo-truong-giao-duc-dong-nam-a">
                            <img src={img3}
                                alt="ĐH Duy Tân Hợp tác Toàn diện với Tổ chức Bộ trưởng Giáo dục Đông Nam Á" />
                        </a>
                    </figure>
                    <div className="item_gale_show_info item_gale_show_info_3">
                        <h2><a
                            href="https://duytan.edu.vn/Galleries/dh-duy-tan-hop-tac-toan-dien-voi-to-chuc-bo-truong-giao-duc-dong-nam-a">ĐH
                            Duy Tân Hợp tác Toàn diện với Tổ chức Bộ trưởng Giáo dục Đông Nam Á</a></h2>
                        <p>Sáng ngày 1/9/2022, ĐH Duy Tân đã ký kết hợp tác toàn diện cùng Tổ chức Bộ ...</p>
                        <a
                            href="https://duytan.edu.vn/Galleries/dh-duy-tan-hop-tac-toan-dien-voi-to-chuc-bo-truong-giao-duc-dong-nam-a"><i
                                className="fa fa-instagram"></i>Xem gallery</a>
                    </div>
                    <div className="ovelay info_3" ></div>
                </div>
                <div className="item_gale" id="4" style={{ overflow: 'visible' }}>
                    <figure>
                        <a
                            href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-ky-ket-hop-tac-voi-dai-hoc-dong-a-han-quoc">
                            <img src={img4}
                                alt="ĐH Duy Tân Hợp tác Toàn diện với Tổ chức Bộ trưởng Giáo dục Đông Nam Á" />
                        </a>
                    </figure>
                    <div className="item_gale_show_info item_gale_show_info_4">
                        <h2><a
                            href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-ky-ket-hop-tac-voi-dai-hoc-dong-a-han-quoc">Đại
                            học Duy Tân Ký kết Hợp tác với Đại học Dong-A, Hàn Quốc</a></h2>
                        <p>Đại học Duy Tân Ký kết Hợp tác với Đại học Dong-A, Hàn Quốc</p>
                        <a
                            href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-ky-ket-hop-tac-voi-dai-hoc-dong-a-han-quoc"><i
                                className="fa fa-instagram"></i>Xem gallery</a>
                    </div>
                    <div className="ovelay info_4"></div>
                </div>
                <div className="item_gale" id="5" style={{ overflow: 'visible' }}>
                    <figure>
                        <a
                            href="https://duytan.edu.vn/Galleries/ra-mat-trung-tam-doi-moi-sang-tao-bk-holdings-duy-tan">
                            <img src={img5}
                                alt="Ra mắt Trung tâm Đổi mới Sáng tạo BK Holdings - Duy Tân" />
                        </a>
                    </figure>
                    <div className="item_gale_show_info item_gale_show_info_5">
                        <h2><a
                            href="https://duytan.edu.vn/Galleries/ra-mat-trung-tam-doi-moi-sang-tao-bk-holdings-duy-tan">Ra
                            mắt Trung tâm Đổi mới Sáng tạo BK Holdings - Duy Tân</a></h2>
                        <p>Ngày 14-5, tại Trường ĐH Duy Tân (Đà Nẵng) đã diễn ra hội thảo kết nối đại học ...</p>
                        <a
                            href="https://duytan.edu.vn/Galleries/ra-mat-trung-tam-doi-moi-sang-tao-bk-holdings-duy-tan"><i
                                className="fa fa-instagram"></i>Xem gallery</a>
                    </div>
                    <div className="ovelay info_5"></div>
                </div>
                <div className="item_gale" id="6" style={{ overflow: 'visible' }}>
                    <figure>
                        <a
                            href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-ky-ket-hop-tac-voi-cong-ty-aieraa-overseas-studies">
                            <img src={img6}
                                alt="Đại học Duy Tân ký kết hợp tác với Công ty Aieraa Overseas Studies" />
                        </a>
                    </figure>
                    <div className="item_gale_show_info item_gale_show_info_6">
                        <h2><a
                            href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-ky-ket-hop-tac-voi-cong-ty-aieraa-overseas-studies">Đại
                            học Duy Tân ký kết hợp tác với Công ty Aieraa Overseas Studies</a></h2>
                        <p>Nhằm tiếp tục đẩy mạnh công tác đào tạo, hợp tác quốc tế, vào sáng ngày ...</p>
                        <a
                            href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-ky-ket-hop-tac-voi-cong-ty-aieraa-overseas-studies"><i
                                className="fa fa-instagram"></i>Xem gallery</a>
                    </div>
                    <div className="ovelay info_6"></div>
                </div>
                <div className="item_gale" id="7" style={{ overflow: 'visible' }}>
                    <figure>
                        <a
                            href="https://duytan.edu.vn/Galleries/le-cong-bo-tap-chi-quoc-te-mang-cong-nghiep-va-he-thong-thong-minh-cua-dh-duy-tan-vao-danh-muc-scopus">
                            <img src={img7}
                                alt="Lễ Công bố Tạp chí Quốc tế Mạng công nghiệp và Hệ thống thông minh của ĐH Duy Tân vào danh mục SCOPUS" />
                        </a>
                    </figure>
                    <div className="item_gale_show_info item_gale_show_info_7">
                        <h2><a
                            href="https://duytan.edu.vn/Galleries/le-cong-bo-tap-chi-quoc-te-mang-cong-nghiep-va-he-thong-thong-minh-cua-dh-duy-tan-vao-danh-muc-scopus">Lễ
                            Công bố Tạp chí Quốc tế Mạng công nghiệp và Hệ thống thông minh ...</a></h2>
                        <p>Tạp chí Quốc tế Mạng công nghiệp và Hệ thống thông minh của ĐH Duy Tân đã được ...</p>
                        <a
                            href="https://duytan.edu.vn/Galleries/le-cong-bo-tap-chi-quoc-te-mang-cong-nghiep-va-he-thong-thong-minh-cua-dh-duy-tan-vao-danh-muc-scopus"><i
                                className="fa fa-instagram"></i>Xem gallery</a>
                    </div>
                    <div className="ovelay info_7"></div>
                </div>
                <div className="item_gale" id="8" style={{ overflow: 'visible' }}>
                    <figure>
                        <a
                            href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-ra-mat-may-aed-302-trainer-va-ky-ket-voi-wellbeing-de-thuong-mai-hoa-cac-san-pham-cong-nghe-ve-y-te">
                            <img src={img8}
                                alt="Đại học Duy Tân ra mắt Máy AED-302 Trainer và ký kết với Wellbeing để Thương mại hóa các Sản phẩm Công nghệ về Y tế" />
                        </a>
                    </figure>
                    <div className="item_gale_show_info item_gale_show_info_8">
                        <h2><a
                            href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-ra-mat-may-aed-302-trainer-va-ky-ket-voi-wellbeing-de-thuong-mai-hoa-cac-san-pham-cong-nghe-ve-y-te">Đại
                            học Duy Tân ra mắt Máy AED-302 Trainer và ký kết với Wellbeing để ...</a></h2>
                        <p>AED-302 Trainer là một bản sao của máy sốc điện khử rung tim tự động bên ngoài, ...</p>
                        <a
                            href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-ra-mat-may-aed-302-trainer-va-ky-ket-voi-wellbeing-de-thuong-mai-hoa-cac-san-pham-cong-nghe-ve-y-te"><i
                                className="fa fa-instagram"></i>Xem gallery</a>
                    </div>
                    <div className="ovelay info_8"></div>
                </div>
            </div>
        </section>
    )
}

export default DetailImage