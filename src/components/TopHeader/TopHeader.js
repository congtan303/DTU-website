import React from 'react'
import './TopHeader.css'
import iconVietnamese from "../../assets/img/icon_nav/vi.png"
import iconEnglish from "../../assets/img/icon_nav/eng.png"
import iconUniversity from "../../assets/img/icon_nav/euniversity-icon.png"
import iconMyDTU from "../../assets/img/icon_nav/btn_top_my_dtu.png"
import iconSearch from "../../assets/img/icon_nav/icon_search.png"
import {ImPhone} from 'react-icons/im'
const TopHeader = () => {
    return (
        <>
            <section className="top_header">
                <div className="container">
                    <div className="row_section">
                        <div className="box_sum_header">
                            <div className="lang_info">
                                <ul className="lang">
                                    <li className="active">
                                        <a href="/vn">
                                            <img src={iconVietnamese} alt="Tiếng Việt" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/en">
                                            <img src={iconEnglish} alt="English" />
                                        </a>
                                    </li>
                                </ul>
                                <ul className="contact" style={{ marginBottom: 0 }}>
                                    <li><a href="tel:02363650403"><ImPhone style={{margin: '0 5px 4px 0'}} />(+84)
                                        236.3650403</a></li>
                                    <li><a href="/ContactUs"><i className="fa fa-envelope"></i>Liên hệ</a></li>
                                </ul>
                            </div>
                            <ul className="social_mydtu">
                                <li className="box_mydtu euni">
                                    <a href="http://euniversity.edu.vn" target="_blank" title="">
                                        <img src={iconUniversity} alt="" />
                                    </a>
                                </li>
                                <li className="box_mydtu">
                                    <a href="https://mydtu.duytan.edu.vn/Signin.aspx" target="_blank"
                                        title="Cổng thông tin Đại học Duy Tân - Đà Nẵng - Việt Nam">
                                        <img src={iconMyDTU}
                                            alt="Cổng thông tin Đại học Duy Tân - Đà Nẵng - Việt Nam" />
                                    </a>
                                </li>
                                <li className="box_search">
                                    <form className="search_form" action="/Search">
                                        <img className="icon_search" src={iconSearch} alt="" />
                                        <input type="text" name="s" placeholder="Tìm kiếm..." />
                                        <input className="sea_bo search_box_submit" type="submit" value="" />
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default TopHeader