import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './classes/Inicio';
import Register from './classes/Register';
import Login from './classes/Login';
import Home from './classes/Home';
// Import Firebase SDK
import { initializeApp } from 'firebase/app';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.FIREBASE_API_KEY,
  authDomain: "TU_AUTH_DOMAIN",
  projectId: Constants.expoConfig?.extra?.PROJECT_ID,
  storageBucket: Constants.expoConfig?.extra?.STORAGE_BUCKET,
  messagingSenderId: Constants.expoConfig?.extra?.MESSAGING_SENDER_ID,
  appId: Constants.expoConfig?.extra?.MOBILDESK_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCtPIGo4Br66XIqYMDKYADdgJeQGbi4wQ4",
//   authDomain: "TU_AUTH_DOMAIN",
//   projectId: "bamx-97ab1",
//   storageBucket: "bamx-97ab1.appspot.com",
//   messagingSenderId: "541243246193",
//   appId: "1:541243246193:android:1ba5024b66b3ab89f53dd0",
// };

// Inicializa Firebase
initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Inicio from './classes/Inicio';
// import Register from './classes/Register';
// import Login from './classes/Login';
// import Home from './classes/Home';
// // Importar Firebase (sin inicialización manual)
// import auth from '@react-native-firebase/auth';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Inicio">
//         <Stack.Screen name="Inicio" component={Inicio} />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Register" component={Register} />
//         <Stack.Screen name="Login" component={Login} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
