export const sessionRequestListener = (ref, dispatch) =>
  ref.on('session_request', (error, payload) => {
    if (error) {
      throw error;
    }
    dispatch({
      type: 'INIT_SUCCESS',
      payload: ref,
    });
    ref.approveSession({
      accounts: ['0x359CD9a4e8fe6D3510356166DCa6eA2a04e73128'],
      chainId: 4,
    });
  });
