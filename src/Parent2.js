import React from 'react'
import Navbar from './Components2/Navbar'
import Navbar2 from './Components2/Navbar2'
import ProductHead from './Components2/ProductHead'
import ProductData from './Components2/ProductData'
import Filter from './Components2/Filter'
import './Components2/style.css'

function Parent2() {
  return (
    <div>
      <Navbar/>
      <Navbar2></Navbar2>
      <div className='productMainContainer'>
        <div className='productSubContainer'>
           <Filter/> 
          <div>
              <ProductHead/>
            <ProductData/>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Parent2
