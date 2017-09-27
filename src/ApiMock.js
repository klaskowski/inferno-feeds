import Channel from './Event'

window.AllexisSDK = {
    channel: new Channel(),
    playedItem: null,
    getFeed: feedId => fetch("https://api.myjson.com/bins/m0znl").then(response => response.json()),
    getPriceForProduct: productId => new Promise(resolve => resolve("R 20,00")),
}

window.AllexisSDK.channel.subscribe("play", id => {
    if(id !== window.AllexisSDK.playedItem) {
        if(window.AllexisSDK.playedItem != null) {
            console.log(`Channel stopped playing ${id}`)
            window.AllexisSDK.channel.publish("player:stopped", window.AllexisSDK.playedItem)
        }
        window.AllexisSDK.playedItem = id
        console.log(`Channel started playing ${id}`)
        window.AllexisSDK.channel.publish("player:started", id)
    }
})

window.AllexisSDK.channel.subscribe("buy", id => {
    console.log(`Channel received a call to buy ${id}`)
})

window.AllexisSDK.channel.subscribe("stop", id => {
    if(id === window.AllexisSDK.playedItem
    && window.AllexisSDK.playedItem != null) {
        window.AllexisSDK.playedItem = null
        console.log(`Channel stopped playing ${id}`)
        window.AllexisSDK.channel.publish("player:stopped", id)
    }
})