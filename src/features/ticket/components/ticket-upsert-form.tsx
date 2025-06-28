'use client';

import { Ticket } from '@prisma/client';
import { useActionState } from 'react';
import { toast } from 'sonner';
import { FieldError } from '@/components/form/field-error';
import { useActionFeedback } from '@/components/form/hooks/use-action-feedback';
import { SubmitButton } from '@/components/form/submit-button';
import { EMPTY_ACTION_STATE } from '@/components/form/utils/to-action-state';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { upsertTicket } from '../actions/upsert-ticket';

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

// Upsert Form - Either Creates or Updates a ticket depending on whether a ticket is present
const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  // Rather than passing "upsertTicket.bind(null, ticket?.id)" directly into the form
  // are using it in the hook instead
  // The Hook returns the enhanced action
  // this helps attach a state to this action

  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE
  );

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
    <form
      // binds 'ticket.id' to the 'updateTicket()' function,
      action={action}
      // Alternative Approach - requires hidden input to pass ticket id
      // action={updateTicket}
      className="flex flex-col gap-y-2"
    >
      {/* <Input name="id" type="hidden" defaultValue={ticket.id} /> */}

      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        name="title"
        type="text"
        defaultValue={
          (actionState.payload?.get('title') as string) ?? ticket?.title
        }
      />
      <FieldError actionState={actionState} name="title" />

      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get('content') as string) ?? ticket?.content
        }
      />
      <FieldError actionState={actionState} name="content" />
      {/* <span className="text-xs text-red-500">
        {actionState.fieldErrors.content?.[0]}
      </span> */}

      <SubmitButton label={ticket ? 'Edit' : 'Create'} />
    </form>
  );
};

export { TicketUpsertForm };
