
'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Leaf,
  Users,
  Heart,
  Star,
  Rocket,
  Sun,
  ChevronLeft,
  ChevronRight,
  GitCommitHorizontal,
  Home,
  Goal,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

type VisionMilestone = {
  id: string;
  title: string;
  description: string;
  phase: 'Foundation' | 'Giving Back' | 'Empowerment' | 'Thriving World';
  status: 'done' | 'in-progress' | 'planned';
  icon: 'leaf' | 'users' | 'heart' | 'star' | 'rocket' | 'sun';
  date?: string;
  order: number;
};

const iconMap: Record<VisionMilestone['icon'], React.ElementType> = {
  leaf: Leaf,
  users: Users,
  heart: Heart,
  star: Star,
  rocket: Rocket,
  sun: Sun,
};

const phaseStyles: Record<
  VisionMilestone['phase'],
  { gradient: string; centeredGradient: string; badge: string; }
> = {
  Foundation: {
    gradient: 'from-cyan-200 to-teal-300',
    centeredGradient: 'from-cyan-400 to-teal-500',
    badge: 'bg-cyan-100 text-cyan-800',
  },
  'Giving Back': {
    gradient: 'from-lime-200 to-emerald-300',
    centeredGradient: 'from-lime-400 to-emerald-500',
    badge: 'bg-emerald-100 text-emerald-800',
  },
  Empowerment: {
    gradient: 'from-sky-200 to-indigo-300',
    centeredGradient: 'from-sky-400 to-indigo-500',
    badge: 'bg-indigo-100 text-indigo-800',
  },
  'Thriving World': {
    gradient: 'from-amber-200 to-orange-300',
    centeredGradient: 'from-amber-400 to-orange-500',
    badge: 'bg-orange-100 text-orange-800',
  },
};

const statusStyles: Record<
  VisionMilestone['status'],
  { badge: string; text: string }
> = {
  done: { badge: 'bg-emerald-100 text-emerald-800', text: 'Done' },
  'in-progress': { badge: 'bg-cyan-100 text-cyan-800', text: 'In-progress' },
  planned: { badge: 'bg-slate-100 text-slate-700', text: 'Planned' },
};


const localMilestones: VisionMilestone[] = [
    {
      id: "foundation-safety",
      title: "Launch a safe, loving and empowering community platform",
      description: "Lay the foundations for the movement and allow others to join.",
      phase: "Foundation",
      status: "in-progress",
      icon: "leaf",
      date: "2025",
      order: 10,
    },
    {
      id: "foundation-b-corp",
      title: "Attain B-Corp certification",
      description: "Becoming a B-Corp will help form the foundation of what we want to achieve. We have been working with BLab since our start and are working towards attaining this. Find out more about what a B-Corp is here.",
      phase: "Foundation",
      status: "in-progress",
      icon: "star",
      order: 20,
    },
    {
      id: "foundation-sustainable",
      title: "Platform is self sufficient",
      description: "and generous donors and memberships.",
      phase: "Foundation",
      status: "in-progress",
      icon: "users",
      order: 30,
    },
    {
      id: "giving-donations",
      title: "Donate to mental health causes",
      description: "Donate a portion of profits to partner charities and help shape their initiatives",
      phase: "Giving Back",
      status: "planned",
      icon: "heart",
      order: 40,
    },
    {
      id: "giving-charity-arm",
      title: "Launch Jalani Path Charity Arm",
      description: "Grow to a stage where all excess funds go towards causes we are passionate about and align with our values.",
      phase: "Giving Back",
      status: "planned",
      icon: "leaf",
      order: 50,
    },
    {
      id: "giving-funded-access",
      title: "Fund therapy & resources for those in need",
      description: "One of the most important reasons for the charity arm is to be able to give the opportunity to access therapy and some of our amazing resource partners that require money and sometimes a lot when they do not have enough to spare themselves. Creating a process that makes it easy for those people to access what they need to change their lives.",
      phase: "Giving Back",
      status: "planned",
      icon: "users",
      order: 60,
    },
    {
      id: "empower-education",
      title: "Change the education system",
      description: "Work with government and schools to change the way we educate so that future generations can build on what we build and use the energy we needed to heal to put towards further advancing human potential and the world around us.",
      phase: "Empowerment",
      status: "planned",
      icon: "sun",
      order: 80,
    },
    {
      id: "empower-worth",
      title: "A world that measures worth by lives lifted",
      description: "Humanity’s next evolution isn’t about creating billionaires — it’s about creating millions of people who feel seen, supported, and strong. When the world celebrates those who lift others, not those who rise alone, we all thrive.",
      phase: "Empowerment",
      status: "planned",
      icon: "rocket",
      order: 90,
    },
    {
      id: "empower-creators",
      title: "Back the community to create new resources",
      description: "Committed to helping improve the space, we want to be able to provide support to give people the boost to create their own resource that is for their own niche or helps improve their local community. The dream is to have creative people make their own paths on the platform and then turn these into resources that help others on the platform.",
      phase: "Empowerment",
      status: "planned",
      icon: "star",
      order: 70,
    },
    {
      id: "thrive-access",
      title: "Access for all to tools that improve life",
      description: "Everyone is born with a mind and body. At a minimum, everyone should have access to understanding their uniqueness and how to make the most of their life no matter their background or identity.",
      phase: "Thriving World",
      status: "planned",
      icon: "heart",
      order: 100,
    },
    {
      id: "thrive-stories",
      title: "Shifting the Meaning of Normal",
      description: "What if ‘normal’ wasn’t the middle, but the milestone?  A balanced, fulfilled, and conscious way of living — built from the strengths found in our variations.  This is how we’ve evolved before, and how we’ll evolve again: not by fitting in, but by lifting each other up toward the best we can be",
      phase: "Thriving World",
      status: "planned",
      icon: "sun",
      order: 110,
    },
    {
      id: "thrive-human-potential",
      title: "Maximised human potential, together",
      description: "A world that chooses compassion, curiosity, and contribution.",
      phase: "Thriving World",
      status: "planned",
      icon: "rocket",
      order: 120,
    }
].sort((a, b) => a.order - b.order);

const DescriptionWithLink = ({ text }: { text: string }) => {
  const linkText = "here.";
  const linkUrl = "https://www.bcorporation.net/";

  if (!text.includes(linkText)) {
    return <p className="text-muted-foreground">{text}</p>;
  }

  const parts = text.split(linkText);
  return (
    <p className="text-muted-foreground">
      {parts[0]}
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
        {linkText.slice(0, -1)}
      </a>
      {linkText.slice(-1)}
      {parts[1]}
    </p>
  );
};


export default function VisionTimeline() {
  const [milestones] = useState<VisionMilestone[]>(localMilestones);
  const [centeredId, setCenteredId] = useState<string>('foundation-safety');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const centeredMilestone = useMemo(
    () => milestones.find((m) => m.id === centeredId),
    [milestones, centeredId]
  );

  const scrollToItem = (id: string) => {
    const container = scrollContainerRef.current;
    const itemEl = document.getElementById(`milestone-card-${id}`);
    if (container && itemEl) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = itemEl.getBoundingClientRect();
      const scrollLeft =
        itemEl.offsetLeft -
        container.offsetLeft -
        containerRect.width / 2 +
        itemRect.width / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const viewportCenter = container.scrollLeft + container.clientWidth / 2;
    let closestId = '';
    let minDistance = Infinity;

    milestones.forEach((milestone) => {
      const el = document.getElementById(`milestone-card-${milestone.id}`);
      if (el) {
        const itemCenter = el.offsetLeft + el.clientWidth / 2;
        const distance = Math.abs(viewportCenter - itemCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestId = milestone.id;
        }
      }
    });

    if (closestId && closestId !== centeredId) {
      setCenteredId(closestId);
    }
  };

  const navigate = (direction: 'next' | 'prev') => {
    const currentIndex = milestones.findIndex((m) => m.id === centeredId);
    if (direction === 'next' && currentIndex < milestones.length - 1) {
      scrollToItem(milestones[currentIndex + 1].id);
    } else if (direction === 'prev' && currentIndex > 0) {
      scrollToItem(milestones[currentIndex - 1].id);
    }
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToItem(centeredId);
    }, 100);
    return () => clearTimeout(timer);
  }, []); 


  return (
    <div className="w-full min-h-dvh flex flex-col bg-[#F5F3EF] text-foreground pt-8">
       <header className="text-center mb-8 px-4">
          <h1 className="text-3xl font-bold tracking-tighter font-headline">
              The Jalani Path Vision
          </h1>
          <p className="text-lg text-muted-foreground mt-1">
              A living checklist on our journey to a thriving world.
          </p>
      </header>

      <div className="flex-1 flex flex-col justify-center">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full overflow-x-auto py-12 scroll-smooth snap-x snap-mandatory flex gap-4 md:gap-6 px-[50vw] -translate-x-[125px] md:-translate-x-[165px]"
          style={{ scrollbarWidth: 'none' }}
        >
          {milestones.map((milestone) => (
            <TimelineCard
              key={milestone.id}
              milestone={milestone}
              isCentered={milestone.id === centeredId}
              onClick={() => scrollToItem(milestone.id)}
            />
          ))}
        </div>

        <motion.div
          key={centeredId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto max-w-2xl mt-4"
        >
          {centeredMilestone && (
            <Card className="shadow-lg rounded-xl bg-card">
              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 space-y-2">
                    <div className="flex items-center gap-2">
                        <Badge
                            className={cn(
                            'font-semibold border-none',
                            phaseStyles[centeredMilestone.phase].badge
                            )}
                        >
                            {centeredMilestone.phase}
                        </Badge>
                        <Badge
                            className={cn(
                            'font-semibold border-none',
                            statusStyles[centeredMilestone.status].badge
                            )}
                        >
                            {statusStyles[centeredMilestone.status].text}
                        </Badge>
                    </div>
                    <h2 className="font-headline text-2xl font-bold">{centeredMilestone.title}</h2>
                    <DescriptionWithLink text={centeredMilestone.description} />
                </div>
                <div className="flex flex-col gap-2">
                    <Button
                        variant="outline"
                        onClick={() => navigate('prev')}
                        disabled={milestones.findIndex(m => m.id === centeredId) === 0}
                        className="justify-between"
                    >
                        <ChevronLeft size={16}/>
                        <span>Prev</span>
                        <span/>
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => navigate('next')}
                        disabled={milestones.findIndex(m => m.id === centeredId) === milestones.length - 1}
                        className="justify-between"
                    >
                       <span/>
                        <span>Next</span>
                        <ChevronRight size={16}/>
                    </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
      
       <footer className='py-6 px-4'>
            <div className='container mx-auto flex justify-center items-center gap-4 md:gap-8'>
                <Button variant="link" size="sm" className="text-muted-foreground" onClick={() => scrollToItem(milestones[0].id)}>
                    <Home className="mr-2 h-4 w-4" /> Jump to Start
                </Button>
                <Button variant="link" size="sm" className="text-muted-foreground" onClick={() => scrollToItem('foundation-safety')}>
                    <GitCommitHorizontal className="mr-2 h-4 w-4" /> Center on Current
                </Button>
                  <Button variant="link" size="sm" className="text-muted-foreground" onClick={() => scrollToItem(milestones[milestones.length - 1].id)}>
                    <Goal className="mr-2 h-4 w-4" /> Jump to Goal
                </Button>
            </div>
      </footer>
    </div>
  );
}

const TimelineCard = ({
  milestone,
  isCentered,
  onClick,
}: {
  milestone: VisionMilestone;
  isCentered: boolean;
  onClick: () => void;
}) => {
  const Icon = iconMap[milestone.icon];
  const phaseStyle = phaseStyles[milestone.phase];
  const gradient = isCentered ? phaseStyle.centeredGradient : phaseStyle.gradient;

  return (
    <motion.div
      id={`milestone-card-${milestone.id}`}
      onClick={onClick}
      className="snap-center shrink-0 w-[250px] md:w-[330px] cursor-pointer"
      animate={{ scale: isCentered ? 1.05 : 1, y: isCentered ? -10 : 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
    >
      <Card
        className={cn(
          'h-[200px] flex flex-col text-white transition-shadow duration-300 rounded-xl overflow-hidden',
           isCentered ? 'shadow-2xl' : 'shadow-md'
        )}
      >
        <div className={cn('h-full w-full p-5 flex flex-col bg-gradient-to-br', gradient)}
        >
            <div className="flex justify-between items-start">
                 <Icon className="w-7 h-7 text-white/80 shrink-0" />
                <Badge className='bg-white/20 text-white border-none'>
                    {milestone.phase}
                </Badge>
            </div>
            <div className="flex-1 flex items-center">
                 <h3 className="text-xl font-bold font-headline leading-tight">{milestone.title}</h3>
            </div>
        </div>
      </Card>
    </motion.div>
  );
};
