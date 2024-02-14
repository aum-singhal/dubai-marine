import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";



export default function SectionWithTitleChildren({children, title, childStyle}){
  return (
    <View style={{gap: 8, marginTop: 15}} >
      <Text style={[styles.heading,{color: Colors.black,},]}>
        {title}
      </Text>
      <View style={childStyle}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading:{
    fontSize: 15,
    fontWeight: "600",
  },
})