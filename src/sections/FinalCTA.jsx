import Button from '../components/Button.jsx';
import { LINKS } from '../config.js';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta__inner">
        <h2>Ready to make campus food smarter?</h2>
        <p>Discover faster. Order smarter. Pick up easier.</p>
        <div className="final-cta__actions">
          <Button as="a" href={LINKS.start}>Start Ordering</Button>
          <Button as="a" href="#top" variant="ghost">Explore CampusEats</Button>
        </div>
      </div>
    </section>
  );
}
