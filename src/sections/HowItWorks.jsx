import SectionHeading from '../components/SectionHeading.jsx';
import useReveal from '../hooks/useReveal.js';

const STEPS = [
  {
    num: '01',
    title: 'Discover',
    description: 'Search using AI, voice or browse by category and canteen.',
  },
  {
    num: '02',
    title: 'Order',
    description: 'Choose your food, pay in the app and receive your pickup token.',
  },
  {
    num: '03',
    title: 'Pick up',
    description: 'Track preparation live and scan your QR when it\u2019s ready.',
  },
];

function Step({ step }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="how-step reveal">
      <div className="how-step__num">{step.num}</div>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          kicker="How it works"
          title="From craving to pickup in three steps."
        />

        <div className="how-steps">
          {STEPS.map((step) => (
            <Step key={step.num} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
