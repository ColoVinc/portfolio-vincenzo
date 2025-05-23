import './App.css'
import HeroGradient from './components/heroSection/HeroGradient';
import HeroMain from './components/heroSection/HeroMain';
import NavbarMain from './components/navbar/NavbarMain'; 
import SubHeroSection from './components/heroSection/SubHeroSection';
import HelperSection from './components/HelperSection';
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectsMain from './components/projectsSection/ProjectsMain';

function App() {
  return ( 
    <main className='font-body'>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <HelperSection />
    </main>
  );
}

export default App
