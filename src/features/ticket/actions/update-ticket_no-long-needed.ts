// 'use server';

// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { prisma } from '@/lib/prisma';
// import { ticketsPath } from '@/paths';

// ===================================================
// No Longer Needed, using the ticket-upsert-function
// ===================================================

// export const updateTicket = async (id: string, formData: FormData) => {
//   const data = {
//     // id: formData.get('id'),
//     title: formData.get('title'),
//     content: formData.get('content'),
//     // description: formData.get('description'),
//   };

//   //   console.log(data);
//   await prisma.ticket.update({
//     where: {
//       //   id: data.id as string,
//       id,
//     },
//     data: {
//       title: data.title as string,
//       content: data.content as string,
//     },
//   });

//   revalidatePath(ticketsPath());
//   redirect(ticketsPath());
// };
