import React from 'react';

import { contactData } from '../data';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';




const Contact = () => {

  const {title, info} = contactData;

  return (
    <section id='Contato'
    className=' section'>
      <div className='container mx-auto'>

        <div className=' flex flex-col xl:flex-row gap-y-16 '>

          <div className='flex-1'>

            <motion.h2
                      variants={fadeIn('left')} 
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.2}}
             className='h2 max-w-[490px] text-[30px] text-center  lg:mb-15'>{title}</motion.h2>
            <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>

              {info.map((item, index)=> {
                const { title, subtitle, address, phone, link } = item;
                return (
                <div key={index}>

                   <motion.div
                      variants={fadeIn('left')} 
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.2}} className='font-primary uppercase font-medium text-xl mb-3'>{title} </motion.div>

                    <motion.div
                      variants={fadeIn('left')} 
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.2}} className='mb-6 leading-[187%] tracking-[0.02em]'>
                      {subtitle}
                     </motion.div>
                      {/**aqui vai ficar todos os contatos */}
                      <motion.div
                      variants={fadeIn('left')} 
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.2}} className='flex flex-col gap-y-3 mb-8'>

                        <motion.div
                          variants={fadeIn('left')} 
                          initial='hidden'
                          whileInView={'show'}
                          viewport={{once: false, amount: 0.2}}
                        className='flex items-center gap-[10px]'>

                          <motion.div
                          variants={fadeIn('left')} 
                          initial='hidden'
                          whileInView={'show'}
                          viewport={{once: false, amount: 0.2}}>{address.icon}</motion.div>
                          <motion.div
                            variants={fadeIn('left')} 
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.2}}
                            className='font-medium'>{address.name}</motion.div>

                        </motion.div>

                        <motion.div
                          variants={fadeIn('left')} 
                          initial='hidden'
                          whileInView={'show'}
                          viewport={{once: false, amount: 0.2}}
                       className='flex items-center gap-[10px]'>

                          <motion.div
                              variants={fadeIn('left')} 
                              initial='hidden'
                              whileInView={'show'}
                              viewport={{once: false, amount: 0.2}}>{phone.icon}</motion.div>
                          <motion.div
                              variants={fadeIn('left')} 
                              initial='hidden'
                              whileInView={'show'}
                              viewport={{once: false, amount: 0.2}} className='font-medium'>{phone.number}</motion.div>

                        </motion.div>

                        <motion.div
                          variants={fadeIn('left')} 
                          initial='hidden'
                          whileInView={'show'}
                          viewport={{once: false, amount: 0.2}} 
                        className='flex items-center gap-[10px]'>
                          
                          

                        </motion.div>
                      </motion.div>
                        <a  className='font-medium border-b border-dark pb-[5px]' href='https://api.whatsapp.com/send/?phone=5561992721969&text=Quero+iniciar+um+projeto%21&type=phone_number&app_absent=0' target="_blank" without rel="noreferrer">{link}</a>
                     
                  </div>
                  );
              })}
            </div>
          </div>
        
          {/*<motion.div
                      variants={fadeIn('down')} 
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.2}} 
           className='flex-1 xl:pl-[40px] justify-center items-center'>

            <form className='flex flex-col gap-y-10 w-full'>

              <input className='border-b border-dark placeholder:text-[#555] 
              italic tracking-[0.06em] outline-none pb-4' 
              placeholder={form.name} type='text'
              />

              <input className='border-b border-dark placeholder:text-[#555] 
              italic tracking-[0.06em] outline-none pb-4' 
              placeholder={form.email} type='text'/>

              <input className='border-b border-dark placeholder:text-[#555] 
              italic tracking-[0.06em] outline-none pb-4' 
              placeholder={form.message} type='text'
              />
              <button className='btn btn-sm btn-dark self-start rounded-md'>
                {form.btnText}
              </button>
            </form>
          </motion.div>*/}
          
        </div>
      </div>
    </section>
    );
};

export default Contact;
