'use server';
// The 'use server' directive allows us to have a gateway from the client world to the server world
// So can execute functions that can run server side code

import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ticketsPath } from '@/paths';

export const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({
    where: {
      id,
    },
  });

  redirect(ticketsPath());
};
