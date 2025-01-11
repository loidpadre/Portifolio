import About from "@/components/myComponents/about";
import Banner from "@/components/myComponents/Banner";
import Hero from "@/components/myComponents/Hero";
import Projects from "@/components/myComponents/projects";
import Tecnology from "@/components/myComponents/tecnology";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Banner/>
      <Tecnology/>
      <Projects/>
      <About/>
    </div>
  );
}
