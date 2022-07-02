import Link from 'next/link'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Navbar = () => {

    return (
        <>
            <div className='w-screen'>
                <header className="body-font backdrop-blur-md">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-blue p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">Tausur Rahaman</span>
                        </a>
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <Link href='/'><a className="mr-8 hover:text-blue-500 cursor-pointer text-xl" >Home</a></Link>
                            <Link href='/blogs'><a className="mr-8 hover:text-blue-500 cursor-pointer text-xl" >Blogs</a></Link>
                            <Link href='/community'><a className="mr-8 hover:text-blue-500 cursor-pointer text-xl" >Community</a></Link>
                            <Link href='/contact'><a className="mr-8 hover:text-blue-500 cursor-pointer text-xl">Contact</a></Link>
                        </nav>
                            <input type="text" className="bg-transparent outline-none border-gray-600 font-mono text-lg"/>
                            <BiSearch className='text-xl cursor-pointer' />
                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar