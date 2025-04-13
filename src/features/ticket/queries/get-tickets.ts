import { initialTickets } from '@/data';
import { Ticket } from '../types';

export const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error('failed to fetch tickets');

  return new Promise((resolve) => {
    resolve(initialTickets);
  });
};
