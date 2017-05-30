import React from 'react';
import NavBar from './nav_bar';
import CocktailsIndex from './cocktails_index';

export default (props) => {
    return (
      <div>
        <NavBar title="Boozr" url="/" />
        <div className='container'>
           Hello From the App Component
           <div className='row'>
           <div className='col-md-4'>
             <CocktailsIndex />
           </div>
           <div className='col-md-8'>
             Hello From the Column 2
           </div>
         </div>
        </div>

      </div>
    )
};
