import { StyleSheet } from 'react-native';
import { colors, fonts } from '@styles'
export default StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    paddingHorizontal: 15,
    height: 100
  },
  itemFocused: {
    backgroundColor: colors.primary,
    borderRadius: 7,
    marginTop: -10,
  },
  icon: {
    width: 26,
    height: 26,
    marginTop:3,
  },
  iconFocused: {
    tintColor: colors.white,
  },
  label: {
    fontSize: 10, margin:0, padding:0
  },
  labelFocused: {
    color: '#FFF'
  },


  headerContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 5,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },

  headerCaption: {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 18,
  },
});
