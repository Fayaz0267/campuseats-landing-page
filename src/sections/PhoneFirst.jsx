import SectionHeading from '../components/SectionHeading.jsx';
import PhoneMockup from '../components/PhoneMockup.jsx';
import FoodCard from '../components/FoodCard.jsx';
import { DEMO_MENU } from '../data/demoMenu.js';

const CALLOUTS = [
  { key: 'voice', className: 'callout--voice', label: 'Voice', text: 'Tell us what you want.' },
  { key: 'search', className: 'callout--search', label: 'AI search', text: 'Find food faster.' },
  { key: 'qr', className: 'callout--qr', label: 'QR pickup', text: 'Scan. Verify. Collect.' },
  { key: 'track', className: 'callout--track', label: 'Live tracking', text: 'Know when it\u2019s ready.' },
];

export default function PhoneFirst() {
  return (
    <section className="section phone-first">
      <div className="container">
        <SectionHeading
          align="center"
          kicker="Designed for one hand"
          title="Built for the phone in your hand."
          description="CampusEats is designed phone-first, for ordering between classes — not a desktop site squeezed onto a small screen."
          className="section-heading"
        />

        <div className="phone-first__stage">
          {CALLOUTS.map((c) => (
            <div key={c.key} className={`callout ${c.className}`}>
              <div className="callout__label">{c.label}</div>
              <div className="callout__text">{c.text}</div>
            </div>
          ))}

          <PhoneMockup>
            <div className="phone__content">
              <div className="phone__greeting">Find your food</div>
              <div className="phone__sub">Voice, search or browse by canteen</div>
              <div className="phone__search">
                <span>"Something quick before my 2pm..."</span>
              </div>
              {DEMO_MENU.slice(2, 4).map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}
