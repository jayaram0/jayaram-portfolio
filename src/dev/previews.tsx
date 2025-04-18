import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import SkillsSection from "../components/skills-section.tsx";
import {ThemeToggle} from "../components/theme-toggle.tsx";
import Home from "../app/page.tsx";
import Header from "@/components/Header.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/SkillsSection">
                <SkillsSection/>
            </ComponentPreview>
            <ComponentPreview path="/ThemeToggle">
                <ThemeToggle/>
            </ComponentPreview>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
            <ComponentPreview path="/Header">
                <Header/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;