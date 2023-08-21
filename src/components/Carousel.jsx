import React from 'react'
import { Carousel } from 'react-carousel-minimal';

function Carousels() {
    const data = [
        {
          image: "/images/copy.png",
          caption: "Branding, Digitalmarketing"
        },
        {
          image: "/images/seo.png",
          caption: "CBD2heal, Digital, SEO"
        },
        {
          image: "/images/phoenix.png",
          caption: "GMB, PPC, SMM, Website"
        },
        {
          image: "/images/modern.png",
          caption: "Hosting, Web Design, Website"
        },
        // {
        //   image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
        //   caption: "Scotland"
        // },
        {
          image: "/images/magneto.png",
          caption: "GMB, PPC, SMM, Website"
        },
        {
          image: "/images/onlinebanner.png",
          caption: "Branding, Digitalmarketing"
        },
        {
          image: "/images/increasesales.png",
          caption: "Digital, Marketing, Organic"
        },
        {
          image: "/images/blogd.png",
          caption: "Sales, VAUG, Website"
        }
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '10px',
        fontWeight: 'bold',
      }
      return (
        <div className="App">
          <div style={{ textAlign: "center" }}>
            <h2 className='hover:text-purple-700 transition duration-300 transform hover:scale-110'>Heartbeat Of Our Success</h2>
            <p className='transition duration-300 transform hover:scale-110 hover:text-blue-700'>Choose us and join our community of happy clients - let us help you achieve your digital goals.</p>
            <div style={{
              padding: "0 20px"
            }} className='transition duration-300 transform hover:scale-110'>
              <Carousel
                data={data}
                time={3000}
                width="850px"
                height="500px"
                captionStyle={captionStyle}
                radius="20px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="center"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  maxHeight: "500px",
                  margin: "40px auto",
                }}
              />
            </div>
          </div>
        </div>
      );
    }
    

export default Carousels
