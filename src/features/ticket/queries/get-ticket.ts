// import { cache } from 'react';
import { prisma } from '@/lib/prisma';

// The cache function allows us to memorize this function
// or memorize the result of this function
// So when the function runs the first time
// we return the ticket from the database

// but if this function runs a second time
// the cached result is returned from this function
// and the database call is not run again

// If multiple components are using this 'getTicket' function
// this 'getTicket; function in here only runs once
// and then caches everything that is returned from this function

// then every other component that runs this function uses
// the cache and just uses the returned result from the cache here

// request memorization only works when the input is the same for the function
// i.e. when the id is the same that we pass into the function in the same render path
// that this function caches the result and can return the result on a cache hit

// If the Id's that are passed to the function are different
// we just cache it for this one ID here
// but because there is no other request happening
// then we have it cached
// but we are not using the cache

// so the request memorization doesn't help for this tickets page here
// (the page holding info on all the tickets)

// but it does help for the individual ticket page

// =======================================================
// Example where a function uses caching here:
// =======================================================

// export const getTicket = cache(async (id: string) => {
//   return await prisma.ticket.findUnique({
//     where: {
//       id,
//     },
//   });
// });

export const getTicket = async (id: string) => {
  return await prisma.ticket.findUnique({
    where: {
      id,
    },
  });
};

// import { initialTickets } from '@/data';
// import { Ticket } from '../types';

// import { initialTickets } from '@/data';
// import { Ticket } from '../types';

// export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   // throw new Error('Failed to fetch ticket');

//   const maybeTicket = initialTickets.find((ticket) => ticket.id === ticketId);

//   return new Promise((resolve) => {
//     resolve(maybeTicket || null);
//   });
// };
