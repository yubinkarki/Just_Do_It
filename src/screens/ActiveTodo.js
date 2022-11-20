import React from 'react';
import {View, FlatList} from 'react-native';
import {EmptyItemText, ListItem} from '../components';
import {useSelector} from 'react-redux';
import {activeToDoStyles as styles} from '../styles';

export default function ActiveTodo() {
  const todoData = useSelector(state => state.todoReducer);

  const filteredData =
    Array.isArray(todoData) && todoData.length
      ? todoData.filter(value => !value.status)
      : [];

  const dataLength = filteredData.length;

  const listItemRender = ({item}) => <ListItem item={item} />;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.listContainer}>
        {dataLength == 0 ? (
          <View
            style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <EmptyItemText text="You don't have any tasks. Add some." />
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
