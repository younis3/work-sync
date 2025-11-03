import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const [text1, setText1] = useState("Hi");
  const [text2, setText2] = useState("GOOD Morning!");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
      <Text style={{ fontSize: 28 }}>{text1}</Text>
      <Text style={{ fontSize: 24 }}>{text2}</Text>
      <Pressable
        style={{ marginTop: 30 }}
        onPress={() => {
          setText1("Okay");
          setText2("GoodNight");
        }}
      >
        <Text style={{ fontSize: 18, color: "white", backgroundColor: "black", padding: 10, borderRadius: 12 }}>
          Press Here
        </Text>
      </Pressable>
    </View>
  );
}
