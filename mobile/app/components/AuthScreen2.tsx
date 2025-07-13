import { View, Text, TouchableOpacity, StatusBar, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSocialAuth } from "../hooks/useSocialAuth";

const AuthScreen2 = () => {
  const { isLoading, handleSocialAuth } = useSocialAuth();

  return (
    <View className="flex-1 bg-[#fff9f5]">
      <StatusBar barStyle="dark-content" />

      {/* Decorative Background Elements */}
      <View className="absolute inset-0">
        <View className="absolute -right-32 top-0 w-64 h-64 rounded-full bg-[#ffedea] opacity-50" />
        <View className="absolute -left-32 top-1/3 w-64 h-64 rounded-full bg-[#ffe0d6] opacity-50" />
      </View>

      {/* Top Content */}
      <View className="flex-1 pt-16 px-8">
        <View className="space-y-3">
          <Text className="text-[#3d3436] text-5xl font-serif">Welcome{"\n"}Back</Text>
          <Text className="text-[#78716c] text-lg">Sign in to continue your journey</Text>
        </View>
      </View>

      {/* Bottom Sheet */}
      <View className="bg-white rounded-t-[32px] pt-8 pb-10">
        <View className="px-8 gap-2">
          {/* Auth Buttons */}
          <TouchableOpacity
            onPress={() => handleSocialAuth("oauth_google")}
            disabled={isLoading}
            className="bg-[#ff7e5f] rounded-full h-14 flex-row items-center px-4"
          >
            <View className="w-8 h-8 rounded-full bg-white/20 items-center justify-center">
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Ionicons name="logo-google" size={18} color="#fff" />
              )}
            </View>
            <Text className="flex-1 text-white text-lg font-medium text-center">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSocialAuth("oauth_apple")}
            disabled={isLoading}
            className="bg-[#3d3436] rounded-full h-14 flex-row items-center px-4"
          >
            <View className="w-8 h-8 rounded-full bg-white/20 items-center justify-center">
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Ionicons name="logo-apple" size={20} color="#fff" />
              )}
            </View>
            <Text className="flex-1 text-white text-lg font-medium text-center">
              Continue with Apple
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSocialAuth("oauth_github")}
            disabled={isLoading}
            className="bg-[#feb47b] rounded-full h-14 flex-row items-center px-4"
          >
            <View className="w-8 h-8 rounded-full bg-white/20 items-center justify-center">
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Ionicons name="logo-github" size={20} color="#fff" />
              )}
            </View>
            <Text className="flex-1 text-white text-lg font-medium text-center">
              Continue with GitHub
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center gap-4 my-4">
            <View className="flex-1 h-[1px] bg-[#ffe0d6]" />
            <View className="w-2 h-2 rounded-full bg-[#ff7e5f]" />
            <View className="flex-1 h-[1px] bg-[#ffe0d6]" />
          </View>

          {/* Feature Tags */}
          <View className="flex-row justify-center gap-2">
            <View className="bg-[#ffedea] px-4 py-2 rounded-full">
              <Text className="text-[#ff7e5f] text-sm">Fast & Secure</Text>
            </View>
            <View className="bg-[#ffedea] px-4 py-2 rounded-full">
              <Text className="text-[#ff7e5f] text-sm">Free Forever</Text>
            </View>
            <View className="bg-[#ffedea] px-4 py-2 rounded-full">
              <Text className="text-[#ff7e5f] text-sm">24/7 Support</Text>
            </View>
          </View>

          {/* Terms */}
          <Text className="text-[#78716c] text-sm text-center mt-6">
            By continuing, you agree to our <Text className="text-[#ff7e5f]">Terms</Text> and{" "}
            <Text className="text-[#ff7e5f]">Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen2;
