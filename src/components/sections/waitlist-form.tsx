'use client';

import { useId, useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { waitlistInterests } from '@/data/site-content';
import { submitWaitlist } from '@/lib/waitlist';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = { tone: 'error' | 'info'; text: string } | null;

export function WaitlistForm() {
  const [interests, setInterests] = useState<string[]>(['dotrix']);
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const emailId = useId();

  const toggle = (id: string) => setInterests((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const address = email.trim();
    if (interests.length === 0) return setStatus({ tone: 'error', text: 'Choose at least one area you are interested in.' });
    if (!emailPattern.test(address)) return setStatus({ tone: 'error', text: 'Enter an email address, such as name@company.com.' });
    setSubmitting(true);
    const result = await submitWaitlist({ email: address, interests });
    setSubmitting(false);
    if (!result.ok) setStatus({ tone: 'info', text: 'Early access sign-up is not connected yet, so your details have not been saved. Please check back, or use the contact link below.' });
  }

  return <form className="waitlist" onSubmit={onSubmit} noValidate>
    <div className="segment-group" role="group" aria-label="Products you are interested in">
      {waitlistInterests.map((item) => {
        const on = interests.includes(item.id);
        return <button key={item.id} type="button" aria-pressed={on} className={`segment-pill accent-${item.id}`} onClick={() => toggle(item.id)}>{on && '✓ '}{item.label}</button>;
      })}
    </div>
    <div className="waitlist-row">
      <label htmlFor={emailId} className="sr-only">Email address</label>
      <input id={emailId} className="waitlist-input" type="email" name="email" autoComplete="email" placeholder="name@company.com" value={email} onChange={(event) => setEmail(event.target.value)} aria-invalid={status?.tone === 'error' || undefined} />
      <Button type="submit" size="lg" disabled={submitting}>Request Early Access <ArrowRight size={15} /></Button>
    </div>
    {status && <p role={status.tone === 'error' ? 'alert' : 'status'} className={status.tone === 'error' ? 'waitlist-error' : 'honest-state'}>{status.text}</p>}
    <p className="waitlist-fallback">Looking for direct enquiries or press? <Link href="/contact">Contact our team <ArrowRight size={13} /></Link></p>
  </form>;
}
