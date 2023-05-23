import './App.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  var settings = {
   
    infinite: true,
    dots: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "ease",
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (   
    <div className='crousal'>
      <h1 style={{textAlign:"center", marginBottom:"15px"}}>SLICK SLIDER CARD</h1>
      <Slider  {...settings}>
        {products.map((item ) => {
         return <div class="card 1">
          <div class="card_image"> <img src={item.image} alt='pic' /> </div>
          <div class="card_title title-white">
            <p>Card Title {item.id}</p>
          </div>
        </div>
        })}
        
        {/* <div class="card 1">
          <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt='pic' /> </div>
          <div class="card_title title-white">
            <p className=''>Card Title</p>
          </div>
        </div>
        <div class="card 1">
          <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt='pic' /> </div>
          <div class="card_title title-white">
            <p>Card Title 2</p>
          </div>
        </div> */}

      </Slider>
      
    </div >

  )

}

export default App;


const products = [
  {
    id: 1,
    image: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
  {
    id: 2,
    image: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
  {
    id: 3,
    image: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
  {
    id: 4,
    image: "https://i.redd.it/b3esnz5ra34y.jpg",
  },

  {
    id: 5,
    image: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
  {
    id: 6,
    image: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
];