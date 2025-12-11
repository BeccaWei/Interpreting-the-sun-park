import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "背景", href: "#background" },
    { label: "理念", href: "#concept" },
    { label: "概况", href: "#intro" },
    { label: "生态解说", href: "#spots" },
    { label: "未来", href: "#future" },
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-nature-900/95 shadow-lg backdrop-blur-sm py-2' : 'bg-gradient-to-b from-black/60 to-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center text-white">
        <div className="font-serif text-xl md:text-2xl font-bold tracking-wider cursor-pointer" onClick={() => scrollTo('#hero')}>
          Eco-Pulse <span className="text-nature-300 text-sm font-sans ml-2 hidden sm:inline">Re-Interpreting Sun Park</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm uppercase tracking-widest hover:text-nature-300 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-nature-800 absolute top-full left-0 w-full shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left text-white hover:text-nature-300 text-lg"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;