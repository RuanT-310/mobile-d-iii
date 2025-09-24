import { FilterStatus } from "@/types/FilterStatus";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { StatusIcon } from "../StatusIcon";

type Props = TouchableOpacityProps & {
  status: FilterStatus
  isActive: boolean
  count: number
}

export function Filter({ status, count, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]} 
      activeOpacity={0.8}
      {...rest} 
      >

      <Text style={styles.title}>
        { status === FilterStatus.DONE ? "Concluidas" : "Criadas" }
      </Text>
      <Text style={styles.count}>
        {count}
      </Text>
    </TouchableOpacity>
  )
}