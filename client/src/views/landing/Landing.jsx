import './landing.css'

import AOS from 'aos';
import 'aos/dist/aos.css';


const Landing = () => {

    AOS.init({
        duration: 1000,
    });


    return (
        <div className='landing-container'>
            <div className='landing-0'><img
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="100"
                 src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1678579215/vt0vtn2hi1tsz208yvgu.jpg" alt="" />
                  <div className='text-land-0'><h2>Queres ahorrar hasta el último peso?</h2><br />
                  <p>te vamos a contar como es posible con bolsillo feliz</p> 
                  <a href="#landing-1"><button>Siguiente</button>  </a>   </div>  </div>
            <div id='landing-1'>
               <div className='foto-landing-1' >
               <div className='text-land-1'><h2>Elegí los productos que más te gusten</h2><br />
                  <p>o productos en particular, para compararlos entre sí</p> <a href="#landing-3"><button>Siguiente</button></a></div> <img  
               data-aos="fade-left"
                data-aos-duration="10"
                data-aos-offset="500"
                 src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1678571078/ykjrxtniiuds0hxja6kp.png" alt="" /></div>
            </div> 
            <div id='landing-3'>
               <div className='foto-landing-3' >
               <div className='text-land-3'><h2>Nosotros te decimos donde <br /> te conviene comprarlo</h2><br />
                  <p>pudiendo elegir comprarlo en uno o más <br /> supermercados diferentes</p> <a href="#landing-2"><button>Siguiente</button></a></div> <img  
               data-aos="fade-up"
                data-aos-duration="10"
                data-aos-offset="500"
                 src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1678577632/zwkdyfffppgjpiddyycu.jpg" alt="" /></div>
            </div> 
            <div id='landing-2'>
            <div className='foto-landing-2' >
            <img  
               data-aos="fade-right"
                data-aos-duration="10"
                data-aos-offset="500"
                 src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1678574976/mxiwk9wpougp8gq3d2vs.png" alt="" />
                 <div className='text-land-2'><h2>Ya podés empezar a Comparar</h2><br />
                   <a href="/home"><button>Estoy listo</button></a></div> </div>
            </div>
        </div>
    )


}

export default Landing