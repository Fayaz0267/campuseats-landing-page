import SectionHeading from '../components/SectionHeading.jsx';
import useReveal from '../hooks/useReveal.js';

const FEATURES = [
  {
    index: '01',
    title: 'AI food search',
    description: 'Understands natural-language requests like cravings, budgets and time limits — not just keywords.',
  },
  {
    index: '02',
    title: 'Voice ordering',
    description: 'Search and order using your voice, hands-free between classes.',
  },
  {
    index: '03',
    title: 'Personalized picks',
    description: 'Recommends food using real menu data and each student\u2019s own ordering history.',
  },
  {
    index: '04',
    title: 'Demand intelligence',
    description: 'Helps canteens understand what\u2019s coming, so prep matches actual demand.',
  },
];

function FeatureBlock({ feature }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="ai-feature reveal">
      <div className="ai-feature__index">{feature.index}</div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
}

export default function AIFeatures() {
  return (
    <section id="ai-features" className="section">
      <div className="container">
        <SectionHeading
          kicker="Under the hood"
          title="AI that works across your campus."
          description="The same intelligence layer supports students ordering, canteens preparing and colleges planning."
        />

        <div className="ai-features__grid">
          {FEATURES.map((f) => (
            <FeatureBlock key={f.index} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
