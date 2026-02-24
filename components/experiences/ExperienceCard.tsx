
type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  date: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo?: string;
};

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="relative border-l-2 border-fun-gray-dark pl-8 pb-16 last:pb-0 ml-4">
      {/* Timeline dot */}
      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${experience.current ? 'bg-fun-pink' : 'bg-fun-gray'}`}></div>

      {/* Date badge */}
      <div className="mb-4">
        <span className={`inline-block px-4 py-1.5 text-sm rounded-full ${experience.current ? 'bg-fun-pink text-black' : 'bg-fun-gray-dark text-fun-gray-light'}`}>
          {experience.date}
        </span>
      </div>

      {/* Role & Company */}
      <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
      <div className="flex items-center gap-2 mt-2 mb-6">
        <span className="text-fun-pink font-medium text-lg">{experience.company}</span>
        <span className="text-fun-gray">•</span>
        <span className="text-fun-gray text-base">{experience.location}</span>
      </div>

      {/* Description */}
      <p className="text-fun-gray-light mb-6 text-base">{experience.description}</p>

      {/* Responsibilities */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Responsabilidades</h4>
        <ul className="space-y-3">
          {experience.responsibilities.map((resp, index) => (
            <li key={index} className="text-fun-gray-light text-base flex items-start">
              <span className="text-fun-pink mr-3 mt-1 flex-shrink-0">▹</span>
              {resp}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Tecnologias</h4>
        <div className="flex flex-wrap gap-3">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm bg-fun-pink-dark text-fun-pink rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
