
import { NativeModules } from 'react-native';

const { RNMirrarSdk } = NativeModules;

import React, { useEffect, useState, Component  } from 'react';
import { FlatList, Text, View } from 'react-native';
import WebView from 'react-native-webview'
import { userName,password,jsonData } from './constants'
import { EventRegister } from 'react-native-event-listeners'

export default class App extends Component {

  state={
     basicUrl : 'test' ,
     isLoading:true,
  }


 constructor(props){
    super(props);
    this.state = {
        basicUrl : 'test' ,
        isLoading:true,
      }

  }

componentDidMount(){


    const uuid = this.props.uuid;
    var jsonData = this.props.data;
var keysArray = [] ;
var valuesArray = [] ;
 var keysArray = [];
    var valuesArray = [];

  //  var jsonData ="{\"options\": {\"productData\": {\"Earrings\": {\"items\": [\"513319NDJAA40\",\"504002SHXABA02\",\"504002JGSABA02\",\"504002SQBABA02\",\"504002HQGAAA02\"],\"type\": \"ear\"}}}}";

    var userData = JSON.parse(jsonData);
    var userKeys=Object.keys(userData.options.productData);
    var userValues=Object.values(userData.options.productData);

for (let i = 0; i < userKeys.length; i++) {

           keysArray.push(userKeys[i]);
            //check in values
            var valueArray = [] ;

            for(let k=0;k<userValues[i].items.length;k++){

                    valueArray.push(userValues[i].items[k])


            }
            if(valueArray.length>0){
              valuesArray.push(valueArray);
            }



}


var codes=[];
var baseUrl='';
for(let i=0;i<valuesArray.length;i++){
   codes.push('&'+keysArray[i]+'=');
   for(let j=0;j<valuesArray[i].length;j++){
     codes.push(valuesArray[i][j]);
   }
}
console.log(codes);

var csv = codes.toString().replace("[", "").replace("]", "").replace(", ", ",").replace("=,", "=").replace(",&", "&");
 baseUrl = "https://cdn.styledotme.com/webpack/mirrar.html?brand_id=" +
          uuid +
          csv +
          "&sku=" +
          codes[(codes.length > 0) ? 1 : 0]+"&platform=android-sdk-reactnative";
console.log(baseUrl);

this.setState({
       basicUrl :baseUrl,
       isLoading:false,
      });
        }



render(){


      return (

          <View style={{ flex: 1, padding: 0 }}>
              {this.state.isLoading ? <Text style={{textAlignVertical: "center",textAlign: "center",}}>Hiiiz</Text>
 :
              (<WebView
			geolocationEnabled={true}
			mediaPlaybackRequiresUserAction={false}
			javaScriptEnabled={true}
			source={{ uri:this.state.basicUrl}}
			style={{ marginTop: 0 }}
			onMessage={event => {
                const { data } = event.nativeEvent;

                  var str = JSON.parse(data);
                  var keys=Object.keys(str);
                      var values=Object.values(str);

                  if(values[0]=="details"){
                        EventRegister.emit('details', values[1])
                  }
                  else if(values[0]=="whatsapp"){
                        EventRegister.emit('whatsapp', values[1])
                  }
                  else if(values[0]=="download"){
                       EventRegister.emit('download', values[1])
                   }
                   else if(values[0]=="wishlist"){
                         EventRegister.emit('wishlist',values[1])
                   }
                    else if(values[0]=="unwishlist"){
                           EventRegister.emit('unwishlist', values[1])
                     }
                  else if(values[0]=="cart"){
                          EventRegister.emit('cart', values[1])
                   }
                  else if(values[0]=="remove_cart"){
                          EventRegister.emit('remove_cart', values[1])
                  }
                    else if(values[0]=="remove_cart"){
                           EventRegister.emit('remove_cart', values[1])
                    }
              }}
              />
              )}
            </View>
      );
}

}