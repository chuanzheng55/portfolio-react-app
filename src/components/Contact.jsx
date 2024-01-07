import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#031530] py-10 flex justify-center items-center'>
        <form method='POST' action="https://getform.io/f/98696440-5526-487d-bd07-bcee1e7500d4" className='flex flex-col max-w-[600px] mx-auto w-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact Me</p>
                <p className='text-gray-300 py-4'>Feel free to reach out for collaborations or just a friendly hello 👋</p>
            </div>
            <input className='p-3 my-2 rounded-md' type="text" placeholder='Name' name='name' style={{ background: '#ccd6f6' }} />
            <input className='p-3 my-2 rounded-md' type="email" placeholder='Email' name='email' style={{ background: '#ccd6f6' }} />
            <textarea className='p-3 my-2 rounded-md' name="message" rows="4" placeholder='Message' style={{ background: '#ccd6f6' }}></textarea>
            <button className='w-full sm:w-auto bg-pink-600 text-white font-bold py-3 px-6 my-2 rounded-md hover:bg-pink-700 transition duration-300 ease-in-out'>Submit</button>
        </form>
    </div>
  )
}

export default Contact;
