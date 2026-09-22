import { useEffect, useRef, useState } from 'react';
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
  const mobilePanelRef = useRef(null);
  const pendingHrefRef = useRef(null);

  // Lock background scroll while the mobile menu is open — without this,
  // the page behind can scroll under the panel and, on browsers that
  // don't render backdrop-filter, bleed through and overlap the menu text.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Tapping a mobile nav link used to jump the page to the target section
  // instantly while the panel was still mid fade-out — for that ~250ms
  // window the (now semi-transparent) panel and the freshly-scrolled page
  // content were visible at once, which is the overlapping/garbled "broken
  // menu" look. Fix: close the panel first, and only scroll once its own
  // close transition has actually finished.
  useEffect(() => {
    const panel = mobilePanelRef.current;
    if (open || !panel || !pendingHrefRef.current) return;

    const scrollToPending = () => {
      const href = pendingHrefRef.current;
      pendingHrefRef.current = null;
      if (href) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const onTransitionEnd = (e) => {
      if (e.target !== panel) return;
      clearTimeout(fallback);
      scrollToPending();
    };

    panel.addEventListener('transitionend', onTransitionEnd);
    // Fallback in case the transition never fires (reduced-motion users, etc.)
    const fallback = setTimeout(scrollToPending, 400);

    return () => {
      panel.removeEventListener('transitionend', onTransitionEnd);
      clearTimeout(fallback);
    };
  }, [open]);

  const handleMobileLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      pendingHrefRef.current = href;
    }
    setOpen(false);
  };

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

      <div ref={mobilePanelRef} className={`navbar__mobile ${open ? 'is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} onClick={(e) => handleMobileLinkClick(e, link.href)}>
            {link.label}
          </a>
        ))}
        <div className="navbar__mobile-actions">
          <Button as="a" href={LINKS.login} variant="ghost" className="btn--block" onClick={() => setOpen(false)}>
            Login
          </Button>
          <Button as="a" href={LINKS.start} className="btn--block" onClick={() => setOpen(false)}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}