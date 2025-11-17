import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';

const NavLinks = () => (
    <>
        <Button variant="ghost" asChild>
            <Link href="/#mission" prefetch={false}>
                Our Mission
            </Link>
        </Button>
        <Button variant="ghost" asChild>
            <Link href="/#vision" prefetch={false}>
                Vision
            </Link>
        </Button>
        <Button variant="ghost" asChild>
            <Link href="/#founder" prefetch={false}>
                Founder
            </Link>
        </Button>
        <Button variant="ghost" asChild>
            <Link href="/#initiative" prefetch={false}>
                Initiative
            </Link>
        </Button>
        <Button variant="ghost" asChild>
            <Link href="/#socials" prefetch={false}>
                Socials
            </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/#support" prefetch={false}>
            Support Us
          </Link>
        </Button>
         <Button asChild>
          <Link href="/#contact" prefetch={false}>
            Get in Touch
          </Link>
        </Button>
    </>
)


export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
        <Image src="/jalani-path-logo.png" alt="Jalani Path Logo" width={32} height={32} />
        <span className="text-xl font-bold font-headline">Jalani Path</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-2 sm:gap-4">
        <NavLinks/>
      </nav>
      <div className="ml-auto lg:hidden">
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu/>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                 <Link href="/" className="flex items-center gap-2 mb-6" prefetch={false}>
                    <Image src="/jalani-path-logo.png" alt="Jalani Path Logo" width={32} height={32} />
                    <span className="text-xl font-bold font-headline">Jalani Path</span>
                </Link>
                <nav className="flex flex-col gap-4">
                    <NavLinks/>
                </nav>
            </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

    