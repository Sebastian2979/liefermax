import { Carousel } from 'react-bootstrap'
import Image from 'next/image'

export default function Slider() {
  return (
    <div>
        <Carousel controls={false} fade={true} interval={5000} >
            <Carousel.Item>
                <Image className='d-block w-100 rounded-3' src={'/bilder/essen/burger.jpg'} width={3000} height={500} alt='Produkt'/>
            </Carousel.Item>
            <Carousel.Item>
                <Image className='d-block w-100 rounded-3' src={'/bilder/essen/burrito.jpg'} width={3000} height={500} alt='Produkt'/>
            </Carousel.Item>
            <Carousel.Item>
                <Image className='d-block w-100 rounded-3' src={'/bilder/essen/pizza.jpg'} width={3000} height={500} alt='Produkt'/>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
