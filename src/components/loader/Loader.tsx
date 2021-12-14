import React from 'react';
import s from './Loader.module.scss'

function Loader() {
  
    return (
        <>
         <div className={s.Loader}>
           <div className={s.Loader__overlay}></div>       
        </div>
        </>
    );
  }
  
  export default Loader;
  