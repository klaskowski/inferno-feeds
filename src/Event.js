export default class Channel {
  constructor () {
    this.events = {}
  }
  publish(name, ...params) {
    console.log(`Published ${name} with ${JSON.stringify(params)}`)
    if(this.events[name] instanceof Array) this.events[name].forEach(listener => listener.fn.apply(listener.scope, params))
  }
  subscribe(name, fn, scope) {
    if(this.events[name] instanceof Array) this.events[name].push({fn, scope})
    else this.events[name] = [{fn, scope}]
    console.log(`Subscribed to ${name} with ${fn.name}`)
  }
  unsubscribe(name, removedFn) {
    if(this.events[name] instanceof Array) this.events[name] = this.events[name].filter(fn => fn !== removedFn)
    console.log(`Unsubscribed from ${name} with ${removedFn.name}`)
  }
}
