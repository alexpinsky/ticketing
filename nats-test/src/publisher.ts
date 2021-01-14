import nats from 'node-nats-streaming'
import { TicketCreatedPulisher } from './events/ticket-created-publisher'

console.clear()

const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222'
})

stan.on('connect', async () => {
  console.log('Publisher connected to NATS')

  const publisher = new TicketCreatedPulisher(stan)

  try {
    await publisher.publish({
      id: '12324',
      title: 'concert',
      price: 20
    })
  }
  catch (error) {
    console.error(error)
  }
})