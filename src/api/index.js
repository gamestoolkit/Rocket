import Constants from "../common/constants";

class AssetsApi {
  constructor() {
    this.apiUrl = process.env.NODE_ENV !== 'production' ? Constants.API_DEV_URL : Constants.API_URL 
  }

  async findAll() {
    let response = await fetch(this.apiUrl)
    let assets = await response.json()
    return assets
  }

  async filter(query) {
    const response = await fetch(`${this.apiUrl}?q=${query}`);
    const assets = await response.json();
    return assets;
  }

  async findByUrlSlug(slug) {
    let response = await fetch(`${this.apiUrl}?urlSlug=${slug}`)
    let asset = await response.json()
    return asset[0]
  }
}

export default AssetsApi
