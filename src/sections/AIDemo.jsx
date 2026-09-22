import { useState } from 'react';
import { Sparkles, Search } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { runAiFoodSearch } from '../services/aiSearch.js';

const EXAMPLES = [
  'Something spicy under ₹150 I can grab quickly',
  'Cheap veg lunch, no queue',
  'A quick snack between classes',
];

export default function AIDemo() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('idle'); // idle | thinking | done
  const [filters, setFilters] = useState([]);
  const [results, setResults] = useState([]);

  async function runSearch(q) {
    const term = q.trim();
    if (!term) return;

    setStatus('thinking');
    setFilters([]);
    setResults([]);

    const response = await runAiFoodSearch(term);

    setFilters(response.filters);
    setResults(response.results);
    setStatus('done');
  }

  function handleSubmit(e) {
    e.preventDefault();
    runSearch(query);
  }

  return (
    <section id="ai-demo" className="section">
      <div className="container">
        <SectionHeading
          kicker="AI demo"
          title="Just tell CampusEats what you're craving."
          description="Type a real craving below — CampusEats reads it, pulls out what matters, and matches it against the menu."
        />

        <div className="ai-demo__panel">
          <form className="ai-demo__form" onSubmit={handleSubmit}>
            <input
              className="ai-demo__input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What are you craving?"
              aria-label="Describe what you're craving"
            />
            <button type="submit" className="btn btn--primary">
              <Search size={16} />
              Find food
            </button>
          </form>

          <div className="ai-demo__examples">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                type="button"
                className="ai-demo__example"
                onClick={() => {
                  setQuery(ex);
                  runSearch(ex);
                }}
              >
                {ex}
              </button>
            ))}
          </div>

          {status === 'thinking' && (
            <div className="ai-demo__status">
              <span className="ai-demo__spinner spin" aria-hidden="true" />
              Understanding your request...
            </div>
          )}

          {status === 'done' && (
            <>
              <div className="ai-demo__tags">
                {filters.map((f) => (
                  <span key={f.key} className="ai-demo__tag">
                    <Sparkles size={13} />
                    {f.label}
                  </span>
                ))}
              </div>

              <div className="ai-demo__results">
                {results.length === 0 && (
                  <p style={{ marginTop: 4 }}>No matches in the demo menu — try a different craving.</p>
                )}
                {results.map((item) => (
                  <div key={item.id} className="ai-demo__result-card">
                    <div
                      className="ai-demo__result-thumb"
                      style={{ background: item.veg ? '#4f9d7a26' : '#d9757526' }}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>
                    <div className="ai-demo__result-name">{item.name}</div>
                    <span className={`badge ${item.veg ? 'badge--veg' : 'badge--nonveg'}`}>
                      <span className="badge__dot" />
                      {item.veg ? 'Veg' : 'Non-Veg'}
                    </span>
                    <div className="ai-demo__result-meta">
                      <span className="ai-demo__result-price">₹{item.price}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--ink-faint)' }}>
                        {item.pickupMinutes} min
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <p className="ai-demo__note">
            Demo results shown from a sample menu. In the live product, AI never invents
            items, prices or stock — every result comes from the real CampusEats menu data.
          </p>
        </div>
      </div>
    </section>
  );
}
