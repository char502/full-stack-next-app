export const initialTickets = [
  {
    id: '1',
    title: 'Ticket 1',
    content: 'This is the first ticket',
    status: 'DONE' as const,
  },
  {
    id: '2',
    title: 'Ticket 2',
    content: 'This is the second ticket',
    status: 'OPEN' as const,
  },
  {
    id: '3',
    title: 'Ticket 3',
    content: 'This is the third ticket',
    status: 'IN_PROGRESS' as const,
  },
];

// 'as const' limits the type and says 'DONE' and 'OPEN' are the only statuses in the object
// now, 'status' is not a string any more (which couyld contain anything)

// These const assertions in the sample data, help us to narrow down the status type from a string
// to a fixed set of options ('DONE', 'OPEN', and 'IN_PROGRESS')

// Will later define a ticket type so this assertion won't be needed any more
