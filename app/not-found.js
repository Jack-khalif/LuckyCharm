import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-slate-900">404</h1>
        <h2 className="text-2xl font-semibold text-slate-800">
          Page Not Found
        </h2>
        <p className="text-slate-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="mt-4">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
