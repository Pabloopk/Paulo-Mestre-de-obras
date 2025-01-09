import React from "react";

import { headerData, sobreData, piaData } from "../data";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Copyright from "../components/Copyright";




const Sobre = () => {
    const navigate = useNavigate()
    function buttonAbout() {
      navigate(`/`)
    }

    
    const {sobre} = sobreData;

    const {pia}   = piaData;

    const {logo} = headerData;

    return (
        
         <section  className='xl:pb[160px] mt-[10px] lg:mt-0'>

            <div className='flex justify-center items-center h-full pl-[50px] pr-[60px]'>     
                <motion.img variants={fadeIn('right')}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} onClick={buttonAbout} className='  cursor-pointer w-[300px] h-[300px]' src={logo} alt=''/>
            </div>

            
        <div className='container mx-auto '>
          <div className='flex flex-col lg:flex-row gap-x-[70px]
          items-center
          '>
            <motion.div variants={fadeIn('right')}
              initial="hidden"
              whileInView={'show'} 
             className='flex flex-col lg:flex-row flex-1'>
              
                <img className='w-[250px] h-[300px] xl:mt-[180px] mt-[20px] mb-[20px] xl:w-[550px] xl:h-[600px] rounded-md ' src={sobre} alt=''/>
            
            </motion.div>
            {/*text*/}
              <motion.div variants={fadeIn('left')}
              initial="hidden"
              whileInView={'show'} className='flex-1 h-full xl:mt-48'>
                <h2 className='h2'>
                  Sobre Mim
                </h2>
                <div className='flex flex-col items-end'>
                  <div className='max-w-[530px]'>
                    <p className='mb-6'>
                      
                      Tenho mais de 20 anos de experiência com acabamentos, o que me permitiu desenvolver um olhar atento aos detalhes e a habilidade de transformar espaços, tornando-os esteticamente agradáveis e funcionais. Desde a pintura e o revestimento de paredes até a instalação de pisos e azulejos, dedico-me a cada etapa do processo com cuidado e precisão.

                    </p>

                    <p className='mb-9'>

                      Gosto de aplicar gesso e molduras, além de montar móveis planejados que se encaixam perfeitamente nas necessidades e desejos dos meus clientes. A instalação de luminárias e itens de decoração também faz parte do meu trabalho, garantindo que cada ambiente tenha a iluminação e o estilo adequado. Além disso, a colocação de portas, rodapés e guarnições completam o acabamento, deixando tudo pronto para uso.
                    </p>

                    <p className='mb-6'>
                      Ao longo dos anos, construí um portfólio diversificado e uma rede de clientes satisfeitos. Cada projeto é uma nova oportunidade de criar algo único e especial, e essa é uma das coisas que mais gosto no meu trabalho.
                    </p>                  
                  </div>
                </div>
              </motion.div>
          </div>

          
        </div>
        <div className='container mx-auto '>
          <div className='flex flex-col lg:flex-row gap-x-[70px]
          items-center
          '>
            
            {/*text*/}
              <motion.div variants={fadeIn('left')}
              initial="hidden"
              whileInView={'show'} className='flex-1 h-full xl:mt-48'>
                <h2 className='h2'>
                  Serviços
                </h2>
                <div className='flex flex-col items-end'>
                  <div className='max-w-[530px]'>
                    <p className='mb-6'>
                      
                      Os acabamentos em um apartamento são essenciais para determinar a estética, conforto e funcionalidade do espaço. Eles abrangem uma variedade de elementos que, quando escolhidos e instalados corretamente, podem transformar completamente o ambiente
                    </p>

                    <p className='mb-9'>
                   Escolher os acabamentos certos para um apartamento depende do estilo pessoal, orçamento e funcionalidade desejada para cada ambiente. Consultar um profissional de design de interiores pode ser uma boa ideia para garantir que todas as escolhas estejam alinhadas e resultem em um espaço harmonioso e bem-acabado.
                    </p>

                    <p className='mb-6'>
                     Os serviços em acabamentos são etapas fundamentais na construção e reforma de um apartamento, garantindo que todos os detalhes finais sejam bem executados para proporcionar um ambiente esteticamente agradável e funcional.


                      </p>                  
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn('right')}
              initial="hidden"
              whileInView={'show'} 
             className='flex flex-col lg:flex-row flex-1'>
              
                <img className='w-[250px] h-[300px] xl:mt-[180px] mt-[20px] mb-[20px] xl:w-[550px] xl:h-[600px] rounded-md ' src={pia} alt=''/>
            
            </motion.div>
          </div>

          
                    <button onClick={buttonAbout}  className='mb-[40px] lg:btn-lg rounded-md btn-outline mx-auto lg:mx-0 border-x-4 border-dark btn btn-lg btn-link'>
                      Voltar
                    </button>
        </div>
        <Copyright /> 
    </section>
    );
};

export default Sobre;