import { Mail, Phone, Github, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Contenu principal du footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Colonne 1 - À propos */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Keran</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Développeur web et designer graphique créant des expériences digitales
                modernes et professionnelles.
              </p>
            </div>

            {/* Colonne 2 - Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <div className="space-y-3">
                <a
                  href="mailto:keranenexus@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#7B5DFF] transition-colors text-sm"
                >
                  <Mail size={18} />
                  <span>keranenexus@gmail.com</span>
                </a>
                <a
                  href="tel:+243999224209"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#7B5DFF] transition-colors text-sm"
                >
                  <Phone size={18} />
                  <span>+243 999 224 209</span>
                </a>
              </div>
            </div>

            {/* Colonne 3 - Réseaux sociaux */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Suivez-moi</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/KeranTyrinthe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-white hover:text-[#7B5DFF] hover:border-[#7B5DFF] transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/keran-mwambi-5604b634a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-white hover:text-[#7B5DFF] hover:border-[#7B5DFF] transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://wa.me/243999224209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-white hover:text-[#7B5DFF] hover:border-[#7B5DFF] transition-all hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>
              © {currentYear} Keran. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
