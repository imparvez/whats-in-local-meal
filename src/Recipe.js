import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	FlatList,
	Linking,
	Image,
	ActivityIndicator } from 'react-native';

const URL = 'https://www.themealdb.com/api/json/v1/1/latest.php';

export default class Recipe extends Component {
	constructor(props) {
		super(props);
      	this.state = {
        	isLoading: true
      	}
	}
  componentDidMount() {
      return fetch(URL)
          .then((response) => response.json())
          .then((responseJson) => {
            	this.setState({
					isLoading: false,
					meals: responseJson.meals
              	});
          })
          .catch((error) => {
              console.error(error);
          });
  }

  render() {
  	if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator
          	color = '#bc2b78'
            size = "large"
            style = {styles.activityIndicator}
          />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop:20}}>
		<FlatList
        	data={this.state.meals}
        	keyExtractor={(item, index) => index.toString()}
        	renderItem={({item}) => <View key={item.idMeal}>
	        	<Image
	              style={{width: '100%', height: 250}}
	              source={{uri: item.strMealThumb}}
	            />
        		<Text 
        			style={styles.title}
        			onPress={() => Linking.openURL(item.strSource)}
        		>
        			{item.strMeal}
        		</Text>
        	</View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
  },
  title: {
  	textAlign: 'center',
  	fontSize: 20,
  	height: 35,
  	marginBottom: 10
  }
});