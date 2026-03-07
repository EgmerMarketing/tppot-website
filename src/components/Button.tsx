import Link from 'next/link';

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export default function Button({ href, onClick, variant = 'primary', children, className = '', external }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-[#469695] text-white hover:bg-[#3a7e7d] focus:ring-[#469695]',
    secondary: 'bg-[#0A3660] text-white hover:bg-[#082c50] focus:ring-[#0A3660]',
    ghost: 'border-2 border-[#469695] text-[#469695] hover:bg-[#469695] hover:text-white focus:ring-[#469695]',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return external ? (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
    ) : (
      <Link href={href} className={cls}>{children}</Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>{children}</button>
  );
}
