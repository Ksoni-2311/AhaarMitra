import React from 'react'
import VendorCard from '../components/VendorCard'

const LandingPage = () => {
  return (
    <div className='w-full flex flex-col gap-4 p-4 mt-8'>

      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-3'>

        <span className='text-4xl font-semibold'>
          Our Services
        </span>

        <div className='flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-end'>

          <div className='flex flex-col sm:flex-row gap-2'>
            <span className='text-sm'>SORT BY: DropDownMenu</span>
            <span className='text-sm'>Dietary: DropDownMenu</span>
          </div>

          {/* Buttons */}
          <div className='flex gap-4 '>
            <button className='px-3 py-1 border rounded-md text-sm hover:bg-gray-100'>
              FILTERS
            </button>
            <button className='px-3 py-1 border rounded-md text-sm hover:bg-gray-100'>
              MAP VIEW
            </button>
          </div>

        </div>
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        {/* <VendorCard />
        <VendorCard /> */}
      </div>
      <div className='flex w-full flex-col md:flex-row md:items-center md:justify-between gap-3 mt-12'>
        <div>
          <span>Why choose AhaarMitra vendors?</span>
          <div>
            <div>
              <span>1-hour cancellation</span>
              <span>Flexible planning with our market-leading quick cancellation policy.</span>
            </div>

          </div>
        </div>
        <div>
          <span>so</span>
        </div>
      </div>
    </div>
  )
}

export default LandingPage