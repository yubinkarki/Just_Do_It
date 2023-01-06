import {View, Text, TouchableHighlight, Alert} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {listItemStyles as styles} from '../styles';
import {Checkbox} from 'react-native-paper';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import DeleteItemAction from '../redux/actions/DeleteItemAction';
import ChangeItemStatusAction from '../redux/actions/ChangeItemStatusAction';

export default function ListItem({item}) {
  const dispatch = useDispatch();

  const [itemCheck, setItemCheck] = useState(item.status);
  const [isDisabled, setIsDisabled] = useState(false);

  const changeStatusHandler = () => {
    setItemCheck(!itemCheck);
    setIsDisabled(true);
  };

  const deleteItemHandler = () => {
    Alert.alert(
      'Delete Todo',
      'Are you sure you want to delete?',
      [
        {
          text: 'Delete',
          onPress: () => dispatch(DeleteItemAction(item.id)),
        },
        {
          text: 'Cancel',
          style: 'cancel',
          cancellable: true,
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Checkbox
          status={itemCheck ? 'checked' : 'unchecked'}
          onPress={() => {
            changeStatusHandler();
            dispatch(ChangeItemStatusAction(item));
          }}
          uncheckedColor="#033C30"
          color="#02251E"
          disabled={isDisabled}
        />
      </View>

      <View style={styles.listItemContainer}>
        <Text
          style={[
            styles.listItemText,
            item.status && styles.listItemTextStrike,
          ]}>
          {item.title}
        </Text>
      </View>

      <View style={styles.listIconContainer}>
        <TouchableHighlight
          onPress={deleteItemHandler}
          underlayColor="white"
          activeOpacity={0.5}>
          <MIIcon name="delete-outline" size={25} color="#303131" />
        </TouchableHighlight>
      </View>
    </View>
  );
}
