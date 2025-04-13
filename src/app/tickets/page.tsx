// import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Heading } from '@/components/heading';
import { Spinner } from '@/components/spinner';
import { TicketList } from '@/features/ticket/components/ticket-list';

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

      {/* What wish to render later in a suspense boundary */}
      {/* suspend actions that are asynchronous to a later time */}
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
