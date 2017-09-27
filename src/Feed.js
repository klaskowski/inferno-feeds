import Component from 'inferno-component';
// import './registerServiceWorker';
import FeedProduct from './FeedProduct'
import './Feed.css'

export default class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    window.AllexisSDK.getFeed(this.props.uuid.value)
    .then(feed => this.setState({feed}))
  }

  render() {
    const {feed} = this.state;
    if(feed) return (
      <div class="feed">
        {feed.name &&
        <h2>{feed.name}</h2>
        }
        {feed.description &&
        <p class="description">{feed.description}</p>
        }
        {feed.products.map(product =>
          <FeedProduct product={product}/>
        )}
      </div>
    )
    else return (<div>Loading...</div>)
  }
}
