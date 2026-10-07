import { cn } from '@/lib/utils';
import { Link } from 'wouter';

type KunemiWordmarkProps = {
  className?: string;
  onClick?: () => void;
};

export function KunemiWordmark({ className, onClick }: KunemiWordmarkProps) {
  return (
    <Link
      href="/"
      className={cn('brand inline-flex font-display font-extrabold tracking-tighter', className)}
      aria-label="Kunemi home"
      onClick={onClick}
    >
      Kunemi
    </Link>
  );
}
