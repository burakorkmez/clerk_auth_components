import { View, Text, TouchableOpacity, StatusBar, ActivityIndicator, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSocialAuth } from "../hooks/useSocialAuth";

const AuthScreen1 = () => {
  const { isLoading, handleSocialAuth } = useSocialAuth();

  return (
    <LinearGradient
      colors={["#1f2937", "#111827", "#030712"]}
      className="flex-1"
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar barStyle="light-content" />

      <View className="flex-1">
        <View className="flex-1 px-8 justify-center">
          {/* Header Image */}
          <View className="items-center mb-0">
            <Image
              source={require("../../assets/images/auth1.png")}
              className="w-full h-72 rounded-3xl"
              resizeMode="contain"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.3,
                shadowRadius: 16,
              }}
            />
          </View>
          {/* Auth Options */}
          <View className="flex gap-4">
            <TouchableOpacity
              onPress={() => handleSocialAuth("oauth_google")}
              disabled={isLoading}
              className="bg-white/10 backdrop-blur-lg rounded-2xl py-4 px-6 flex-row items-center justify-center gap-2 border border-white/5"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 8,
                elevation: 4,
              }}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Ionicons name="logo-google" size={24} color="#fff" />
              )}
              <Text className="text-white text-lg font-medium">Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleSocialAuth("oauth_apple")}
              disabled={isLoading}
              className="bg-black/40 backdrop-blur-lg rounded-2xl py-4 px-6 flex-row items-center justify-center gap-2 border border-white/5"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 8,
                elevation: 4,
              }}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Ionicons name="logo-apple" size={24} color="white" />
              )}
              <Text className="text-white text-lg font-medium">Continue with Apple</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View className="mt-12 items-center">
            <Text className="text-white/40 text-sm text-center leading-6 px-8">
              By continuing, you agree to our{" "}
              <Text className="text-white/60 font-medium underline">Terms of Service</Text> and{" "}
              <Text className="text-white/60 font-medium underline">Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default AuthScreen1;
