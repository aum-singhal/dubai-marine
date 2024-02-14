import { Linking, View } from "react-native";
import { CameraView, useCameraPermissions } from 'expo-camera/next';
import { useState } from "react";

export default function Scanner(){
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();


    const HandleBarCodeScanned = (data) =>{
        Linking.openURL(`${data.data}`);
    }

    return <View style={{flex: 1, flexDirection:"column"}}>
        <CameraView 
            onBarcodeScanned={HandleBarCodeScanned} 
            barcodeScannerSettings={{
                interval: 2,
                barCodeTypes:['aztec','ean13','ean8','qr','pdf417','upc_e','datamatrix','code39','code93','itf14','codabar','code128','upc_a']
            }}
            style={{flex: 1}} >
        </CameraView>
    </View>
}