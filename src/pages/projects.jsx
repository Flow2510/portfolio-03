import Info from "../components/info/info";
import ProjectsList from "../components/projectslist/projectslist";

export default function Projects({ projects, setSelectedCategories, selectedCategories }) {
    return(
        <main>
            <ProjectsList 
                projects={projects}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
            />
            <Info />
        </main>
    )
}