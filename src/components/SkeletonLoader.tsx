import { Skeleton } from './ui/skeleton';

interface SkeletonLoaderProps {
  type?: 'card' | 'hero' | 'text' | 'image';
  count?: number;
  className?: string;
}

const SkeletonLoader = ({ type = 'card', count = 1, className = '' }: SkeletonLoaderProps) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'hero':
        return (
          <div className="h-screen bg-gradient-to-b from-gray-100 to-gray-200 animate-pulse">
            <div className="container mx-auto px-6 lg:px-8 pt-32">
              <div className="space-y-6">
                <Skeleton className="h-16 w-3/4 bg-gray-300" />
                <Skeleton className="h-8 w-2/3 bg-gray-300" />
                <div className="flex gap-4">
                  <Skeleton className="h-12 w-32 bg-gray-300" />
                  <Skeleton className="h-12 w-32 bg-gray-300" />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'card':
        return (
          <div className="bg-white rounded-lg p-6 space-y-4 border border-gray-200">
            <Skeleton className="h-48 w-full bg-gray-200" />
            <Skeleton className="h-6 w-3/4 bg-gray-200" />
            <Skeleton className="h-4 w-full bg-gray-200" />
            <Skeleton className="h-4 w-2/3 bg-gray-200" />
          </div>
        );
      
      case 'text':
        return (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-gray-200" />
            <Skeleton className="h-4 w-5/6 bg-gray-200" />
            <Skeleton className="h-4 w-4/5 bg-gray-200" />
          </div>
        );
      
      case 'image':
        return <Skeleton className="h-64 w-full bg-gray-200" />;
      
      default:
        return <Skeleton className={`h-20 w-full bg-gray-200 ${className}`} />;
    }
  };

  return (
    <div className={`${className}`}>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="mb-4 last:mb-0">
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;