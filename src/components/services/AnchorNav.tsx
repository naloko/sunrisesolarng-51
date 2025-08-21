import React from 'react';

export type AnchorItem = {
  href: string;
  label: string;
};

interface AnchorNavProps {
  items: AnchorItem[];
}

const AnchorNav: React.FC<AnchorNavProps> = ({ items }) => {
  return (
    <nav aria-label="Section navigation" className="sticky top-16 sm:top-20 z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <ul className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
          {items.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors min-h-[44px] whitespace-nowrap"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default AnchorNav;
