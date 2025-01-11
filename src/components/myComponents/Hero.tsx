import Link from "next/link"
import { Button } from "../ui/button"
import { TextEffect } from "../ui/text-effect"
export default function Hero() {
    return (
        <section className="md:text-center md:m-auto md:mt-40 md:w-2/3 md:space-y-4 flex flex-col gap-2 text-center">
            <TextEffect per='char' preset='fade' className="text-zinc-500">
                Criando Soluções Web e Mobile com Inovação e Eficiência.
            </TextEffect>
            <TextEffect per='char' preset='slide' className="md:text-4xl mt-4 font-semibold">
                DESENVOLVERDOR DE SOFTWARE
            </TextEffect>
            <TextEffect preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3} className="text-zinc-400">
            Olá, meu nome é Loid Padre. Sou Desenvolvedor de Software e estudante de Engenharia de Computação na Universidade Federal de Santa Catarina (UFSC). Tenho experiência em JavaScript, TypeScript, C++ e ferramentas como React.js, Next.js, React Native e Node.js. Também sou proficiente em tecnologias de frontend como HTML5, CSS3, Tailwind CSS e Styled-Components, além de ferramentas de design como Figma.
            Tenho experiência no desenvolvimento de soluções modernas e eficientes para web e mobile, com foco em criar produtos que entreguem valor e inovação.
    </TextEffect>
    <Button className="bg-orange-700 md:w-1/2 m-auto"><Link href="https://www.linkedin.com/in/loidpadre/" target="_blank">Vamos trabalhar juntos!</Link></Button>
        </section>
    )
}