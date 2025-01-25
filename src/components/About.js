import React from 'react';



import { aboutData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useNavigate } from 'react-router-dom';
import { sobreData } from "../data";


const About = () => {
  const navigate = useNavigate()
    function buttonSobre() {
      navigate(`/sobre`)
    }
    const {sobre} = sobreData;


  const {title, subtitle1, subtitle2, btnText, btnIcon} = aboutData;

  return ( 
    <section id='sobre' className=' lg:py-16 xl:pb[160px] mt-[10px] lg:mt-0 text-black'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row gap-x-[70px]
          items-center
          '>
              
            {/*text*/}
              <motion.div variants={fadeIn('left')}
              initial="hidden"
              whileInView={'show'} className='flex-1 h-full xl:mt-48'>
                <h2 className='h2'>
                  {title}
                </h2>
                <div className='flex flex-col items-end'>
                  <div className='max-w-[530px]'>
                    <p className='mb-6'>{subtitle1}</p>
                    <p className='mb-9'>{subtitle2}</p>


                    <button onClick={buttonSobre} className='btn btn-lg btn-link'>
                      {btnText} <div className='text-xl'>{btnIcon}</div>{' '}
                    </button>
                  
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeIn('right')}
              initial="hidden"
              whileInView={'show'} 
             className='flex flex-col lg:flex-row flex-1'>
              
                <img className='w-[250px] h-[300px] xl:mt-[180px] mt-[20px] mb-[20px] xl:w-[550px] xl:h-[600px] rounded-md ' src={sobre}  alt=''/>
        
            
            </motion.div>
          </div>
        </div>
    </section>
    );
};

export default About;
