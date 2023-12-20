import React from 'react'

const Form = () => {
  return (
    <div>

        <section className='m-5 border-2 p-10 border-yellow-400 bg-yellow-100 rounded-xl'
        

        style={{
            boxShadow: 'px 4px 8px rgba(3, 4, 3, 3)', // Define the shadow properties here
          }}>
          <div className='float-right'>
          <img
            src="7119570.jpg"
            alt=""
            className='max-w-400px max-h-400px mr-16'
            style={{ width: '1000px', height:'800px'  }}
          />
          </div>
            <div className='ml-20 mb-10'>
        <button type="button" className='p-3 border-2 m-2 border-black text-white bg-gradient-to-r from-blue-400 to-blue-800 rounded-xl'>MetaMask</button>
        <button type="button" className='p-3 border-2 m-2 border-black text-white bg-gradient-to-r from-blue-400 to-blue-800 rounded-xl'>Contract</button>
        </div> 
        <div>
          <p className='text-xl'>Title</p>  <input type="text" placeholder='Enter Title' className='border-2 rounded p-2 border-black w-96 h-12 mb-5' />
          </div>
          <div>
          <p className='text-xl'>Content</p>  <input type="text"  placeholder='Enter Content' className='border-2 rounded p-2 border-black w-96 h-12' />
          </div>
          <div>
            <button className='p-2 border-black border-2 m-3 rounded-xl'>Choose File</button> No file Chosen
          </div>
          <button type="button"  className='p-3 border-2 m-2 border-black text-white bg-gradient-to-r from-blue-400 to-blue-800 rounded-xl'>Create Record</button>

          <p className='text-2xl text-black mt-10 m-4'>Get legal Record</p>
          <div>
          <p className='text-xl'>Record ID :</p>  <input type="text" placeholder='Enter Record ID' className='border-2 rounded p-2 border-black w-96 h-12' />
          </div>
          <button type="button" className='p-3 border-2 m-2 border-black text-white bg-gradient-to-r from-blue-400 to-blue-800 rounded-xl'>Get Record</button>
          <div>
          <p className='text-2xl mt-10 m-4'>Show all Records</p>
          </div>
          <button type="button" className='p-3 border-2 m-2 border-black text-white bg-gradient-to-r from-blue-400 to-blue-800 rounded-xl'>Show all Records</button>

        </section>
    </div>
  )
}

export default Form