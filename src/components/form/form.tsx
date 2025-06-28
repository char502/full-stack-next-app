import { toast } from 'sonner';
import { useActionFeedback } from './hooks/use-action-feedback';
import { ActionState } from './utils/to-action-state';

type FormProps = {
  action: (payload: FormData) => void;
  actionState: ActionState;
  children: React.ReactNode;
};

const Form = ({ action, actionState, children }: FormProps) => {
  // toast(actionState.message)
  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      // Only get a message for database errors
      // prevents toast if validation error
      if (actionState.message) {
        toast.success(actionState.message);
      }
    },
    onError: ({ actionState }) => {
      if (actionState.message) {
        toast.error(actionState.message);
      }
    },
  });
  return (
    <form action={action} className="flex flex-col gap-y-2">
      {children}
    </form>
  );
};

export { Form };
