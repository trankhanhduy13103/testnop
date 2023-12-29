

import { NativeBaseProvider } from 'native-base';
import RegisterScreen from './src/Screens/RegisterScreen';


export default function App() {
  return (
    <NativeBaseProvider>
    <RegisterScreen/>
  </NativeBaseProvider>
  );
}


