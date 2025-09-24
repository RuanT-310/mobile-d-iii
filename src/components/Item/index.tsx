import { FilterStatus } from "@/types/FilterStatus"
import {Text, TouchableOpacity, View} from "react-native"
import {styles} from "./styles"
import { StatusIcon } from "../StatusIcon"
import {Trash2} from "lucide-react-native"

type ItemData = {
    status: FilterStatus,
    description: string
}

type Props = {
    data: ItemData,
    onRemove: () => void,
    onStatus: () => void
}

export function Item({data, onStatus, onRemove}:Props){
    return(
        <View style={styles.container}>

            <TouchableOpacity activeOpacity={0.8} onPress={onStatus} style={styles.touch}>
                <StatusIcon status={data.status} />
                <Text style={[
                    styles.description, 
                    data.status === FilterStatus.DONE ? styles.riskText : undefined]}>
                    {data.description}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onRemove}>
                <Trash2 size={18} color="#828282" />
            </TouchableOpacity>
        </View>
    )
}