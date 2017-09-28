import Component from 'inferno-component';
import './FeedProduct.css';

export default class FeedProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
      price: window.AllexisSDK.getPriceForProduct(props.product.externalId) // this is an improper way to calculate price, SDK should return a feed product list with calculated prices
    }
  }

  play(productId) {
    if(productId === this.props.product.externalId) this.setState({isPlaying: true})
  }

  stop(productId) {
    if(productId === this.props.product.externalId) this.setState({isPlaying: false})
  }

  componentDidMount() {
    window.AllexisSDK.channel.subscribe("player:stopped", this.stop, this)
    window.AllexisSDK.channel.subscribe("player:started", this.play, this)
  }

  componentWillUnmount() {
    window.AllexisSDK.channel.unsubscribe("player:stopped", this.stop)
    window.AllexisSDK.channel.unsubscribe("player:started", this.play)
  }

  formatTimeInSecond(seconds){
    return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60) < 10 ? '0': ''}${Math.floor(seconds % 60)}`
  }

  render() {
    const {product} = this.props
    const {channel} = window.AllexisSDK
    return (
      <div class="product">
        <div class="product-cover">
          <a href={`/music/product?externalId=${product.externalId}`}>
            <img class="img-responsive" alt={`${product.displayTitle} cover`} src={`${product.thumbnailUrl}?size=medium&spacing=true&blur=false&color=ffffff&crop=false`} />
          </a>
          {!this.state.isPlaying &&
          <button type="button" class="button button-circle button-enqueue" onClick={channel.publish.bind(channel, "play", product.externalId)}></button>
          }
          {this.state.isPlaying &&
          <button type="button" class="button button-circle button-dequeue" onClick={channel.publish.bind(channel, "stop", product.externalId)}></button>
          }
        </div>
        <p class="product-type">{product.typeName}</p>
        <p><a class="product-name truncate-text" href={`/music/product?externalId=${product.externalId}`}>{product.displayTitle}</a></p>
        <p><a class="artist-name truncate-text" href={`/music/artist?artistExternalId=${product.artists[0].externalId}`}>{product.displayArtist}</a></p>
        <p class="duration">{this.formatTimeInSecond(product.duration)}</p>
        <button type="button" class="button button-buy" onClick={channel.publish.bind(channel, "buy", product.externalId)}>
          <svg width="20px" height="32px" viewBox="10 0 10 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,24 C11.1045695,24 12,23.1045695 12,22 C12,20.8954305 11.1045695,20 10,20 C8.8954305,20 8,20.8954305 8,22 C8,23.1045695 8.8954305,24 10,24 L10,24 Z M10,23 C9.44771525,23 9,22.5522847 9,22 C9,21.4477153 9.44771525,21 10,21 C10.5522847,21 11,21.4477153 11,22 C11,22.5522847 10.5522847,23 10,23 L10,23 Z M19.1153846,24 C20.2199541,24 21.1153846,23.1045695 21.1153846,22 C21.1153846,20.8954305 20.2199541,20 19.1153846,20 C18.0108151,20 17.1153846,20.8954305 17.1153846,22 C17.1153846,23.1045695 18.0108151,24 19.1153846,24 L19.1153846,24 Z M19.1153846,23 C18.5630999,23 18.1153846,22.5522847 18.1153846,22 C18.1153846,21.4477153 18.5630999,21 19.1153846,21 C19.6676694,21 20.1153846,21.4477153 20.1153846,22 C20.1153846,22.5522847 19.6676694,23 19.1153846,23 L19.1153846,23 Z M26.5,7 L24,7 C23.2061106,7 22.8682239,7.3888293 22.5628749,8.23742825 C22.5457931,8.28506874 22.5457931,8.28506874 22.5290355,8.33209401 L21.0949816,17.4225543 C20.9905643,17.8919281 20.8328814,18 20.0889473,18 L9.5,18 C9.44569363,18 9.32920417,17.9805851 9.2236068,17.9277864 C9.07489613,17.8534311 9,17.7410869 9,17.5 C9,17.2589131 9.07489613,17.1465689 9.2236068,17.0722136 C9.32920417,17.0194149 9.44569363,17 9.5,17 L18.5,17 C18.6956936,17 18.9542042,16.9569149 19.2236068,16.8222136 C19.6998961,16.5840689 20,16.1339131 20,15.5 C20,14.8660869 19.6998961,14.4159311 19.2236068,14.1777864 C18.9542042,14.0430851 18.6956936,14 18.5,14 L8.5,14 C8.44569363,14 8.32920417,13.9805851 8.2236068,13.9277864 C8.07489613,13.8534311 8,13.7410869 8,13.5 C8,13.2589131 8.07489613,13.1465689 8.2236068,13.0722136 C8.32920417,13.0194149 8.44569363,13 8.5,13 L19.5,13 C19.6956936,13 19.9542042,12.9569149 20.2236068,12.8222136 C20.6998961,12.5840689 21,12.1339131 21,11.5 C21,10.8660869 20.6998961,10.4159311 20.2236068,10.1777864 C19.9542042,10.0430851 19.6956936,10 19.5,10 L7,10 C6.72385763,10 6.5,10.2238576 6.5,10.5 C6.5,10.7761424 6.72385763,11 7,11 L19.5,11 C19.5543064,11 19.6707958,11.0194149 19.7763932,11.0722136 C19.9251039,11.1465689 20,11.2589131 20,11.5 C20,11.7410869 19.9251039,11.8534311 19.7763932,11.9277864 C19.6707958,11.9805851 19.5543064,12 19.5,12 L8.5,12 C8.30430637,12 8.04579583,12.0430851 7.7763932,12.1777864 C7.30010387,12.4159311 7,12.8660869 7,13.5 C7,14.1339131 7.30010387,14.5840689 7.7763932,14.8222136 C8.04579583,14.9569149 8.30430637,15 8.5,15 L18.5,15 C18.5543064,15 18.6707958,15.0194149 18.7763932,15.0722136 C18.9251039,15.1465689 19,15.2589131 19,15.5 C19,15.7410869 18.9251039,15.8534311 18.7763932,15.9277864 C18.6707958,15.9805851 18.5543064,16 18.5,16 L9.5,16 C9.30430637,16 9.04579583,16.0430851 8.7763932,16.1777864 C8.30010387,16.4159311 8,16.8660869 8,17.5 C8,18.1339131 8.30010387,18.5840689 8.7763932,18.8222136 C9.04579583,18.9569149 9.30430637,19 9.5,19 L20.0889473,19 C21.2740204,19 21.8586565,18.5993051 22.0772281,17.6076191 L23.4939657,8.57744574 C23.4876548,8.62107116 23.4876548,8.62107116 23.5038141,8.57600382 C23.6815498,8.08205641 23.7528556,8 24,8 L26.5,8 C26.7761424,8 27,7.77614237 27,7.5 C27,7.22385763 26.7761424,7 26.5,7 L26.5,7 Z"></path>
          </svg>
          <span>{this.state.price}</span>
        </button>
      </div>
    );
  }
}
