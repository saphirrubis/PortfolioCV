import React from "react";
import portfolios from '../../assets/data/portfolio'


const Modal = ({activeID, setShowModal}) => {

     const portfolio =  portfolios.find(portfolio => portfolio.id === activeID);

      return (
           <div className="w-full h-full fixed top-10 left-0 z-10 bg-primLight dark:bg-pritabark bg-opacity-20 dark:bg-opacity-20" >
                   <div className="w-full tab:max-w-lg absolute top-1/2 left-1/2 z-20 bg-primLight dark:bg-primDark rounded-sm-lg
                   transform -translate-x-1/2 -translate-y-1/2 p-5 border-2 border-textLight dark:border-textDark rounded-lg"> 
                   <div>
                   <figure>
                       <img className="rounded-lg" src={portfolio.imgURL} alt=""/>
                   </figure>
                   </div>
                   <div>
                        <h2 className="text-2xl text-textLight dark:text-textDark font-[500] my-5">
                          {portfolio.title }</h2>
                          <p className="text-base leading-7 text-primDark dark:text-primLight">
                                    {portfolio.description}</p>
                        <div className="mt-5 flex items-center gap-3 flex-wrap">
                              <h4 className="text-textLight dark:text-textDark text-lg text-[500]">Technologies: </h4>
                              { portfolio.technologies.map((item, index)=>
                               <span key={index}  className="text-textLight dark:text-textDark bg-primLight dark:bg-primDark 
                               py-1 px-2 rounded-md text-sm leading-0">
                                   {item}</span>)}
                        </div>
                        <a href={portfolio.siteUrl} target="_blank" rel="noopener noreferrer">
                         <button  className="bg-primLight dark:bg-primDark text-textLight dark:text-textDark py-2 px-2 my-2 rounded-lg font-[500]
                         border border-textLight dark:border-textDark hover:bg-primDark dark:hover:bg-primLight 
                         hover:text-textDark dark:hover:text-textLight ease-in duration-300" >
                              Live Site</button>
                        </a>
                   </div>
                   <button onClick={()=> setShowModal(false)}
                   className="w-8 h-8 bg-primLight dark:bg-primDark text-textLight dark:text-textDark  absolute top-7 right-7
                   text-2xl flex items-center justify-center rounded leading-0 border-2 border-textLight dark:border-textDark cursor-pointer">&times;</button>
                  </div>
           </div>       
      )            
}
export default Modal;