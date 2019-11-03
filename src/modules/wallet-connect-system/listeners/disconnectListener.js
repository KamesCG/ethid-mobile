export const sessionRequestListener = walletConnector =>
  global.wc.on('disconnect', (error, payload) => {
    if (error) {
      throw error;
    }

    console.log(payload);
  });
