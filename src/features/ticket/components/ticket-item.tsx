import { Ticket } from '@prisma/client';
import clsx from 'clsx';
import {
  LucidePencil,
  LucideSquareArrowOutUpRight,
  LucideTrash,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ticketEditPath, ticketPath } from '@/paths';
import { deleteTicket } from '../actions/delete-ticket';
import { TICKET_ICONS } from '../constants';

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = async ({ ticket, isDetail }: TicketItemProps) => {
  // console.log('Where am I displayed? (TicketItem)');
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link prefetch href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  const editButton = (
    <Button variant="outline" size="icon" asChild>
      <Link prefetch href={ticketEditPath(ticket.id)}>
        <LucidePencil className="h-4 w-4" />
      </Link>
    </Button>
  );

  // https://stackoverflow.com/questions/2236747/what-is-the-use-of-the-javascript-bind-method
  // Bind creates a new function that will force the 'this' inside the function to be the parameter passed to bind().

  // Using a form element you can pass in a server action
  // bind only required in this situation if have to provide arguments for the server action function

  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button variant="outline" size="icon">
        <LucideTrash className="h-4 w-4" />
      </Button>
    </form>
  );

  return (
    <div
      className={clsx('w-full flex gap-x-1', {
        'max-w-[580px]': isDetail,
        'max-w-[420px]': !isDetail,
      })}
    >
      <Card className="w-full ">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx('whitespace-break-spaces', {
              'line-clamp-3': !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-y-1">
        {isDetail ? (
          <>
            {editButton}
            {deleteButton}
          </>
        ) : (
          <>
            {detailButton}
            {editButton}
          </>
        )}
      </div>
    </div>
  );
};

export { TicketItem };
