import { Project, ProjectPatchResponse, ProjectResponse } from "./types";
export declare class Projects {
    private _credentials;
    private _apiUrl;
    constructor(_credentials: string, _apiUrl: string);
    private apiPath;
    /**
     * Returns all projects accessible by the API key
     */
    list(): Promise<ProjectResponse>;
    /**
     * Retrieves a specific project based on the provided projectId
     * @param projectId Unique identifier of the project to retrieve
     */
    get(projectId: string): Promise<Project>;
    /**
     * Update a specific project
     * @param project project to update
     */
    update(project: Project): Promise<ProjectPatchResponse>;
}
