import Cta from "../components/cta/cta";
import Gallery from "../components/gallery/gallery";
import Hero from "../components/hero/hero";
import FeatureSection from "../components/featuresection/featuresection";
import Info from "../components/info/info";

export default function Home({ projects, setSelectedCategories }) {
    return(
        <main>
            <Hero />
            <Gallery projects={projects}/>
            <FeatureSection setSelectedCategories={setSelectedCategories}/>
            <Cta />
            <Info />
        </main>
    )
}