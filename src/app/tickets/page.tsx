import Link from "next/link";
import { ticketPath } from "@/paths";
import { initialTickets } from "@/data";

const TicketsPage = () => {
  const TICKET_ICONS = {
    OPEN: "O",
    IN_PROGRESS: ">",
    DONE: "X",
  };
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <div>{TICKET_ICONS[ticket.status]}</div>
          <h2 className="text-lg">{ticket.title}</h2>

          <Link href={ticketPath(ticket.id)} className="text-sm underline">
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;
