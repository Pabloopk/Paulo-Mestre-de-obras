import React from 'react';

import {testimonialData} from '../data';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';


import { Autoplay } from 'swiper';



const Testimonial = () => {
  return(
     <motion.section 
          variants={fadeIn('up')} 
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
     className='py-[40px] lg:pb-[160px] lg:pt-0'>
      <div className='container mx=auto'> 

    
          <Swiper 
          spaceBetween={50} // Distância entre os slides
              slidesPerView={1} // Número de slides visíveis por vez
              autoplay={{
                delay: 5000, // Tempo de atraso entre as trocas (em milissegundos)
                disableOnInteraction: false, // Não desabilitar autoplay quando o usuário interagir
              }}
              modules={[Autoplay]} // Habilitar o módulo de autoplay
              loop={true} // Definir o loop (voltar ao início após o último slide)
          >
              {testimonialData.map((slide, index)=> {

                const { quoteImg, message, name, occupation}  = slide;
                return <SwiperSlide key={index}>
                    <div className='max-w-[1200px] mx-auto flex flex-col lg:mt-14 lg:flex lg:items-center gap-x-[38px]'>
                      
                      <div className='w-[154px] h-[109px] mb-5 '>
                        <img src={quoteImg} alt='' />
                      </div>
                      <div className='flex-1 lg:mt-[54px]'>

                        <div className='text-2xl lg:text-[26px] leading-normal mb-6 lg:mb-12'>
                          {message}
                          </div>
                            <div className='flex items-center text-xl lg:text-2xl font-primary'>
                              <div className='font-semibold'>{name}</div>
                              <span className='mx-4'>|</span>
                              <div className='font-light'>{occupation}</div>
                        </div>
                        
                      </div>

                    </div>
                  </SwiperSlide>
              })}
          </Swiper>
      </div>
      </motion.section>
     );
};

export default Testimonial;
