const COLS = [
  { title: 'Product', links: ['Students', 'Canteens', 'Colleges', 'AI'] },
  { title: 'Company', links: ['About', 'Contact', 'Privacy', 'Terms'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="navbar__logo">
              <span className="navbar__logo-mark" aria-hidden="true" />
              CampusEats
            </div>
            <p>AI-powered food ordering for smarter campuses.</p>
          </div>

          <div className="footer__cols">
            {COLS.map((col) => (
              <div key={col.title} className="footer__col">
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#top">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          © {new Date().getFullYear()} CampusEats. Built for the iQOO Hackathon.
        </div>
      </div>
    </footer>
  );
}
