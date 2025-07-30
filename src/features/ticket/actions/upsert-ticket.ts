'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { setCookieByKey } from '@/actions/cookies';
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from '@/components/form/utils/to-action-state';
import { prisma } from '@/lib/prisma';
import { ticketPath, ticketsPath } from '@/paths';

const upsertTicketSchema = z.object({
  // 191 and 1024 characters - limits in line with
  // what is defined on the server
  title: z.string().min(1).max(191),
  content: z.string().min(1).max(1024),
  //
});

// Upsert Server Action - Either Creates or Updates a ticket depending on whether a ticket is present

export const upsertTicket = async (
  id: string | undefined,
  _actionState: ActionState,
  formData: FormData
) => {
  try {
    const data = upsertTicketSchema.parse({
      // id: formData.get('id'),
      title: formData.get('title'),
      content: formData.get('content'),
      // description: formData.get('description'),
    });
    await prisma.ticket.upsert({
      where: { id: id || '' },
      update: data,
      create: data,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  revalidatePath(ticketsPath());

  if (id) {
    await setCookieByKey('toast', 'Ticket updated');
    redirect(ticketPath(id));
  }

  return toActionState('SUCCESS', 'Ticket created');
};
