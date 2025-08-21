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
    <nav aria-label="Section navigation" className="sticky top-14 z-20 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <ul className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
          {items.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground/80 hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors"
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
