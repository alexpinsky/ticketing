import { PaymentCreatedEvent, Publisher, Subjects } from "@alex-tickets/common"

export class PaymentCreatePublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated
}