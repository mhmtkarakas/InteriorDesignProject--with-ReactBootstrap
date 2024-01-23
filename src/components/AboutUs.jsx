import React from "react";
import "./AboutUs.css";
import mainimg from "../utils/img/mainimg.jpg";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="aboutus container">
      <h1 className="heading">Hakkımızda</h1>
      <div className="row align-items-center">
        <div className="  col-lg-6 image">
          <img className="img-fluid" src={mainimg} width="90%" alt="" />
        </div>
        <div className=" col-lg-6 info">
          <h2>Şehrimizin en iyi iç mimarlık şirketi</h2>
          <p>
            Firmamız, iç mimarlık alanında uzmanlaşmış ve yaratıcı tasarım
            anlayışını benimseyen bir ekip tarafından kurulmuştur. Her projemizi
            özenle ele alıyor ve müşterilerimizin beklentilerini aşan estetik ve
            fonksiyonel iç mekanlar yaratmaya odaklanıyoruz. Mimarlarımız,
            modern ve klasik tasarım unsurlarını ustalıkla birleştirerek, her
            proje için özgün ve çağdaş mekanlar ortaya çıkarıyor.
          </p>
          <p>
            Müşteri memnuniyetini en üst düzeye çıkarmak için işbirliği ve
            iletişim ön planda tutulur. Her bir projemizde, müşterilerimizin
            ihtiyaçlarına duyarlı çözümler üretmek ve onların hayallerini
            gerçeğe dönüştürmek için çaba gösteriyoruz. Işıltılı tasarımlarımız
            ve işlevsellik odaklı yaklaşımımızla iç mekanlara yeni bir soluk
            getiriyoruz.
          </p>
          <div className="icons">
            <Link><i className="fab fa-facebook-f"></i></Link>
            <Link><i className="fab fa-twitter"></i></Link>
            <Link><i className="fab fa-instagram"></i></Link>
            <Link><i className="fab fa-pinterest"></i></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
