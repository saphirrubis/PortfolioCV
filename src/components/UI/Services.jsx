import React from "react";
import html from "../../assets/img/html5.png";
import css from "../../assets/img/css3.png";
import php from "../../assets/img/php.png";
import js from "../../assets/img/javascript.png";
import mysql from "../../assets/img/mysql.png"
import symfony from "../../assets/img/symfony.png";
import react from '../../assets/img/react.png';
import node from '../../assets/img/exprss.webp';
import mongoDb from '../../assets/img/Mongodb-PNG-Image-HD.png';
import tailwind from '../../assets/img/tailwind.png';


const Services = () =>{
  return(
   <section id="services">
     <article className="container lg:pt-5" >
         <article className="text-center mb-4 ">
             <h2 className="text-textLight dark:text-textDark font-[800] text-4xl mb-5">Mes atouts</h2>
             <div className="lg:max-w-xl lg:mx-auto text-primDark dark:text-primLight font-[500] text-base leading-7 justify-center">
           
             <article
                           data-aos="fade-right" 
                           data-aos-duration="1200"
                           className="bg-textDark dark:bg-textLight p-4 rounded  group hover:bg-textLight dark:hover:bg-primLight 
                           cursor-pointer shadow-xl shadow-primDark dark:shadow-primLight hover:shadow-textDark dark:hover:shadow-textLight ease-in duration-150 mb-4">
                                    <h3 className="text-primDark dark:text-primLight font-[700] mb-3 group-hover:text-primLight dark:group-hover:text-primDark  group-hover:font-[600] text-xl">
                                     Savoir être:
                                    </h3>
                                    <ul className="text-primDark dark:text-primLight hover:text-primLight dark:hover:text-primDark ">
                                      <li>Persévèrante</li>
                                      <li>Sens de l'organistion</li>
                                      <li>Curieuse</li>
                                      <li>Travail en équipe</li>
                                      <li>Capacité d'adaptation</li>
                                    </ul>
                    
              </article>
    
              <article
                           data-aos="fade-left" 
                           data-aos-duration="1500"
                           className="bg-textDark dark:bg-textLight p-4 rounded  group hover:bg-textLight dark:hover:bg-primLight
                           cursor-pointer shadow-xl shadow-primDark dark:shadow-primLight hover:shadow-textDark dark:hover:shadow-textLight ease-in duration-150 mt-4">
                                    <h3 className="text-primDark dark:text-primLight font-[700] mb-3 group-hover:text-primLight dark:group-hover:text-primDark  group-hover:font-[600] text-xl">
                                     Compétences:
                                    </h3>
                                    <ul className="flex flex-row items-center flex-wrap justify-between">
                                      <li><img className="w-20 h-20" src={html} alt="html" /></li>
                                      <li><img className="w-20 h-20" src={css} alt="css" /></li>
                                      <li><img className="w-20 h-20" src={js} alt="javascript" /></li>
                                      <li><img className="w-20 h-20" src={php} alt="php" /></li>
                                      <li><img className="w-20 h-20" src={mysql} alt="mysql" /></li>
                                      </ul><br/>
                                      <ul className="flex flex-row items-center flex-wrap justify-between">
                                      <li><img className="w-20 h-20" src={symfony} alt="symfony" /></li>
                                      <li><img className="w-20 h-20" src={react} alt="react" /></li>
                                      <li><img className="w-20 h-20" src={node} alt="nodeExpress" /></li>
                                      <li><img className="w-20 h-20" src={mongoDb} alt="mongoDB" /></li>
                                      <li><img className="w-20 h-20" src={tailwind} alt="tailwind" /></li>
                                    </ul> 
              </article>
            </div>   
         </article>
         <article className="flex flex-col mt:4 justify-center tel:py-12">
         <h2 className="text-textLight dark:text-textDark text-center font-[800] text-4xl mb-2">Expériences</h2>
           <div className="w-full py-3 px-2 tel:max-w-xl tel:mx-auto tel:px-0">
             <div className="relative text-textLight dark:text-textDark antialiased text-sm font-semibold">
                  {/* ligne vertical du milieu*/}
                  <div className="hidden absolute w-1 tel:block bg-textLight dark:bg-textDark h-full left-1/2
                  transform-translate-x-1/2"></div>
                  {/* carte gauche */}
                  <article className=" mt-6 tel:mt-0 tel:mb-12">
                      <div className="flex items-center flex-col tel:flex-row">

                        <div className="flex justify-start w-full mx-auto items-center">
                          <div className="w-full tel:w-1/2 tel:pr-8">
                           <article
                           data-aos="fade-right" 
                           data-aos-duration="1200"
                           className="bg-textDark dark:bg-textLight p-4 rounded  group hover:bg-textLight dark:hover:bg-primLight
                           cursor-pointer shadow-xl shadow-primDark dark:shadow-primLight hover:shadow-textDark dark:hover:shadow-textLight ease-in duration-150">
                                    <h3 className="text-primDark dark:text-primLight font-[700] mb-3 group-hover:text-primLight dark:group-hover:text-primDark  group-hover:font-[600] text-xl">
                                    L'incubateur Numérique (Euratechnologie)
                                    </h3>
                                    <h6 className="text-primDark dark:text-primLight font-[100] mb-3 group-hover:text-primLight dark:group-hover:text-primDark  group-hover:font-[100] text-base">
                                      15/03/2023 à 07/07/2023</h6>
                                    <p className="text-base text-primDark dark:text-primLight group-hover:text-primLight dark:group-hover:text-primDark  group-hover:font-[500] leading-7">
                                    Contexte: Projet de site de Covoiturage <br/>
                                    Tâches: Travailler en méthode agile<br/>
                                    La partie contact (front et back),et la partie discussion (front et back) du site<br/>
                                    Environnement technique: Figma, Jira, Miro, Looping, Mysql, GIT, Symfony,React, Node.js, Express.<br/></p>
                           </article>
                           </div>
                         </div> 
                         <div className="rounded-full bg-primLight dark:bg-primDark border-primDark dark:border-primLight border-4 w-10 h-10 absolute
                       left-1/2 transform -translate-x-1/2 -translate-y-4 tel:translate-y-0 flex items-center
                       justify-center">
                         <figure className="text-2xl" >
                         <i class="ri-code-box-line"></i>
                         </figure>
                      </div>           
                     </div>
               

                  </article> 
              {/* carte droite */}
              <article className=" mt-6 tel:mt-0 tel:mb-12">
                      <div className="flex items-center flex-col tel:flex-row">
                        <div className="flex justify-end w-full mw-auto items-center">
                          <div className="w-full tel:w-1/2 tel:pl-8">
                           <article data-aos="fade-left" 
                           data-aos-delay='50'
                           data-aos-duration="1300"
                           className="bg-textDark dark:bg-textLight p-4 rounded group hover:bg-textLight dark:hover:bg-primLight cursor-pointer
                           ease-in duration-150 shadow-xl shadow-primDark dark:shadow-primLight hover:shadow-textDark dark:hover:shadow-textLight">
                                    <h3 className="text-primDark dark:text-primLight  font-[700] mb-3 group-hover:text-primLight dark:group-hover:text-primDark group-hover:font-[600] text-xl">
                                    Amélioration Visuel d'un site            
                                    </h3>
                                    <h6 className="text-primDark dark:text-primLight font-[100] mb-3 group-hover:text-primLight dark:group-hover:text-primDark  group-hover:font-[100] text-base">
                                    05/02/2023  au 28/02/2023</h6>
                                    <p className="text-base text-primDark dark:text-primLight group-hover:text-primLight dark:group-hover:text-primDark group-hover:font-[500] leading-7">
                                  Contexte: Amélioration d'un site e-commerce<br/>
                                  Taches: amélioration du front, le rendre plus dynamique pour l'utilisateur<br/>
                                  Environnement technique: sur le site WEBADOR.<br/>
                                  </p>
                           </article>
                           </div>
                         </div>   
                         <div className="rounded-full bg-primLight dark:bg-primDark border-primDark dark:border-primLight border-4 w-10 h-10 absolute
                       left-1/2 transform -translate-x-1/2 -translate-y-4 tel:translate-y-0 flex items-center
                       justify-center">
                         <figure className="text-2xl" >
                         <i class="ri-code-box-line"></i>
                         </figure>
                      </div>               
                     </div>
                  </article>
                         {/* carte gauche */}
                         <article className=" mt-6 tel:mt-0 tel:mb-12">
                      <div className="flex items-center flex-col tel:flex-row">

                        <div className="flex justify-start w-full mx-auto items-center">
                          <div className="w-full tel:w-1/2 tel:pr-8">
                           <article data-aos="fade-right"
                           data-aos-delay="100" 
                           data-aos-duration="1400"
                           className="bg-textDark dark:bg-textLight p-4 rounded group hover:bg-textLight dark:hover:bg-primLight cursor-pointer
                           ease-in duration-150 shadow-xl shadow-primDark dark:shadow-primLight hover:shadow-textDark dark:hover:shadow-textLight">
                                    <h3 className="text-primDark dark:text-primLight  font-[700] mb-3 group-hover:text-primLight dark:group-hover:text-primDark group-hover:font-[600] text-xl">
                                    Développeuse Web - Site vitrine pour un pédicure-podologue             
                                    </h3>
                                    <h6 className="text-primDark dark:text-primLight font-[100] mb-3 group-hover:text-primLight dark:group-hover:text-primDark  group-hover:font-[100] text-base">
                                    17/10/2022 au 20/01/2023</h6>
                                    <p className="text-base text-primDark dark:text-primLight  group-hover:text-primLight dark:group-hover:text-primDark group-hover:font-[500] leading-7">
                                    Contexte: projet de site vitrine <br/>
                                    Tâches: Réalisation de la maquette<br/>
                                           Création du sites<br/>
                                    Environnement technique:Figma, Visual code,React-JS.<br/></p>
                           </article>
                           </div>
                         </div> 
                         <div className="rounded-full bg-primLight dark:bg-primDark border-primDark dark:border-primLight border-4 w-10 h-10 absolute
                       left-1/2 transform -translate-x-1/2 -translate-y-4 tel:translate-y-0 flex items-center
                       justify-center">
                         <figure className="text-2xl" >
                         <i class="ri-code-box-line"></i>
                         </figure>
                      </div>                 
                     </div>
                  </article> 
              {/* carte droite */}
              <article className=" mt-6 tel:mt-0 tel:mb-12">
                      <div className="flex items-center flex-col tel:flex-row">
                        <div className="flex justify-end w-full mw-auto items-center">
                          <div className="w-full tel:w-1/2 tel:pl-8">
                           <article data-aos="fade-left" data-aos-duration="1500"
                           className="bg-textDark dark:bg-textLight p-4 rounded  group hover:bg-textLight dark:hover:bg-primLight cursor-pointer
                           ease-in duration-150 shadow-xl shadow-primDark dark:shadow-primLight hover:shadow-textDark dark:hover:shadow-textLight">
                                    <h3 className="text-primDark dark:text-primLight font-[700] mb-3 group-hover:text-primLight dark:group-hover:text-primDark group-hover:font-[600] text-xl">
                                    Projet personnel              
                                    </h3>
                                    <h6 className="text-primDark dark:text-primLight font-[100] mb-3 group-hover:text-primLight dark:group-hover:text-primDark  group-hover:font-[100] text-base">
                                    En 2023 (en cours)</h6>
                                    <p className="text-base text-primDark dark:text-primLight  group-hover:text-primLight dark:group-hover:text-primDark group-hover:font-[500] leading-7">
                                    Contexte:Création d'un site vitrine-blog<br/>
                                      Taches:Réalisation de la maquette,
                                      réalisation du front du site,
                                      réalisation de MCD<br/>
                                      Environnement technique:React(node express monogDB).<br/></p>
                          </article>
                           </div>
                         </div>   
                         <div className="rounded-full bg-primLight dark:bg-primDark border-primDark dark:border-primLight border-4 w-10 h-10 absolute
                       left-1/2 transform -translate-x-1/2 -translate-y-4 tel:translate-y-0 flex items-center
                       justify-center">
                         <figure className="text-2xl" >
                         <i class="ri-code-box-line"></i>
                         </figure>
                      </div>               
                     </div>
                  </article>
              </div>
           </div>
         </article>
     </article>
   </section>
   )
}
export default Services;