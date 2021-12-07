import React from 'react';
import {HomeScreen} from './src/screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {NextScreen} from './src/screens/NextScreen';
import {QueryClientProvider, useQueryClient, QueryClient} from 'react-query';
import {FirstScreen} from './src/screens/FirstScreen';
import {SimplePostScreen} from './src/screens/SimplePostScreen';
import {QueryPostScreen} from './src/screens/QueryPostScreen';
import {FetchingIdData} from './src/screens/FetchingIdData';
import {FetchingIdQurey} from './src/screens/FetchingIdQurey';
import {deleteData} from './src/screens/DeleteData';
import {editData} from './src/screens/EditData';
import {Provider} from 'react-redux';
import {configureStore} from './src/screens/redux/store';
import {GoRestApis} from './src/screens/GoRestApis';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
        <Stack.Screen name="SimplePostScreen" component={SimplePostScreen} />
        <Stack.Screen name="QueryPostScreen" component={QueryPostScreen} />
        <Stack.Screen name="FetchingIdData" component={FetchingIdData} />
        <Stack.Screen name="FetchingIdQurey" component={FetchingIdQurey} />
        <Stack.Screen name="DeletData" component={deleteData} />
        <Stack.Screen name="EditData" component={editData} />
        <Stack.Screen name="GoRestApis" component={GoRestApis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const qureyClient = new QueryClient();
  const store = configureStore();
  return (
    <Provider store={store}>
      <QueryClientProvider client={qureyClient}>
        <Routes />
      </QueryClientProvider>
    </Provider>
  );
};
export default App;
