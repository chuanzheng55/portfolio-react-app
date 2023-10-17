import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-auto mx-auto bg-[#031530] flex justify-center items-center p-3'>
        <form method='POST' action="https://getform.io/f/98696440-5526-487d-bd07-bcee1e7500d4" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#a8136f] text-gray-300'>Contact ME</p>
                <p className='text-gray-300 py-4'></p>
            </div>
            <input className='bg-[#ccd6f6] p-3' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="2" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-[#a8136f] px-4 py-3 my-3 mx-auto flex items-center'>Sumbit</button>
        </form>
    </div>
  )
}

export default Contact