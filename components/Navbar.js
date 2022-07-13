import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Navbar = () => {

    const [name, setName] = useState('menu')

    const style = {
        mobileNav : `md:mx-32 bg-gray-900 text-gray-300 md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 opacity-100 transition-all ease-in duration-500 top-[80px] backdrop-blur-sm`,
        normal : `md:mx-32 md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  top-[-400px] transition-all ease-in duration-500`
    }


    return (
        <>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <nav className='p-5 backdrop-blur-lg md:flex md:items-center md:justify-between w-screen text-black'>
                <div className='flex justify-between'>
                    <span className='text-2xl flex cursor-pointer font-semibold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        Tausur Rahaman
                    </span>
                    <span className='text-3xl cursor-pointer md:hidden block mx-2' onClick={()=>{setName(name == 'menu' ? 'close' : 'menu')}}>
                        <ion-icon name={name}></ion-icon>
                    </span>
                </div>
                <ul className={name == 'close' ? `${style.mobileNav}` : `${style.normal}`}>
                    <li className='text-xl hover:text-cyan-500 duration-500 mx-4 my-6 md:my-0 md:mx-8'>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className='text-xl hover:text-cyan-500 duration-500 mx-4 my-6 md:my-0 md:mx-8'>
                        <Link href={'/blogs'}>Blogs</Link>
                    </li>
                    <li className='text-xl hover:text-cyan-500 duration-500 mx-4 my-6 md:my-0 md:mx-8'>
                        <Link href={'/community'}>Community</Link>
                    </li>
                    <li className='text-xl hover:text-cyan-500 duration-500 mx-4 my-6 md:my-0 md:mx-8'>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar