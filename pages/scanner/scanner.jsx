import { Linking, View } from "react-native";
import { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function Scanner(){
    const [scanned, setScanned] = useState(false);
    const [hasPermissions, setHasPermissions] = useState(null);

    useEffect(()=>{
        (async () =>{
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermissions(status==='granted');
        })();
    }, [])

    const handleBarCodeScanned = ({type, data}) =>{
        setScanned(true);
        Linking.openURL(`${data}`);
    }

    return <View style={{flex: 1, flexDirection:"column"}}>
        <BarCodeScanner 
            onBarCodeScanned={scanned? undefined : handleBarCodeScanned}
            style={{flex: 1}}
        />
    </View>
}