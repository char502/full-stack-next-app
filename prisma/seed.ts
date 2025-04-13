import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const tickets = [
  {
    title: 'Ticket 1',
    content: 'This is the first ticket from the database',
    status: 'DONE' as const,
  },
  {
    title: 'Ticket 2',
    content: 'This is the second ticket from the database',
    status: 'OPEN' as const,
  },
  {
    title: 'Ticket 3',
    content: 'This is the third ticket from the database',
    status: 'IN_PROGRESS' as const,
  },
];

// different ways to run this function
const seed = async () => {
  const t0 = performance.now();
  console.log('DB Seed: Started ...');

  await prisma.ticket.deleteMany({});
  // Method 1:
  // =================================
  //   for (const ticket of tickets) {
  //     await prisma.ticket.create({
  //       data: ticket,
  //     });
  //   }

  // Method 2:
  // =================================
  //   const promises = tickets.map((ticket) =>
  //     prisma.ticket.create({
  //       data: ticket,
  //     })
  //   );

  //   await Promise.all(promises);

  // Method 3:
  // =================================
  await prisma.ticket.createMany({
    data: tickets,
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};

seed();
