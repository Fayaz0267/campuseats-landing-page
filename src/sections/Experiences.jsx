import SectionHeading from '../components/SectionHeading.jsx';
import useReveal from '../hooks/useReveal.js';

const GROUPS = [
  {
    key: 'student',
    label: 'Students',
    title: 'Order without the queue.',
    tint: 'var(--tint-student)',
    items: [
      'AI search',
      'Voice ordering',
      'Personalized recommendations',
      'Live order tracking',
      'QR pickup',
      'Campus wallet',
    ],
  },
  {
    key: 'canteen',
    label: 'Canteens',
    title: 'Run smarter during the rush.',
    tint: 'var(--tint-canteen)',
    items: [
      'Order management',
      'Menu management',
      'Inventory',
      'Demand prediction',
      'Food-waste intelligence',
      'Pickup tokens',
    ],
  },
  {
    key: 'college',
    label: 'Colleges',
    title: 'See what your campus needs.',
    tint: 'var(--tint-college)',
    items: [
      'Campus analytics',
      'Student activity',
      'Revenue analytics',
      'Popular food',
      'Peak periods',
      'AI insights',
    ],
  },
];

function ExperienceCard({ group }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="exp-card reveal" style={{ '--tint': group.tint }}>
      <div className="exp-card__label">{group.label}</div>
      <h3>{group.title}</h3>
      <ul className="exp-card__list">
        {group.items.map((item) => (
          <li key={item}>
            <span className="exp-card__dot" style={{ background: group.tint }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experiences() {
  return (
    <section id="experiences" className="section">
      <div className="container">
        <SectionHeading
          kicker="One platform, three experiences"
          title="Built for everyone on campus."
          description="Students, canteens and college admins each get a purpose-built experience — all running on the same CampusEats backend."
        />

        <div className="experiences__grid">
          {GROUPS.map((group) => (
            <ExperienceCard key={group.key} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
