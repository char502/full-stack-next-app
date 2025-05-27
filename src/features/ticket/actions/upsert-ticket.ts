'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ticketPath, ticketsPath } from '@/paths';

// Upsert Server Action - Either Creates or Updates a ticket depending on whether a ticket is present

export const upsertTicket = async (
  id: string | undefined,
  formData: FormData
) => {
  const data = {
    // id: formData.get('id'),
    title: formData.get('title') as string,
    content: formData.get('content') as string,
    // description: formData.get('description'),
  };

  await prisma.ticket.upsert({
    where: { id: id || '' },
    update: data,
    create: data,
  });

  revalidatePath(ticketsPath());

  if (id) {
    redirect(ticketPath(id));
  }
};
