import Link from "next/link";
import { Button } from "../ui/button";


export default function About(){
    return(
        <div className="text-center md:mt-60 mt-20" id="about">
            <h1 className="text-zinc-500 text-2xl font-thin">VAMOS TRABALHAR JUNTOS!</h1>
           <p className="md:w-1/2 m-auto mt-10 text-zinc-600">Sou Desenvolvedor de Software e estudante de Engenharia de Computação na Universidade Federal de Santa Catarina (UFSC). Tenho experiência em JavaScript, TypeScript, C++ e ferramentas como React.js, Next.js, React Native e Node.js. Também sou proficiente em tecnologias de frontend como HTML5, CSS3, Tailwind CSS e Styled-Components, além de ferramentas de design como Figma. Tenho experiência no desenvolvimento de soluções modernas e eficientes para web e mobile, com foco em criar produtos que entreguem valor e inovação.</p>
           <p className="md:w-1/2 m-auto mt-10 text-zinc-600">Posso contribuir significativamente para sua empresa com 4 anos de experiência em desenvolvimento Full stack. Sou especializado na MERN stack e focado em criar aplicações web eficientes e de alto desempenho, além de trazer inovação contínua e comprometimento com resultados excepcionais para sua equipe 😉.</p>
            <Button className="bg-orange-700 my-10"><Link href="https://www.linkedin.com/in/loidpadre/" target="_blank">Me chama</Link></Button>
            <p className="md:mt-60 mt-20 mb-10"> &copy; {new Date().getFullYear()} Loid Padre. Todos os direitos reservados.</p>
        </div>
    )
}