import Button from '../components/Button.jsx';
import PhoneMockup from '../components/PhoneMockup.jsx';
import FoodCard from '../components/FoodCard.jsx';
import { LINKS } from '../config.js';
import { DEMO_MENU } from '../data/demoMenu.js';

const HERO_ITEMS = DEMO_MENU.slice(0, 2);

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div>
          <span className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            AI-powered campus food ordering
          </span>

          <h1>
            Your campus.
            <br />
            Your food.
            <br />
            <em>Your way.</em>
          </h1>

          <p className="hero__sub">
            CampusEats helps students discover food faster, skip queues and pick up
            smarter — while helping canteens understand demand before it hits.
          </p>

          <div className="hero__actions">
            <Button as="a" href={LINKS.start}>Start Ordering</Button>
            <Button as="a" href="#ai-demo" variant="ghost">Explore AI</Button>
          </div>
        </div>

        <div className="hero__phone-wrap">
          <PhoneMockup>
            <div className="phone__content">
              <div className="phone__greeting">Hey, Ananya 👋</div>
              <div className="phone__sub">What are you craving today?</div>

              <div className="phone__search">
                <span>Search food, canteens, cravings...</span>
              </div>

              {HERO_ITEMS.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}

              <div className="phone__track-card">
                <div className="phone__track-title">Order #214 — in progress</div>
                <div className="phone__track-steps">
                  <span className="phone__track-step is-done" />
                  <span className="phone__track-step is-done" />
                  <span className="phone__track-step" />
                  <span className="phone__track-step" />
                </div>
                <div className="phone__track-label">Being prepared · ready in ~6 min</div>
              </div>
            </div>

            <div className="phone__tabbar" aria-hidden="true">
              <div className="phone__tab is-active">
                <span className="phone__tab-icon" />
                Home
              </div>
              <div className="phone__tab">
                <span className="phone__tab-icon" />
                Orders
              </div>
              <div className="phone__tab">
                <span className="phone__tab-icon" />
                Cart
              </div>
              <div className="phone__tab">
                <span className="phone__tab-icon" />
                Profile
              </div>
            </div>
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}
