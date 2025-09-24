import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    description:{
        flex: 1,
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