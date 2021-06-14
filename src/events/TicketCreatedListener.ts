import { Listener } from "./BaseListener";
import { Message } from "node-nats-streaming";
import { Subjects } from "./Subjects";

export class TicketCreatedListener extends Listener {
  subject = Subjects.TicketCreated;
  queueGroupName = 'payments-service';

  onMessage(data: any, msg: Message) {
    console.log('Event data', data);

    msg.ack();
  }
}
