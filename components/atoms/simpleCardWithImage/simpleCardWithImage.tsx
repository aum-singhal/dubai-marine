import { Text, View } from "react-native";

type SimpleCardProps={
  cardStyle: Object;
  image: any;
  text: string;
  textStyle?:Object;
}

export default function SimpleCardWithImage ({cardStyle, image, text, textStyle}:SimpleCardProps){
  return <View style={cardStyle}>
    {image}
    <Text style={textStyle} >{text}</Text>
  </View>
}