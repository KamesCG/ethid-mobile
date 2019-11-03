import RNWalletConnect from '@walletconnect/react-native';

// Create WalletConnector
const walletConnector = new RNWalletConnect(
  {
    uri: 'wc:8a5e5bdc-a0e4-47...TJRNmhWJmoxdFo6UDk2WlhaOyQ5N0U=', // Required
  },
  {
    clientMeta: {
      // Required
      description: 'WalletConnect Developer App',
      url: 'https://walletconnect.org',
      icons: ['https://walletconnect.org/walletconnect-logo.png'],
      name: 'WalletConnect',
      ssl: true,
    },
    // push: {
    //   // Optional
    //   url: 'https://push.walletconnect.org',
    //   type: 'fcm',
    //   token: token,
    //   peerMeta: true,
    //   language: language,
    // },
  },
);

// Subscribe to session requests
walletConnector.on('session_request', (error, payload) => {
  if (error) {
    throw error;
  }

  // Handle Session Request

  /* payload:
  {
    id: 1,
    jsonrpc: '2.0'.
    method: 'session_request',
    params: [{
      peerId: '15d8b6a3-15bd-493e-9358-111e3a4e6ee4',
      peerMeta: {
        name: "WalletConnect Example",
        description: "Try out WalletConnect v1.0.0-beta",
        icons: ["https://example.walletconnect.org/favicon.ico"],
        url: "https://example.walletconnect.org",
        ssl: true
      }
    }]
  }
  */
});

// Subscribe to call requests
walletConnector.on('call_request', (error, payload) => {
  if (error) {
    throw error;
  }

  // Handle Call Request

  /* payload:
  {
    id: 1,
    jsonrpc: '2.0'.
    method: 'eth_sign',
    params: [
      "0xbc28ea04101f03ea7a94c1379bc3ab32e65e62d3",
      "My email is john@doe.com - 1537836206101"
    ]
  }
  */
});

walletConnector.on('disconnect', (error, payload) => {
  if (error) {
    throw error;
  }

  // Delete walletConnector
});
