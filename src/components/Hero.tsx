import { Github, Linkedin, MessageCircle, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-black pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Photo avec anneau animé */}
          <div className="relative w-56 h-56 md:w-64 md:h-64">
            {/* Anneau externe qui tourne */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#7B5DFF] rounded-full animate-orbit"></div>
            </div>

            {/* Cercle lumineux qui pulse */}
            <div className="absolute inset-8 rounded-full border-4 border-[#7B5DFF] animate-glow"></div>

            {/* Cercle de gradient qui tourne lentement */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-r from-[#7B5DFF] via-[#9D7FFF] to-[#7B5DFF] animate-spin-slow blur-sm opacity-50"></div>

            {/* Photo / Avatar */}
            <div className="absolute inset-11 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center text-5xl md:text-6xl font-bold text-white border-4 border-black shadow-2xl overflow-hidden">
              <img
                src="/photo.webp"
                alt="Keran Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texte d'introduction */}
          <div className="max-w-2xl space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              <span className="text-[#7B5DFF]">Code</span> & <span className="text-[#7B5DFF]">Créativité</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Développeur Web & Designer UI/UX
            </p>
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href="#projets-web"
              className="px-6 py-3 bg-[#7B5DFF] text-white font-semibold rounded-lg hover:bg-[#6B4DFF] transition-all hover:scale-105 shadow-lg hover:shadow-[#7B5DFF]/50 text-sm"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border-2 border-[#7B5DFF] text-white font-semibold rounded-lg hover:bg-[#7B5DFF] transition-all hover:scale-105 text-sm"
            >
              Me contacter
            </a>
          </div>

          {/* Icônes réseaux sociaux */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://github.com/KeranTyrinthe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/keran-mwambi-5604b634a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://wa.me/243999224209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary transition-all hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
          </div>

          {/* Flèche scroll */}
          <a
            href="#apropos"
            className="mt-8 text-white hover:text-[#7B5DFF] transition-all animate-bounce"
            aria-label="Défiler vers le bas"
          >
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
