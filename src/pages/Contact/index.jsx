import "../Contact/index.css"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Contact() {
    return (
        <div className="container">
            <div className="ContactInfo ">
                <h3>КОНТАКТЫ</h3>
                <h1>ШОУ РУМ TRUE В ТАШКЕНТЕ</h1>
                <h2>ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В  ТАШКЕНТ СИТИ, BOULEVARD</h2>
            </div>
            <div className="ContactSwipper">
                <h1>Place for swiper</h1>
            </div>
            <div className="ContactAdressMap">
                <div className="map">
                    <iframe src="https://maps.google.com/maps?q=%D0%90%D0%B4%D1%80%D0%B5%D1%81:%20%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%20%D0%A1%D0%B8%D1%82%D0%B8,%20%D0%91%D1%83%D0%BB%D0%B5%D0%B2%D0%B0%D1%80%D0%B4,%20%D1%83%D0%BB.%20%D0%A4%D1%83%D1%80%D0%BA%D0%B0%D1%82%D0%B0%202%D0%90&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" style={{ width: "700px", height: '660px' }}></iframe>
                </div>
                <div className="ContactAdress">
                    <h1>
                        Официальный Дистрибьютер в Узбекистане - ProWellness
                    </h1>
                  
                    <div className="contactDetails">
                        <p>+998 (90)-606-66-66</p>
                        <p style={{color:"#01AEE7"}}>INFO@PROWELLNESS.UZ</p>
                        <p>Адрес: Ташкент Сити, Булевард, ул. Фурката 2А</p>
                    </div>
                    <h1 style={{paddingTop:'48px'}}>ПН-СБ с 9:00-19:00
                        ВС НЕ РАБОЧИЙ</h1>
                </div>
            </div>

        </div>
    );
}

export default Contact;