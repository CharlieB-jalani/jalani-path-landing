
'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Copy, Check, Mail } from 'lucide-react';
import Link from 'next/link';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  to?: string;
  subject?: string;
  body?: string;
  gmailLink?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  to,
  subject,
  body,
  gmailLink,
}) => {
  const { toast } = useToast();
  const [copied, setCopied] = React.useState<'subject' | 'body' | null>(null);

  const copyToClipboard = (text: string, type: 'subject' | 'body') => {
    navigator.clipboard.writeText(text);
    toast({ title: `Copied ${type} to clipboard!` });
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Complete Your Email</DialogTitle>
          <DialogDescription>
            If your email client didn't open, you can copy the details below or open in Gmail.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="to">To</Label>
            <Input id="to" value={to} readOnly />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <div className="relative">
              <Input id="subject" value={subject} readOnly className="pr-10" />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                onClick={() => copyToClipboard(subject || '', 'subject')}
              >
                {copied === 'subject' ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="body">Body</Label>
            <div className="relative">
              <Textarea id="body" value={body} readOnly className="h-32 pr-10 resize-none" />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-1 top-2 h-7 w-7"
                onClick={() => copyToClipboard(body || '', 'body')}
              >
                {copied === 'body' ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-between gap-2">
           <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button asChild>
            <Link href={gmailLink || ''} target="_blank">
              <Mail className="mr-2 h-4 w-4" /> Open in Gmail
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
