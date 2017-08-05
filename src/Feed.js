import Component from 'inferno-component';

class Feed extends Component {
  render() {
    return (
      <div class="product">
        <div class="product-cover">
          <a href="/music/product?productExternalId=7025f041-cfd5-a553-49ba-1efe6e0bcfc6">
            <img class="img-responsive" src="https://images.development.allexis.io/album/image/7eee2087-7433-427d-9a45-569bdfbbb53f/cf6dbc6e-388e-4142-8e33-d7dc3eaba553/7eee2087-7433-427d-9a45-569bdfbbb53f/a6/7d/a67d26064996c452077459de07a9fab8.jpg?size=medium&amp;spacing=true&amp;blur=false&amp;color=ffffff" />
          </a>
          <button type="button" class="ax-btn ax-btn-circle ax-enqueue-btn">
            <span></span>
          </button>
        </div>
        <div class="product-type">
          <span>Audio Single</span>
        </div>
        <div class="product-meta">
          <div>
            <a class="product-name ax-truncate-text" href="/music/product?productExternalId=7025f041-cfd5-a553-49ba-1efe6e0bcfc6">Memories</a>
          </div>
          <div>
            <a class="artist-name ax-truncate-text" href="/music/artist?artistExternalId=2b223ea9-85ab-4cbb-bb62-100f14cfdc59">David Guetta</a>
          </div>
        </div>
        <div>
          <span class="duration">26:53</span>
        </div>
        <div class="playlist-group ax-text-center">
          <button class="ax-btn ax-btn-like" disabled="">
            <svg width="22px" height="27px" viewBox="10 0 12 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M6,13 C6,9.12345438 8.20740599,6.5675106 11.1976576,6.25274727 C13.3065694,6.03075656 15.1599998,7.01000023 16.0118507,8.76511451 C16.8034058,7.01000021 18.7938232,6.03198242 20.802342,6.25274727 C23.7925934,6.5675106 25.9999994,9.12345433 26,13 C26.0000002,16.2241727 24.1570896,19.4250175 21.1035534,22.4785536 C20.0467867,23.5353202 18.9161943,24.4992989 17.7854943,25.3522832 C17.3894951,25.6510193 17.0214346,25.9147712 16.6905451,26.1411693 C16.4905227,26.2780267 16.3462585,26.3726843 16.2669965,26.4227445 C16.1039014,26.5257518 15.8960985,26.5257518 15.7330035,26.4227445 C15.6537415,26.3726842 15.5094773,26.2780267 15.3094549,26.1411693 C14.9785654,25.9147712 14.6105048,25.6510193 14.2145057,25.3522831 C13.0838057,24.4992988 11.9532133,23.5353201 10.8964466,22.4785534 C7.84291056,19.4250173 6,16.2241727 6,13 Z M11.3023424,7.24725273 C8.83009401,7.5074894 7,9.62654562 7,13 C7,15.9008273 8.71958944,18.8874827 11.6035534,21.7714466 C12.6249117,22.7928049 13.7208818,23.7272637 14.8167443,24.5539669 C15.200042,24.8431214 15.5556143,25.0979242 15.8741388,25.315862 C16.0637649,25.4456061 16,25.3884572 16,25.3884572 C16,25.3884572 16.0880575,25.3417276 16.1258612,25.315862 C16.4443857,25.0979242 16.799958,24.8431214 17.1832557,24.5539669 C18.2791182,23.7272638 19.3750883,22.792805 20.3964466,21.7714468 C23.2804107,18.8874828 25.0000002,15.9008274 25,13.0000001 C24.9999995,9.62654563 23.1699054,7.5074894 20.6976572,7.24725273 C18.3777377,7.00305066 16.5,8.51841806 16.5,11 C16.5,11.6666667 15.5,11.6666667 15.5,11 C15.5,8.51841809 13.6222621,7.00305065 11.3023424,7.24725273 Z"></path>
            </svg>
          </button>
        </div>
        <div class="ax-custom-btn-group ax-custom-btn-group-vertical">
          <span class="ax-btn ax-btn-unavailable ax-btn-block">streaming only</span>
          <button type="button" class="ax-btn ax-btn-subscribe ax-btn-block">
            <span translate="" rv-html="'common.subscribe' | translate < t">Subscribe</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Feed;
