import React from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from '../constants/logoUrl';

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollTo: (id: string) => void;
};

export default function Header({ menuOpen, setMenuOpen, scrollTo }: HeaderProps) {
  return (
    <header className="site-header">
      <a href="#inicio" aria-label="Ir al inicio">
        <Logo />
      </a>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
        <button onClick={() => scrollTo('agenda')}>Próximos cursos</button>
        <button onClick={() => scrollTo('propuestas')}>Propuestas</button>
        <button onClick={() => scrollTo('metodo')}>Cómo aprendés</button>
        <button onClick={() => scrollTo('contacto')}>Contacto</button>
      </nav>
      <button className="header-cta" onClick={() => scrollTo('agenda')}>Ver fechas <ArrowRight size={16} /></button>
      <button className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
