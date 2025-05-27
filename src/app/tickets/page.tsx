// import { useEffect, useState } from 'react';
import { Suspense } from 'react';
// import { ErrorBoundary } from 'react-error-boundary';
import { Heading } from '@/components/heading';
// import { Placeholder } from '@/components/placeholder';
import { Spinner } from '@/components/spinner';
import { CardCompact } from '@/components/ui/card-compact';
import { TicketList } from '@/features/ticket/components/ticket-list';
// import { TicketCreateForm } from '@/features/ticket/components/ticket-create-form';
import { TicketUpsertForm } from '@/features/ticket/components/ticket-upsert-form';

// ==================================================================
// Dynamic regeneration in Next.js
// ==================================================================
// Force Dynamic rendering
// export const dynamic = 'force-dynamic';

// Incremental static regeneration techniques in Next.js (time-based and on-demand)

// (i.e. can have statically rendered page but have dynamic rendering behaviour in between)
// ==================================================================
// (Time-based caching)
// ==================================================================
// If want to revalidate every 30 seconds
// called 'incremental static regeneration' in Next.js
// If set to '0', Next.js will consider this dynamically rendered

// export const revalidate = 38;

// ==================================================================
// On-demand caching
// see 'delete ticket' action (update the page whenever a ticket is deleted)
// ==================================================================

// import { Ticket } from '@/features/ticket/types';

const TicketsPage = () => {
  // getTickets could be calling server data
  // this is possible here as can run this component as if it were on the server
  // have direct access here to the DB so can call it like this
  // const tickets = await getTickets();

  // No Longer needed
  // const [tickets, setTickets] = useState<Ticket[]>([]);

  // useEffect(() => {
  //   const fetchTickets = async () => {
  //     const result = await getTickets();

  //     setTickets(result);
  //   };
  //   fetchTickets();
  // }, []);

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      {/* Everything that can render initially is called streaming */}
      <Heading title="Tickets" description="All your tickets in one place" />

      <CardCompact
        title={'Create Ticket'}
        description={'A new ticket will be created'}
        className={'w-full max-w-[420px] self-center'}
        // content={<TicketCreateForm />}
        content={<TicketUpsertForm />}
      />

      {/* What wish to render later in a suspense boundary */}
      {/* suspend actions that are asynchronous to a later time */}
      {/* By using a suspense boundary have more fine grained control over  */}
      {/* where the spinner is showing up  */}

      {/* More fine grained control with this error boundary component */}
      {/* <ErrorBoundary fallback={<Placeholder label="something went wrong" />}> */}
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default TicketsPage;
