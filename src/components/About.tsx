const About = () => {
  const technologies = [
    {
      name: 'Tailwind CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      color: '#06B6D4',
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#F7DF1E',
    },
    {
      name: 'React.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB',
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933',
    },
    {
      name: 'Laravel',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      color: '#FF2D20',
    },


  ];

  return (
    <section id="apropos" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Titre de section */}
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            À propos
          </h2>
          <div className="w-24 h-1 bg-[#7B5DFF] mx-auto mb-12"></div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 text-center leading-relaxed mb-16 max-w-3xl mx-auto">
            Développeur web et designer graphique passionné par l'UX/UI, je conçois des applications
            et des designs modernes, intuitifs et responsive.
          </p>

          {/* Technologies */}
          <div className="space-y-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
              Technologies & Compétences
            </h3>

            {/* Ligne 1: Tailwind, JavaScript, React */}
            <div className="flex justify-center items-center gap-16">
              {technologies.slice(0, 3).map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-20 h-20 mb-4 p-4 rounded-xl bg-gray-900/50 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-gray-300 font-medium group-hover:text-primary transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Ligne 2: Node.js, Laravel, FastAPI */}
            <div className="flex justify-center items-center gap-16">
              {technologies.slice(3, 6).map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-20 h-20 mb-4 p-4 rounded-xl bg-gray-900/50 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-gray-300 font-medium group-hover:text-primary transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Ligne 3: MySQL, PostgreSQL */}
            <div className="flex justify-center items-center gap-16">
              {technologies.slice(6, 8).map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-20 h-20 mb-4 p-4 rounded-xl bg-gray-900/50 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-gray-300 font-medium group-hover:text-primary transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
