/* --- Global --- */
import 'ethers/dist/shims.js';
import React from 'react';
import {View, ActivityIndicator, StyleSheet, YellowBox} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'emotion-theming';

/* --- Local --- */
// import theme from '@assets/theme';
import {colors} from '@styles';
import {store, persistor} from './store/configuration/store';
import ApplicationInitialize from './index';
import {EthersProvider} from './modules/ethers-react-system';
import {WalletConnectProvider} from './modules/wallet-connect-system';

// Ignore until ready for production.
YellowBox.ignoreWarnings(['componentWillUnmount']);
YellowBox.ignoreWarnings(['ViewPagerAndroid']);
YellowBox.ignoreWarnings(['Setting a timer']);

const theme = {
  blue: '#3a95ee',
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingIndicator />} persistor={persistor}>
        <WalletConnectProvider>
          <EthersProvider>
            <ThemeProvider theme={theme}>
              <ApplicationInitialize />
            </ThemeProvider>
          </EthersProvider>
        </WalletConnectProvider>
      </PersistGate>
    </Provider>
  );
};

const LoadingIndicator = () => (
  <View style={styles.container}>
    <ActivityIndicator color={colors.red} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default App;
