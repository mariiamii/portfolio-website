import './App.css';
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <HomePage/>
      <Skills/>
      <Projects/>
      <AboutMe/>
    </div>
  );
}

export default App;
