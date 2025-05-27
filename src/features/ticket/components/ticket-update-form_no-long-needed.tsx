// import { Ticket } from '@prisma/client';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { updateTicket } from '../actions/update-ticket';

// =================================================
// No Longer Needed, using the ticket-upsert-form
// =================================================

// type TicketUpdateFormProps = {
//   ticket: Ticket;
// };

// const TicketUpdateForm = ({ ticket }: TicketUpdateFormProps) => {
//   return (
//     <form
//       // binds 'ticket.id' to the 'updateTicket()' function,
//       action={updateTicket.bind(null, ticket.id)}
//       // Alternative Approach - requires hidden input to pass ticket id
//       // action={updateTicket}
//       className="flex flex-col gap-y-2"
//     >
//       {/* <Input name="id" type="hidden" defaultValue={ticket.id} /> */}

//       <Label htmlFor="title">Title</Label>
//       <Input id="title" name="title" type="text" defaultValue={ticket.title} />

//       <Label htmlFor="content">Content</Label>
//       <Textarea id="content" name="content" defaultValue={ticket.content} />

//       <Button type="submit">Update</Button>
//     </form>
//   );
// };

// export { TicketUpdateForm };
