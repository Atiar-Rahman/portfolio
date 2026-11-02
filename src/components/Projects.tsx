import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaCodeBranch, FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";

const GITHUB_USERNAME = "Atiar-Rahman";
const INITIAL_PROJECT_COUNT = 9;

type GitHubRepository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
};

type CaseStudy = { focus: string; challenge: string; approach: string };

const caseStudies: Record<string, CaseStudy> = {
  "move-explorer": {
    focus: "Movie discovery interface powered by the TVMaze public API.",
    challenge: "Make a public API easy to explore without overwhelming the user.",
    approach: "Built a React-based browsing experience with routing, focused views, and a responsive UI.",
  },
  stay_bangla_client: {
    focus: "Hotel booking and management experience for StayBangla.",
    challenge: "Present rooms and booking flows clearly across screen sizes.",
    approach: "Created a responsive React client that connects to the project’s REST API.",
  },
  SecureVisionAiFrontend: {
    focus: "Front end for a secure vision AI application.",
    challenge: "Present AI-driven monitoring workflows in a clear interface.",
    approach: "Developed a focused React UI and paired it with the deployed API workflow.",
  },
};

const fallbackProjects: GitHubRepository[] = [
  { id: 1, name: "move-explorer", description: "React movie explorer powered by the TVMaze public API.", html_url: "https://github.com/Atiar-Rahman/move-explorer", homepage: "https://move-explorer.vercel.app", language: "JavaScript", topics: ["React", "Tailwind CSS"], stargazers_count: 0, forks_count: 0, fork: false, archived: false },
  { id: 2, name: "SecureVisionAiFrontend", description: "Secure vision AI front-end application.", html_url: "https://github.com/Atiar-Rahman/SecureVisionAiFrontend", homepage: "https://secure-vision-ai-frontend.vercel.app", language: "JavaScript", topics: ["React"], stargazers_count: 0, forks_count: 0, fork: false, archived: false },
  { id: 3, name: "webcamera", description: "Web camera image and video capture application.", html_url: "https://github.com/Atiar-Rahman/webcamera", homepage: "https://webcamera-iota.vercel.app", language: "JavaScript", topics: ["React"], stargazers_count: 0, forks_count: 0, fork: false, archived: false },
  { id: 4, name: "stay_bangla_client", description: "Hotel management system client application.", html_url: "https://github.com/Atiar-Rahman/stay_bangla_client", homepage: "https://stay-bangla-mk4p.vercel.app", language: "HTML", topics: ["React", "Django"], stargazers_count: 0, forks_count: 0, fork: false, archived: false },
  { id: 5, name: "conference-manegement", description: "Conference management application.", html_url: "https://github.com/Atiar-Rahman/conference-manegement", homepage: "https://conference-two-pi.vercel.app", language: "JavaScript", topics: ["React"], stargazers_count: 0, forks_count: 0, fork: false, archived: false },
  { id: 6, name: "Zenshopbuilder", description: "E-commerce site builder application.", html_url: "https://github.com/Atiar-Rahman/Zenshopbuilder", homepage: "https://zenshopbuilder.vercel.app", language: "JavaScript", topics: ["React"], stargazers_count: 0, forks_count: 0, fork: false, archived: false },
];

const formatProjectName = (name: string) =>
  name.replace(/[-_]/g, " ").replace(/\b\w/g, (character) => character.toUpperCase());

const ProjectCard = ({ project }: { project: GitHubRepository }) => {
  const caseStudy = caseStudies[project.name];
  const liveUrl = project.homepage?.trim()
    ? /^https?:\/\//i.test(project.homepage.trim())
      ? project.homepage.trim()
      : `https://${project.homepage.trim()}`
    : null;
  const technologies = [project.language, ...project.topics].filter(
    (item, index, items): item is string => Boolean(item) && items.indexOf(item) === index,
  );

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group flex h-full flex-col rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="rounded-xl bg-primary/10 p-3 text-primary"><FaGithub className="text-2xl" /></div>
        <div className="flex items-center gap-3 text-sm text-base-content/60">
          {liveUrl && <span className="rounded-full bg-success/15 px-2 py-1 text-xs font-semibold text-success">Live</span>}
          <span className="flex items-center gap-1"><FaStar /> {project.stargazers_count}</span>
          <span className="flex items-center gap-1"><FaCodeBranch /> {project.forks_count}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-base-content">{formatProjectName(project.name)}</h3>
      <p className="mt-3 min-h-12 text-sm leading-relaxed text-base-content/70">
        {project.description || "Open-source project available on GitHub."}
      </p>
      {technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((technology) => (
            <span key={technology} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{technology}</span>
          ))}
        </div>
      )}
      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <a href={project.html_url} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm"><FaGithub /> Source code</a>
        {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn-outline btn-primary btn-sm"><FaExternalLinkAlt /> Live site</a>}
      </div>
      {caseStudy && <details className="mt-5 border-t border-base-300 pt-4 text-sm text-base-content/70">
        <summary className="cursor-pointer font-semibold text-primary">View case study</summary>
        <div className="mt-3 space-y-2 leading-relaxed"><p><strong className="text-base-content">Focus:</strong> {caseStudy.focus}</p><p><strong className="text-base-content">Challenge:</strong> {caseStudy.challenge}</p><p><strong className="text-base-content">Approach:</strong> {caseStudy.approach}</p></div>
      </details>}
    </motion.article>
  );
};

const Projects: React.FC = () => {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUsingFallback, setIsUsingFallback] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub repositories could not be loaded");
        return response.json() as Promise<GitHubRepository[]>;
      })
      .then((data) => setRepositories(data.filter((repository) =>
        !repository.archived && !repository.fork && Boolean(repository.homepage?.trim()),
      )))
      .catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          setRepositories(fallbackProjects);
          setIsUsingFallback(true);
        }
      })
      .finally(() => setIsLoading(false));
    return () => controller.abort();
  }, []);

  const visibleRepositories = useMemo(
    () => (showAll ? repositories : repositories.slice(0, INITIAL_PROJECT_COUNT)),
    [repositories, showAll],
  );

  return (
    <section id="projects" className="bg-base-200 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">Selected work</p>
          <h2 className="text-4xl font-extrabold text-base-content">Live Projects</h2>
          <p className="mt-4 text-base-content/70">A live collection of my public GitHub projects with deployed links—automatically kept up to date from GitHub.</p>
        </div>
        {isLoading && <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 6 }).map((_, index) => <div key={index} className="h-72 animate-pulse rounded-2xl bg-base-300" />)}</div>}
        {!isLoading && <>
          {isUsingFallback && <div className="mb-6 rounded-xl border border-warning/30 bg-warning/10 px-4 py-3 text-center text-sm text-base-content/75">Showing saved live projects while GitHub is temporarily unavailable. <a href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} target="_blank" rel="noreferrer" className="font-semibold text-primary underline">View GitHub</a></div>}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{visibleRepositories.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
          {repositories.length > INITIAL_PROJECT_COUNT && <div className="mt-12 text-center"><button type="button" onClick={() => setShowAll((current) => !current)} className="btn btn-outline btn-primary">{showAll ? "Show fewer projects" : `Show all ${repositories.length} active projects`}</button></div>}
        </>}
      </div>
    </section>
  );
};

export default Projects;
