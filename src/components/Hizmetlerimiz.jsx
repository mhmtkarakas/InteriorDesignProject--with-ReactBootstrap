import React from "react";
import "./Hizmetlerimiz.css";

const Hizmetlerimiz = () => {
  return (
    <div className="hizmetler">
      <h1 className="heading">Hizmetlerimiz</h1>
      <div className="box-container mx-auto">
        <div className="box">
          <div className="fas fa-palette"></div>
          <p>
            Düşlediğiniz mekanları renklendiriyor, estetik ve fonksiyonu bir
            araya getirerek yaşam alanlarınıza özgü iç mimari dokunuşlar
            sunuyoruz.
          </p>
        </div>
        <div className="box">
          <div className="fas fa-tools"></div>
          <p>
            Detaylı planlama ve uzmanlığımızla, her proje için özel tasarım ve
            uygulama çözümleri sunuyoruz. Mekanlarınıza değer katan teknik bilgi
            ve becerilerimizle hizmetinizdeyiz.
          </p>
        </div>
        <div className="box">
          <div className="fas fa-house-user"></div>
          <p>
            Mimari harikaların anahtarı: Evinizin karakterini yansıtan özgün
            tasarımlarımızla, hayalinizdeki evi gerçeğe dönüştürüyoruz.
          </p>
        </div>
        <div className="box">
          <div className="fas fa-couch"></div>
          <p>
            Rahatlık ve tarz arasında mükemmel bir denge. Yaşam alanlarınıza
            özel tasarımlarla konforu evinize getiriyoruz
          </p>
        </div>
        <div className="box">
          <div className="fas fa-bed"></div>
          <p>
            Dinlence ve şıklık arasında mükemmel bir denge. Yatak odası
            tasarımlarıyla konforu yaşam alanlarınıza taşıyoruz.
          </p>
        </div>
        <div className="box">
          <div className="fas fa-bath"></div>
          <p>
            Banyo deneyiminizi özel kılan detaylarla tanışın. Şık ve fonksiyonel
            tasarımlarımızla banyonuzu lüks bir mekana dönüştürün.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hizmetlerimiz;
