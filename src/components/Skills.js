import React, {useState, useEffect} from 'react';

import { useInView } from 'react-intersection-observer';

import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Skills = () => { 

  const {ref, inView} = useInView({

    threshold: 0.2,

  });

  //corpo todo sexandkniuiti

  const [fullBody, setFullBody] = useState(0);

  const [caligrafia, setCaligrafia] = useState(0);

  const [old, setOld] = useState(0);

  const [japa, setJapa] = useState(0);

  // rapaz ne que eu to conseguindo entender essa bagaça

  useEffect(()=> {
      if (inView) {
        setTimeout(()=> {
          if (fullBody < 100) {
            setFullBody(fullBody + 1);
          }
          if (caligrafia < 100) {
            setCaligrafia(caligrafia + 1);
          }
          if (old < 100) {
            setOld(old + 1);
          }
          if (japa < 100) {
            setJapa(japa + 1);
          }
        }, 50);

      } else{
        setFullBody(0);
        setCaligrafia(0);
        setOld(0);
        setJapa(0);
      }
  }, [inView, fullBody, caligrafia, old, japa]);


  const styles ={
    path: {
      stroke: '#111111',
    },
    trail:{
      stroke: '#eeeeee',
    },
    text:{
      fill:'#111111',
      fontSize: '24px',
    },
  };
  return (
  <section ref={ref} className='section mt-[10px] lg:mt-0 '>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row justify-between items-center gap-y-12'>
        {/**eh o grongos */}
       <motion.div 
          variants={fadeIn('left')} initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.6}}
       className='w-[150px] lg:w-[275px] flex flex-col  items-center gap-y-6'>
        <CircularProgressbar 
        strokeWidth={1} 
        value={fullBody} 
        styles={styles}
        text={`${fullBody}%`}
         />

         <div className='uppercase font-light tracking-[1.2px] text-center'>
          Acabametos
         </div>
       </motion.div>
       <motion.div 
          variants={fadeIn('left')} initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.6}}
       className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
        <CircularProgressbar   
        strokeWidth={1} 
        value={caligrafia} 
        styles={styles}
        text={`${caligrafia}%`}
         />

         <div className='uppercase font-light tracking-[1.2px] text-center'>
          Pinturas
         </div>
       </motion.div>
       <motion.div
          variants={fadeIn('left')} initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.6}}
       className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
        <CircularProgressbar 
        strokeWidth={1} 
        value={old} 
        styles={styles}
        text={`${old}%`}
         />

         <div className='uppercase font-light tracking-[1.2px] text-center'>
          Instalações de Iluminárias
         </div>
       </motion.div>
       
       <motion.div
          variants={fadeIn('left')} initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.6}}
        className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
        <CircularProgressbar 
        strokeWidth={1} 
        value={japa} 
        styles={styles}
        text={`${japa}%`}
         />

         <div className='uppercase font-light tracking-[1.2px] text-center'>
          Azulejos
         </div>
       </motion.div>
      </div>
    </div>
  </section>

    );
};

export default Skills;
