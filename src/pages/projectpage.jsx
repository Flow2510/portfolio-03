import { useParams } from "react-router-dom";
import Info from "../components/info/info";
import Intro from "../components/intro/intro";
import ProjectFeatures from "../components/projectfeatures/projectfeatures";
import ReturnSection from "../components/returnsection/returnsection";
import { useRef } from "react";
import DualWrapper from "../components/dualwrapper/dualwrapper";

export default function ProjectPage({projects}) {
    const { id } = useParams()
    const sectionRef = useRef(null)
    const project = projects.find((project) => project.id === id)

    return(
        <main>
            <Intro 
                project={project}
                sectionRef={sectionRef}
            />
            <ProjectFeatures project={project}/>
            <DualWrapper 
                photo1={project.image}
                photo2={project.image}
            />
            <ReturnSection 
                to={"/projects"}
                text={"Retour aux Projets"}
            />
            <Info />
        </main>
    )
}