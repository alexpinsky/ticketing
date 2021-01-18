import { Publisher, Subjects, TicketUpdatedEvent } from '@alex-tickets/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated
}