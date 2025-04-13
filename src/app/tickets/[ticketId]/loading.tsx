import { Spinner } from '@/components/spinner';

// Same as having suspense boundary around the whole page
export default function Loading() {
  return <Spinner />;
}
