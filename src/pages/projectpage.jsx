import { useParams } from "react-router-dom";
import Info from "../components/info/info";
import Intro from "../components/intro/intro";
import ProjectsGallery from "../components/projectsgallery/projectsgallery";
import ProjectFeatures from "../components/projectfeatures/projectfeatures";
import ReturnSection from "../components/returnsection/returnsection";

export default function ProjectPage({projects}) {
    const { id } = useParams()

    const project = projects.find((project) => project.id === id)

    return(
        <main>
            <Intro 
                project={project}
            />
            <ProjectFeatures project={project}/>
            <ProjectsGallery project={project}/>
            
            <ReturnSection />
            <Info />
        </main>
    )
}