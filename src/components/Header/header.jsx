import S from "./header.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SlBookOpen } from "react-icons/sl";
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Home from '../../Pages/Home/home';
import About from '../../Pages/About/about';
import Project from '../../Pages/Projects/projects';
import Resume from '../../Pages/Resume/resume';
export default function Header() {
  return (
    <BrowserRouter>
    <header>
        <h1>Meu Portfólio</h1>
      <nav className={S.boxMenu}>
        <ul>
          <li><Link to="/"><AiOutlineHome className={S.icon}/>Início</Link></li>
          <li><Link to="/about"> <IoPersonCircleOutline className={S.icon}/>Sobre mim</Link></li>
          <li><Link to="/project"><AiOutlineFundProjectionScreen className={S.icon}/>Projetos</Link></li>
          <li><Link to="/resume"><SlBookOpen className={S.icon}/>Currículo</Link></li>
        </ul>
      </nav>
    </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
    </BrowserRouter>
  );
}
