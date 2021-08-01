import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <View>
      <MapView
        style={tw`flex-1`}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
