import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button.jsx';
import useScrolled from '../hooks/useScrolled.js';
import { LINKS } from '../config.js';

const NAV_LINKS = [
  { label: 'Features', href: '#experiences' },
  { label: 'AI', href: '#ai-features' },
  { label: 'For Students', href: '#experiences' },
  { label: 'For Canteens', href: '#experiences' },
  { label: 'For Colleges', href: '#experiences' },
];

export default function Navbar() {
  const scrolled = useScrolled(12);
  const [open, setOpen] = useState(false);

  // Lock background scroll while the mobile menu is open — without this,
  // the page behind can scroll under the panel and, on browsers that
  // don't render backdrop-filter, bleed through and overlap the menu text.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar__row">
        <a href="#top" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-mark" aria-hidden="true" />
          CampusEats
        </a>

        <nav aria-label="Primary">
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <Button as="a" href={LINKS.login} variant="ghost" size="sm">
            Login
          </Button>
          <Button as="a" href={LINKS.start} size="sm">
            Get Started
          </Button>
        </div>

        <button
          className="navbar__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`navbar__mobile ${open ? 'is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className="navbar__mobile-actions">
          <Button as="a" href={LINKS.login} variant="ghost" className="btn--block">
            Login
          </Button>
          <Button as="a" href={LINKS.start} className="btn--block">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}