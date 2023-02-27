import React from 'react'
import './MarketingBox.css'

const MarketingBox = () => {
    return (
        <section className='main_module4'>
            <div className='container'>
                <div className='marketing-box-container'>
                    <div className='marketing-left'>
                        <div className='col-md-8 col-sm-8 p-0 col-psu'>

                            <img src='https://cdn.duytan.edu.vn/upload/images/6-12-2017-7-46-34-98.jpg' style={{ width: '100%' }} />


                        </div>
                        <div className='col-md-4 col-sm-4 col-euni'>
                            <div style={{ height: '189px' }}>
                                <img src='https://cdn.duytan.edu.vn/upload/images/11-1-2019-10-32-11-58.jpg'  />
                            </div>
                        </div>
                    </div>
                    <div className='marketing-right'>
                        <figure >
                            <img src='https://cdn.duytan.edu.vn/upload/images/9-12-2022-13-40-16-16.jpg' />
                        </figure>
                        <figure >

                            <img src='https://cdn.duytan.edu.vn/upload/images/9-12-2022-13-40-50-89.jpg' style={{height: '100%'}}/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarketingBox