import { Palette, X } from 'lucide-react';
import { useState } from 'react';

const Design = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const designProjects = [
    {
      name: 'Flyer Anniversaire',
      type: 'Flyer',
      logiciel: 'Photoshop',
      image: '/Birthday.2.webp',
    },
    {
      name: 'Design Événementiel',
      type: 'Affiche',
      logiciel: 'Photoshop',
      image: '/DOM ANN.webp',
    },
    {
      name: 'Flyers trading',
      type: 'Affiche',
      logiciel: 'Photoshop',
      image: '/j-2.webp',
    },
    {
      name: 'Menu Restaurant',
      type: 'Menu',
      logiciel: 'Photoshop',
      image: '/burgermenu.webp',
    },
    {
      name: 'Visuel Marketing',
      type: 'Design',
      logiciel: 'Photoshop',
      image: '/newvisuel.webp',
    },
    {
      name: 'Réseaux Sociaux',
      type: 'Post',
      logiciel: 'Photoshop',
      image: '/reseaux_j.webp',
    },
  ];

  return (
    <section id="design" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Projets Design
          </h2>
          <div className="w-24 h-1 bg-[#7B5DFF] mx-auto mb-12"></div>

          {/* Grille de projets design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(index)}
                className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-[#7B5DFF] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#7B5DFF]/20 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-40 md:h-44 lg:h-15 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>

                  {/* Icône overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-[#7B5DFF] rounded-full p-4">
                      <Palette size={32} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-3 py-1 bg-[#7B5DFF]/20 text-[#7B5DFF] font-medium rounded-full border border-[#7B5DFF]/30">
                      {project.type}
                    </span>
                    <span className="text-gray-400">
                      {project.logiciel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Popup */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative max-w-2xl w-full">
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#7B5DFF] transition-colors"
              aria-label="Fermer"
            >
              <X size={32} />
            </button>

            {/* Image en grand */}
            <img
              src={designProjects[selectedProject].image}
              alt={designProjects[selectedProject].name}
              className="max-w-full max-h-96 mx-auto rounded-xl border-2 border-[#7B5DFF]"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Info projet */}
            <div className="mt-6 text-center" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-bold text-white mb-2">
                {designProjects[selectedProject].name}
              </h3>
              <p className="text-gray-400">
                {designProjects[selectedProject].type} • {designProjects[selectedProject].logiciel}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Design;
