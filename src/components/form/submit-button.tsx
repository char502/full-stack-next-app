import { LucideLoaderCircle } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

type SubmitButtonProps = {
  label: string;
};

// 'useFormStatus' needs to be called from within a form
// Making a reusable SubmitButton enables this hook to be placed
// within the form (When inserting the SubmitButton' component inside the form)
// This then enables the hook to be aware
// of the status of the form it is placed within
// so the pending prop can then work as needed
const SubmitButton = ({ label }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending && <LucideLoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
      {label}
    </Button>
  );
};

export { SubmitButton };
