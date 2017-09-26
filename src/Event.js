export default function trigger(event, ...params) {
  console.log(`Trigger ${event} with ${JSON.stringify(params)}`)
}

export function request(name, ...params) {
  console.log(`Requested ${name} with ${JSON.stringify(params)}`)
}

export function reply(name, ...params) {
  console.log(`SDK responded to ${name} with ${JSON.stringify(params)}`)
}

export function stopReplyingTo(name, fn) {
  console.log(`Stop responding to ${name}${fn.name ? ' with ' + fn.name : ''}`)
}

export function listenTo(event, ...params) {
  console.log(`SDK received ${event} with ${JSON.stringify(params)}`)
}

export function stopListeningTo(event, fn) {
  console.log(`Stop listening to ${event}${fn.name ? ' with ' + fn.name : ''}`)
}

export class Channel {
  constructor () {
    this.events = {}
  }
  publish(name, ...params) {
    console.log(`Published ${name} with ${JSON.stringify(params)}`)
    if(this.events.name instanceof Array) this.events.name.forEach(fn => fn(...params))
  }
  subscribe(name, fn) {
    if(this.events.name instanceof Array) this.events.name.push(fn)
    else this.events.name = [fn]
    console.log(`Subscribed to ${name} with ${fn.name}`)
  }
  unsubscribe(name, removedFn) {
    if(this.events.name instanceof Array) this.events.name = this.events.name.filter(fn => fn !== removedFn)
    console.log(`Unsubscribed from ${name} with ${removedFn.name}`)
  }
}
