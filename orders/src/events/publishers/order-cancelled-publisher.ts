import { Publisher, OrderCancelledEvent, Subjects } from '@alex-tickets/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled
}