import SectionHeading from '../components/SectionHeading.jsx';

const FLOW = ['Orders', 'AI analysis', 'Demand prediction', 'Better preparation', 'Less surplus'];

export default function SmartCampus() {
  return (
    <section className="section">
      <div className="container smart-campus__grid">
        <div>
          <SectionHeading
            kicker="For canteens & colleges"
            title="Less guesswork. Smarter campus food."
            description="CampusEats can use historical order data to help canteens understand demand patterns and make better preparation decisions — turning yesterday's orders into tomorrow's prep list."
          />
        </div>

        <div className="flow">
          {FLOW.map((step, i) => (
            <div key={step}>
              <div className="flow__step">
                <span className="flow__bullet" />
                <span>{step}</span>
              </div>
              {i < FLOW.length - 1 && <div className="flow__connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
