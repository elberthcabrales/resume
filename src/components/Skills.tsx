const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="mb-8 transform hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-lg font-semibold mb-4 text-resume-primary relative inline-block after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-resume-primary after:bottom-0 after:left-0">
      {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-gray-100 text-resume-secondary px-4 py-2 rounded-lg hover:bg-resume-primary hover:text-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

  const skillCategories = {
    Frontend: [
      "Next.js",
      "React.js",
      "Typescript",
      "Prisma",
      "Zustand",
      "Socket.io",
      "Yup",
      "React Hooks",
      "apollographql",
      "Test Library",
      "Cypress.js",
      "Cucumber.js",
    ],
    Backend: ["Python", "Node.js", "Elixir", "Golang"],
    Frameworks: [
      "Django/Flask",
      "Express/hapi js",
      "Echo/Gin",
      "Phoenix elixir",
      "Express.js",
      "GraphQL",
      "LangChain",
    ],
    Operations: [
      "Terraform",
      "Ansible",
      "Github Actions",
      "Docker",
      "APM",
    ],
    AWS: [
      "S3",
      "RDS",
      "EKS",
      "MSK",
      "Elastic Beanstalk",
      "SQS",
    ],
    Databases: [
      "Neo4J",
      "Postgres",
      "Redis",
      "MongoDB",
    ],
    Skills: [
      "Design Patterns",
      "SE principles",
      "Problem Solving",
      "System Design",
      "TDD",
      "BDD",
    ],
  };

const Skills = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-resume-primary relative inline-block after:content-[''] after:absolute after:w-full after:h-1 after:bg-resume-primary after:bottom-0 after:left-0">
          Skills
        </h2>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <SkillCategory key={category} title={category} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
