
import Image from 'next/image';
import { BookOpen, Globe, HandHeart, Users, Milestone, Youtube, Instagram, Twitter, Award, CheckCircle, Group, Building, DoorOpen, Sparkles, Scale, ShieldCheck, Gem, PenSquare, Share2, HeartHandshake, Compass, Flame } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/landing-page/header';
import Footer from '@/components/landing-page/footer';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UniversalContactForm } from '@/components/landing-page/universal-contact-form';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const founderImage = PlaceHolderImages.find(img => img.id === 'founder-image');
  const charlieJourneyImage = PlaceHolderImages.find(img => img.id === 'mind-journey-tree.jpg');

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[80vh] min-h-[500px] max-h-[700px] flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-center -z-10"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50 -z-10" />
          <div className="container px-4 md:px-6">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline">
                Jalani Path
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-light tracking-wide">
                Real People, Real Stories, Real Progress.
              </p>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-lg">
                A new platform for sharing stories, finding support, and progressing together on your mental progress journey.
              </p>
              <Button asChild size="lg">
                <Link href="#contact">
                  Register Your Interest
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="mission" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 max-w-4xl mx-auto text-center">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Our Mission</div>
              <p className="text-muted-foreground md:text-lg text-left">
                Jalani Path exists to help people take control of their mental progress — shifting the narrative from “talk about your problems” to “you can change your situation.” By partnering with trusted, community-validated resources and charities and building a safe, loving, and supportive space where people can share, track, and celebrate progress together. A digital platform and movement that not only helps people grow, but also lovingly and humorously calls out the parts of modern life that damage our mental health — inspiring a culture that values reflection, curiosity, and progress over perfection. We aim to be the number one place to turn to for those who want to improve their situation by building internally and flourishing on the outside.
              </p>
              <p className="text-muted-foreground md:text-lg text-left pt-4">
                Jalani (Jah-lah-nee) - Indonesian verb meaning to live or to go through. It is a word that perfectly encapsulates what the platform and movement is all about. Allowing people to own and share their stories of progress and struggle as a template and inspiration for others to follow.
              </p>
            </div>
          </div>
        </section>

        <section id="vision" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Our Vision</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">The Jalani Path Vision</h2>
                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A live board to show what we want to achieve with this platform and movement. A transparent manifestation for what you can support and be a part of.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-6xl py-12">
               <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between p-6">
                  <CardTitle>Vision Timeline</CardTitle>
                  <Button asChild>
                    <Link href="/vision">
                      Explore the Full Vision <Milestone className="ml-2" />
                    </Link>
                  </Button>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-muted-foreground">
                    Our vision is an actionable roadmap, not just a dream. We are building a platform that is sustainable, transparent, and empowers its community every step of the way. Click to explore the full interactive timeline of our milestones. Does it resonate? Do you have further ideas? Can you make one of these things possible?{' '}
                    <Link href="#contact" className="underline hover:text-primary">
                      Get in contact with us.
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="founder" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Founder's Journey</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">From Struggle to Purpose</h2>
                <p className="text-muted-foreground md:text-lg">
                  Charlie spent much of his life feeling unsafe — locked in a constant state of fight or flight, masking fear behind humour and hard work to appear “normal.” He pushed through, earned a first-class degree, and achieved the job he’d dreamed of for years — yet still felt empty.  By late 2024, life was spiralling. At the start of 2025, he fell into depression — drained and directionless after years of pretending to be okay. A quiet instinct told him to get away. Days later, he booked a retreat. For the first time, he felt seen and understood — realising his struggles weren’t weakness but a lifelong response to never feeling safe.  That awakening began a four-month rebuild that became The Mind Journey — and the seed of Jalani Path. But one question wouldn’t leave him: What if someone else was in my situation — and couldn’t afford to get away? He knew he had to act — to create a space where people could be honest about their journeys, share their paths, and find support before reaching breaking point.  Now, Charlie’s using his purpose to build something that sustains him through service — giving back and helping others find their path.  “It’s what I wish existed when I was lost — a place to find hope, paths, and proof that change is possible.”
                </p>
                <Button asChild>
                  <Link href="/charlies-story">
                    Read Charlie's full story
                  </Link>
                </Button>
              </div>
              {founderImage && (
                <Image
                  src={founderImage.imageUrl}
                  width="400"
                  height="400"
                  alt={founderImage.description}
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                  data-ai-hint={founderImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>

        <section id="initiative" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 scroll-mt-16">
          <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Our Annual Initiative</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Charlie's Mind Journey</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Inspired by the story that started Jalani Path, The Mind Journey is our annual commitment to mental progress.  From 25th January to 28th May, we take control of one thing that strengthens the mind — something in our hands, not someone else’s. It might be a habit, a project, or an act of service. Big or small, it’s about showing up every day with intention.  This is more than a challenge. It’s a shared journey — thousands of personal commitments that together create a movement for human progress.
              </p>
            </div>
            {charlieJourneyImage && (
              <Image
                src={charlieJourneyImage.imageUrl}
                width="600"
                height="400"
                alt={charlieJourneyImage.description}
                className="mx-auto overflow-hidden rounded-xl object-cover"
                data-ai-hint={charlieJourneyImage.imageHint}
              />
            )}
          </div>
        </section>

        <section id="socials" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Follow Our Journey</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay connected and see our progress. We'll be sharing updates, stories, and behind-the-scenes content on our social channels.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <Button asChild variant="outline" size="icon">
                <a href="https://www.youtube.com/@JalaniPath" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="h-6 w-6" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://x.com/JalaniPath" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://www.reddit.com/r/JalaniPath/" target="_blank" rel="noopener noreferrer" aria-label="Reddit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.16 13.91c0 .4-.32.72-.72.72h-1.89c-.4 0-.72-.32-.72-.72s.32-.72.72-.72h1.17v-1.17h-1.17c-.4 0-.72-.32-.72-.72s.32-.72.72-.72h1.89c.4 0 .72.32.72.72v2.34zm-6.32 2.82c-.4 0-.72-.32-.72-.72V15c0-.4.32-.72.72-.72s.72.32.72.72v1.01h1.18v-2.18c0-.4.32-.72.72-.72s.72.32.72.72v2.18h1.18v-2.18c0-.4.32-.72.72-.72s.72.32.72.72v2.18c0 1.22-.99 2.2-2.2 2.2h-2.9c-.21 0-.41-.09-.55-.23l-1.34-1.34c-.1-.1-.15-.22-.15-.35v-2.92c0-.4.32-.72.72-.72s.72.32.72.72v2.79l1.21 1.21zm-3.56-5.46c.4 0 .72.32.72.72s-.32.72-.72.72H5.4c-.4 0-.72-.32-.72-.72s.32-.72.72-.72h1.88zm0 1.44H5.4c-.4 0-.72.32-.72.72s.32.72.72.72h1.88c.4 0 .72-.32.72-.72s-.32-.72-.72-.72zm0 1.44H5.4c-.4 0-.72.32-.72.72s.32.72.72.72h1.88c.4 0 .72-.32.72-.72s-.32-.72-.72-.72zm-2.03-7.31c.59 0 1.07.48 1.07 1.07s-.48 1.07-1.07 1.07-1.07-.48-1.07-1.07.48-1.07 1.07-1.07zm4.5 1.07c0-.59.48-1.07 1.07-1.07s1.07.48 1.07 1.07-.48 1.07-1.07 1.07-1.07-.48-1.07-1.07z"/>
                  </svg>
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://www.facebook.com/profile.php?id=61579313827629" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-1.5c-1.1,0-1.5,0.7-1.5,1.5V12h3l-0.5,3h-2.5v6.95C18.05,21.45,22,17.19,22,12Z"/>
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary/10 scroll-mt-16">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you want to join the community, explore a partnership, or be part of our team, we'd love to hear from you.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-2">
              <UniversalContactForm />
            </div>
          </div>
        </section>

        <section id="support" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Support the Movement</h2>
              <p className="mx-auto max-w-3xl text-muted-foreground md:text-xl/relaxed">
                Jalani Path is a space for real stories, practical paths, and easier access to mental progress. There are different ways to help us build it – from sharing your story to investing before launch.
              </p>
              <Badge variant="secondary">Impact first, not profit.</Badge>
            </div>
            
            <div className="mx-auto grid max-w-7xl items-start gap-8 py-12 md:grid-cols-3 lg:gap-12">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Share2 /> Share your story</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground">Your honesty is one of the most powerful forms of support. By sharing your journey (anonymously or as yourself), you help others feel less alone and show what mental progress really looks like.</p>
                  <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Post your story when the platform opens</li>
                    <li>Encourage others to talk about their journey</li>
                    <li>Help normalise working on your mind</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><HeartHandshake /> Offer your skills</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground">Jalani Path will grow through people who want to build, not just watch. Designers, developers, writers, facilitators, mental health advocates, charity partners – we’d love to hear from you.</p>
                  <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Help us refine the platform</li>
                    <li>Co-create paths and resources</li>
                    <li>Partner as a charity or trusted organisation</li>
                  </ul>
                  <div className="mt-auto pt-4">
                    <Button asChild className="w-full">
                      <Link href="#contact">Offer your skills or partner</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><HandHeart /> Invest before or after launch</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground">If you’re in a position to, you can help fund our early stages. We see this as an investment in a movement, not a donation box. Your support helps us build the platform, keep it accessible, and one day launch a dedicated charity arm.</p>
                  <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Pre-launch investment helps us build and test the first version</li>
                    <li>Post-launch support helps keep access open</li>
                    <li>We keep you updated on how your contribution is used</li>
                  </ul>
                   <p className="mt-4 text-xs text-muted-foreground">
                      Investments are not about personal financial gain – they fuel impact for others.
                   </p>
                  <div className="mt-auto pt-4">
                     <Button asChild className="w-full">
                      <Link href="#contact">Learn about supporting financially</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto mt-12 p-6 bg-background/50 rounded-lg">
                <h3 className="font-bold text-center mb-4">Founding supporters (pre-launch)</h3>
                <p className="text-muted-foreground text-center">
                    Before we launch, a small group of people can choose to invest in Jalani Path’s foundations. In return, they receive symbolic ‘Founding Impact Units’ – a way of tracking the part they played in helping us reach more people, fund partner charities, and eventually launch our charity arm.
                </p>
                 <p className="text-muted-foreground text-center mt-2">
                    These Impact Units aren’t financial shares. They can’t be cashed out. They are a record of the impact your support helped create.
                </p>

                <div className="grid md:grid-cols-3 gap-4 text-center mt-6">
                    <div className="p-4">
                        <div className="font-bold text-primary">1.</div>
                        <p className="text-sm text-muted-foreground">You invest before launch (not a donation – a commitment to our mission).</p>
                    </div>
                    <div className="p-4">
                         <div className="font-bold text-primary">2.</div>
                        <p className="text-sm text-muted-foreground">We share personal updates on how your contribution is used and our projections for the next quarter/year.</p>
                    </div>
                    <div className="p-4">
                         <div className="font-bold text-primary">3.</div>
                        <p className="text-sm text-muted-foreground">You see what your contribution is ‘worth’ in impact – e.g. people reached, access funded, charities supported, growth milestones unlocked.</p>
                    </div>
                </div>
                 <p className="text-xs text-muted-foreground/80 mt-6 text-center">
                  Founding Impact Units are symbolic only and do not provide legal ownership, voting rights, or financial return. In some cases, early supporters who are deeply aligned with our values may later be invited into our Inner Circle, but this cannot be bought or guaranteed.
                </p>
                <div className="text-center mt-6">
                    <Button asChild>
                        <Link href="#contact">Register interest as a founding supporter</Link>
                    </Button>
                </div>
            </div>

             <Separator className="my-12" />

            <div className="space-y-4 text-center mt-8">
                <h3 className="text-2xl font-bold font-headline">Where your support goes</h3>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Every contribution – whether it’s your story, your skills, or your investment – is treated with care. See our{' '}
                  <Link href="/vision" className="underline hover:text-primary">
                    vision board
                  </Link>
                  {' '}to see what we are trying to build.
                </p>
            </div>

            <div className="mx-auto grid gap-6 py-12 md:grid-cols-3 lg:gap-8">
              <Card className="text-center p-6 border-0 shadow-none bg-transparent">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                        <Building className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold">Building the platform</h4>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Designing and developing a safe, anonymous space where people can explore paths, share their journeys, and track their mental progress.
                  </p>
              </Card>
               <Card className="text-center p-6 border-0 shadow-none bg-transparent">
                  <div className="flex justify-center mb-4">
                     <div className="p-3 bg-primary/20 rounded-full">
                        <Users className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold">Reaching more people</h4>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Helping us make Jalani Path accessible to those who might not otherwise find support – through outreach, subsidised access, and collaborations.
                  </p>
              </Card>
               <Card className="text-center p-6 border-0 shadow-none bg-transparent">
                  <div className="flex justify-center mb-4">
                     <div className="p-3 bg-primary/20 rounded-full">
                        <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold">Partner charities & future charity arm</h4>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Supporting trusted charities and working towards revenue targets that allow us to launch a dedicated charity arm to extend our impact even further.
                  </p>
              </Card>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
