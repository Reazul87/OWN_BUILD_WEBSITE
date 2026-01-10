import { X, ExternalLink, Github, ChevronRight } from "lucide-react";


const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project image */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            {project.title}
          </h2>

          {/* Tech stack */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Description
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Challenges */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Challenges Faced
            </h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Future Improvements */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Future Improvements
            </h3>
            <ul className="space-y-2">
              {project.improvements.map((improvement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  {improvement}
                </li>
              ))}
            </ul>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 rounded-lg font-medium text-center transition-all duration-300 bg-primary text-primary-foreground hover:opacity-90 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 rounded-lg font-medium text-center transition-all duration-300 border border-border text-foreground hover:border-primary/50 flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
