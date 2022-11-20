import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {inactiveToDoStyles as styles} from '../styles';
import {EmptyItemText, ListItem} from '../components';

export default function InactiveTodo() {
  const todoData = useSelector(state => state.todoReducer);

  const filteredData =
    Array.isArray(todoData) && todoData.length
      ? todoData.filter(value => value.status)
      : [];

  const dataLength = filteredData.length;

  const listItemRender = ({item}) => <ListItem item={item} />;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.listContainer}>
        {dataLength == 0 ? (
          <View
            style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <EmptyItemText text="You have not completed any task." />
          </View>
        ) : (
          <FlatList
            data={filteredData}
            renderItem={listItemRender}
            keyExtractor={data => data.id}
          />
        )}
      </View>
    </View>
  );
}
