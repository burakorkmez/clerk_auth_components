import { View } from "react-native";
import AuthScreen1 from "./components/AuthScreen1";
import AuthScreen2 from "./components/AuthScreen2";
import AuthScreen3 from "./components/AuthScreen3";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <AuthScreen1 />
    </View>
  );
}
