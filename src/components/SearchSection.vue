<template>
  <div class="portal">
    <section class="product-selector mb-5" data-stats-ve="45">
      <ul>
        <li>
          <a data-stats-id="Pesquisa do Google" href="https://google.com">
            <img src="//www.gstatic.com/images/branding/googleg/1x/googleg_standard_color_64dp.png">
            <h3>Pesquisa do Google</h3>
          </a>
        </li>
        <li>
          <a data-stats-id="YouTube" href="https://youtube.com">
            <img src="//www.google.com/images/icons/product/youtube-64.png">
            <h3>YouTube</h3>
          </a>
        </li>
        <li>
          <a data-stats-id="Gmail" href="https://gmail.com">
            <img src="//www.google.com/images/icons/product/googlemail-64.png">
            <h3>Gmail</h3>
          </a>
        </li>
        <li>
          <a data-stats-id="Google Play" href="https://drive.google.com">
            <img src="//www.google.com/images/icons/product/drive-64.png">
            <h3>Google Drive</h3>
          </a>
        </li>
        <li>
          <a data-stats-id="AdSense" href="https://facebook.com">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"
            >
            <h3>Facebook</h3>
          </a>
        </li>
        <li>
          <a data-stats-id="Pixel Phone" href="https://twitter.com">
            <img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png">
            <h3>Twitter</h3>
          </a>
        </li>
        <li>
          <a data-stats-id="Google Maps" href="https://linkedin.com">
            <img src="https://www.shareicon.net/download/2017/06/30/888051_logo_512x512.png">
            <h3>Linkdin</h3>
          </a>
        </li>
        <li>
          <a data-stats-id="Google Drive" href="https://netflix.com">
            <img src="https://i.pinimg.com/originals/ca/43/93/ca43938588853b21f110263bf886fe80.png">
            <h3>Netflix</h3>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.portal .product-selector li,
.portal .list-of-hcs li {
  box-sizing: border-box;
  display: inline-block;
  margin: 0.25rem;
  padding-bottom: 0;
  text-align: left;
  vertical-align: top;
  width: calc(50% - 0.5rem);
}

.portal .product-selector li > a,
.portal .list-of-hcs li > a {
  border: 0.0625rem solid #dadce0;
  border-radius: 0.5rem;
  display: block;
  padding: 0 0.75rem;
}

.portal .product-selector li h3,
.portal .list-of-hcs li h3 {
  display: table-cell;
  font-weight: normal;
  height: 3.125rem;
  vertical-align: middle;
  white-space: normal;
}

.portal .additional-resources > li {
  color: #202124;
  display: block;
  vertical-align: top;
  width: auto;
}

.portal .additional-resources > li + li {
  margin: 2em 0 0;
}

.portal .additional-resources > li li {
  margin-left: 2em;
}

.portal .product-selector a,
.portal .list-of-hcs a {
  max-height: 3.125rem;
  overflow: hidden;
  white-space: nowrap;
}

.portal .product-selector li h3,
.portal .list-of-hcs li h3 {
  color: #3c4043;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.portal .product-selector li h3 {
  display: table-cell;
  font-family: inherit;
  margin: 0 0.5em;
  padding-left: 0.5rem;
  vertical-align: middle;
}

.portal .product-selector li {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  max-width: none;
  min-width: 0;
  min-height: 3.125rem;
  vertical-align: top;
}

