
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import React from 'react';
import { ContactModal } from './contact-modal';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  interest: z.string().min(1, { message: 'Please select an option.' }),
  link: z.string().optional(),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
  website: z.string().optional(), // Honeypot
});

type FormData = z.infer<typeof formSchema>;

const buildMailto = ({ name, email, interest, link, message }: FormData) => {
    const to = 'contact@jalanipath.com';
    const subject = `[Jalani Path] ${interest} — ${name} (${email})`;
    const body = `Form Type: ${interest}
Name: ${name}
Email: ${email}
Source URL: ${window.location.href}
Link: ${link || '—'}

Message:
${message}`;
    
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    return {
        mailto: `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`,
        gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodedSubject}&body=${encodedBody}`,
        subject: subject,
        body: body,
        to: to
    };
};


export function UniversalContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [modalData, setModalData] = React.useState<{ subject: string; body: string; to: string; gmail: string; } | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      interest: defaultInterest || '',
      link: '',
      message: '',
      website: '', // Honeypot
    },
  });

  function onSubmit(values: FormData) {
    if (values.website) {
      // Honeypot field filled, likely a bot. Silently fail.
      console.log('Honeypot triggered');
      return;
    }
    
    const mailInfo = buildMailto(values);

    setModalData(mailInfo);
    window.location.href = mailInfo.mailto;
    form.reset();
  }

  return (
    <>
      <ContactModal
        isOpen={!!modalData}
        onClose={() => setModalData(null)}
        to={modalData?.to}
        subject={modalData?.subject}
        body={modalData?.body}
        gmailLink={modalData?.gmail}
      />
      <Form {...form}>
        <form
          data-form="jalani-contact"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 text-left"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>I’m interested in…</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Community Enquiry">Community / Join the movement</SelectItem>
                    <SelectItem value="Partner Enquiry">Partner / Collaborate</SelectItem>
                    <SelectItem value="Team/Volunteer Enquiry">Team / Volunteer / Work with us</SelectItem>
                    <SelectItem value="Investment Enquiry">Invest in the movement</SelectItem>
                    <SelectItem value="General Enquiry">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Optional link</FormLabel>
                <FormControl>
                  <Input placeholder="Website or social profile" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us how we can help or how you'd like to be involved."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Honeypot Field */}
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
                <FormItem className="absolute w-0 h-0 overflow-hidden">
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                        <Input {...field} tabIndex={-1} autoComplete="off" />
                    </FormControl>
                </FormItem>
            )}
           />
          <Button type="submit" className="w-full">
            <Send className="mr-2 h-4 w-4" /> Send Email
          </Button>
        </form>
      </Form>
    </>
  );
}
