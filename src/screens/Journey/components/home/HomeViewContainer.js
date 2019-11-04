import { compose, withState } from 'recompose';

import HomeScreen from './HomeView';

export default compose(withState('isLive', 'setIsLive', false))(
  HomeScreen,
);
