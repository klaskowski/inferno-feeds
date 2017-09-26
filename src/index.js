import { render } from 'inferno'
import Feed from './Feed'
import './index.css'
import './ApiMock'

const feeds = document.getElementsByTagName('feed');
for(let i=0; i<feeds.length; i++) render(<Feed {...feeds[i].attributes}/>, feeds[i])
