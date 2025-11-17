
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <div className="text-xs text-muted-foreground">
        <p>&copy; {currentYear} Jalani Path. All rights reserved.</p>
        <p>Company No. 16858998 | Registered Office: 124 City Road, London, EC1V 2NX</p>
      </div>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          Terms of Service
        </Link>
        <Link href="/privacy-policy" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
}
