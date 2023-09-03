import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import MyNavbar from '../components/MyNavbar';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';



export default function Home() {
  return (
    <div className='m-0 p-0'>
      <Carousel className=''>
        <Carousel.Item>
          <img src="https://images.pexels.com/photos/65437/pexels-photo-65437.jpeg?auto=compress&cs=tinysrgb&w=600" width={'100%'} alt="" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&w=600" width={'100%'} alt="" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=600" width={'100%'} alt="" />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
