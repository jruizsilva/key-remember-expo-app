import { CardList } from '@/components/CardList'
import { FilterChips } from '@/components/FilterChips'
import { useState } from 'react'
import { View } from 'react-native'
import { Searchbar } from 'react-native-paper'

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <>
      <View style={{ rowGap: 16 }}>
        <Searchbar
          mode="view"
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{ width: '100%' }}
        />
        <View style={{ paddingHorizontal: 16, rowGap: 16 }}>
          <FilterChips />
          <CardList />
        </View>
      </View>
    </>
  )
}
