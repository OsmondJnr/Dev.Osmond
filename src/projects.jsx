import { useEffect, useMemo, useState } from "react";
import "./projects.css";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || "your-github-username";
const FEATURED_REPO_LIST = (import.meta.env.VITE_FEATURED_REPOS || "")
  .split(",")
  .map((name) => name.trim())
  .filter(Boolean);

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let isCancelled = false;

        async function loadProjects() {
            if (GITHUB_USERNAME === "your-github-username") {
                setLoading(false);
                setError("Add VITE_GITHUB_USERNAME in your .env file to load your featured repos.");
                return;
            }

            try {
                setLoading(true);
                setError("");

                const fetchJson = async (url) => {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error("Unable to fetch repositories from GitHub.");
                    }
                    return response.json();
                };

                const repos = await fetchJson(
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
                );

                if (!Array.isArray(repos)) {
                    throw new Error("Unexpected data received from GitHub API.");
                }

                const nonForkRepos = repos.filter((repo) => !repo.fork);

                let featured = [];
                if (FEATURED_REPO_LIST.length > 0) {
                    const fullRepoEntries = FEATURED_REPO_LIST.filter((repoName) => repoName.includes("/"));
                    const ownRepoEntries = FEATURED_REPO_LIST.filter((repoName) => !repoName.includes("/"));

                    const ownFeatured = ownRepoEntries
                        .map((repoName) =>
                            repos.find(
                                (repo) => repo.name.toLowerCase() === repoName.toLowerCase()
                            )
                        )
                        .filter(Boolean);

                    const externalFeatured = await Promise.all(
                        fullRepoEntries.map(async (fullName) => {
                            try {
                                const repo = await fetchJson(`https://api.github.com/repos/${fullName}`);
                                return repo || null;
                            } catch {
                                return null;
                            }
                        })
                    );

                    const orderedFeatured = FEATURED_REPO_LIST
                        .map((entry) => {
                            if (entry.includes("/")) {
                                return externalFeatured.find(
                                    (repo) => repo && repo.full_name.toLowerCase() === entry.toLowerCase()
                                );
                            }

                            return ownFeatured.find(
                                (repo) => repo.name.toLowerCase() === entry.toLowerCase()
                            );
                        })
                        .filter(Boolean);

                    featured = orderedFeatured;
                }

                if (featured.length === 0) {
                    featured = [...nonForkRepos]
                        .sort((a, b) => b.stargazers_count - a.stargazers_count)
                        .slice(0, 6);
                }

                if (!isCancelled) {
                    setProjects(featured);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(err.message || "Something went wrong while loading projects.");
                }
            } finally {
                if (!isCancelled) {
                    setLoading(false);
                }
            }
        }

        loadProjects();

        return () => {
            isCancelled = true;
        };
    }, []);

    const content = useMemo(() => {
        if (loading) {
            return <p className="projects_state">Loading featured repos...</p>;
        }

        if (error) {
            return <p className="projects_state projects_error">{error}</p>;
        }

        if (projects.length === 0) {
            return <p className="projects_state">No featured repositories found yet.</p>;
        }

        return projects.map((project) => (
            <article className="project_card" key={project.id}>
                <div className="project_card_top">
                    <h3>{project.name}</h3>
                    <a href={project.html_url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}>
                        <ion-icon name="open-outline"></ion-icon>
                    </a>
                </div>
                <p>{project.description || "No description provided yet."}</p>
                <div className="project_meta">
                    <span>
                        <ion-icon name="git-branch-outline"></ion-icon>
                        {project.language || "Unknown"}
                    </span>
                    <span>
                        <ion-icon name="star-outline"></ion-icon>
                        {project.stargazers_count}
                    </span>
                    <span>
                        <ion-icon name="git-network-outline"></ion-icon>
                        {project.forks_count}
                    </span>
                </div>
            </article>
        ));
    }, [error, loading, projects]);

    return(
        <section className="projects" id="projects">
            <div className="project_header">
                <span className="section_tag">Projects</span>
                <h2>My Featured Projects</h2>
            </div>
            <div className="project_grid">
                {content}
            </div>

        </section>
    )
}

export default Projects;