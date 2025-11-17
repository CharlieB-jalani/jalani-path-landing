
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/landing-page/header';
import Footer from '@/components/landing-page/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CharliesStoryPage() {
  const founderImage = PlaceHolderImages.find(img => img.id === 'founder-portrait');

  return (
    <>
      <Header />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <article className="prose prose-lg max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                From Struggle to Purpose: Charlie's Story
              </h1>
            </div>

            {founderImage && (
              <div className="flex justify-center mb-8">
                <Image
                    src={founderImage.imageUrl}
                    width="300"
                    height="300"
                    alt={founderImage.description}
                    className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                    data-ai-hint={founderImage.imageHint}
                />
              </div>
            )}

            <p>
              Charlie’s story begins with a lifelong struggle — an extreme sensitivity to new environments that triggered nausea, panic, and isolation. From childhood, he never felt safe in his own home. Every day was a quiet performance; behind the laughter and clever remarks was a mind locked in constant fight or flight. He learned early that survival meant silence, and showing pain only made things worse.
            </p>
            <p>
              For most of his life, he believed he simply had “anxiety.” He did what he thought he was supposed to do — push through, work hard, keep smiling. By 22, he’d built a fragile peace for himself, but when the pandemic hit, the world stopped, and so did the comfort he’d created. Therapy and medication didn’t help, and without support, he had to stop. Still, he carried on — earning a first-class degree in mechanical engineering and landing the job he’d dreamed of for years. But success felt hollow.
            </p>
            <p>
              He kept searching for answers — trying different forms of therapy, reading self-help books, hoping someone would tell him what was wrong. Nothing truly helped, because everything he tried focused on the surface, not the cause. He didn’t yet understand that the real issue wasn’t in his ability to cope — it was that his body and mind had been conditioned to survive in an unsafe world.
            </p>
            <p>
              By the end of 2024, life was spiralling out of control. On the outside, things looked fine, but inside he was unravelling — desperately trying to fix the growing emptiness through external change: work, relationships, distractions, anything to avoid stopping. When the new year began, it caught up with him. At the start of 2025, he fell into a deep depression — drained, directionless, and unable to recognise himself. No one knew how much danger he was in; he’d become too skilled at masking pain behind composure.
            </p>
            <p>
              Then, one night, a quiet thought broke through the fog: You need to get away. Days later, he booked a mental-health retreat.
            </p>
            <p>
              That weekend changed everything. For the first time, he felt seen, heard, and understood. In a one-on-one session, a mentor helped him uncover the truth he’d been circling for years — that his constant anxiety and hypervigilance weren’t random, but the result of a childhood spent never feeling safe. His body wasn’t broken; it was protecting him the only way it knew how.
            </p>
            <p>
              That realisation became the spark for an awakening. Day by day, without pressure, Charlie began working with himself instead of against himself. Through reflection, routine, and gentle consistency, he started to rebuild from the inside out.
            </p>
            <p>
              The retreat marked the beginning of a four-month period of transformation — a personal experiment in rediscovering life beyond fear. He focused on what he could control: his health, his mindset, and the quiet act of showing up each day. It became a living journey of self-acceptance and renewal.
            </p>
            <p>
              Just before his 28th birthday, he stopped and reflected on how far he’d come. For the first time, he felt safe — not because the world had changed, but because he had. That moment of clarity drew a line between who he had been and who he was becoming.
            </p>
            <p>
              He began his 28th year with a clean slate — a promise to live intentionally and to use what he’d learned to help others do the same. But as he reflected on his journey, one thought wouldn’t leave him: What if someone else out there feels like I once did — unsafe, misunderstood, and with nothing to guide them?
            </p>
            <p>
              The thought of anyone facing that same emptiness without direction didn’t sit right with him — and he knew he couldn’t ignore it because he knew what it meant. That moment of empathy became his purpose.
            </p>
            <p>
              The four-month transformation — from retreat to reflection — became the foundation for what would later be called The Mind Journey: a shared annual movement inviting others to take control of something within their power to strengthen their minds, build consistency, or help others.
            </p>
            <p>
              From that seed, Jalani Path was born — a movement dedicated to helping people take small, consistent steps toward self-understanding and mental progress.
            </p>
            <p>
              As his clarity deepened, Charlie began to recognise traits of undiagnosed neurodivergence — differences that had shaped how he saw and experienced the world. For the first time, it all made sense. He understood why he had always felt “different,” and instead of fighting it, he learned to see it as part of his unique wiring — something that could be guided, not hidden.
            </p>
            <p>
              He began to ask: Why do we treat “neurotypical” as the goal when every mind is unique? What if “normal” meant balanced, fulfilled, and alive — built from the best of our variations?
            </p>
            <p>
              That question became Jalani Path’s philosophy: progress over perfection, removing limits, and celebrating growth instead of hiding it.
            </p>
            <p>
              Charlie sees this purpose not just as a calling, but as a way to live. His goal is to sustain himself through service — to pour energy into helping others and direct any excess into causes that create hope and healing. Jalani Path is his way of proving that purpose can be both sustainable and selfless.
            </p>
            <p>
              It was built to be what he wished existed when he was lost — a place where people share their stories and the steps that helped them find their way, so no one has to face the darkness alone.
            </p>

            <div className="text-center mt-12">
                <Button asChild>
                    <Link href="/">
                        <Home className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
