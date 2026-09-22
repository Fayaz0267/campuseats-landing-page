import { Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';

const METRICS = [
  { label: "Today's orders", value: '312', bars: [4, 6, 5, 8, 7, 9] },
  { label: 'Popular food', value: 'Masala Dosa', bars: null },
  { label: 'Peak time', value: '12:30 \u2013 1:15 PM', bars: null },
  { label: 'Estimated demand', value: '\u2191 18% at lunch', bars: [3, 5, 6, 9, 8, 6] },
  { label: 'Low stock', value: '2 items', bars: null },
];

export default function DashboardPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          kicker="For colleges & canteens"
          title="A clearer view of your campus."
          description="Sample dashboard — real numbers come from your own CampusEats data once connected."
        />

        <div className="dashboard">
          <div className="dashboard__grid">
            {METRICS.map((m) => (
              <div key={m.label} className="metric-card">
                <div className="metric-card__label">{m.label}</div>
                <div className="metric-card__value">{m.value}</div>
                {m.bars && (
                  <div className="metric-card__bars" aria-hidden="true">
                    {m.bars.map((h, i) => (
                      <span key={i} className="metric-card__bar" style={{ height: `${h * 4}px` }} />
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="dashboard__insight">
              <Sparkles size={18} color="var(--accent)" style={{ flex: 'none', marginTop: 2 }} />
              <div>
                <div className="dashboard__insight-label">AI insight (estimated)</div>
                <p>Demand for Masala Dosa may increase around lunch based on recent order patterns.</p>
              </div>
            </div>
          </div>

          <p className="dashboard__estimate-note">
            All figures on this page are illustrative demo data, not measured results.
          </p>
        </div>
      </div>
    </section>
  );
}
