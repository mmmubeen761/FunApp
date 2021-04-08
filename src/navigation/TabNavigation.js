import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Notification from '../screens/TabScreen/Notification'
import Calculator from '../screens/TabScreen/Calculator'
import TextTab from '../screens/TabScreen/Text'
import Images from '../screens/TabScreen/Images'



//Tab Navigation
const FirstRoute = () => (
  <Notification />
);

const SecondRoute = () => (
  <Images />
);
const ThirdRoute = () => (
    <TextTab />
  );
  const FourthRoute = () => (
    <Calculator/>
  );

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const getTabBarIcon = (props) => {

    const {route} = props

      if (route.key === 'Notification') {
       return <Icon name='bell' size={20} color={'white'}/>
      } else if (route.key === 'Images') {
        return <Icon name='image' size={20} color={'white'}/>
       }
       else if (route.key === 'TextTab') {
        return <Icon name='check' size={20} color={'white'}/>
       } 
       else {
       return <Icon name='calculator' size={20} color={'white'}/>
      }
}

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Notification' },
    { key: 'Images' },
    { key: 'TextTab' },
    { key: 'Calculator' },
  ]);

  const renderScene = SceneMap({
    Notification: FirstRoute,
    Images:SecondRoute,
    TextTab:  ThirdRoute,
    Calculator: FourthRoute,
  });

  return (
    <TabView 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => <TabBar
         {...props} style={{backgroundColor: '#049abf',paddingBottom:10,paddingTop:10 }}
         renderIcon={
          props => getTabBarIcon(props)
      }
         />} 
         
    />
  );
}