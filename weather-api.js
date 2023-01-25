export const API_KEY = "08a3b90e6888abe49c49b671e358abc1";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

class WeatherAPI {

    constructor(city) {

        this.city = city;
        this.apiUrl = new URL(API_BASE_URL);
    }

    invoke() {
        this.buildURL();

        return fetch(this.apiUrl.toString())
            .then((response) => {
                return response.json()
            })
            .then((responseAsJSON) => {
                console.log(responseAsJSON)
                return responseAsJSON;
            })
            .catch((error) => {
                console.log("Error invoking the API");
                console.log(error);
                return;
            })

    }


    buildURL() {

        this.apiUrl.searchParams.append("q", this.city);
        this.apiUrl.searchParams.append("appid", API_KEY);
        this.apiUrl.searchParams.append("units", "metric");
    }

}

export { WeatherAPI }