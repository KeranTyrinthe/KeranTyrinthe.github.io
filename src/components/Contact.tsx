import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Créer le message WhatsApp
    const message = `Bonjour, je m'appelle ${formData.nom} et mon email est ${formData.email}. ${formData.message}`;
    const whatsappURL = `https://wa.me/243999224209?text=${encodeURIComponent(message)}`;

    // Ouvrir WhatsApp
    window.open(whatsappURL, '_blank');

    setSubmitMessage('Redirection vers WhatsApp...');
    setFormData({ nom: '', email: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Contact
          </h2>
          <div className="w-24 h-1 bg-[#7B5DFF] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Restons en contact
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Vous avez un projet en tête ? N'hésitez pas à me contacter.
                  Je serai ravi de discuter de vos besoins et de voir comment je peux vous aider.
                </p>
              </div>

              {/* Coordonnées */}
              <div className="space-y-4">
                <a
                  href="mailto:keranenexus@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#7B5DFF] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#7B5DFF]/20 rounded-lg flex items-center justify-center group-hover:bg-[#7B5DFF]/30 transition-all">
                    <Mail size={24} className="text-[#7B5DFF]" />
                  </div>
                  <span>keranenexus@gmail.com</span>
                </a>

                <a
                  href="tel:+243999224209"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#7B5DFF] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#7B5DFF]/20 rounded-lg flex items-center justify-center group-hover:bg-[#7B5DFF]/30 transition-all">
                    <Phone size={24} className="text-[#7B5DFF]" />
                  </div>
                  <span>+243 999 224 209</span>
                </a>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-[#7B5DFF]/20 rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-[#7B5DFF]" />
                  </div>
                  <span>Lubumbashi, RDC</span>
                </div>
              </div>

              {/* Liens sociaux */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Retrouvez-moi sur
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/KeranTyrinthe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-white hover:text-[#7B5DFF] hover:border-[#7B5DFF] transition-all hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/keran-mwambi-5604b634a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-white hover:text-[#7B5DFF] hover:border-[#7B5DFF] transition-all hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://wa.me/243999224209"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-white hover:text-[#7B5DFF] hover:border-[#7B5DFF] transition-all hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-gradient-to-br from-[#7B5DFF]/10 to-[#7B5DFF]/5 border border-[#7B5DFF]/30 rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-white font-medium mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#7B5DFF] transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#7B5DFF] transition-colors"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#7B5DFF] transition-colors resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className="text-center text-green-400 font-medium">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
