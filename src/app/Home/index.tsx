import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Filter } from "@/components/Filter"
import { FilterStatus } from "@/types/FilterStatus"
import { Item } from "@/components/Item"
import { useEffect, useState } from "react"
import { itemsStorage, ItemsStorage } from "@/storage/itemStorage"
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.CREATED, FilterStatus.DONE]

export function Home() {
  const [filter, setFilter] = useState(FilterStatus.CREATED)
  const [description, setDescription] = useState("")
  const [items, setItems] = useState<ItemsStorage[]>([])

  async function handleAdd() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Informe a descrição para adicionar.")
    }

    const newItem = {
      id: Math.random().toString().substring(2),
      description,
      status: FilterStatus.CREATED,
    }

    await itemsStorage.add(newItem)
    await getItems()

    Alert.alert("Adicionado", `Adicionado ${description}`)
    setFilter(FilterStatus.CREATED)
    setDescription("")
  }

  function changeFilter(filter: FilterStatus) {
    if (filter === FilterStatus.CREATED) {
      setFilter(FilterStatus.CREATED)
      return getItems()
    }
    itemsByStatus()
    setFilter(filter)
  }

  async function itemsByStatus() {
    try {
      const response = await itemsStorage.getByStatus(filter)
      setItems(response)
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível filtrar os itens.")
    }
  }

  async function getItems() {
    try {
      const response = await itemsStorage.get()
      setItems(response)
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível filtrar os itens.")
    }
  }

  async function handleRemove(id: string) {
    try {
      await itemsStorage.remove(id)
      await getItems()
    } catch (error) {
      console.log(error)
      Alert.alert("Remover", "Não foi possível remover o item.")
    }
  }

  async function onClear() {
    try {
      await itemsStorage.clear()
      setItems([])
    } catch (error) {
      console.log(error)
      Alert.alert("Limpar", "Não foi possível remover todos os itens.")
    }
  }

  async function handleToggleItemStatus(id: string) {
    try {
      await itemsStorage.toggleStatus(id)
      await getItems()
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível atualizar o status.")
    }
  }

  useEffect(() => {
    if (filter === FilterStatus.CREATED) {
      getItems()
    } else {
      itemsByStatus()
    }
  }, [filter])

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />

      <View style={styles.form}
      >
        <Input 
          placeholder="Adicione uma nova tarefa" 
          onChangeText={setDescription}
          value={description}
        />
        <Button title="" onPress={handleAdd} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter
               key={status}
               status={status} 
               isActive={filter === status}
               onPress={() => changeFilter(status)} 
            />
          ))}
        </View>

        <FlatList 
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Item
              data={item} 
              onStatus={() => handleToggleItemStatus(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => 
          <View style={styles.contentList}>
          <Image source={require('@/assets/icone fundo.png')} style={styles.icon}></Image>
          <Text style={styles.empty}>Você ainda não tem tarefas cadastradas Crie tarefas e organize seus itens a fazer</Text>
          </View>}
        />
      </View>
    </View>
  )
}