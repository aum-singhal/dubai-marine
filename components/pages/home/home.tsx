import { Image, ScrollView, Text, TextInput, View } from "react-native";
import SectionWithTitleChildren from "../../molecules/sectionWithTitleChildren";
import { useState } from "react";
import { styles } from "./home.style";
import { Colors } from "react-native/Libraries/NewAppScreen";


function CatCard(){
  const data = [
    {text: "Gym", img: require("../../../assets/category/gym.png")},
    {text: "Beauty", img: require("../../../assets/category/beauty.png")},
    {text: "Bar", img: require("../../../assets/category/bar.png")},
  ]
  return data.map((item)=>{
    return <View style={styles.categoryCard} key={item.text}>
      <Image style={{ flex:1}} resizeMode='contain'  source={item.img} />
      <Text style={{color: Colors.black}}>{item.text}</Text>
    </View>
  })
}

function PlaceCard(){
  const data = [
    {liked: true, text: "First Name", rating: "5.0", rewardText: "Salon", cashback:"20%"},
    {liked: false, text: "First Name", rating: "4.1", rewardText: "Grocery", cashback:"AED 50"},
  ]
  return data.map((item, index)=>{
    return <View key={index} style={{marginRight: 20}}>
      <View style={styles.placeCard}>
        <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center"}}>
          <Text style={{backgroundColor:"#D9D9D9",fontSize: 5, color: Colors.black, paddingHorizontal: 4, paddingVertical: 2, borderRadius: 4}}>Ad</Text>
          <Image source={item.liked?require("../../../assets/icons/liked.png"):require("../../../assets/icons/like.png")} />
        </View>
        <View>
          <Text style={{color: Colors.black}}>{item.text}</Text>
          <View style={{flexDirection: "row", alignItems:"center", marginLeft: "auto"}}>
            <Image source={require("../../../assets/icons/star.png")} />
            <Text style={{color: Colors.black}}>{item.rating}</Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection: "row", alignItems: "center", justifyContent:"space-between", borderColor: "#15CC3B", borderWidth: 1, borderRadius: 5, padding: 4, marginTop: 3}}>
        <Text style={{color: Colors.black, fontSize: 8}}>{item.rewardText}</Text>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Image source={require("../../../assets/icons/bolt.png")} />
          <Text style={{color: Colors.black, fontSize: 8}}> {item.cashback} Cashback</Text>
        </View>
      </View>
    </View>
  })
}

export default function HomePage(){
  const [searchText, setSearchText] = useState("");

  return <ScrollView contentInsetAdjustmentBehavior="automatic" style={{height: "100%"}}>

    {/* ================= Header Section =============== */}

    <View style={{flexDirection: "row", marginBottom: 15, justifyContent:"space-between"}}>
        <Image source={require("../../../assets/logo.png")} />
        <View style={{flexDirection:"row", gap: 10}}>
          <View style={styles.headerCards}>
            <Image source={require("../../../assets/icons/scan.png")} />
            <Text style={{fontSize:13, color: "#15CC3B"}}>Scan</Text>
          </View>

          <View style={styles.headerCards}>
            <Image source={require("../../../assets/icons/wallet.png")} />
            <Text style={{fontSize:13, color: "#15CC3B"}}>123</Text>
          </View>
        </View>
    </View>
    
    {/* ==================== Search Section ================ */}

    <View style={{flexDirection:"row", gap: 12, alignItems:"center", justifyContent: "center"}}>
      <TextInput style={styles.searchInput} placeholder={'Search'} placeholderTextColor={"#949494"} onChangeText={setSearchText} />
      <Image style={{ flex:1}} resizeMode='contain' source={require("../../../assets/icons/filter.png")} /> 
    </View>

    {/* ================= Welcome Card ================= */}

    <View style={{backgroundColor:"#15CC3B", borderRadius: 16, padding: 14, marginTop: 16,}}>

      <View style={{flexDirection: "row", alignItems: "center", justifyContent:"space-between"}}>
        <View style={{backgroundColor:"#ddd", height: 1, width: "25%"}}></View>
        <Text style={{fontSize: 14, fontWeight: "500", color: "#fff"}}>Welcome to Rebuxx</Text>
        <View style={{backgroundColor:"#ddd", height: 1, width: "25%"}}></View>
      </View>

      <View style={{flexDirection:"row", alignItems: "center", justifyContent:"center"}}>
        <Text style={{color: "#fff", fontSize: 16, fontWeight:"500"}}>AED</Text>
        <Text style={styles.bigWhiteText40}>20</Text>
      </View>

      <View style={{justifyContent:"center", flexDirection:"row", marginTop: 14}}>
        <Text style={{color: "#000", fontSize: 11, fontWeight: "500", padding: 4, backgroundColor:"#fff", paddingHorizontal: 10, borderRadius: 30}}>Explore stores to redeem your welcome gift</Text>
      </View>

    </View>

    {/* ============== Places and Category section ============== */}

    <View>
      <SectionWithTitleChildren title='Popular Places' childStyle={styles.sectionChildern} >
        <ScrollView horizontal={true} >
          <PlaceCard  />
        </ScrollView>
      </SectionWithTitleChildren>
      <SectionWithTitleChildren title='Categories' childStyle={styles.sectionChildern}>
        <CatCard />
      </SectionWithTitleChildren>
    </View>

    {/* ================ Wallet Section ================ */}

    <View style={styles.walletCard}>
      <View style={{width: "50%", justifyContent:"center", borderRightColor: "#ececec", borderRightWidth: 1}}>
        <Text style={{fontSize: 14, fontWeight: "500", color: "#04B229"}}>Money in Wallet</Text>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Text style={{fontSize:16, fontWeight: "500", color: "#04b229"}}>AED</Text>
          <Text style={styles.bigGreenText40}>0</Text>
        </View>
      </View>

      <View style={{width:"50%", justifyContent: "center", paddingHorizontal: 15}}>
        <Text style={{fontSize: 14, fontWeight: "500", color: Colors.black, marginHorizontal: "auto", paddingLeft: 10}}>Link your card!</Text>
        <Image style={{marginTop: 8, marginBottom: 18}} source={require("../../../assets/card.png")} />
      </View>
    </View>

  </ScrollView>
}