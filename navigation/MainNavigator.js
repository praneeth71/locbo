import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { useStateValue } from "../Context/StateProvider";
import { Ionicons } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const HomeStack = createBottomTabNavigator();

import AddPass from "../screens/AddPass";
import ConfOTP from "../screens/ConfOTP";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Mobconf from "../screens/Mobconf";
import Nickname from "../screens/Nickname";
import Signup from "../screens/Signup";
import Search from "../screens/Search";
import Chats from "../screens/Chats";
import Account from "../screens/Account";

function MainNavigator() {
	const [initializing, setInitializing] = useState(true);
	const [{ user }, setUser] = useStateValue();

	if (!user)
		return (
			<AuthStack.Navigator
				initialRouteName="Login"
				screenOptions={{
					title: "LOCBO",
					headerTintColor: "#fff",
					headerStyle: {
						backgroundColor: "#181515",
					},
					headerTitleStyle: {
						color: "#fff",
						fontFamily: "Oleo-Script",
					},
				}}
			>
				<AuthStack.Screen name="Login" component={Login} />
				<AuthStack.Screen name="Signup" component={Signup} />
				<AuthStack.Screen name="Mobconf" component={Mobconf} />
				<AuthStack.Screen name="ConfOTP" component={ConfOTP} />
				<AuthStack.Screen name="AddPass" component={AddPass} />
				<AuthStack.Screen name="Nickname" component={Nickname} />
			</AuthStack.Navigator>
		);
	else
		return (
			<HomeStack.Navigator
				initialRouteName="Home"
				tabBarOptions={{
					activeBackgroundColor: "#000000",
					inactiveBackgroundColor: "#181515",
					showLabel: false,
				}}
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === "Home") {
							iconName = "ios-home";
						} else if (route.name === "Search") {
							iconName = "ios-search";
						} else if (route.name === "Chats") {
							iconName = "ios-text";
						} else if (route.name === "Account") {
							iconName = "ios-contact";
						}

						// You can return any component that you like here!
						return <Ionicons name={iconName} size={size} color="#fff" />;
					},
				})}
			>
				<HomeStack.Screen name="Home" component={Home} />
				<HomeStack.Screen name="Search" component={Search} />
				<HomeStack.Screen name="Chats" component={Chats} />
				<HomeStack.Screen name="Account" component={Account} />
			</HomeStack.Navigator>
		);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#181515",
	},
});

export default MainNavigator;
