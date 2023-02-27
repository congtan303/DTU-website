import React from 'react'
import { useState } from 'react'
import './TopMenu.css'
import logoUniversity from '../../assets/img/icon_nav/logo_dtu_while.png'
import { IoHome } from 'react-icons/io5'
const TopMenu = () => {
        const [ishowMenu, setisShowMenu] = useState(false)
        const showMenu = () => {
                setisShowMenu(!ishowMenu)
        }
  return (
    <section className="top_menu">
        <div className="container" >
            <div className="row_section">
                <div className="box_sum_lo_me">
                    <div className="logo">
                        <a href="/" title="Đại học Duy Tân">
                            <img src={logoUniversity} alt="Đại học Duy Tân" />
                        </a>
                    </div>
                    <div className="icon_menu_repo" onClick={showMenu}>
                        <i className="fa fa-bars show_menu_icon" aria-hidden="true"></i>
                        {/* <i className="fa fa-mail-reply-all show_hide_icon"></i> */}
                    </div>
                    <div className="menu" style={ishowMenu ? {left: '0'}  : { left: '-300px'}  }>
                        <ul className="menu">
                            <li className="menu_logo">
                                <div className="logo">
                                    <a href="/" title="Đại học Duy Tân">
                                        <img src={logoUniversity} alt="Đại học Duy Tân" />
                                    </a>
                                </div>
                            </li>
                            <li className="menu home">
                                <a href="/"><IoHome style={{marginBottom: '4px', height: '21px'}}/></a>
                            </li>
                            <li className="menu">
                                <a className="menu " href="https://duytan.edu.vn/gioi-thieu">Giới thiệu</a>
                            </li>
                            <li className="menu">
                                <a className="menu " href="https://duytan.edu.vn/tuyen-sinh">Tuyển sinh</a>
                            </li>
                            <li className="menu">
                                <a className="menu " href="https://duytan.edu.vn/dao-tao">Đào tạo</a>
                                <div className="box_hover_menu box_full" style={{left: -568.413 + 'px', width: 1170 + 'px'}}>
                                    <ul className="list_top">
                                        <li className="list_top chid_1 active" id="chid_1">
                                            <a className="list_top show_menu" href="javascript:void(0)">Ban Sau Đại Học</a>
                                            <a className="list_top hiden_menu" href="#">Ban Sau Đại Học</a>
                                        </li>
                                        <li className="list_top chid_2 " id="chid_2">
                                            <a className="list_top show_menu" href="javascript:void(0)">Đại học</a>
                                            <a className="list_top hiden_menu" href="#">Đại học</a>
                                        </li>
                                        <li className="list_top chid_3 " id="chid_3">
                                            <a className="list_top show_menu" href="javascript:void(0)">Liên Thông/Bằng
                                                2</a>
                                            <a className="list_top hiden_menu" href="#">Liên Thông/Bằng 2</a>
                                        </li>
                                        <li className="list_top chid_4 " id="chid_4">
                                            <a className="list_top show_menu" href="javascript:void(0)">eUniversity</a>
                                            <a className="list_top hiden_menu" href="#">eUniversity</a>
                                        </li>
                                    </ul>
                                    <div className="box_in_menu chid_1 active">
                                        <div className="box_col_1 box_col box_desc">
                                            <p>
                                                <span style={{fontSize: 14 + 'px'}}>Thành công trong công tác đào tạo ở bậc
                                                    Đại học trở thành nền tảng vững chắc để Đại học Duy Tân mở rộng đào
                                                    tạo ở trình độ cao hơn. Hiện nay, Đại học Duy Tân đã và đang đào tạo
                                                    trình độ Thạc sĩ với 13 chuyên ngành
                                                    gồm<em>:</em>Q</span>u<span style={{fontSize: 14 + 'px'}}>ản trị
                                                    Kinh doanh, Kế toán, Khoa học máy tính, Kỹ thuật Xây dựng, Tổ chức
                                                    Quản lý Dược, Quan hệ Quốc tế, Kỹ thuật Điện tử, Kỹ thuật Môi
                                                    trường, Luật kinh tế, Tài chính Ngân hàng, Văn học, Quản trị Dịch vụ
                                                    Du lịch và Lữ hành và Điều dưỡng quốc tế Đại học Fooyin (Đài
                                                    Loan</span>)<span style={{fontSize: 14 + 'px'}}><em></em> đồng thời
                                                    đào tạo trình độ 10 chuyên ngành Tiến sĩ ngành:<em>Quản trị
                                                        Kinh doanh, Kế toán, Khoa học Máy tính, Kỹ thuật Xây dựng, Quan
                                                        hệ Quốc tế, Tài chính Ngân hàng, Tổ chức Quản lý Dược, Vật lý Lý
                                                        thuyết và Vật lý Toán, Vật lý Chất rắn, Vật lý Nguyên tử và Hạt
                                                        nhân</em>. Đại học Duy Tân là trường đại học ngoài công lập đầu
                                                    tiên được phép đào tạo Tiến sĩ.</span>
                                            </p>
                                        </div>
                                        <div className="box_col_1 box_col">
                                            <figure>
                                                <a href="https://duytan.edu.vn/dao-tao-tien-si">
                                                  <img src="img/img_nav/8-6-2017-15-29-20-62.jpg" alt="" />
                                                  </a>
                                            </figure>
                                            <h3>Đào tạo Tiến sĩ</h3>
                                            <ul>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/tien-si-khoa-hoc-may-tinh">Tiến sĩ
                                                        Khoa học Máy tính</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/tien-si-quan-tri-kinh-doanh">Tiến sĩ
                                                        Quản trị Kinh
                                                        doanh</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/tien-si-ke-toan">Tiến sĩ Kế toán</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/tien-si-ky-thuat-xay-dung">Tiến sĩ
                                                        Kỹ thuật Xây dựng</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/tien-si-quan-he-quoc-te">Tiến sĩ
                                                        Quan hệ Quốc tế</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/tien-si-tai-chinh-ngan-hang">Tiến sĩ
                                                        Tài chính Ngân
                                                        hàng</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/tien-si-to-chuc-quan-ly-duoc">Tiến
                                                        sĩ Tổ chức Quản lý
                                                        Dược</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/tien-si-vat-ly-ly-thuyet-va-vat-ly-toan">Tiến
                                                        sĩ Vật lý
                                                        Lý thuyết và Vật lý Toán</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/tien-si-vat-ly-chat-ran">Tiến sĩ Vật
                                                        lý Chất rắn</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/tien-si-vat-ly-nguyen-tu-va-hat-nhan">Tiến
                                                        sĩ Vật lý
                                                        Nguyên tử và Hạt nhân</a></li>
                                            </ul>
                                        </div>
                                        <div className="box_col_1 box_col">
                                            <figure>
                                                <a href="https://duytan.edu.vn/dao-tao-thac-si">
                                                  <img src="img/img_nav/8-6-2017-15-31-51-40.jpg" alt="" />

                                                        </a>
                                            </figure>
                                            <h3>Đào tạo Thạc sĩ</h3>
                                            <ul>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/thac-si-khoa-hoc-may-tinh">Thạc sĩ
                                                        Khoa học Máy tính</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/thac-si-quan-tri-kinh-doanh">Thạc sĩ
                                                        Quản trị Kinh
                                                        doanh</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/thac-si-ke-toan">Thạc sĩ Kế toán</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/thac-si-xay-dung">Thạc sĩ Kỹ thuật
                                                        Xây dựng</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/thac-si-tai-chinh-ngan-hang">Thạc sĩ
                                                        Tài chính Ngân
                                                        hàng</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/thac-si-quan-he-quoc-te">Thạc sĩ
                                                        Quan hệ Quốc tế</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/thac-si-dieu-duong-quoc-te">Thạc sĩ
                                                        Điều dưỡng Quốc tế
                                                        Đại học Fooyin (Đài Loan)</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/thac-si-to-chuc-quan-ly-duoc">Thạc
                                                        sĩ Tổ chức Quản lý
                                                        Dược</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/thac-si-van-hoc">Thạc sĩ Văn học</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/thac-si-ky-thuat-dien-tu">Thạc sĩ Kỹ
                                                        thuật Điện tử</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/thac-si-ky-thuat-moi-truong">Thạc sĩ
                                                        Kỹ thuật Môi
                                                        trường</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/thac-si-luat-kinh-te">Thạc sĩ Luật
                                                        kinh tế</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/thac-si-quan-tri-dich-vu-du-lich-va-lu-hanh">Thạc
                                                        sĩ Quản
                                                        trị Dịch vụ Du lịch và Lữ hành</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box_in_menu chid_2">
                                        <div className="box_col_1 box_col box_desc">
                                            <p>
                                                <span style={{fontSize: 14 + 'px'}}>Hơn 27 năm xây dựng và phát triển, Đại học
                                                    Duy Tân đã tuyển sinh được 27 khóa Đại học, Cao đẳng với trên
                                                    109.130 sinh viên. Đây là nguồn nhân lực dồi dào và có trình độ, góp
                                                    phần không nhỏ vào việc phát triển nguồn lao động của Việt Nam.<span
                                                        className='font-family'>.</span></span>
                                            </p>
                                        </div>
                                        <div className="box_col_1 box_col">
                                            <h3>Trường Khoa học Máy tính</h3>
                                            <ul>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-cong-nghe-thong-tin">Khoa Công
                                                        nghệ Thông tin</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-khoa-hoc-may-tinh">Khoa Khoa
                                                        Học Máy Tính</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-ky-thuat-mang-may-tinh-truyen-thong">Khoa
                                                        Kỹ Thuật
                                                        Mạng Máy Tính &amp; Truyền Thông</a></li>
                                            </ul>
                                        </div>
                                        <div className="box_col_1 box_col">
                                            <h3>Trường Công Nghệ</h3>
                                            <ul>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-dien-dien-tu">Khoa Điện - Điện
                                                        tử</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-co-khi">Khoa
                                                        Cơ Khí</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-moi-truong-va-khoa-hoc-tu-nhien">Khoa
                                                        Môi trường
                                                        & Khoa học Tự nhiên</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-xay-dung">Khoa Xây dựng</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-kien-truc">Khoa Kiến trúc & Mỹ
                                                        thuật Ứng
                                                        dụng</a></li>
                                            </ul>
                                        </div>
                                        <div className="box_col_1 box_col">
                                            <h3>Trường Kinh tế</h3>
                                            <ul>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-ke-toan">Khoa
                                                        Kế toán</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-quan-tri-kinh-doanh">Khoa Quản
                                                        trị Kinh doanh</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-kinh-te-tai-chinh">Khoa Kinh tế
                                                        - Tài chính</a></li>
                                            </ul>
                                        </div>
                                        <div className="box_col_1 box_col">
                                            <h3>Trường Y Dược</h3>
                                            <ul>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-y">Khoa Y</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-duoc">Khoa
                                                        Dược</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-dieu-duong">Khoa Điều dưỡng</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-rang-ham-mat">Khoa
                                                        Răng-Hàm-mặt</a></li>
                                            </ul>
                                        </div>
                                        <div className="box_col_1 box_col">
                                            <h3>Trường Ngoại ngữ - Xã hội Nhân văn</h3>
                                            <ul>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-ngoai-ngu">Khoa Tiếng Anh</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-tieng-trung">Khoa Tiếng
                                                        Trung</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-tieng-han">Khoa Tiếng Hàn</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-luat">Khoa
                                                        Luật</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-tieng-nhat">Khoa Tiếng Nhật</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-xa-hoi-nhan-van">Khoa Khoa học
                                                        Xã hội & Nhân
                                                        văn</a></li>
                                            </ul>
                                        </div>
                                        <div className="box_col_1 box_col">
                                            <h3>Trường Đào tạo Quốc tế</h3>
                                            <ul>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-cong-nghe-phan-mem-viet-my">Khoa
                                                        Công nghệ Phần mềm
                                                        Việt - Mỹ (CMU)</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-quan-ly-kinh-te-viet-my">Khoa
                                                        Quản lý - Kinh tế Việt
                                                        - Mỹ (PSU)</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-kien-truc-xay-dung-viet-my-csu">Khoa
                                                        Kiến trúc & Xây dựng Việt - Mỹ (CSU)</a></li>
                                            </ul>
                                        </div>
                                        <div className="box_col_1 box_col">
                                            <h3>Trường Du lịch</h3>
                                            <ul>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-khach-san-nha-hang-quoc-te">Khoa
                                                        Khách sạn Nhà hàng
                                                        Quốc tế</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/khoa-du-lich-lu-hanh-quoc-te">Khoa
                                                        Du lịch Lữ hành Quốc
                                                        tế</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="box_in_menu chid_3">
                                        <div className="box_col_1 box_col box_desc">
                                            <p>
                                                <span style={{fontSize: 14 + 'px'}}><span
                                                        className='font-family'>Ngày nay, có thêm
                                                        một tấm bằng đồng nghĩa với việc người lao động sẽ mở ra được
                                                        nhiều cơ hội tìm việc hơn nữa cũng như có thể thay đổi được bản
                                                        chất công việc hiện tại. Đáp ứng nhu cầu của người học, Đại học
                                                        Duy Tân thường xuyên tuyển sinh đào tạo Liên thông và Văn bằng
                                                        thứ 2 tại trường.</span></span>
                                            </p>
                                        </div>
                                        <div className="box_col_1 box_col">
                                            <h3>Chuyên ngành Đào tạo Liên thông</h3>
                                            <ul>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/dieu-duong">Điều
                                                        dưỡng</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/ngan-hang-lien-thong">Tài chính -
                                                        Ngân hàng</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/quan-tri-kinh-doanh-tong-hop-lien-thong">Quản
                                                        trị Kinh
                                                        doanh</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/duoc-si-da-khoa">Dược sĩ Đa khoa</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/ke-toan-chuyen-nganh-dao-tao-lien-thong">Kế
                                                        toán</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/ky-thuat-phan-mem">Kỹ thuật Phần
                                                        mềm</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/quan-tri-dich-vu-du-lich-lu-hanh">Quản
                                                        trị Dịch vụ Du
                                                        lịch & Lữ hành</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/ky-thuat-xay-dung-chuyen-nganh-dao-tao-lien-thong">Kỹ
                                                        thuật Xây dựng</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/cong-nghe-ky-thuat-cong-trinh-xay-dung">Công
                                                        nghệ Kỹ
                                                        thuật Công trình Xây dựng</a></li>
                                            </ul>
                                        </div>
                                        <div className="box_col_1 box_col">
                                            <h3>Chuyên ngành Đào tạo Bằng 2</h3>
                                            <ul>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/quan-tri-kinh-doanh-bang-2">Quản trị
                                                        Kinh doanh</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/tai-chinh-ngan-hang">Tài chính -
                                                        Ngân hàng</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/ke-toan-bang-2">Kế
                                                        toán</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="box_in_menu chid_4">
                                        <div className="box_col_1 box_col box_desc">
                                            <p>
                                                <span style={{fontSize: 14 + 'px'}}><span
                                                        className='font-family'>Chương trình Cử
                                                        nhân Trực tuyến tại Đại học Duy Tân triển khai đào tạo với hệ
                                                        thống học liệu phong phú và đa dạng, bao gồm: tư liệu in (sách
                                                        giáo trình), tư liệu âm thanh (bài giảng thu âm MP3/MP4), và tư
                                                        liệu hình ảnh (bài giảng ghi hình). Mô hình lớp học ảo qua mạng
                                                        tạo điều kiện cho giảng viên và học viên dễ dàng tương tác với
                                                        nhau ở mọi thời điểm và địa điểm.</span></span>
                                            </p>
                                        </div>
                                        <div className="box_col_1 box_col">
                                            <figure>
                                                <a href="https://duytan.edu.vn/euniversity">
                                                  <img src="img/img_nav/euni-2.jpg" alt="" />

                                                  </a>
                                            </figure>
                                            <h3>Ngành nghề đào tạo</h3>
                                            <ul>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/nganh-cong-nghe-thong-tin">Công nghệ
                                                        Thông tin</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/tai-chinh-ngan-hang-euni">Tài chính
                                                        - Ngân hàng</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/nganh-ky-su-xay-dung-dan-dung-va-cong-nghiep-euniversity">Kỹ
                                                        thuật Xây dựng</a></li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/nganh-quan-tri-kinh-doanh">Quản trị
                                                        Kinh doanh</a></li>
                                            </ul>
                                        </div>
                                        <div className="box_col_1 box_col">
                                            <figure>
                                                <a href="https://duytan.edu.vn/euniversity">
                                                  <img src="img/img_nav/euni-2.jpg" alt="" />
                                                  </a>
                                            </figure>
                                            <h3>&nbsp;</h3>
                                            <ul>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/nganh-luat-kinh-te">Luật Kinh tế</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/nganh-ngon-ngu-anh">Ngôn ngữ Anh</a>
                                                </li>
                                                <li><i className="fa fa-angle-double-right"></i><a
                                                        href="https://duytan.edu.vn/nganh-ke-toan">Kế
                                                        toán</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="menu">
                                <a className="menu " href="https://duytan.edu.vn/nghiencuu">Nghiên cứu</a>
                            </li>
                            <li className="menu">
                                <a className="menu " href="https://duytan.edu.vn/hop-tac">Hợp tác</a>
                            </li>
                            <li className="menu">
                                <a className="menu " href="https://duytan.edu.vn/duhoc">Du Học</a>
                            </li>
                            <li className="menu">
                                <a className="menu " href="https://duytan.edu.vn/hoat-dong">Hoạt động</a>
                            </li>
                            <li className="menu">
                                <a className="menu " href="https://duytan.edu.vn/tin-tuc">Tin tức</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopMenu