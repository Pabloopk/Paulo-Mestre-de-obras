import React from 'react';

import { motion } from 'framer-motion';


const Copyright = () => {
  return(
    <div className='py-6 border-t border-[#2b2b2b] '>
      <div className='container flex flex-col justify-center items-center mx-auto'>
        <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type:'tween',
          duration: 0.8,
          delay: 0.2
        }}
        viewport={{ once: false, amount: 0}}
        className='tracking-[0.02em] text-base'>
          &copy; {new Date().getFullYear()} <span className='font-semibold'>Mestre de Obras.</span> || Todos os direitos reservados. || Desenvolvido por <span className='font-semibold hover:text-blue-900'><a href='https://api.whatsapp.com/send/?phone=5561992295015&text=Quero+iniciar+um+projeto%21&type=phone_number&app_absent=0' target="_blank" rel="noreferrer">Pablo Nunes.</a></span>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Copyright;
