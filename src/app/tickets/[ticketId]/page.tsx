// import Link from 'next/link';
import { notFound } from 'next/navigation';
// import { Placeholder } from '@/components/placeholder';
// import { Button } from '@/components/ui/button';
// import { initialTickets } from '@/data';
import { TicketItem } from '@/features/ticket/components/ticket-item';
import { getTicket } from '@/features/ticket/queries/get-ticket';
// import { ticketsPath } from '@/paths';

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <>
      <div className="flex justify-center animate-fade-in-from-top">
        <TicketItem ticket={ticket} isDetail />
      </div>
    </>
  );
};

// generate static Id's for all the individual tickets
// this would also require a revalidate (in the delete-ticket function)
// if any of the tickets were deleted

// export async function generateStaticParams() {
//   const tickets = await getTickets();

//   return tickets.map((ticket) => ({
//     ticketId: ticket.id,
//   }));
// }

export default TicketPage;
