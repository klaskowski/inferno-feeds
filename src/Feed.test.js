import { render } from 'inferno';
import Feeds from './Feeds';

it('renders without crashing', () => {
  render(<Feed />, document.createElement('div'));
});
