import { useEffect } from 'react';
import Aos from "aos";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import Portfolio from './components/UI/Portfolio';

import Switcher from './components/dark/Switcher';

function App() {
  useEffect(()=>{
    Aos.init({
      disable: window.innerWidth < 880
    });
  },[]);
  return <>
    <div className='"min-h-sreen relative items-center transition duration-200 bg-primLight dark:bg-primDark'>
    <Switcher/>
    <Header/>
    <main >
      <Hero />
      <Services />
      <Portfolio/>
    </main>
    <Footer />
    </div>
  </>
}

export default App;
