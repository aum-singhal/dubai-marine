import { Text, View } from "react-native";


export default function SimpleCardWithImage ({cardStyle, image, text, textStyle}){
  return <View style={cardStyle}>
    {image}
    <Text style={textStyle} >{text}</Text>
  </View>
}