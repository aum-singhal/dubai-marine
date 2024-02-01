import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

type SectionProps = PropsWithChildren<{
  title: string;
  childStyle?: Object;
}>;

export default function sectionWithTitleChildren({children, title, childStyle}: SectionProps): React.JSX.Element {
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