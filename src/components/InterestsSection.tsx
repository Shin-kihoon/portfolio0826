import React from 'react';
import { Compass } from 'lucide-react';
import { content } from '../data/siteContent';

export const InterestsSection: React.FC = () => (
  <section id="interests" className="py-16 md:py-24 border-b border-zinc-200/80">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono-code">
            {content.interests.eyebrow}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-serif-heading">
          {content.interests.heading}
        </h2>
        <p className="text-base text-zinc-600 font-sans">{content.interests.subheading}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {content.interests.items.map((item) => (
          <div
            key={item.keyword}
            className="p-5 rounded-xl bg-white border border-zinc-200 space-y-2 shadow-xs"
          >
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-600 shrink-0" />
              <h3 className="text-sm font-bold text-zinc-900">{item.keyword}</h3>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
