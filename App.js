import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

const apiKey ='620c29ea8666e616e5cd46cb0d2acdf4';

export default function App() {
    const [weatherDataDurbuy, setWeatherDataDurbuy] = useState([]);
    const [weatherDataLondon, setWeatherDataLondon] = useState([]);
    const [weatherDataGarmisch, setWeatherDataGarmisch] = useState([]);
    const [weatherDataDeauville, setWeatherDataDeauville] = useState([]);
    const [weatherDataHattem, setWeatherDataHattem] = useState([]);

    //Proberen tweede durbuy met temp te maken.
    const [weatherDataDurbuyTemp, setWeatherDataDurbuyTemp] = useState([]);
    const [weatherDataLondonTemp, setWeatherDataLondonTemp] = useState([]);
    const [weatherDataGarmischTemp, setWeatherDataGarmischTemp] = useState([]);
    const [weatherDataDeauvilleTemp, setWeatherDataDeauvilleTemp] = useState([]);
    const [weatherDataHattemTemp, setWeatherDataHattemTemp] = useState([]);

    //Durbuy
    useEffect(() => {
        async function getLocationsDurbuy() {
            try {
                const {data: {weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=durbuy,be&appid=${apiKey}&lang=nl`);

                setWeatherDataDurbuy(weather);

                console.log(weather);
            } catch (e) {
                console.log(e);
            }
        }

        getLocationsDurbuy();

    }, []);

    //Durbuy temp
    useEffect(() => {
        async function getLocationsDurbuyTemp() {
            try {
                const {data: {main}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=durbuy,be&appid=${apiKey}&lang=nl`);

                setWeatherDataDurbuyTemp(main);

                console.log("hierzo", main);

            } catch (e) {
                console.log(e);
            }
        }

        getLocationsDurbuyTemp();

    }, []);

    //London
    useEffect(() => {
        async function getLocationsLondon() {
            try {
                const {data: {weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london,gb&appid=${apiKey}&lang=nl`);

                setWeatherDataLondon(weather);

                console.log(weather);
            } catch (e) {
                console.log(e);
            }
        }

        getLocationsLondon();

    }, []);

    //London temp
    useEffect(() => {
        async function getLocationsLondonTemp() {
            try {
                const {data: {main}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london,gb&appid=${apiKey}&lang=nl`);

                setWeatherDataLondonTemp(main);
                console.log("Hierzo London", main);
            } catch (e) {
                console.log(e);
            }
        }
        getLocationsLondonTemp();
    },[]);

  return (
    <View style={styles.container}>
        <Text>Locatie Durbuy:</Text>
        <FlatList
            data={weatherDataDurbuy}
            renderItem={({item }) =>{
                return <Text>{item.description}</Text>
            }}
            keyExtractor={(item) => item.dt}
        />
        <Text>
            {weatherDataDurbuyTemp.temp} <Text>F</Text>
        </Text>
        <Text style={styles.line}>------------------------------</Text>

        <Text>Locatie London:</Text>

        <FlatList
            data={weatherDataLondon}
            renderItem={({item }) =>{
                return <Text>{item.description}</Text>
            }}
            keyExtractor={(item) => item.dt}
        />
        <Text>
            {weatherDataLondonTemp.temp} <Text>F</Text>
        </Text>
        <Text style={styles.line}>------------------------------</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

    line: {
        color: '#2e81f4',
        fontSize: 14
    },

})

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
