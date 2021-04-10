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

    //Proberen tweede durbuy met temp te maken. ->Naar pressure veranderen!!!
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

    //Garmisch
    useEffect(() => {
        async function getLocationsGamisch() {
            try {
                const {data: {weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=garmisch-partenkirchen,de&appid=${apiKey}&lang=nl`);
                setWeatherDataGarmisch(weather);
                console.log(weather);
            } catch (e) {
                console.log(e);
            }
        }
        getLocationsGamisch();
    },[]);

    //Garmisch temp
    useEffect(() =>{
        async function getLocationsGarmischTemp(){
            try {
                const {data: {main}} =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=garmisch-partenkirchen,de&appid=${apiKey}&lang=nl`);
                setWeatherDataGarmischTemp(main);
                console.log("hierzo Garmisch", main);
            } catch (e) {
                console.log(e);
            }
        }
        getLocationsGarmischTemp();
    },[]);

    //Deauville
    useEffect(() => {
        async function getLocationsDeauville() {
            try {
                const {data: {weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=deauville,fr&appid=${apiKey}&lang=nl`);
                setWeatherDataDeauville(weather);
                console.log(weather);
            } catch (e) {
                console.log(e);
            }
        }
        getLocationsDeauville();
    },[]);

    //Deauville temp
    useEffect(() =>{
        async function getLocationsDeauvilleTemp() {
            try {
                const {data: {main}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=deauville,fr&appid=${apiKey}&lang=nl`);
                setWeatherDataDeauvilleTemp(main);
                console.log("hierzo Deauville", main);
            } catch (e) {
                console.log(e);
            }
        }
        getLocationsDeauvilleTemp();
    },[]);

    //Hattem
    useEffect(() =>{
        async function getLocationsHattem() {
            try {
                const {data: {weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=hattem,nl&appid=${apiKey}&lang=nl`);
                setWeatherDataHattem(weather);
                console.log(weather);
            } catch (e) {
                console.log(e);
            }
        }
        getLocationsHattem();

    },[]);

    //Hattem temp
    useEffect(() => {
        async function getLocationsHattemTemp() {
            try {
                const {data: {main}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=hattem,nl&appid=${apiKey}&lang=nl`);
                setWeatherDataHattemTemp(main);
                console.log("hierzo Hattem", main);
            } catch (e) {
                console.log(e);
            }
        }
        getLocationsHattemTemp();
    },[]);

  return (
      <View>
        <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text>Actuele weerssituatie:</Text>


        <Text style={styles.line}>-----------------------------------</Text>

          <Text>Locatie Durbuy:</Text>
          <FlatList
              data={weatherDataDurbuy}
              renderItem={({item }) =>{
                  return <Text>Weerbeeld: {item.description}</Text>
              }}
              keyExtractor={(item) => item.dt}
          />
          <Text>
              Luchtdruk: {weatherDataDurbuyTemp.pressure} <Text>Pa</Text>
          </Text>
          <Text style={styles.line}>-----------------------------------</Text>

        <Text>Locatie London:</Text>

        <FlatList
            data={weatherDataLondon}
            renderItem={({item }) =>{
                return <Text>Weerbeeld: {item.description}</Text>
            }}
            keyExtractor={(item) => item.dt}
        />
        <Text>
            Luchtdruk: {weatherDataLondonTemp.pressure} <Text>Pa</Text>
        </Text>
        <Text style={styles.line}>-----------------------------------</Text>

        <Text>Locatie Garmisch:</Text>

        <FlatList
            data={weatherDataGarmisch}
            renderItem={({item }) =>{
                return <Text>Weerbeeld: {item.description}</Text>
            }}
            keyExtractor={(item) => item.dt}
        />
        <Text>
            Luchtdruk: {weatherDataGarmischTemp.pressure} <Text>Pa</Text>
        </Text>
        <Text style={styles.line}>-----------------------------------</Text>

        <Text>Locatie Deauville:</Text>

        <FlatList
            data={weatherDataDeauville}
            renderItem={({item }) =>{
                return <Text>Weerbeeld: {item.description}</Text>
            }}
            keyExtractor={(item) => item.dt}
        />
        <Text>
            Luchtdruk: {weatherDataDeauvilleTemp.pressure} <Text>Pa</Text>
        </Text>
        <Text style={styles.line}>-----------------------------------</Text>

        <Text>Locatie Hattem:</Text>

        <FlatList
            data={weatherDataHattem}
            renderItem={({item }) =>{
                return <Text>Weerbeeld: {item.description}</Text>
            }}
            keyExtractor={(item) => item.dt}
        />
        <Text>
            Luchtdruk: {weatherDataHattemTemp.pressure} <Text>Pa</Text>
        </Text>
        <Text style={styles.line}>-----------------------------------</Text>



      <StatusBar style="auto" />
    </View>
  );
}

/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    line: {
        color: '#2e81f4',
        fontSize: 14
    },

})*/

const styles = StyleSheet.create({

    line: {
        color: '#2e81f4',
        fontSize: 14
    },
});
