import React from "react";
import "./ServiceCard.css";
import Card from "react-bootstrap/Card";

const ServiceCards = () => {
  return (
    <div className="container cards my-3">
      <Card style={{ width: "18rem" }}>
        <Card.Body className="card-body">
          <Card.Title className="card-title text-center">Tasarım</Card.Title>

          <Card.Text className="card-text">
            Üstlendiğimiz projeleri, eşsiz bir estetikle hayata geçiriyoruz, her
            tasarımı özgün bir dokunuşla şekillendiriyoruz
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Mimari Danışmanlık</Card.Title>

          <Card.Text>
            Mimari danışmanlık, estetik vizyonu ve teknik bilgisiyle
            projelerinizi en üst düzeyde yönlendirir, hayallerinizi gerçeğe
            dönüştürürüz.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Anahtar Teslim Projeler</Card.Title>

          <Card.Text>
            Anahtar teslim projelerimizde, rüyalarınızı gerçeğe dönüştürmek için
            mükemmel detaylar ve benzersiz dokunuşlarla yaratıcılığı bir araya
            getiriyoruz.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Teknik Çizimler</Card.Title>

          <Card.Text>
            Teknik çizimlerimizde, mükemmelliğe giden yolda her detayı özenle
            işleyerek projelerinizi hayata geçiriyoruz.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCards;
