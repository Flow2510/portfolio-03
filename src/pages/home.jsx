import Cta from "../components/cta/cta";
import Gallery from "../components/gallery/gallery";
import Hero from "../components/hero/hero";
import Info from "../components/info/info";
import { useRef } from "react";
import ScrollDriven from "../components/scrolldriven/scrolldriven";

export default function Home({ projects, setSelectedCategories }) {
    const sectionRef = useRef(null)

    return(
        <main>
            <Hero sectionRef={sectionRef}/>
            <Gallery projects={projects} sectionRef={sectionRef}/>
            <Cta to={'/about'}/>
            <ScrollDriven />
            <Info />
        </main>
    )
}