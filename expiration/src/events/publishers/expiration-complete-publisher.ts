import { ExpirationCompleteEvent, Publisher, Subjects } from "@alex-tickets/common"

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete
}