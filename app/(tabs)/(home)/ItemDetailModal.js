// components/ItemDetailModal.js
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter, useLocalSearchParams, Stack } from "expo-router";
import { AntDesign, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { colors } from "@/constants/colors";

const ItemDetailModal = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const item = JSON.parse(params.item);

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity>
              <AntDesign
                name="closesquare"
                size={36}
                onPress={() => router.back()}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView>
        <View style={styles.imageContainer}>
          {item.itemPictures.map((pic, index) => (
            <Image
              key={index}
              source={{ uri: pic }}
              style={styles.itemImage}
              resizeMode="cover"
            />
          ))}
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.userNameContainer}>
            <FontAwesome name="user-circle-o" size={26} />
            <Text style={styles.userNameText}>{item.itemUpLoaderUuid}</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{item.itemName}</Text>
            <Text style={styles.subText}>
              Category: {item.itemsCategorySeq}
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <View style={styles.subTitleContainer}>
              <FontAwesome6 name="paperclip" size={20} />
              <Text style={styles.subTitleText}>기본 정보</Text>
            </View>
            <Text style={styles.subText}>
              가격: {item.itemPrice.toLocaleString()} 원
            </Text>
            <Text style={styles.subText}>상태: {item.itemCondition} 급</Text>
          </View>
          <View style={styles.titleContainer}>
            <View style={styles.subTitleContainer}>
              <FontAwesome6 name="paperclip" size={20} />
              <Text style={styles.subTitleText}>상품 설명</Text>
            </View>
            <Text style={styles.subText}>
              Description: {item.itemDescription}
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.GREY700,
  },
  itemImage: {
    width: "100%",
    aspectRatio: 1,
  },
  infoContainer: {
    flex: 1,
    padding: 30,
  },
  userNameContainer: {
    flexDirection: "row",
    gap: 8,
  },
  userImage: {
    width: 30,
    height: 30,
  },
  userNameText: {
    fontSize: 20,
    marginBottom: 5,
  },
  titleContainer: {
    marginVertical: 20,
  },
  subTitleContainer: {
    flexDirection: "row",
    marginVertical: 6,
    alignItems: "center",
    gap: 8,
  },
  titleText: {
    fontSize: 36,
    fontWeight: "bold",
  },
  subTitleText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 20,
    color: colors.GREY700,
  },
});

export default ItemDetailModal;
