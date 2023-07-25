import React, {useState, useEffect} from "react";
import data from'../../assets/data/portfolio';
import Modal from "./Modal";


const Portfolio = () =>{
    const[nextItems, setNextItems]= useState(6);
    const[portfolios, setPortfolios]= useState(data);
    const [selectTab, setSelectTab] = useState ('all');
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    const loadMoreHandler = ()=>{
        setNextItems(prev=>prev +3)
    };
    const showModalHundler = id =>{
      setShowModal(true)
      setActiveID(id)
    }

    useEffect(()=> {
      if(selectTab==='all'){
        setPortfolios(data)
      }
      if(selectTab==='jeu'){
        const filteredData = data.filter(item => item.category==='jeu')
        setPortfolios(filteredData)
      }
      if(selectTab==='site vitrine'){
        const filteredData = data.filter(item => item.category==='site vitrine')
        setPortfolios(filteredData)
      }
      if(selectTab==='site E-com'){
        const filteredData = data.filter(item => item.category==='site E-com')
        setPortfolios(filteredData)
      }
      if(selectTab==='divers'){
        const filteredData = data.filter(item => item.category==='divers')
        setPortfolios(filteredData)
      }
    },[selectTab]);
                  return(
                <section id="portfolio">
                  <div className="container bg-textDark dark:bg-textLight rounded p-5 shadow-xl shadow-primDark dark:shadow-primLight ">
                     <div className="flex items-center justify-between flex-wrap">
                        <div className="mb-7 tel:mb-0">
                            <h3 className=" text-textLight dark:text-textDark text-3xl font-[700] pb-5">Mes projets:</h3>
                        </div>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <button onClick={()=> setSelectTab('all')}  className="text-textLight dark:text-textDark font-[600] border border-solid 
                    border-textLight dark:border-textDark py-2 px-4 rounded-lg max-h-10 hover:bg-primDark dark:hover:bg-primLight
                     hover:text-primLight dark:hover:text-primDark">TOUT</button>
                          <button onClick={()=> setSelectTab('jeu')}  className="text-textLight dark:text-textDark font-[600] border border-solid 
                    border-textLight dark:border-textDark py-2 px-4 rounded-lg max-h-10 hover:bg-primDark dark:hover:bg-primLight
                     hover:text-primLight dark:hover:text-primDark">JEUX</button>
                          <button onClick={()=> setSelectTab('site vitrine')}  className="text-textLight dark:text-textDark font-[600] border border-solid 
                    border-textLight dark:border-textDark py-2 px-4 rounded-lg max-h-10 hover:bg-primDark dark:hover:bg-primLight
                     hover:text-primLight dark:hover:text-primDark">SITE VITRINE</button>
                      <button onClick={()=> setSelectTab('site E-com')} className="text-textLight dark:text-textDark font-[600] border border-solid 
                    border-textLight dark:border-textDark py-2 px-4 rounded-lg max-h-10 hover:bg-primDark dark:hover:bg-primLight
                     hover:text-primLight dark:hover:text-primDark">Site E-com</button> 
                      <button onClick={()=> setSelectTab('divers')} className="text-textLight dark:text-textDark font-[600] border border-solid 
                    border-textLight dark:border-textDark py-2 px-4 rounded-lg max-h-10 hover:bg-primDark dark:hover:bg-primLight
                     hover:text-primLight dark:hover:text-primDark">Divers</button>

  {/* <button className="text-textLight dark:text-textDark font-[600] border border-solid 
                    border-textLight dark:border-textDark py-2 px-4 rounded-lg max-h-10 hover:bg-primDark dark:hover:bg-primLight
                     hover:text-primLight dark:hover:text-primDark"></button> */}
                        </div>
                     </div>
                     <div className="flex items-center gap-4 flex-wrap">
                           {
                            portfolios?.slice(0, nextItems)?.map((portfolios, index)=>(
                                  <div key={index}
                                  data-aos='fade-zoom-in'
                                  data-aod-delay='50'
                                  data-aos-duration='1000'
                                  className="group max-w-full tel:w[48.5%] tab:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                                    <figure>
                                        <img className="rounded-lg" src={portfolios.imgURL} alt=""/>
                                    </figure>

                                  <div className="w-full h-full bg-primLight dark:bg-primDark bg-opacity-20 dark:bg-opacity-20  absolute top-0 left-0 
                                  z-[5] hidden group-hover:block ">
                                    <div className="w-full h-full flex items-center justify-center">
                                      <button onClick={ ()=> showModalHundler(portfolios.id)} 
                                      className="text-primDark dark:text-primLight bg-textDark dark:bg-textLight hover:bg-textLight dark:hover:bg-textDark
                                       hover:text-primLight dark:hover:text-primDark border border-textLight dark:border-textDark
                                      py-2 px-4 rounded-lg font-[500] ease-in duration-200">Voir les détails</button>
                                     </div>
                                    </div>
                                  </div>
                            ))
                           }
                     </div>
                     <div className="text-center mt-6">
                                    { nextItems < portfolios.length && data.length > 6 &&(
                                             <button onClick={loadMoreHandler}
                                             className="text-primDark dark:text-primLight bg-textDark dark:bg-textLight hover:bg-textLight dark:hover:bg-textDark
                                             hover:text-primLight dark:hover:text-primDark border-2 border-textLight dark:border-textDark
                                               py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">En voir plus</button>
                                    )}
                      
                         </div>
                  </div>
                  {
                    showModal && <Modal setShowModal={setShowModal} activeID={activeID} />
                  }
                </section>
 )
};
export default Portfolio;