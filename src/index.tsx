import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './Firebase.js';

import {
  LoginScreen,
  Dashboard,
  Home,
  Register
} from './screens';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Router = createStackNavigator(
  {
    LoginScreen,
    Dashboard,
    Home,
    Register
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
