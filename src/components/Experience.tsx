interface Job {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

const ExperienceItem = ({ job }: { job: Job }) => (
  <div className="mb-12 border-l-4 border-resume-primary pl-6 transform hover:scale-[1.01] transition-all duration-300 relative">
    <div className="absolute -left-[11px] top-0 w-4 h-4 bg-resume-primary rounded-full" />
    <h3 className="text-xl font-semibold text-resume-primary">{job.position}</h3>
    <h4 className="text-lg text-resume-secondary mb-2 hover:text-resume-primary transition-colors duration-300">
      {job.company}
    </h4>
    <p className="text-gray-600 mb-4 italic">{job.period}</p>
    <ul className="list-disc list-inside space-y-2">
      {job.responsibilities.map((responsibility, index) => (
        <li key={index} className="text-gray-700 leading-relaxed hover:text-resume-primary transition-colors duration-300">
          {responsibility}
        </li>
      ))}
    </ul>
  </div>
);

  const jobs: Job[] = [
    {
      company: "AISellink POS",
      position: "Sr Software Engineer",
      period: "Sep 2024 - Present",
      responsibilities: [
        "Designed and developed an AI-powered Point of Sale (POS) SaaS platform",
        "Implemented full CRUD operations for product management",
        "Developed sales and purchase modules with real-time transactions",
        "Integrated real-time inventory tracking with Zustand",
        "Integrated LangChain to provide AI-driven business insights",
        "Implemented subscription handling and billing management",
        "Automated deployment and infrastructure provisioning",
        "Enabled offline POS operations and background data synchronization",
      ],
    },
    {
      company: "Ventup",
      position: "Sr Software Engineer",
      period: "Jan 2023 - Aug 2024",
      responsibilities: [
        "Invoice Module Enhancement using Elixir Phoenix and React.js 18",
        "Credit Days Feature implementation with Phoenix and React 18",
        "Improved test coverage using React Testing Library",
        "Implemented orders rating system with CSS transitions",
        "Developed draft order flow with TypeScript and Yup validation",
        "Created wizard signup with smart validation",
      ],
    },
    {
      company: "Rappi",
      position: "Sr Backend Engineer",
      period: "Jul 2020 - Sep 2022",
      responsibilities: [
        "Developed microservices with event-driven architecture using Node.js and Kotlin",
        "Collaborated in global notification system using Kafka",
        "Created microservices for 'Mi tienda' fulfillment using Golang and Node.js",
        "Implemented store services workflow for partner's stores",
        "Developed tracker system for user events in Golang",
      ],
    },
  ];

const Experience = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-resume-primary relative inline-block after:content-[''] after:absolute after:w-full after:h-1 after:bg-resume-primary after:bottom-0 after:left-0">
          Experience
        </h2>
        <div className="relative">
          {jobs.map((job, index) => (
            <ExperienceItem key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
