import React from "react";
import logo from "../../assets/img/logo.png"

const Hero =()=>{
        return (
        <section className="pt-0" id="about">
            <article className="container pt-14">
               <article className="tab:flex items-center justify-between sm:flex-col tab:flex-row">
                     {/* hero left content */}
                  <article className=" w-full tab:basis-1/2">
                     <h5 data-aos="fade-right" 
                     data-aos-duration="1500" 
                     className="text-primDark dark:text-primLight  font-[600] text-base">
                                     Salut,<br/> Bienvenue</h5>
                     <h1 data-aos="fade-up" 
                     data-aos-duration="1500"
                     className="text-textLight dark:text-textDark font-[800] text-2xl sm:text-4xl leading-9 sm:leading-[46px] mt-5" >
                      Je appele Dubus Tatiana <br /> Développeuse Web, Web mobile</h1>
                      <div data-aos="fade up"
                       data-aos-delay="200" 
                       data-aos-duration="1800" 
                       className="flex items-center gap-6 mt-7" >
                         <a className="flex items-center gap-2" href='#contact'>
                         <button className=" hover:bg-primDark dark:hover:bg-primLight border border-textLight dark:border-textDark font-[500] py-2 px-4 rounded-lg hover:font-[500]
                         text-textLight dark:text-textDark  hover:text-primLight dark:hover:text-primDark   easy-in duration-700">              
                            <i class="ri-mail-line"></i> Contactez-moi
                                    </button></a>
                       <a href='#portfolio' className="text-primDark dark:text-primLight font-[600] text-base border-b border-solid border-textLight dark:border-textDark">Voir mon portfolio</a>
                      </div>
                      
                      <p data-aos="fade-left" 
                      data-aos-duration="1500" 
                      className="flex gap2 text-primDark dark:text-primLight mt-14 font-[500] text-base leading-7 sm:pl-14 sm:pr-10" >
                      <span className="px-1.5"><i class="ri-apps-2-line"></i></span> Développeuse junior polyvalente avec une appétence dans le développement front-end, 
                      je suis déterminée à créer des expériences utilisateur exceptionnelles en 
                      combinant mes compétences techniques et ma créativité. 
                      Avec une compréhension des langages et des frameworks front-end tels que JavaScript et CSS, React,
                      je suis également ouverte à élargir mes compétences vers le back-end pour offrir des solutions web complètes. 
                      Prête à relever de nouveaux défis, je suis motivée à apporter une réelle valeur 
                      ajoutée à chaque projet en me tenant au courant des dernières tendances et technologies du domaine."</p>
                      <div class="flex items-center gap-9 mt-14">
                          <span className="text-primDark dark:text-primLight text-base font-[600]">Me suivre</span>
                          <span className="text-primDark dark:text-primLight text-lg font-[400]" ><a href="https://github.com/saphirrubis" target="_blank" rel="noopener noreferrer"><i class="ri-github-line"></i></a></span>
                          <span className="text-primDark dark:text-primLight text-lg font-[400]"><a href="https://fr.linkedin.com/in/tatiana-dubus-10a580245" target="_blank" rel="noopener noreferrer"><i class="ri-linkedin-line"></i></a></span>
                       </div>
                      </article>
                      {/* hero left end */}
                      {/*  hero img */}
                      <article className="basis-1/3 mt-10 sm:mt-0">
                         <figure className="flex items-center justify-center">
                         <img className="tel:w-1/2 tel:h-1/2 tab:w-full tab:h-full"  src={logo} alt="Logo"/>
                         </figure>
                      </article>
                  </article>
            </article> 

        </section>
        )
}
export default Hero;