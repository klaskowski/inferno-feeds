window.AllexisSDK = {
    getFeed: feedId => fetch("https://api.myjson.com/bins/m0znl").then(response => response.json()),
    getPriceForProduct: productId => new Promise(resolve => resolve("R 20,00"))
}