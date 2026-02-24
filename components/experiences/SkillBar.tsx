
type Skill = {
  name: string;
  level: number;
};

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-fun-gray-light font-medium">{skill.name}</span>
        <span className="text-fun-pink text-sm font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-fun-gray-dark rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-fun-pink to-fun-pink-light rounded-full transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;
