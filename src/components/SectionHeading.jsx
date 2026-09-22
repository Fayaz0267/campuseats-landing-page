export default function SectionHeading({ kicker, title, description, align, className = '' }) {
  return (
    <div
      className={`section-heading ${className}`}
      style={align === 'center' ? { marginInline: 'auto', textAlign: 'center' } : undefined}
    >
      {kicker && <span className="section-heading__kicker">{kicker}</span>}
      <h2>{title}</h2>
      {description && <p style={align === 'center' ? { marginInline: 'auto' } : undefined}>{description}</p>}
    </div>
  );
}
