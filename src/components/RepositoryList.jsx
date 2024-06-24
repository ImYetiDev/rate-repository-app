import React from 'react'
import { FlatList, Text, View } from 'react-native'
import repositories from '../data/repositories'
import RepositoryItem from './RepositoryItem.jsx'

const RepositoryList = () => {
  return (
    <FlatList 
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <RepositoryItem {...repo}/>
      )}
    />
  )
}

export default RepositoryList