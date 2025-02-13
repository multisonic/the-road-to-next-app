"use client";

import { FieldError } from "@/components/form/field-error";
import { useActionFeedback } from "@/components/form/hooks/use-action-feedback";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@prisma/client";
import { useActionState, useMemo } from "react";
import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE
  );

  const options = useMemo(
    () => ({
      onSuccess: ({ actionState }: { actionState: ActionState }) => {
        console.log(actionState);
        // TODO optionally handle success
      },
      onError: ({ actionState }: { actionState: ActionState }) => {
        console.log(actionState);
        // TODO optionally handle error
      },
    }),
    []
  );

  // useActionFeedback(actionState, {
  //   onSuccess: ({ actionState }) => {
  //     console.log(actionState.message);
  //     // TODO optionally handle success
  //   },
  //   onError: ({ actionState }) => {
  //     console.log(actionState.message);
  //     // TODO optionally handle error
  //   },
  // });

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
      <FieldError actionState={actionState} name="title" />

      <Label htmlFor="content"></Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />
      <FieldError actionState={actionState} name="content" />

      <SubmitButton label={ticket ? "Edit" : "Create"} />
      {/* {actionState.message} */}
    </form>
  );
};

export { TicketUpsertForm };
