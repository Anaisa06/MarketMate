import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

export type TabParamList = {
    Home: {reRender?: boolean};
    Statistics: {reRender?: boolean};
}

export type HomeRouteParams = RouteProp<TabParamList, 'Home'>;
export type StatisticsRouteParams = RouteProp<TabParamList, 'Statistics'>;

export type HomeNavigationProp = BottomTabNavigationProp<TabParamList, 'Home'>;
export type StatisticsNavigationProp = BottomTabNavigationProp<TabParamList, 'Statistics'>;