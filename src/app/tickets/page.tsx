import Heading from "@/components/heading";
import { Suspense } from "react";
import { TicketList } from "@/features/ticket/components/ticket-list";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets in one place" />

      <Suspense>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
