import {StyleSheet} from 'react-native';

export const inactiveToDoStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: '300',
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  bottomText: {
    color: 'black',
    fontSize: 10,
    fontWeight: '300',
  },
  listContainer: {
    height: '100%',
    backgroundColor: '#F4F4F4',
    position: 'absolute',
    width: '100%',
  },
  headerIconContainer: {
    paddingLeft: '4%',
    zIndex: 1,
  },
  headerTextContainer: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
  },
});
