const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gradient-to-r from-resume-primary to-resume-secondary text-white">
      <div className="container max-w-4xl mx-auto text-center transform hover:scale-105 transition-transform duration-300">
        <p className="text-lg">© {new Date().getFullYear()} Elberth Ramon Cabrales Gutierrez</p>
      </div>
    </footer>
  );
};

export default Footer;