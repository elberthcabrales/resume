import { Mail, MapPin, Phone, Linkedin, Github, Code } from "lucide-react";

const Header = () => {
  return (
    <header className="py-12 px-4 bg-gradient-to-r from-resume-primary to-resume-secondary text-white transform transition-all duration-500 hover:shadow-xl">
      <div className="container max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
          Elberth Ramon Cabrales Gutierrez
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
              <MapPin className="w-5 h-5 animate-pulse" />
              <span>Tepic, Nayarit</span>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
              <Phone className="w-5 h-5 animate-pulse" />
              <span>3111323793</span>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
              <Mail className="w-5 h-5 animate-pulse" />
              <a
                href="mailto:elberthcabrales@gmail.com"
                className="hover:text-resume-accent underline-offset-4 hover:underline transition-all"
              >
                elberthcabrales@gmail.com
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
              <Linkedin className="w-5 h-5 animate-pulse" />
              <a
                href="https://www.linkedin.com/in/elberth-cabrales"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-resume-accent underline-offset-4 hover:underline transition-all"
              >
                linkedin.com/in/elberth-cabrales
              </a>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
              <Github className="w-5 h-5 animate-pulse" />
              <a
                href="https://github.com/elberthcabrales"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-resume-accent underline-offset-4 hover:underline transition-all"
              >
                github.com/elberthcabrales
              </a>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
              <Code className="w-5 h-5 animate-pulse" />
              <a
                href="https://leetcode.com/u/elberthcabrales/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-resume-accent underline-offset-4 hover:underline transition-all"
              >
                https://leetcode.com/u/elberthcabrales/
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>
          <p className="text-gray-100 leading-relaxed">
            A full-stack developer with +10 years of experience collaborating in
            developing web systems and infrastructure for designing solutions
            with various technologies and an agnostic approach to
            problem-solving with enthusiasm for getting things done with best
            practices. Looking for a senior role in order to participate in a
            top-tier company where my professionalism can bring value to the
            project.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Languages</h2>
          <div className="flex gap-4">
            <span className="bg-resume-secondary px-4 py-2 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
              Spanish
            </span>
            <span className="bg-resume-secondary px-4 py-2 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
              English
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
