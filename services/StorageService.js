import { AsyncStorage } from "react-native";

export const StorageService = {
  _storeData: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  },
  _retrieveData: async (key, callback) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        callback(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  },
};
