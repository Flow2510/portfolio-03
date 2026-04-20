import Info from "../components/info/info";
import ProjectsGallery from "../components/projectsgallery/projectsgallery";
import ReturnSection from "../components/returnsection/returnsection";

export default function Projects({ projects, setSelectedCategories, selectedCategories }) {
    return(
        <main>
            <ProjectsGallery />
            <ReturnSection 
                to={"/"}
                text={"Retour a l'Accueil"}
            />
            <Info />
        </main>
    )
}