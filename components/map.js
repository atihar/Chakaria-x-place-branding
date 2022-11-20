import React from 'react'

function Map() {
  return (
    <div className='px-10 rounded-lg py-8 grid grid-cols-2'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207153.9523666863!2d91.94433951640997!3d21.748445197401757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ada6857eff3135%3A0xdc42b5824d20884!2sChakaria%20Upazila!5e0!3m2!1sen!2sbd!4v1668904105260!5m2!1sen!2sbd" width="750" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className='py-4'>
            <h1>Place Insights</h1>
            <div className='grid grid-cols-3 py-8'>
                <div>
                    <h4 className='text-3xl text-green-600'>503.78 sq. km</h4>
                    <h4>Total Area</h4>
                </div>
                <div>
                    <h4 className='text-3xl'>4,78,456</h4>
                    <h4>Total Population</h4>
                </div>
                <div>
                    <h4 className='text-3xl'>67%</h4>
                    <h4>Literacy Rate</h4>
                </div>
            </div>
            <hr/>
            <div className='grid grid-cols-3 py-8'>
                <div>
                    <h4 className='text-3xl'>18</h4>
                    <h4>Total Unions</h4>
                </div>
                <div>
                    <h4 className='text-3xl'>221</h4>
                    <h4>Total Village</h4>
                </div>
                <div>
                    <h4 className='text-3xl'>CHIRINGA</h4>
                    <h4>Main town</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Map