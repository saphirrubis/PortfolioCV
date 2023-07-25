import React, {useRef, useEffect} from "react";
import CV from '../../assets/CV/CV.pdf';
import logo from '../../assets/img/logo.png';

const Header = () => {
    const headerRef = useRef(null);
    const menuRef =useRef(null);
    const stickyHeaderFunc =()=>{
         // fonctionnement barre de nav
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80|| document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header')
            }else{
                headerRef.current.classList.remove('sticky__header')
            };
        });
    };
   
    useEffect(()=>{
        stickyHeaderFunc()
        return window.removeEventListener('scroll', stickyHeaderFunc)
    },[]);
    const handleClick = e =>{
        e.preventDefault()
        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            top: location- 80,
            left: 0,
        });
    };
    // menu burger
    const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu');
    
    return (
        <header ref={headerRef} className="w-full h-20 leading-[80px] bg-textDark dark:bg-textLight  flex items-center">
        <div className="container">
            <article className="flex items-center justify-between">
                {/* ==============logo============== */}
                <article className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full flex items-center justify-center tab:w-12 tel:h-12">
                    <img src={logo} alt="logo" /></span>
                    <div className="leading-5">
                        <h2 className="text-xs text-textLight dark:text-textDark font-[700] tel:text-xl">Tatiana
                        </h2>
                        <p className=" text-textLight dark:text-textDark text-xs font-[500] tel:text-base">Site CV</p>
                    </div>
                    </article>
                {/*  ==============fin logo============== */}
               {/*  ==============menu============== */}
               <nav className="menu dark:bg-textLight " ref={menuRef} onClick={toggleMenu}>
                    <ul className="flex items-center gap-10">
                        <li><a onClick={handleClick} className="text-textLight dark:text-textDark font-[600]" href="#about">A propos</a></li>
                        <li><a onClick={handleClick} className="text-textLight dark:text-textDark font-[600]" href="#services">Expériences</a></li>
                        <li><a onClick={handleClick} className="text-textLight dark:text-textDark font-[600]" href="#portfolio">Portfolio</a></li>
                        <li><a onClick={handleClick} className="text-textLight dark:text-textDark font-[600]" href="#contact">Contact</a></li>
                    </ul>
               </nav>
               {/*  ==============menu fin============== */}
               {/*  ==============menu droit ============== */}
               <article className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-xs text-textLight dark:text-textDark font-[600] border border-solid 
                    border-textLight dark:border-textDark py-2 px-4 rounded-lg max-h-10 hover:bg-primDark dark:hover:bg-primLight
                     hover:text-primLight dark:hover:text-primDark  hover:font-[500] tab:text-base
                    ease-in duration-300"> 
                    <a href={CV} target="_blank" rel="noopener noreferrer" >
                    <i class="ri-send-plane-line"></i> Mon CV</a> 
                    </button>
                    <span onClick={toggleMenu} className="text-2xl text-textLight dark:text-textDark tab:hidden cursor-pointer">
                        <i class="ri-menu-line"></i></span>
               </article>
               {/*  ==============menu droit fin============== */}
            </article>
        </div>
    </header>
    )

}

export default Header;