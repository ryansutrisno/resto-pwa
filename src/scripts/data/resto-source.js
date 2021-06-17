import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST_RESTO);
    const responseJson = await response.json();
    const data = responseJson.restaurants;
    console.log('data', data);
    console.log('response list resto', responseJson);
    return data;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const data = responseJson.restaurant;
    console.log('detail', data);
    // console.log('detail', response);
    return data;
  }

  static async searchResto(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    return response.json();
  }
}

export default RestoDbSource;
