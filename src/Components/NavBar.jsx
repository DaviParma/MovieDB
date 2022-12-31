import React, {useState} from 'react';
import { Link, useNavigate , NavLink} from "react-router-dom";
import { MenuIcon, XIcon} from '@heroicons/react/outline';






const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const handleClose = () => setNav(!nav)
 


  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!search) return

    navigate(`/searchpage?q=${search}`)
    setSearch("")
  }




  return (
    <nav class=" bg-slate-900 w-full shadow ">
      <div className='container mx-auto flex justify-between items-center'>
          
          <h1 className='flex ml-4 font-bold text-white text-3xl max-md:py-5'><Link to='/'>Movie<span className='text-amber-300'>DB</span></Link></h1>
          
          

          <ul className='flex py-4 items-center text-white font-sans font-medium text-lg max-md:hidden '>
            <li className='px-4 hover:text-amber-300'><NavLink to='/popular' className={({ isActive }) => {return isActive ? 'text-amber-300' : 'text-white'  }} smooth={true} duration={500}>Popular</NavLink></li>
            <li className='px-4 hover:text-amber-300'><NavLink to='/top_rated' className={({ isActive }) => {return isActive ? 'text-amber-300' : 'text-white'  }} smooth={true} duration={500}>Top Rated</NavLink></li>
            <li className='px-4 hover:text-amber-300'><NavLink to='/trending' className={({ isActive }) => {return isActive ? 'text-amber-300' : 'text-white'  }} smooth={true} duration={500}>Trending</NavLink></li>
          </ul>

       

              <form className=" flex  max-md:hidden" onSubmit={handleSubmit}>
                <input type="text"  onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search for any movie..." className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border  border-slate-300 rounded-md py-2 pl-1  shadow-sm focus:outline-none focus:border-amber-300 focus:ring-amber-300 focus:ring-1 sm:text-sm"/>
              </form>



                

                <div className='md:hidden mr-4 text-white' onClick={handleClick}>
                  {!nav ? <MenuIcon className='w-10' /> :  <XIcon className='w-10' /> }   
                </div>

               
                      </div>  

                  <div className='md:hidden'>
                      <div className={!nav ? 'hidden' : 'mx-auto bg-slate-900 w-full px-8 pb-1 text-center '}>
                          <ul className='mb-5 text-white font-sans font-medium text-2xl'>
                            <li className=' hover:text-amber-300 border-b border-t py-2'><NavLink onClick={handleClose} to='/popular'  className={({ isActive }) => {return isActive ? 'text-amber-300' : 'text-white'  }} smooth={true} duration={500}>Popular</NavLink></li>
                            <li className=' hover:text-amber-300 border-b py-2'><NavLink onClick={handleClose} to='/top_rated'  className={({ isActive }) => {return isActive ? 'text-amber-300' : 'text-white'  }} smooth={true} duration={500}>Top Rated</NavLink></li>
                            <li className=' hover:text-amber-300 border-b py-2'><NavLink onClick={handleClose} to='/trending'  className={({ isActive }) => {return isActive ? 'text-amber-300' : 'text-white'  }} smooth={true} duration={500}>Trending</NavLink></li>
                          </ul>
                         
                          <form  className="relative  inline-block py-2" onSubmit={handleSubmit}>
                            <input type="text"  onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search for any movie..." className="placeholder:italic placeholder:text-slate-400 block bg-white border  border-slate-300 rounded-md py-2 pl-1 shadow-sm focus:outline-none focus:border-amber-300 focus:ring-amber-300 focus:ring-1 sm:text-sm"/>
                          </form>
                  </div>
      </div>
    </nav>
   
    
  )
}

export default Navbar
