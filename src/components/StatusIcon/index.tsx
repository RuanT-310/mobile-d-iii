import { FilterStatus } from "@/types/FilterStatus";
import { CircleCheck, Circle } from "lucide-react-native";


export function StatusIcon({ status }: { status: FilterStatus }) {
  return status === FilterStatus.DONE ? (
    <CircleCheck size={18} color="#2C46B1" />
  ) : (    
    <Circle size={18} color="#4ea8de" />
  )
}