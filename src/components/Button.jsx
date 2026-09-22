export default function Button({
  as = 'button',
  href,
  variant = 'primary',
  size,
  className = '',
  children,
  ...rest
}) {
  const Tag = as === 'a' || href ? 'a' : 'button';
  const classes = [
    'btn',
    variant === 'ghost' ? 'btn--ghost' : 'btn--primary',
    size === 'sm' ? 'btn--sm' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} href={href} {...rest}>
      {children}
    </Tag>
  );
}
