import { useEffect, useMemo, useState } from 'react';
import { removeWhiteBackgroundFromUrl } from '@/utils/removeWhiteBackground';

interface ProcessedLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  cacheKey?: string; // optional custom cache key
}

const CACHE_VERSION = 'v1';

const ProcessedLogo: React.FC<ProcessedLogoProps> = ({ src, alt, className, cacheKey, loading = 'eager', decoding = 'async', ...rest }) => {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);

  const key = useMemo(() => `processed-logo:${cacheKey ?? src}:${CACHE_VERSION}`,[cacheKey, src]);

  useEffect(() => {
    let isMounted = true;
    const cached = typeof window !== 'undefined' ? localStorage.getItem(key) : null;

    if (cached) {
      setProcessedSrc(cached);
      return;
    }

    const idleCallback: any = (window as any).requestIdleCallback || ((cb: any) => setTimeout(cb, 200));
    const cancelIdle: any = (window as any).cancelIdleCallback || ((id: any) => clearTimeout(id));

    const idleId = idleCallback(async () => {
      try {
        const dataUrl = await removeWhiteBackgroundFromUrl(src, {
          whiteThreshold: 245,
          softThreshold: 230,
          minAlphaForCrop: 8,
          padding: 2,
        });
        if (!isMounted) return;
        setProcessedSrc(dataUrl);
        localStorage.setItem(key, dataUrl);
      } catch (e) {
        // Fallback to original on error
        if (isMounted) setProcessedSrc(src);
        console.error('Logo processing failed:', e);
      }
    });

    return () => {
      isMounted = false;
      cancelIdle(idleId);
    };
  }, [src, key]);


  const finalSrc = processedSrc ?? src;

  return (
    <img
      src={finalSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding as any}
      {...rest}
    />
  );
};

export default ProcessedLogo;
