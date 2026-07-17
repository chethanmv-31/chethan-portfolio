import { SKILL_CATEGORIES } from "./skillsData";
import { SkillCard } from "./SkillCard";

export function SkillsGrid() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
      {SKILL_CATEGORIES.map((item, index) => (
        <SkillCard key={item.title} item={item} index={index} />
      ))}
    </div>
  );
}
