import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import AppLoading from "expo-app-loading";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
           <View style={styles.cardcontainer}>
             <Image source = {require("../assets/post.jpeg")}
             style = {styles.storyImage}
            ></Image>

            <View style={styles.titlecontainer}>
              <Text style = {styles.titletext}>{this.props.story.title}</Text>
              <Text style = {styles.authortext}>{this.props.story.author}</Text>
              <Text style = {styles.descriptiontext}>{this.props.story.title}</Text>
            </View>
              
            <View style={styles.actioncontainer}>
            <View style={styles.likebutton}>
              <Ionicons name = {"heart"} size = {RFValue(30)}color = {"white"}></Ionicons>
              <Text style = {styles.liketext}>12K</Text>
             </View>
            </View>
           </View>
          </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardcontainer: {
     margin: RFValue(13),
     backgroundColor: "#2f345d",
       borderRadius: RFValue(20) 
      },
        storyImage: { resizeMode: "contain",
         width: "95%", alignSelf: "center",
          height: RFValue(250) 
        }, 
          titlecontainer: { 
            paddingLeft: RFValue(20),
             justifyContent: "center" },
              titletext: { fontSize: RFValue(25),
                 fontFamily: "Bubblegum-Sans",
                  color: "white" 
                },
                   authortext: {
                      fontSize: RFValue(18),
                       fontFamily: "Bubblegum-Sans",
                        color: "white" 
                      },
                         descriptiontext: { 
                           fontFamily: "Bubblegum-Sans", 
                           fontSize: 13,
                            color: "white",
                            paddingTop: RFValue(10) 
                          },
                             actioncontainer: { 
                               justifyContent: "center",
                                alignItems: "center",
                                 padding: RFValue(10) 
                                },
                                  likebutton: {
                                     width: RFValue(160),
                                     height: RFValue(40),
                                      justifyContent: "center",
                                       alignItems: "center", 
                                       flexDirection: "row", 
                                       backgroundColor: "#eb3948",
                                        borderRadius: RFValue(30) 
                                      },
                                         liketext: {
                                            color: "white",
                                             fontFamily: "Bubblegum-Sans"
                                         }
});
