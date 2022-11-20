import {StyleSheet} from 'react-native';

export const addItemModalStyles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    backgroundColor: 'white',
  },
  itemInputContainer: {
    paddingTop: 12,
    alignSelf: 'center',
    width: '90%',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 15,
    justifyContent: 'space-evenly',
  },
});
