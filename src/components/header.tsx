'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Preços', id: 'precos' },
  { label: 'Contato', id: 'contato' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Fecha o menu mobile
    }
  };

  return (
    <header className="bg-[#68C9E5] w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 pl-2">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-10 text-sm quicksand-semibold text-black">
            {links.map((item, idx) => (
              <li
                key={idx}
                className="relative cursor-pointer group"
                onClick={() => scrollToSection(item.id)}
              >
                <span className="quicksand-semibold text-sm text-black group-hover:text-black transition-colors duration-300">
                  {item.label}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="focus:outline-none text-black cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#68C9E5] px-4 pb-4">
          <ul className="flex flex-col items-center gap-4 text-sm quicksand-semibold text-black">
            {links.map((item, idx) => (
              <li
                key={idx}
                className="hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
