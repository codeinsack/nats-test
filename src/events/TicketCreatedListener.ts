import { Listener } from "./BaseListener";
import { Message } from "node-nats-streaming";
import { Subjects } from "./Subjects";
import { TicketCreatedEvent } from "./TicketCreatedEvent";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = 'payments-service';

  onMessage(data: any, msg: Message) {
    console.log('Event data', data);

    msg.ack();
  }
}
