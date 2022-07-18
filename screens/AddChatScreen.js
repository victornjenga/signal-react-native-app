import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";
const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "chats",
    });
  }, [navigation]);

  const createChat = async () => {
    console.log(input);
    if (input === "") {
      alert("type some message");
    } else {
      await db
        .collection("chats")
        .add({
          chatName: input,
        })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => alert(error));
    }
  };
  return (
    <View>
      <Input
        value={input}
        onChangeText={(text) => setInput(text)}
        placeholder="Enter a chart name"
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="#000" />
        }
        onSubmitEditing={createChat}
      />
      <Button disabled={!input} onPress={createChat} title="Create New Chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({});
