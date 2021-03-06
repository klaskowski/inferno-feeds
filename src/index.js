import { render } from 'inferno'
import Feed from './Feed'
import './index.css'

const feeds = document.getElementsByTagName('feed');
for(let i=0; i<feeds.length; i++) render(
  <Feed
    uuid={feeds[i].attributes["data-uuid"]}
    orientation={feeds[i].attributes["data-vertical"] ? "vertical" : "horizontal"}
  />, feeds[i]
)
