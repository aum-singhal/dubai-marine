import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerCards:{
    flexDirection:"row", 
    gap: 7, 
    alignItems:"center", 
    borderRadius: 5, 
    backgroundColor: "#F9F9F9", 
    paddingVertical: 6, 
    paddingHorizontal: 10,
  },
  searchInput:{
    width: "85%", 
    backgroundColor:"#F6F6F6", 
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: "#e1e1e1", 
    paddingHorizontal: 10,
  },
  bigWhiteText40:{
    width: "85%", 
    backgroundColor:"#F6F6F6", 
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: "#e1e1e1", 
    paddingHorizontal: 10
  },
  bigGreenText40:{
    fontSize:40, 
    fontWeight: "500", 
    color: "#04b229", 
    padding: 4, 
    borderBottomWidth: 1, 
    borderBottomColor: "#DDD", 
    marginHorizontal: 10
  },
  heading:{
    fontSize: 15,
    fontWeight: "600",
  },
  sectionChildern:{
    display: "flex",
    overflow: "scroll",
    gap: 14,
    flexDirection: "row",
    justifyContent: "center"
  },
  categoryCard:{
    backgroundColor: "#E2E2E2",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    paddingVertical: 12,
  },
  placeCard:{
    backgroundColor: "#F6F6F6",
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
    height: 140,
    width: 170,
    padding: 12,
    justifyContent: "space-between"
  },
  walletCard: {
    borderColor: "#15CC3B",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginTop: 30,
    flexDirection: "row"
  }
});