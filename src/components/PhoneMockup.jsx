/**
 * Device chrome only — frame, notch, status bar. Pass the actual
 * app UI (search, cards, tab bar, ...) as children so different
 * sections can show different screens inside the same shell.
 */
export default function PhoneMockup({ children, className = '' }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__notch" aria-hidden="true" />
      <div className="phone__screen">
        <div className="phone__statusbar" aria-hidden="true">
          <span>9:41</span>
          <span>CampusEats</span>
        </div>
        {children}
      </div>
    </div>
  );
}
