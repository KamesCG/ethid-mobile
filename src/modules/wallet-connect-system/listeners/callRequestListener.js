export const callRequestListener = (ref, dispatch) =>
  ref.on('call_request', (error, payload) => {
    if (error) {
      throw error;
    }
    dispatch({
      type: 'CALL_REQUEST',
      payload,
    });
  });
