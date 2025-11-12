import { ExternalLink, Github } from 'lucide-react';

const ProjectsWeb = () => {
  const projects = [
    {
      name: 'Break and Play',
      image: '/break-and-play.webp',
      description: 'Plateforme de gestion des événements',
      stack: ['Tailwind', 'Node.js', 'SQLlite'],
      lienSite: 'https://break-admin.netlify.app/',
      lienGithub: 'https://github.com/KeranTyrinthe/break-and-play-admin',
    },
    {
      name: 'Facturo',
      image: '/facturo.webp',
      description: 'Application de facturation complète',
      stack: ['React', 'Node.js', 'SQLlite'],
      lienSite: 'https://facturo-delta.vercel.app/login',
      lienGithub: 'https://github.com/YakeDev/facturo',
    },
    {
      name: 'CLI Nexus',
      image: '/clinodes.webp',
      description: 'Outil CLI pour les développeurs pour générer instantanément des projets Backend, Frontend ou Fullstack avec des architectures professionnelles',
      stack: ['JavaScript', 'CLI'],
      lienSite: 'https://www.npmjs.com/package/cli-nexus',
      lienGithub: 'https://github.com/KeranTyrinthe/cli-nexus',
    },
    {
      name: 'CSC Mon Ami',
      image: '/mon-ami.webp',
      description: 'Plateforme web de gestion scolaire',
      stack: ['Tailwind', 'Node.js', 'MySQL'],
      lienSite: 'https://csc-mon-ami-kasumbalesa-27380.nodechef.com/',
      lienGithub: 'https://csc-mon-ami-kasumbalesa-27380.nodechef.com/',
    },
    {
      name: 'Latyshop',
      image: '/latyshop.webp',
      description: 'Boutique en ligne e-commerce',
      stack: ['React', 'Tailwind'],
      lienSite: 'https://latishop.netlify.app/',
      lienGithub: 'https://latishop.netlify.app/',
    },
    {
      name: 'Nexus Wedding',
      image: '/nexus-wedding.webp',
      description: 'Plateforme de gestion d\'événements',
      stack: ['React', 'Node.js', 'Tailwind'],
      lienSite: 'https://nexus-wedding.onrender.com/admin',
      lienGithub: 'https://github.com/KeranTyrinthe/Nexus_Wedding',
    },
  ];

  return (
    <section id="projets-web" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Projets Web
          </h2>
          <div className="w-24 h-1 bg-[#7B5DFF] mx-auto mb-12"></div>

          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-[#7B5DFF] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#7B5DFF]/20"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>

                {/* Contenu */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#7B5DFF]/20 text-[#7B5DFF] text-xs font-medium rounded-full border border-[#7B5DFF]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Boutons */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.lienSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#7B5DFF] text-white text-sm font-semibold rounded-lg hover:bg-[#6B4DFF] transition-all"
                    >
                      <ExternalLink size={16} />
                      Voir le projet
                    </a>
                    <a
                      href={project.lienGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-all border border-gray-700"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsWeb;
