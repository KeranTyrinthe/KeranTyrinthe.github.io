import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'JavaScript',
      emetteur: 'Cursa',
      lien: 'https://cursa.app/fr/mon-certificat/cert38b7409a15f8fd8369601ce280f72bab',
    },
    {
      name: 'Node.js',
      emetteur: 'Cursa',
      lien: 'https://cursa.app/fr/mon-certificat/certe4745afb1d12f2bdb0188b2b08ab9ff5',
    },
    {
      name: 'React.js',
      emetteur: 'Cursa',
      lien: 'https://cursa.app/fr/mon-certificat/certe8ecc9e5c0066360150cb19ae41ac50b',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-[#7B5DFF] mx-auto mb-12"></div>

          {/* Cartes de certifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 hover:border-[#7B5DFF] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#7B5DFF]/20"
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* Icône */}
                  <div className="w-20 h-20 bg-[#7B5DFF]/20 rounded-full flex items-center justify-center group-hover:bg-[#7B5DFF]/30 transition-all">
                    <Award size={40} className="text-[#7B5DFF]" />
                  </div>

                  {/* Nom de la certification */}
                  <h3 className="text-2xl font-bold text-white text-center">
                    {cert.name}
                  </h3>

                  {/* Émetteur */}
                  <p className="text-gray-400 text-center">
                    Émetteur : <span className="text-[#7B5DFF] font-semibold">{cert.emetteur}</span>
                  </p>

                  {/* Lien */}
                  <a
                    href={cert.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-[#7B5DFF] transition-all mt-4 group"
                  >
                    <span className="font-medium">Voir la certification</span>
                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
