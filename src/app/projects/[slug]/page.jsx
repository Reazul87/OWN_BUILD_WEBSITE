import { projects } from "@/data/projects";
import Image from "next/image";

const ProjectDetails = async ({ params }) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug.toLowerCase() === slug);
  if (!project) return null;

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold  text-white/80 mb-4 md:mb-6">
          {project.name}
        </h1>

        {/* Image */}
        <div className="relative md:h-100 h-32 brightness-85 rounded-xl overflow-hidden mb-6 md:mb-8">
          <Image
            src={project.image}
            alt={project.name}
            className="object-cover"
            height={400}
            width={1000}
          />
        </div>

        {/* Description */}
        <p className="text-white/65 mb-4 md:mb-6">{project.description}</p>

        {/* Tech Stack */}
        <h3 className="text-xl text-white/75 font-semibold mb-3">
          Main Technology Stack
        </h3>
        <div className="flex flex-wrap gap-2 md:8 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 md:10 mb-5">
          <a
            href={project.liveLink}
            target="_blank"
            className="px-4 py-2 bg-yellow-500/95 text-black/80 rounded-md text-sm"
          >
            Live Project
          </a>
          <a
            href={project.githubClient}
            target="_blank"
            className="px-4 py-2 border border-white/20 text-white/80 rounded-md text-sm"
          >
            GitHub (Client)
          </a>
        </div>

        {/* Challenges */}
        <h3 className="text-xl text-white/75 font-semibold mb-3">
          Challenges Faced
        </h3>
        <ul className="list-disc list-inside text-gray-500 mb-5 md:mb-8">
          {project.challenges.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Future Plans */}
        <h3 className="text-xl text-white/75 font-semibold mb-3">
          Future Improvements & Plans
        </h3>
        <ul className="list-disc list-inside text-gray-500">
          {project.futurePlans.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetails;
