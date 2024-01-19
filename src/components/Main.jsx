import React from 'react'
import Card from 'react-bootstrap/Card';
import mainimg from "../utils/img/mainimg.avif"
import "./Main.css"

const Main = () => {
  return (
    <Card className="hero bg-dark text-dark w-100 border-0 ">
    <Card.Img className='mainimg' src={mainimg} alt="Card image" />
    <Card.ImgOverlay>
     
      <Card.Text className='text1'>
           Ic Dizayn
      </Card.Text>
      <Card.Text className='text2'>Mimari Hizmetler</Card.Text>
    </Card.ImgOverlay>
  </Card>
  )
}

export default Main
