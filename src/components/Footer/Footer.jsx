import React from "react";
import Contact from "../UI/Contact";


const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <footer className="bg-textDark dark:bg-textLight pt-8">
{/* footer top  */}
        <div className="container">
            <article className="tel:flex items.center justify-between tab:gap-8">
                <article className="w-full tel:-1/2">
                    <h2 className="text-3xl leading-10 text-textLight dark:text-textDark font-[600] mb-2 tab:text-xl">
                        Vous voulez me contacter?
                    </h2>
                    <Contact/>
                </article>
                <article className="w-full tel:w-1/2 pt-32">
                    <p className="text-primDark dark:text-primLight leading-7 mt-4 tel:mt-0">
                    Enthousiaste et engagée envers le développement web, je suis une développeuse junior déterminée à apporter 
                    ma contribution dans la création d'applications web innovantes.
                     Mes compétences techniques, ma curiosité incessante et mon engagement à apprendre en continu 
                     font de moi une candidate idéale pour relever les défis et apporter une valeur ajoutée à chaque projet.
                        </p>
                <div className=" flex items-center gap-4 flex-wrap tab:gap-8 mt-10">
                    <span className="text-primDark dark:text-primLight font-[600] text-base">Me suivre</span>
                    <span className="w-9 h-9  p-1 cursor-pointer"><a className="text-primDark dark:text-primLight text-xl" href="https://github.com/saphirrubis" target="_blank" rel="noopener noreferrer"><i class="ri-github-fill"></i></a></span>
                    <span className="w-9 h-9  p-1 cursor-pointer"><a className="text-primDark dark:text-primLight text-xl" href="https://fr.linkedin.com/in/tatiana-dubus-10a580245" target="_blank" rel="noopener noreferrer"><i class="ri-linkedin-box-fill"></i></a></span>
                </div>
 
                </article>
            </article>
                      
        </div>

{/* footer top end*/}
{/*  bottom*/} 
<article className="bg-primLight dark:bg-primDark py-5 mt-7">
    <div className="container">
            <p className="text-primDark text-center dark:text-primLight justify-end">Copyright {year} by Tatiana - ALL right reserved</p>
    </div>
</article>

{/*  bottom*/}

      </footer>
    )

}

export default Footer