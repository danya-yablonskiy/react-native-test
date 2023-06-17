import { KeyboardAvoidingView, Text, TouchableOpacity } from "react-native";
import { View, StyleSheet, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={{ width: 343 }}
          source={require("../Home/natureImage-2.png")}
        />
      </View>
      <ScrollView>
        <View style={styles.commentsWrapper}>
          <View style={styles.oneCommentsWrapper}>
            <View>
              <Image
                style={styles.commentsAvatar}
                source={require("../CommenstScreen/avatar-1.png")}
              />
            </View>
            <View style={styles.commentContainer}>
              <Text style={styles.commentText}>
                Really love your most recent photo. I’ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={styles.commentData}>09 червня, 2020 | 08:40</Text>
            </View>
          </View>
          <View style={styles.oneCommentsWrapper}>
            <View style={styles.commentContainer}>
              <Text style={styles.commentText}>
                A fast 50mm like f1.8 would help with the bokeh. I’ve been using
                primes as they tend to get a bit sharper images.
              </Text>
              <Text style={styles.commentDataRevers}>
                09 червня, 2020 | 09:14
              </Text>
            </View>
            <View>
              <Image
                style={styles.commentsAvatar}
                source={require("../CommenstScreen/avatar-2.png")}
              />
            </View>
          </View>
          <View style={styles.oneCommentsWrapper}>
            <View>
              <Image
                style={styles.commentsAvatar}
                source={require("../CommenstScreen/avatar-1.png")}
              />
            </View>
            <View style={styles.commentContainer}>
              <Text style={styles.commentText}>
                Thank you! That was very helpful!
              </Text>
              <Text style={styles.commentData}>09 червня, 2020 | 08:40</Text>
            </View>
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View>
            <TextInput
              style={styles.input}
              placeholder="Коментувати..."
              inputMode="text"
            />
            <TouchableOpacity style={styles.commentBtn}>
              <Image
                style={styles.commentBtnIcon}
                source={require("../CommenstScreen/arrowUp.png")}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 32,
  },
  imageWrapper: {
    borderRadius: 8,
  },
  commentsWrapper: {
    marginTop: 32,
  },
  oneCommentsWrapper: {
    flexDirection: "row",

    columnGap: 16,
    marginBottom: 24,
  },
  commentsAvatar: {
    borderRadius: 14,
    width: 28,
    height: 28,
  },
  commentContainer: {
    padding: 16,
    width: 299,
  },
  commentText: {
    marginBottom: 8,
    fontFamily: "Roboto400",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  commentData: {
    fontFamily: "Roboto400",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
    color: "#BDBDBD",
  },
  commentDataRevers: {
    fontFamily: "Roboto400",
    fontSize: 10,
    lineHeight: 12,

    color: "#BDBDBD",
  },
  input: {
    height: 50,
    padding: 16,
    fontFamily: "Roboto500",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 100,
  },
  commentBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  commentBtnIcon: {
    width: 10,
    height: 14,
  },
});
export default CommentsScreen;
