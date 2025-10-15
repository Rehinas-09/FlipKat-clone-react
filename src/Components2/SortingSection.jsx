import React from 'react'

function SortingSection({ selectSort, onSelectSort }) {
  const options = ["Relevance", "Popularity", "PriceLowHigh", "PriceHighLow", "Newest", "Discount"]

  return (
    <div className='tvSortingsection'>
      <div className='tvSortingSub'>
        <div className='tvSortHead'>Sort</div>
        <div className="sortingContent">
          <div className='sortingElements'>
            {options.map(opt => (
              <div className='sortingElementp' key={opt} onClick={() => onSelectSort(opt)}>
                <div className='sortinge'>{opt}</div>
                <div className='eleradio'>
                  <input
                    type='radio' 
                    value={opt}
                    checked={selectSort === opt}
                    onChange={() => onSelectSort(opt)}
                  />
                </div> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortingSection

