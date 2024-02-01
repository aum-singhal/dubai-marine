import { Linking, SafeAreaView, StyleSheet } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

export default function QrScannerPage(){

  // Function to automatically Redirect to the scanned Link 
  const RedirectToLink = ({data}:any) =>{
    if(data.length>0){
      Linking.openURL(data)
    }
  }

  return <SafeAreaView style={styles.scanPage}>

    {/* QR Scanner to scan the QR */}
    <QRCodeScanner
      onRead={RedirectToLink}
      reactivate={true}
      reactivateTimeout={5000}
      cameraStyle={styles.cameraStyle}
    />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  scanPage:{
    backgroundColor:"#FFF",
    flex: 1,
  },
  cameraStyle:{
    flex:1,
    height: "100%"
  }
})