import React, {useState} from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ActiveTodo from '../screens/ActiveTodo';
import InactiveTodo from '../screens/InactiveTodo';
import AddItemModal from './AddItemModal';
import {useSelector} from 'react-redux';
import {todoColors as colors} from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  headerStyle: {
    backgroundColor: colors.headerColor,
    height: 55,
    borderRadius: 9,
  },
  headerBackgroundContainerStyle: {
    marginLeft: '3%',
    marginRight: '3%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.headerBorderColor,
  },
});

export default function Navigation() {
  const todoData = useSelector(state => state.todoReducer);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const todoDataActive = todoData.filter(item => !item.status);
  const todoDataInactive = todoData.filter(item => item.status);

  return (
    <>
      <AddItemModal
        modalState={isModalVisible}
        modalChange={setIsModalVisible}
      />

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color}) => {
              let iconName;

              if (route.name === 'Todo') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              } else if (route.name === 'Done') {
                iconName = focused ? 'checkbox' : 'checkbox-outline';
              } else if (route.name == 'AddItem') {
                iconName = 'add-circle-outline';
              }

              return <Ionicons name={iconName} size={30} color={color} />;
            },
            headerShown: true,
            headerStyle: styles.headerStyle,
            headerBackgroundContainerStyle:
              styles.headerBackgroundContainerStyle,
            headerRight: () =>
              route.name == 'Todo' ? (
                <TouchableHighlight
                  onPress={toggleModal}
                  underlayColor={colors.noColor}
                  activeOpacity={0.8}>
                  <Ionicons
                    name={'add-circle-outline'}
                    size={40}
                    color={colors.iconColor}
                  />
                </TouchableHighlight>
              ) : null,
            headerTitle: () =>
              route.name === 'Done' ? (
                <Text style={styles.headerText}>Completed</Text>
              ) : route.name === 'Todo' ? (
                <Text style={styles.headerText}>Your Todo's</Text>
              ) : null,
            headerRightContainerStyle: {right: 20},
            headerTitleAlign: 'center',
            tabBarStyle: {height: 55},
            tabBarLabelStyle: {fontSize: 12, bottom: 5},
            tabBarIconStyle: {top: 2},
            tabBarActiveTintColor: colors.activeTabColor,
            tabBarInactiveTintColor: colors.iconColor,
          })}>
          <Tab.Screen
            name="Todo"
            component={ActiveTodo}
            options={{
              title: 'Todo',
              tabBarBadge: todoDataActive.length,
              tabBarBadgeStyle: {
                color: colors.iconColor,
                backgroundColor: 'transparent',
                fontSize: 10,
                marginLeft: 12,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: colors.headerBorderColor,
              },
            }}
          />

          <Tab.Screen
            name="Done"
            component={InactiveTodo}
            options={{
              title: 'Done',
              tabBarBadge: todoDataInactive.length,
              tabBarBadgeStyle: {
                color: colors.iconColor,
                backgroundColor: 'transparent',
                fontSize: 10,
                marginLeft: 12,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: colors.headerBorderColor,
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
