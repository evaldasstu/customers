# Customer management CRUD application demo

This is a customer management CRUD demo application made using React, Redux, Bootstrap and Mapbox Geocoding API. App uses browser's local storage to persist data.

Deployed app is available online at [https://evaldasstu.github.io/customers](https://evaldasstu.github.io/customers).

## Running locally

### Prerequisites

* Node.js and npm
* Git _(optional)_
* Mapbox Geocoding API access token _(optional)_

### Instruction

* Get application source code by either cloning this repository:

`git clone https://github.com/evaldasstu/customers.git`

or by downloading and extracting [master.zip](https://github.com/evaldasstu/customers/archive/master.zip).

* Open app's directory: `cd customers`

* In the app's directory run `npm install` or `npm i` for short.
 
* _Optional:_ To use app's geocoding feature, create a Mapbox account and get a free Geocoding API access token. More info: [https://docs.mapbox.com/help/getting-started/access-tokens/](https://docs.mapbox.com/help/getting-started/access-tokens/)

* _Optional:_ Copy and paste your Mapbox Geocoding API access token into `.env` file in the project's root directory:

<pre>
REACT_APP_CUSTOMERS_MAPBOX_TOKEN=<b>your-api-token-goes-here</b>
</pre>

* Run `npm start`

Note: alternatively, check the [deployed app](https://evaldasstu.github.io/customers) for full functionality without the need for the access token.
