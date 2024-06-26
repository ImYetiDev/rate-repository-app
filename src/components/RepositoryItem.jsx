import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StyledText from './StyledText';
import RepositoryStats from './RepositoryStats';
import theme from '../theme';

const RepositoryItemHeader = (props) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const getLikedStatus = async () => {
      try {
        const value = await AsyncStorage.getItem(`liked_${props.id}`);
        if (value !== null) {
          setLiked(JSON.parse(value));
        }
      } catch (e) {
        console.error("Failed to load liked status", e);
      }
    };

    getLikedStatus();
  }, [props.id]);

  const toggleLike = async () => {
    try {
      const newLikedStatus = !liked;
      setLiked(newLikedStatus);
      await AsyncStorage.setItem(`liked_${props.id}`, JSON.stringify(newLikedStatus));
    } catch (e) {
      console.error("Failed to save liked status", e);
    }
  };

  return (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight='bold'>{props.fullName}</StyledText>
        <StyledText color='secondary'>{props.description}</StyledText>
        <StyledText style={styles.language}>{props.language}</StyledText>
      </View>
      <TouchableOpacity onPress={toggleLike} style={styles.likeButton}>
        <Icon 
          name={liked ? "star" : "star-o"} 
          size={24} 
          color={liked ? "gold" : "gray"} 
        />
      </TouchableOpacity>
    </View>
  );
};

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  item: {
    marginBottom: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    marginVertical: 5,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  likeButton: {
    padding: 10,
  },
});

export default RepositoryItem;
