import React from 'react'
import './StudentBox.css'

const StudentBox = () => {
    return (
        <section className="main_module2">
            <div className="container">
                <div className="row">
                    <div className="box_sum_box_second">
                        <div className="box_col_01 col-md-3 col-sm-6">
                            <a href="http://luyenthi.duytan.edu.vn" target="_blank">
                                <img src="https://cdn.duytan.edu.vn/upload/images/1-11-2017-9-23-8-29.png"
                                    alt="Luyện thi Đại học" />
                            </a>
                        </div>
                        <div className="box_col_01 col-md-3 col-sm-6">
                            <a href="/tuyen-sinh/Tracnghiemhuongnghiep/">
                                <img src="https://cdn.duytan.edu.vn/upload/images/6-12-2017-11-11-16-36.png"
                                    alt="Trắc nghiệm hướng nghiệp" />
                            </a>
                        </div>
                        <div className="box_col_01 col-md-3 col-sm-6">
                            <a href="/tuyen-sinh/xettuyenhocbatructuyen/">
                                <img src="https://cdn.duytan.edu.vn/upload/images/6-12-2017-13-29-1-93.png"
                                    alt="Xét học bạ" />
                            </a>
                        </div>
                        <div className="box_col_01 col-md-3 col-sm-6">
                            <a href="https://forum.dtu.edu.vn" target="_blank">
                                <img src="https://cdn.duytan.edu.vn/upload/images/5-12-2017-12-57-11-64.png"
                                    alt="Diễn đàn Sinh viên" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StudentBox