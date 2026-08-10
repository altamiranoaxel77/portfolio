'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, Send, MessageCircle } from 'lucide-react';
import { social } from '@/data/personal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { slideUp, revealOnScroll } from '@/utils/motion';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const next: Record<string, string> = {};
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name) next.name = t('required');
    if (!email) next.email = t('required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = t('invalidEmail');
    if (!message) next.message = t('required');

    return next;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    try {
      /* 👉 INTEGRACIÓN DE ENVÍO
         Conectá acá tu servicio preferido (EmailJS, Resend, o un
         endpoint propio en /app/api/contact/route.ts).
         Ejemplo con fetch a una API route:

         await fetch('/api/contact', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(Object.fromEntries(data)),
         });
      */
      await new Promise((r) => setTimeout(r, 900)); // simulación
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  const socials = [
    { href: social.github, icon: Github, label: 'GitHub' },
    { href: social.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: `mailto:${social.email}`, icon: Mail, label: 'Email' },
  ];

  const fieldClass =
    'w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/70 transition-colors focus:border-accent';

  return (
    <section id="contact" className="section-container py-24 sm:py-32">
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Formulario */}
        <motion.form
          variants={slideUp}
          {...revealOnScroll}
          onSubmit={onSubmit}
          noValidate
          className="glass space-y-4 rounded-2xl p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                {t('name')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={t('namePlaceholder')}
                aria-invalid={!!errors.name}
                className={fieldClass}
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                {t('email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={t('emailPlaceholder')}
                aria-invalid={!!errors.email}
                className={fieldClass}
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
              {t('message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={t('messagePlaceholder')}
              aria-invalid={!!errors.message}
              className={`${fieldClass} resize-none`}
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-accent-hover disabled:opacity-60"
          >
            <Send size={16} />
            {status === 'sending' ? t('sending') : t('send')}
          </button>

          {status === 'success' && (
            <p role="status" className="text-sm text-accent">{t('success')}</p>
          )}
          {status === 'error' && (
            <p role="alert" className="text-sm text-red-400">{t('error')}</p>
          )}
        </motion.form>

        {/* Redes */}
        <motion.div variants={slideUp} {...revealOnScroll} className="grid content-start gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-accent"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon size={18} />
              </span>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
