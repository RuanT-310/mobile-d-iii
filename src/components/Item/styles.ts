import { Space } from "lucide-react-native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 8,
        backgroundColor: "#333333",
        width: 327,
        height: 60, 
        borderRadius: 6, 
        paddingRight: 10, 
        paddingLeft: 10,
        justifyContent: "space-between",
    },
    description:{
        marginHorizontal: 10,
        flex: 1,
        fontSize: 18,
        fontWeight: 600,
        color: "#F2F2F2", 
        textAlign: "justify",
        fontSize: 14,
        fontWeight: 600
    },
    touch: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        gap: 10
                    
    }
})