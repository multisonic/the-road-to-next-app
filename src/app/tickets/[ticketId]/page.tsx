import Link from "next/link";
import { initialTickets } from "@/data";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};
const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return (
      <div>
        <h2 className="text-lg">Ticket not found</h2>
        <p className="text-sm">
          <Link href="/tickets" className="text-sm underline">
            Back to Tickets
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg">TicketPage {ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </div>
  );
};

export default TicketPage;
