import React from 'react'

const Edition = () => {
    return (
        <section name="Edition" className='relative text-white p-4 py-10 grid gap-10 sm:grid-cols-2 max-w-[1000px] mx-auto'>
            {/* Seccion izquierda */}
            <section className='grid gap-10'>
                <div>
                    <h3 className='text-sm text-gray-400'>Ppsstt..!</h3>
                    <h2 className='text-3xl font-semibold mt-2'>I also enjoy photography</h2>
                </div>

                <div className="flex flex-wrap gap-4">
  <div className="bg-gray-d border border-primary-color/30 rounded-lg overflow-hidden p-1">
    <img
      src="public/images/videosImages/PXL_20250601_075648451~2.jpg"
      alt="reel-diego"
      loading="lazy"
      className="block h-auto w-auto max-w-full"
    />
  </div>

  <div className="bg-gray-d border border-primary-color/30 rounded-lg overflow-hidden p-1">
    <img
      src="public/images/videosImages/PXL_20251014_152433987~2.jpg"
      alt="second"
      loading="lazy"
      className="block h-auto w-auto max-w-full"
    />
  </div>
</div>

            </section>

            {/* Seccion derecha */}
            <section >
             <div className="bg-gray-d border border-primary-color/30 rounded-lg overflow-hidden p-1">
    <img
      src="public/images/videosImages/PXL_20251023_160625927.jpg"
      alt="reel-diego"
      loading="lazy"
      className="block h-auto w-auto max-w-full"
    />
  </div>
  <div className="bg-gray-d border border-primary-color/30 rounded-lg overflow-hidden p-1">
    <img
      src="public/images/videosImages/DSCF4066~2.JPG"
      alt="reel-diego"
      loading="lazy"
      className="block h-auto w-auto max-w-full"
    />
  </div>

  <div className="bg-gray-d border border-primary-color/30 rounded-lg overflow-hidden p-1">
    <img
      src="public/images/videosImages/PXL_20250826_183429649~2.jpg"
      alt="reel-diego"
      loading="lazy"
      className="block h-auto w-auto max-w-full"
    />
  </div>
  <div className="bg-gray-d border border-primary-color/30 rounded-lg overflow-hidden p-1">
    <img
      src="public/images/videosImages/PXL_20251014_150240138~2.jpg"
      alt="reel-diego"
      loading="lazy"
      className="block h-auto w-auto max-w-full"
    />
  </div>
             
            </section>
        </section>
    )
}

export default Edition
