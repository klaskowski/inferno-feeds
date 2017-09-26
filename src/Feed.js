import Component from 'inferno-component';
// import './registerServiceWorker';
import FeedProduct from './FeedProduct'
import './Feed.css'

export default class Feed extends Component {
  render() {
    return (
      <div class="feed">
        <h2>Christmas 2016</h2>
        <p class="description">{this.props.uuid.value}</p>
        <FeedProduct />
        <FeedProduct />
        <FeedProduct />
        <FeedProduct />
        <FeedProduct />
        <FeedProduct />
        <FeedProduct />
        <FeedProduct />
      </div>
    );
  }
}
