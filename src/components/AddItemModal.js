import {View} from 'react-native';
import React, {useState} from 'react';
import {Button, HelperText, TextInput} from 'react-native-paper';
import Modal from 'react-native-modal';
import {useDispatch} from 'react-redux';
import AddItemAction from '../redux/actions/AddItemAction';
import {addItemModalStyles as styles} from '../styles';

export default function AddItemModal({modalState, modalChange}) {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState('');
  const [isNameEmpty, setIsNameEmpty] = useState(false);

  const clearInputText = () => {
    modalChange(false);
    setItemName('');
    setIsNameEmpty(false);
  };

  return (
    <Modal
      isVisible={modalState}
      backdropOpacity={0.7}
      onBackdropPress={() => clearInputText()}
      onBackButtonPress={() => clearInputText()}
      animationIn="fadeInLeft"
      animationOut="fadeOutRight"
      animationInTiming={400}
      backdropTransitionInTiming={200}
      animationOutTiming={400}
      useNativeDriver={true}
      deviceHeight={4000}
      useNativeDriverForBackdrop={true}
      statusBarTranslucent={true}>
      <View style={styles.mainContainer}>
        <View style={styles.itemInputContainer}>
          <TextInput
            mode="outlined"
            label="Add new item"
            onChangeText={text => {
              setItemName(text);
              setIsNameEmpty(false);
            }}
          />
          <HelperText type="error" visible={isNameEmpty} style={{color: 'red'}}>
            Cannot be empty!
          </HelperText>
        </View>

        <View style={styles.buttonContainer}>
          <View>
            <Button
              mode="contained"
              buttonColor="#BFEEE5"
              textColor="black"
              style={{width: 100, borderWidth: 1, borderColor: '#73EFD7'}}
              onPress={() => {
                dispatch(
                  AddItemAction(itemName, setIsNameEmpty, clearInputText),
                );
              }}>
              Add
            </Button>
          </View>

          <View>
            <Button
              mode="outlined"
              textColor="black"
              style={{width: 100}}
              onPress={() => clearInputText()}>
              Cancel
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}
