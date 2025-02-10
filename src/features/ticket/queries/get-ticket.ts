import { initialTickets } from "@/data";
import { Ticket } from "../types";

export const getTicket = async (id: string): Promise<Ticket | null> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  throw new Error("Oops again!");

  const maybeTicket = initialTickets.find((ticket) => ticket.id === id);

  return new Promise((resolve) => {
    resolve(maybeTicket || null);
  });
};
