import VisionTimeline from '@/components/vision-timeline';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function VisionPage() {
  return (
    <>
    <Button variant="ghost" asChild className="absolute top-4 left-4 z-10">
        <Link href="/">
            <Home className="h-5 w-5" />
            <span className="sr-only">Back to Home</span>
        </Link>
    </Button>
    <main className="flex-1 bg-background">
      <VisionTimeline />
    </main>
    </>
  );
}
