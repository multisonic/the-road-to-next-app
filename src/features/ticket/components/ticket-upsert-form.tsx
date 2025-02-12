"use client";

import { SubmitButton } from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@prisma/client";
import { upsertTicket } from "../actions/upsert-ticket";
import { useActionState } from "react";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE
  );

  return (
    <form action={action} className="flex flex-col gap-y-2">
      <Label htmlFor="title"></Label>
      <Input
        id="title"
        name="title"
        type="text"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />
      <span className="text-xs text-red-500">
        {actionState.fieldErrors.title?.[0]}
      </span>

      <Label htmlFor="content"></Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />
      <span className="text-xs text-red-500">
        {actionState.fieldErrors.content?.[0]}
      </span>

      <SubmitButton label={ticket ? "Edit" : "Create"} />
      {actionState.message}
    </form>
  );
};

export { TicketUpsertForm };
