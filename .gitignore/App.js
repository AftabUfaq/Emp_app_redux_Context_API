import React,{createContext,useReducer} from 'react';
import { StyleSheet, View } from 'react-native';
import Home  from './src/screens/Home'
import CreateEmployee from './src/screens/CreateEmployee'
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
//  redux
//import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer, initState} from './src/reducers/reducer'

// const store  = createStore(reducer)
export const MyContext  = createContext()
const Stack = createStackNavigator();

const myOptions = {
  title:"My Sweet Home",
  headerTintColor:"white",
  headerStyle:{
    backgroundColor:"#006aff"
  }
}
function App() {
  return (
  
    <View style={styles.container}>
     
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
         options={myOptions} />
        <Stack.Screen 
         name="Create"
         component={CreateEmployee}
         options={{...myOptions,title:"Create Employee"}} 
         />
        <Stack.Screen
         name="Profile"
         component={Profile}
         options={{...myOptions,title:"Profile"}} 
          />
     </Stack.Navigator>
  
    </View>

  );
}


export default ()=>{
  const [state,dispatch] = useReducer(reducer,initState)
   return (
<MyContext.Provider value={{state,dispatch}}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
    </MyContext.Provider> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
