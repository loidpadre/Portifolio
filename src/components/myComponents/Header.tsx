import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { Linkedin } from "lucide-react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Header(){
    return(
        <header className="mt-10 px-4 pb-20">
  <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

    <div className="text-center md:text-left">
      <h1 className="text-2xl font-bold">
        LOID <span className="text-orange-700">PADRE</span>
      </h1>
    </div>

    <div className="text-center">
      <ul className="flex flex-col md:flex-row gap-4 items-center">
        <li className="cursor-pointer">Home</li>
        <Link href="#projects">
          <li className="cursor-pointer">Projects</li>
        </Link>
        <Link href="#about">
          <li className="cursor-pointer">About me</li>
        </Link>
      </ul>
    </div>

    <div className="text-center">
      <HoverCard>
        <HoverCardTrigger className="cursor-pointer bg-orange-700 text-white p-2 rounded px-4">
          Me contrate
        </HoverCardTrigger>
        <HoverCardContent className="space-y-4 border p-6 mt-4 rounded shadow-lg bg-white">
          <Link
            href="https://www.linkedin.com/in/loidpadre/"
            target="_blank"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <Linkedin />
            LinkedIn
          </Link>
          <div className="flex gap-2 items-center">
            <MessageCircle color="blue" />
            <p className="text-blue-600">+55 (85) 99653-7401</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  </nav>
</header>
    )
}