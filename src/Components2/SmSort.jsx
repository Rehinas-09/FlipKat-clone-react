import React from 'react'

function SmSort({setSortElement,sortElement,show,onClose}) {
    const options=["Relevence","Popularity","Price--Low to High","Price--High to Low","Newest First","Discount"]
  return (
    <div className={`smSortContainer ${show?"show":""}`}>
        <div className='smSortHeading'>
            Sort By
        </div>
     <div className='smContainerLine'></div>
     <div className='smCheckboxes'>
       { 
        options.map((value)=>(
            <>
            <div className='smSingleCheckbox'>
                <div className='smCheckName'>
                    <span className='smValue'>{value}</span> 
                </div>
                <div className='radiosm'>
                    <input type='radio' value={value} checked={sortElement===value} onChange={()=>setSortElement(value)}  onClick={onClose}/>
                </div>
            </div>
            </>
        ))
       }
     </div>
    </div>
  )
}

export default SmSort
