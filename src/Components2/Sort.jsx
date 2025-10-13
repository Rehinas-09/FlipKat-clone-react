import React from 'react'

function Sort() {
  return (
    <div className='tvSortingsection'>
      <div className='tvSortingSub'>
        <div className='tvSortHead'>
            Sort
        </div>
        <div className="sortingContent">
            <div className='sortingElements'>
                <div className='sortingElementp'>
                    <div className='sortinge'>
                    Relevance
                    </div>
                    <div className='eleradio'>
                       <input type='radio'/>
                    </div>
                </div>
                   <div className='sortingElementp'>
                    <div className='sortinge'>
                    Popularity
                    </div>
                    <div className='eleradio'>
                       <input type='radio'/>
                    </div>
                </div>
                <div className='sortingElementp'>
                    <div className='sortinge'>
                    Price --Low to High
                    </div>
                    <div className='eleradio'>
                       <input type='radio'/>
                    </div>
                </div>
                  <div className='sortingElementp'>
                    <div className='sortinge'>
                    Price --High to Low
                    </div>
                    <div className='eleradio'>
                       <input type='radio'/>
                    </div>
                </div>
                  <div className='sortingElementp'>
                    <div className='sortinge'>
                     Newest First
                    </div>
                    <div className='eleradio'>
                       <input type='radio'/>
                    </div>
                </div>
                 <div className='sortingElementp'>
                    <div className='sortinge'>
                        Discount
                    </div>
                    <div className='eleradio'>
                       <input type='radio'/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sort
