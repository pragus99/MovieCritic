import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Text,
  Modal,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Form from "./Form";
import UpdateForm from "./UpdateForm";
import { globalStyles } from "../styles/index";
import Container from "./container/Container";
import axios from "axios";

export default function Home({ navigation }) {
  const [showUp, setShowUp] = useState(false);
  const [update, setUpdate] = useState(false);
  const [isRender, setIsRender] = useState(false);
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState();
  const [body, setBody] = useState();
  const [title, setTitle] = useState();
  const [updateItem, setUpdateItem] = useState();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    setIsLoading(true);
    await axios
      .get("https://json-post.herokuapp.com/posts")
      .then((res) => {
        setPost(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        Alert.alert("Error Fetch Data");
        setIsLoading(false);
      });
  };

  const addPost = async (post) => {
    await axios
      .post("https://json-post.herokuapp.com/posts", {
        title: post.title,
        body: post.body,
        rating: post.rating,
      })
      .catch(() => {
        Alert.alert("Error Post Data");
      });
    getPost();

    setShowUp(false);
  };

  const showModalUpdate = (item) => {
    setTitle(item.title);
    setBody(item.body);
    setRating(item.rating);
    setUpdateItem(item.id);
    setUpdate(true);
  };

  const updatePost = async (updateItem, values) => {
    await axios
      .patch(`https://json-post.herokuapp.com/posts/${updateItem}`, {
        title: values.title,
        body: values.body,
        rating: values.rating,
      })
      .catch(() => {
        Alert.alert("Error Update Data");
      });
    getPost();
  };

  const editPost = (values) => {
    updatePost(updateItem, values);
    setUpdate(false);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`https://json-post.herokuapp.com/posts/${id}`)
      .catch(() => {
        Alert.alert("Error Delete Data");
      });
    getPost();
  };

  const warnDelete = (item) => {
    Alert.alert(`Delete ${item.title}`, "Are you sure?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => handleDelete(item.id) },
    ]);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={showUp} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modal}>
            <MaterialIcons
              name="close"
              style={styles.close}
              size={24}
              onPress={() => setShowUp(false)}
            />
            <Form addPost={addPost} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        visible={update}
        animationType="fade"
        onRequestClose={() => setUpdate(false)}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modal}>
            <MaterialIcons
              name="close"
              style={styles.close}
              size={24}
              onPress={() => setUpdate(false)}
            />
            <UpdateForm
              defaultTitle={title}
              defaultBody={body}
              defaultRating={rating}
              editPost={editPost}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={post}
        refreshing={isLoading}
        onRefresh={getPost}
        extraData={isRender}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <View style={styles.list}>
              <Container>
                <Text style={globalStyles.title}>{item.title}</Text>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={globalStyles.text}
                >
                  {item.body}
                </Text>
              </Container>
              <View style={styles.action}>
                <MaterialIcons
                  name="edit"
                  size={15}
                  color="black"
                  style={styles.edit}
                  onPress={() => showModalUpdate(item)}
                />
                <TouchableOpacity onPress={() => warnDelete(item)}>
                  <MaterialIcons name="delete" size={40} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <MaterialIcons
        name="playlist-add"
        size={24}
        color="black"
        style={styles.Toggle}
        onPress={() => setShowUp(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Toggle: {
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 100,
    alignSelf: "flex-end",
  },
  modal: {
    flex: 1,
    backgroundColor: "#333",
  },
  close: {
    marginTop: 10,
    marginRight: 10,
    backgroundColor: "#c42424",
    padding: 8,
    borderRadius: 100,
    alignSelf: "flex-end",
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
  },
  edit: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 100,
    marginBottom: 10,
  },
  action: {
    alignItems: "center",
  },
});
