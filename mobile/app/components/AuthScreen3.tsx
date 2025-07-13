import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSocialAuth } from "../hooks/useSocialAuth";
import { useState } from "react";

const AuthScreen3 = () => {
  const { isLoading, handleSocialAuth } = useSocialAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-1 bg-[#EEF5FF] w-full">
      {/* Background Image */}
      <Image
        source={require("../../assets/images/clouds.png")}
        className="absolute inset-0 w-full h-full"
        resizeMode="cover"
      />

      <View className="flex-1 px-6 justify-center">
        <View className="bg-white/80 rounded-[32px] p-8 shadow-lg backdrop-blur-lg">
          {/* Icon */}
          <View className="items-center mb-6">
            <View className="w-14 h-14 bg-white rounded-2xl items-center justify-center shadow-sm">
              <Ionicons name="log-in-outline" size={28} color="#333" />
            </View>
          </View>

          {/* Header */}
          <View className="mb-8">
            <Text className="text-2xl font-semibold text-center text-gray-800 mb-2">
              Sign in with email
            </Text>
            <Text className="text-center text-gray-600 text-[15px]">
              Make a new doc to bring your words, data,{"\n"}and teams together. For free
            </Text>
          </View>

          {/* Input Fields */}
          <View className="gap-4 mb-4">
            <View className="bg-white/80 rounded-xl flex-row items-center px-4 h-12">
              <Ionicons name="mail-outline" size={20} color="#666" />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                className="flex-1 ml-3 text-base text-gray-800"
                placeholderTextColor="#999"
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View className="bg-white/80 rounded-xl flex-row items-center px-4 h-12">
              <Ionicons name="lock-closed-outline" size={20} color="#666" />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                className="flex-1 ml-3 text-base text-gray-800"
                placeholderTextColor="#999"
                autoCapitalize="none"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="p-2">
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity
            className="bg-gray-900 h-12 rounded-xl items-center justify-center mb-8"
            disabled={isLoading}
          >
            <Text className="text-white font-medium text-base">Get Started</Text>
          </TouchableOpacity>

          {/* Social Auth */}
          <View>
            <Text className="text-gray-600 text-sm text-center mb-4">Or sign in with</Text>

            <View className="flex-row justify-center gap-3">
              {[
                {
                  provider: "oauth_google" as const,
                  icon: "logo-google",
                },
                {
                  provider: "oauth_github" as const,
                  icon: "logo-github",
                },
                {
                  provider: "oauth_apple" as const,
                  icon: "logo-apple",
                },
              ].map((item) => (
                <TouchableOpacity
                  key={item.provider}
                  onPress={() => handleSocialAuth(item.provider)}
                  disabled={isLoading}
                  className="w-14 h-14 rounded-xl bg-white items-center justify-center"
                  style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.05,
                    shadowRadius: 8,
                    elevation: 2,
                  }}
                >
                  <Ionicons name={item.icon as any} size={24} color="#333" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen3;
