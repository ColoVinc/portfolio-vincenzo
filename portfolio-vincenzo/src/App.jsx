import './App.css'
import HeroGradient from './components/heroSection/HeroGradient';
import HeroMain from './components/heroSection/HeroMain';
import NavbarMain from './components/navbar/NavbarMain'; 
import SubHeroSection from './components/heroSection/SubHeroSection';
import HelperSection from './components/HelperSection';

function App() {
  return ( 
    <main className='font-body'>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <HelperSection />
    </main>
  );
}

export default App
