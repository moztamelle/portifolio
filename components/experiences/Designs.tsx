import { education, experiences, skills } from "@/data/content/experiences";
import ExperienceCard from "./ExperienceCard";
import SkillBar from "./SkillBar";

function Experiences() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Work Experience Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-10 flex items-center">
          <span className="w-2 h-8 bg-fun-pink mr-3 rounded"></span>
          Experiência Profissional
        </h2>
        <div className="ml-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-10 flex items-center">
          <span className="w-2 h-8 bg-fun-pink mr-3 rounded"></span>
          Formação Académica
        </h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="bg-fun-gray-darkest rounded-xl p-8 border border-fun-gray-dark">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-fun-pink text-lg mt-1">{edu.institution}</p>
                </div>
                <span className="text-fun-gray text-base">{edu.date}</span>
              </div>
              <p className="text-fun-gray-light text-base">{edu.location}</p>
              <p className="text-fun-gray mt-4 text-base">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-10 flex items-center">
          <span className="w-2 h-8 bg-fun-pink mr-3 rounded"></span>
          Competências
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend */}
          <div className="bg-fun-gray-darkest rounded-xl p-8 border border-fun-gray-dark">
            <h3 className="text-lg font-semibold text-white mb-6">Frontend</h3>
            <div>
              {skills.frontend.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
          {/* Backend */}
          <div className="bg-fun-gray-darkest rounded-xl p-8 border border-fun-gray-dark">
            <h3 className="text-lg font-semibold text-white mb-6">Backend</h3>
            <div>
              {skills.backend.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
          {/* Tools */}
          <div className="bg-fun-gray-darkest rounded-xl p-8 border border-fun-gray-dark">
            <h3 className="text-lg font-semibold text-white mb-6">Design</h3>
            <div>
              {skills.tools.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
          {/* Soft Skills */}
          <div className="bg-fun-gray-darkest rounded-xl p-8 border border-fun-gray-dark">
            <h3 className="text-lg font-semibold text-white mb-6">Outros</h3>
            <div>
              {skills.soft.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experiences;
