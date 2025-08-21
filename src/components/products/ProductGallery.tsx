import { useCallback, useMemo, useState } from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

interface ProductGalleryProps {
  images: GalleryImage[];
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const total = images.length;

  const onOpen = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  const current = useMemo(() => images[index], [images, index]);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
            onClick={() => onOpen(i)}
            aria-label={`Open image ${i + 1}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            {img.caption ? (
              <span className="pointer-events-none absolute bottom-0 left-0 right-0 bg-black/40 p-2 text-xs text-white">
                {img.caption}
              </span>
            ) : null}
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogOverlay className="bg-black/80" />
        <DialogContent className="max-w-5xl bg-white p-0 shadow-xl">
          <div className="relative">
            <button
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 shadow"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-video bg-gray-50">
              <img
                src={current?.src}
                alt={current?.alt || 'Product image'}
                className="absolute inset-0 h-full w-full object-contain p-4"
              />
            </div>

            <div className="flex items-center justify-between px-4 py-3">
              <button
                onClick={prev}
                className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" /> Prev
              </button>
              <div className="text-sm text-gray-500">
                {index + 1} / {total}
              </div>
              <button
                onClick={next}
                className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
                aria-label="Next"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductGallery;
