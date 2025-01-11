import { SiJavascript, SiTypescript , SiReact ,SiNextdotjs , SiHtml5 , SiTailwindcss ,SiCss3 ,SiStyledcomponents , SiExpress, SiFigma  } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TextEffect } from "../ui/text-effect";

export default function Tecnology(){
    return(
        <div className="text-center md:mt-60 mt-20">
            <TextEffect per='char' preset='fade' className="text-zinc-500 text-lg">
                            Tecnologias que Domino!
            </TextEffect>
            <div className="md:flex mt-10 md:flex-row justify-center items-center md:gap-10 flex flex-col gap-5 ">
                <SiJavascript size={50}/>
                <SiTypescript size={50}/>
                <SiReact size={50}/>
                <SiNextdotjs size={50}/>
                <SiHtml5 size={50}/>
                <SiCss3 size={50}/>
                <SiTailwindcss size={50}/>
                <SiStyledcomponents size={50}/>
                <SiExpress size={50}/>
                <FaNode size={50}/>
                <SiFigma size={50}/>
            </div>
        </div>
    )
}