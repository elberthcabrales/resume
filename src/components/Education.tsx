const Education = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-resume-primary relative inline-block after:content-[''] after:absolute after:w-full after:h-1 after:bg-resume-primary after:bottom-0 after:left-0">
          Education
        </h2>
        <div className="border-l-4 border-resume-primary pl-6 transform hover:scale-[1.02] transition-all duration-300 relative">
          <div className="absolute -left-[11px] top-0 w-4 h-4 bg-resume-primary rounded-full" />
          <h3 className="text-xl font-semibold text-resume-primary hover:text-resume-accent transition-colors duration-300">
            BSc. Eng. in Computer Science
          </h3>
          <p className="text-lg text-resume-secondary">Universidad Autónoma de Nayarit</p>
          <p className="text-gray-600 italic">2008 - 2013</p>
        </div>
      </div>
    </section>
  );
};

export default Education;