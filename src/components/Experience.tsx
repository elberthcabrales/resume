import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
interface Job {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

const ExperienceItem = ({ job }: { job: Job }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mb-12 border-l-4 border-resume-primary pl-6 transform hover:scale-[1.01] transition-all duration-300 relative cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="absolute -left-[11px] top-0 w-4 h-4 bg-resume-primary rounded-full" />
      <h3 className="text-xl font-semibold text-resume-primary">
        {job.position}
      </h3>
      <h4 className="text-lg text-resume-secondary mb-2 hover:text-resume-primary transition-colors duration-300">
        {job.company}
      </h4>
      <p className="text-gray-600 mb-4 italic">{job.period}</p>

      <ul
        className={`
          space-y-1 overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"}
        `}
      >
        {job.responsibilities.map((responsibility, index) => (
          <li
            key={index}
            className="flex items-start text-gray-700 leading-relaxed hover:text-resume-primary transition-colors duration-300"
          >
            <ChevronRightIcon className="w-4 h-4 text-resume-primary mr-2 flex-shrink-0" />

            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const jobs: Job[] = [
  {
    company: "AISellink POS (https://www.aisellink.lat/)",
    position: "Sr Software Engineer",
    period: "Sep 2024 - Present",
    responsibilities: [
      "Designed and developed an AI-powered Point of Sale (POS) SaaS platform tailored for small to medium-sized grocery stores and enterprise chains, focusing on real-time sales and inventory tracking, AI-driven insights, and multi-tenant architecture with Prisma and NextJS.",
      "Product Management: Implemented full CRUD operations for product management, including barcode/QR code generation and bulk product import/export using Express.js, Prisma, multer for file handling.",
      "Sales & Purchase Management: Developed sales and purchase modules with real-time transactions, discounts, and multi-payment method support using GraphQL, Prisma, and PDF generation tools.",
      "Inventory & Store Management: Integrated real-time inventory tracking with Zustand for managing state, stock adjustments, and multi-store management with role-based access control (RBAC) using Prisma and custom middleware and Django for users management and JWT.",
      "AI Chat Assistant: Integrated LangChain to provide AI-driven business insights via a chat assistant with Socket IO, enabling store owners to make data-driven decisions.",
      "Subscription & Payment: Implemented subscription handling and billing management using Stripe API, Prisma models, and webhook handling.",
      "Deployment & Infrastructure: Automated deployment and infrastructure provisioning using Docker, Terraform, and EKS. Set up CI/CD pipelines with GitHub Actions.",
      "Offline Mode & Data Sync: Enabled offline POS operations and background data synchronization using IndexedDB and custom sync APIs.",
      "Defining infrastructure for next phase with microservices and event driven architecture using Kafka.",
    ],
  },
  {
    company: "Ventup",
    position: "Sr Software Engineer",
    period: "Jan 2023 - Aug 2024",
    responsibilities: [
      "Invoice Module Enhancement: setting product matching with the invoice uploaded ensuring totals provided by webservice endpoint, parsing binary objects to calculate taxes and totals, fixing unit tests, adding Facturapi message handler using Elixir Phoenix, React.js 18 and GraphQL.",
      "Credit Days Feature: creating migrations for models in Phoenix, adding credit days in order creation flow using pattern matching, adding credit days editing flow, implementing the feature in frontend using React 18 for components, adding custom hooks and adapting GraphQL and Codegen queries and mutations for creating orders flow. deploying this feature in PaaS Elastic Beanstalk on AWS.",
      "Fixing tests and refactoring: adding new unit test using React Testing Library for creating a one hundred percent of tests fixed and refactoring code to improve coverage, refactor the dates module, applying DRY to repeated views and add consistency in currency formats, fixing discount calculation functions in shopping cart. React 18, Typescript. Monitoring and analizing metrics using Elastic Beanstalk on AWS.",
      "Add orders rating for customers, with stars in css transition effect, comments and images upload. React router, Graphql Mutitation, and Codegen.",
      "Add draft order flow in the frontend, including an option to select a reviewer using a modal component with selection functionality, implemented using React, TypeScript, Codegen, and Yup validation.",
      "Module linked invoice using queries connected with Belvo service to get digital invoices from users and add the ability to link invoices to orders. React, Typescript, Codegen, Tailwind CSS.",
      "Creation of wizard signup, adding smart validation using Yup, Regex, React Hooks, and Formik.",
    ],
  },
  {
    company: "Rappi",
    position: "Sr Backend Engineer",
    period: "Jul 2020 - Sep 2022",
    responsibilities: [
      "Microservice with event-driven architecture listening to Kafka topic to notify order state changes using emails and WhatsApp using Node.js and Kotlin. Deployed on AWS ECS.",
      "Collaboration in global notification to send an email and real-time information when order state changes using Kafka consumers to read order modification.",
      "Collaboration in 'Mi tienda' fulfillment, Creating, and adoption orders process with micro-services using Golang, Node.js, and Kotlin using documents.",
      "Collaboration in 'Mi tienda' catalog product process, Creating microservices with NodeJs and Kotlin, using Kafka, PostgreSQL, SQS, S3, and Redis as cache. Provisioned by ansible playbooks in AWS using VPC, MSK, RDS, S3, EC2.",
      "Collaboration in 'Mi tienda' store services, workflow for creating partner’s store using Nodejs and Postgres Database, using MSK, RDS and EC2 on AWS.",
      "Creating and adopting microservices with Node.js and Kotlin.",
      "Tracker for relevant user events named 'huella del editor', this is a micro-service in Golang developed from scratch subscribed to a Kafka topic that is tracking events and the NodeJS public microservice with RESTFul has a middleware implementing a producer to send specific events to Kafka topic. This microservice is provisioned with Ansible and dynamic inventory python. Cloud services AWS MSK, EC2, VPC implemented.",
      "Bug fixing: Monitoring and support for issues reported, using APM with SignalFX.",
      "Collaboration Integrating and adapting endpoints for 'paga con rappi' on 'mi tienda' Node.js and TypeScript.",
      "Deployments with CI/CD with Jenkins and Ansible, deployed on AWS.",
    ],
  },
  {
    company: "Kueski",
    position: "Full-Stack Engineer",
    period: "Mar 2019 - Apr 2020",
    responsibilities: [
      "Collaboration in financial reports with parallelism and concurrency using Ruby.",
      "Collaboration in a new version of the loyal compliance system improving performance, refactoring, and decoupling components in Ruby and Angular.js.",
      "Neo4j fraud system with ruby and graph algorithms, deployed on AWS.",
      "Improve legacy code performance in collections, payments, operation dashboards with Ruby Sinatra, Angularjs, and Grape, and gems with compatibility in older versions.",
      "Fix bugs and incidence, using datadog.",
      "We added new steps with resilience to the orchestration core of workflow related to data sources and for new evaluation requirements using Ruby.",
      "Migrations with scripts and parallel process bash and Ruby.",
      "New feature for backup and restoration of loans canceled by internal issues. Using Angularjs and Ruby.",
    ],
  },
  {
    company: "Marival Group",
    position: "Full-Stack Engineer",
    period: "Apr 2018 – Dec 2018",
    responsibilities: [
      "Responsible for implementing and migrating the new Linux Server with Docker and Ansible Playbooks in Linode.",
      "Responsible for the project that we called Gorillacms where a test-driven development with Laravel. All this was carried out with the agile scrum methodology where tasks were divided.",
    ],
  },
  {
    company: "Freelance, Guadalajara, México",
    position: "Full-Stack Engineer",
    period: "Jan 2017 – Apr 2018",
    responsibilities: [
      "Development of LMS (Learning Management System) Nodejs. deployed on AWS.",
      "Implementation and training of Odoo with Python, deployed on AWS.",
      "Travel application made with PhoneGap and Apache Cordova that consumed API REST with Python.",
    ],
  },
  {
    company: "Government SEJ, Guadalajara, Mexico",
    position: "Full-Stack Engineer",
    period: "Jan 2016 – Feb 2017",
    responsibilities: [
      "Collaboration in system RH to check payment history in their places of teachers. Developed in PHP.",
      "Maintenance of systems with .NET and adaptation to new requirements of the requested information.",
      "Creation of asynchronous processes with Nodejs to execute heavy tasks in the Informix database and calculate payments faster.",
    ],
  },
  {
    company: "CGTI Government, Nayarit, Mexico",
    position: "Full-Stack Engineer",
    period: "Nov 2014 – Dec 2015",
    responsibilities: [
      "Development of sites for dependencies from Nayarit using Laravel 4 and Joomla.",
      "Local channel 11 with ASP.NET, Backbone.js, Knockout.js, and jQuery.",
      "Collaboration in affiliation system using Java.",
    ],
  },
  {
    company: "Quantum Soluciones, Nayarit, Mexico",
    position: "Dot net Developer",
    period: "Jun 2013 – Feb 2014",
    responsibilities: [
      "Collaboration in the development of libraries for libraries and electronic billing systems with C#, as well as the development of the company's website with ASP Web Forms and deployment in IIS.",
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
