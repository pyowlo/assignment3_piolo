import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Login from './Components/Login';
import Register from './Components/Register';
import Recovery from './Components/Recover';


import backgroundImage from './Components/wallpaper1.jpeg';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onSwitch={() => setCurrentPage('recovery')} onRegister={() => setCurrentPage('register')} />;
      case 'register':
        return <Register onSwitch={() => setCurrentPage('login')} />;
      case 'recovery':
        return <Recovery onSwitch={() => setCurrentPage('login')} />;
      default:
        return <Login onSwitch={() => setCurrentPage('recovery')} onRegister={() => setCurrentPage('register')} />;
    }
  };

  return (
    <PaperProvider>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View>
          {renderPage()}
        </View>
      </ImageBackground>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});

export default App;