.portal .product-selector li > a {
  overflow-x: hidden;
  padding: 0 0.75rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.portal .product-selector ul,
.portal ul.list-of-hcs {
  text-align: left;
}

.portal .product-selector li img {
  float: left;
  height: auto;
  margin: 0.5625rem 0;
  width: 2rem;
  vertical-align: middle;
}

@media (min-width: 25.0625rem) {
  .portal .product-selector li,
  .portal .list-of-hcs li {
    width: calc(50% - 0.5rem);
  }
}

@media (min-width: 37.5625rem) {
  .portal .product-selector li,
  .portal .list-of-hcs li {
    width: calc(100% / 3 - 0.5rem);
  }
}

.portal .product-selector li > a:hover {
  box-shadow: none;
  text-decoration: none;
}

.portal .list-of-hcs > li a:hover {
  text-decoration: none;
}

@media (min-width: 48.1875rem) {
  .hcfe .portal {
    box-sizing: border-box;
    max-width: 68rem;
  }
  .hcfe .portal .product-selector {
    padding: 0;
  }
  .portal .product-selector ul,
  .portal ul.list-of-hcs {
    display: inline-block;
    max-width: 44.5rem;
  }
  .portal .product-selector li,
  .portal .list-of-hcs li {
    width: calc(25% - 0.5rem);
  }
  .portal .product-selector li > a {
    max-height: 10rem;
    padding: 0.875rem 0.25rem;
    text-align: center;
    transition: box-shadow 218ms;
    -webkit-transition: box-shadow 218ms;
    -moz-transition: box-shadow 218ms;
    -o-transition: box-shadow 218ms;
  }
  .portal .product-selector li > a:hover {
    box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3),
      0 4px 8px 3px rgba(60, 64, 67, 0.15);
  }
  .portal .list-of-hcs li > a:hover {
    box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3),
      0 4px 8px 3px rgba(60, 64, 67, 0.15);
  }
  .portal .product-selector li img {
    float: none;
    margin: 0.75rem 0 0.25rem;
    width: 4rem;
  }
  .portal .product-selector li h3 {
    height: auto;
    display: block;
    margin: 0.5rem 0;
    min-height: 0;
    padding: 0;
  }
  .portal .all-hc-container-shown {
    margin-top: 1.8125rem;
  }
  .portal .all-hc-container h3 {
    margin-top: 2.25rem;
  }
  .portal .all-hc-container section:last-child {
    margin-bottom: 4em;
  }
  .portal .additional-resources ul li:before {
    display: inline;
  }
  .portal .list-of-hcs li a {
    max-height: none;
  }
  .portal .list-of-hcs > li h3 {
    height: 5rem;
  }
  .portal .additional-resources {
    margin: auto;
    max-width: 48.1875rem;
    text-align: left;
  }
  .portal .additional-resources > li {
    display: inline-block;
    width: 32%;
  }
  .portal .additional-resources > li:first-child > h3 {
    margin-top: 2.25rem;
  }
  .portal .additional-resources > li + li {
    margin: 0 0 0 2%;
  }
  .portal .additional-resources p {
    margin: 0 0 0.875rem;
  }
}

.product-selector {
  text-align: center;
}

.product-selector .title {
  font-size: 1.75rem;
  line-height: 2rem;
}

.product-selector .subtitle {
  font-size: 1rem;
  font-weight: 500;
  line-height: 2rem;
  margin: 1.5rem 0 0;
}

.product-selector .subtitle p {
  margin: 0.3125rem 0;
}

.product-selector li {
  display: inline-block;
  margin: 0 0.625rem;
  vertical-align: bottom;
  width: 10rem;
}

.product-selector li > a {
  display: block;
  padding: 1em 1em 0;
}

.product-selector li img {
  height: auto;
  width: 100%;
}

.product-selector li h3 {
  font-size: 0.875rem;
  margin: 1em 0 0;
  min-height: 3em;
}

.product-selector li > a {
  transition: box-shadow 218ms;
}

.product-selector li > a:hover {
  box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3),
    0 4px 8px 3px rgba(60, 64, 67, 0.15);
  text-decoration: none;
}

@media (min-width: 43.5rem) {
  .product-selector li {
    margin: 1em 1.875rem;
  }
  .product-selector li > a {
    padding-bottom: 1em;
  }
}

@media (min-width: 48.1875rem) {
  .hcfe article section.product-selector {
    padding: 2rem;
  }
  .product-selector .title {
    line-height: 2.5rem;
  }
  .product-selector .subtitle {
    line-height: 2rem;
    margin: 2.25rem 0 0.8125rem;
  }
}

@media (min-width: 74.125rem) {
  .hcfe article section.product-selector {
    padding: 4rem;
  }
}

a {
  text-decoration: none;
}
</style>
