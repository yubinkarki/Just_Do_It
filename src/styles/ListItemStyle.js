import {StyleSheet} from 'react-native';

export const listItemStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 10,
  },

  listItemContainer: {
    paddingLeft: 6,
  },
  listItemText: {
    color: 'black',
    fontSize: 15,
  },
  listItemTextStrike: {
    textDecorationLine: 'line-through',
  },
  listIconContainer: {
    position: 'absolute',
    right: 14,
  },
});
