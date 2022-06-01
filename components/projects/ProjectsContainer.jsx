import {ProjectsView} from "./ProjectsView";

export function ProjectsContainer({ projects }) {
    return (
        <div>
            <ProjectsView projects={projects} />
        </div>
    )
}