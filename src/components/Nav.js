import React from 'react';

import { navData } from '../data';


const Nav = () => {
  const {items} = navData;

  return <nav>
    <ul className='flex gap-x-[58px]'>
      {items.map((item, index)=>{
        return (
        <li key={index}>
          <a className='link hover:border-b-4
           hover:border-black-400
            transition-all duration-300' 
            href={item.href}>
            {item.name}
          </a>
        </li>

        );
      })}
    </ul>
  </nav>;
};

export default Nav;
