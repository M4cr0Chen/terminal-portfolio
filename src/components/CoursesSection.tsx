import BentoCard from "./BentoCard";

const courses = [
  { code: "CS 135 & 136", title: "Functional & Elementary Algos" },
  { code: "CS 241 & 246", title: "Foundations & OOP" },
  { code: "STAT 230", title: "Probability" },
];

export default function CoursesSection() {
  return (
    <BentoCard>
      <h2 className="text-base font-bold text-white mb-3">Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {courses.map((course) => (
          <div
            key={course.code}
            className="p-3 rounded-lg border border-[var(--color-card-border)] bg-[var(--color-background)]"
          >
            <h3 className="text-sm font-semibold text-white">{course.code}</h3>
            <p className="text-xs text-[var(--color-muted)] mt-0.5">
              {course.title}
            </p>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
