import { Space } from "lucide-react-native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        backgroundColor: "#333333",
        width: "100%",
        height: 60, 
        borderRadius: 6, 
        padding: 10, 
        justifyContent: "space-between",
    },
    description:{
        margin: 10,
        flex: 1,
        fontSize: 18,
        fontWeight: 600,
        color: "#F2F2F2", 
        textAlign: "justify",
    },
    touch: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    riskText: {
        textDecorationLine: 'line-through',
        color: "#808080"
    }
})