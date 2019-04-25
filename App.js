import React, { Component } from "react";
import Routes from "./src/Routes";
const App = () => <Routes />
export default App;

// import React, { Component } from "react";
// import { Button, View } from 'react-native';
// import axios from "axios";

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             rate: ""
//         }
//         this.getData = this.getData.bind(this);
//     }

//      async getData() {
//         await axios.get(
//             "https://api.coindesk.com/v1/bpi/currentprice.json"
//         ).then((response) => {
//             this.setState({ rate: response.data.bpi.USD.rate_float });
//         });
//     }
//     render() {
//         return (
//             <View>
//                 <Button
//                     onPress={this.getData}
//                     title="Get Data"
//                     color="#841584"
//                     accessibilityLabel="Learn more about this purple button"
//                 />
//             </View>
//         );
//     }
// }
// export default App;