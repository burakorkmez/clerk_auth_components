export const authComponents = [
  {
    id: 1,
    name: "Dark Glass Auth",
    description: "Modern dark theme with glass effect and subtle animations",
    category: "Modern",
    preview: "/auth1.png",
    features: [
      "Social authentication with Google & Apple",
      "Glass morphism design with blur effects",
      "Safe area handling for notched devices",
      "Loading states & error handling",
      "NativeWind styling with Tailwind CSS",
    ],
    implementation: [
      {
        title: "1. Prerequisites",
        code: `// Make sure you have these packages set up in your Expo project:
- @clerk/clerk-expo
- nativewind / tailwindcss
- expo-linear-gradient`,
        description:
          "This guide assumes you have already set up Clerk and NativeWind in your Expo project.",
      },
      {
        title: "2. Create useSocialAuth Hook",
        code: `// hooks/useSocialAuth.ts
import { useSSO } from "@clerk/clerk-expo";
import { useState } from "react";
import { Alert } from "react-native";

export const useSocialAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { startSSOFlow } = useSSO();

  const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple") => {
    setIsLoading(true);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.log("Error in social auth", err);
      const provider = strategy === "oauth_google" ? "Google" : "Apple";
      Alert.alert("Error", \`Failed to sign in with \${provider}. Please try again.\`);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleSocialAuth };
};`,
        description: "Create a custom hook to handle social authentication with Clerk using SSO.",
      },
      {
        title: "3. Create Auth Screen Component",
        code: `import { View, Text, TouchableOpacity, StatusBar, ActivityIndicator, Image } from "react-native";
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
          <View className="items-center mb-8">
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
          <View className="flex gap-4 mt-4">
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

export default AuthScreen1;`,
        description: "Create the main authentication screen component with social login buttons.",
      },
      {
        title: "4. Configure Clerk",
        code: `// app/_layout.tsx
import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";

const CLERK_PUBLISHABLE_KEY = "your_publishable_key";

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <Slot />
    </ClerkProvider>
  );
}`,
        description: "Set up Clerk provider in your app's root layout.",
      },
    ],
    tags: ["Dark Theme", "Glass Effect", "Social Auth"],
  },
  {
    id: 2,
    name: "Warm Sunset Auth",
    description: "Beautiful warm-themed authentication with smooth transitions",
    category: "Modern",
    preview: "/auth2.png",
    features: [
      "Social authentication with Google, Apple & GitHub",
      "Warm color palette with subtle gradients",
      "Clean and modern design",
      "Feature tags and visual indicators",
      "NativeWind styling with Tailwind CSS",
    ],
    implementation: [
      {
        title: "1. Prerequisites",
        code: `// Make sure you have these packages set up in your Expo project:
- @clerk/clerk-expo
- nativewind / tailwindcss`,
        description:
          "This guide assumes you have already set up Clerk and NativeWind in your Expo project.",
      },
      {
        title: "2. Update useSocialAuth Hook",
        code: `// hooks/useSocialAuth.ts
import { useSSO } from "@clerk/clerk-expo";
import { useState } from "react";
import { Alert } from "react-native";

export const useSocialAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { startSSOFlow } = useSSO();

  const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple" | "oauth_github") => {
    setIsLoading(true);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.log("Error in social auth", err);
      const providerMap = {
        oauth_google: "Google",
        oauth_apple: "Apple",
        oauth_github: "GitHub"
      };
      const provider = providerMap[strategy];
      Alert.alert("Error", \`Failed to sign in with \${provider}. Please try again.\`);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleSocialAuth };
};`,
        description: "Update the auth hook to include GitHub authentication support.",
      },
      {
        title: "3. Create Auth Screen Component",
        code: `import { View, Text, TouchableOpacity, StatusBar, ActivityIndicator } from "react-native";
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
          <Text className="text-[#3d3436] text-5xl font-serif">
            Welcome{"\n"}Back
          </Text>
          <Text className="text-[#78716c] text-lg">
            Sign in to continue your journey
          </Text>
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
            By continuing, you agree to our{" "}
            <Text className="text-[#ff7e5f]">Terms</Text> and{" "}
            <Text className="text-[#ff7e5f]">Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen2;`,
        description: "Create the main authentication screen component with a warm color theme.",
      },
      {
        title: "4. Configure Clerk",
        code: `// app/_layout.tsx
import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";

const CLERK_PUBLISHABLE_KEY = "your_publishable_key";

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <Slot />
    </ClerkProvider>
  );
}`,
        description: "Set up Clerk provider in your app's root layout.",
      },
    ],
    tags: ["Light Theme", "Warm Colors", "Social Auth"],
  },
  {
    id: 3,
    name: "Cloud Login",
    description: "Clean and minimal login screen with cloud background",
    category: "Modern",
    preview: "/auth3.png",
    features: [
      "Social authentication with Google, GitHub & Apple",
      "Clean minimal design with cloud background",
      "Modern input fields with icons",
      "Glassmorphism card effect",
      "NativeWind styling with Tailwind CSS",
    ],
    implementation: [
      {
        title: "1. Prerequisites",
        code: `// Make sure you have these packages set up in your Expo project:
- @clerk/clerk-expo
- nativewind / tailwindcss`,
        description:
          "This guide assumes you have already set up Clerk and NativeWind in your Expo project.",
      },
      {
        title: "2. Create useSocialAuth Hook",
        code: `// hooks/useSocialAuth.ts
import { useSSO } from "@clerk/clerk-expo";
import { useState } from "react";
import { Alert } from "react-native";

export const useSocialAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { startSSOFlow } = useSSO();

  const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple" | "oauth_github") => {
    setIsLoading(true);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.log("Error in social auth", err);
      const providerMap = {
        oauth_google: "Google",
        oauth_apple: "Apple",
        oauth_github: "GitHub"
      };
      const provider = providerMap[strategy];
      Alert.alert("Error", \`Failed to sign in with \${provider}. Please try again.\`);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleSocialAuth };
};`,
        description: "Create a custom hook to handle social authentication with Clerk using SSO.",
      },
      {
        title: "3. Create Auth Screen Component",
        code: `import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
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

export default AuthScreen3;`,
        description:
          "Create the main authentication screen component with a clean, minimal design.",
      },
      {
        title: "4. Configure Clerk",
        code: `// app/_layout.tsx
import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";

const CLERK_PUBLISHABLE_KEY = "your_publishable_key";

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <Slot />
    </ClerkProvider>
  );
}`,
        description: "Set up Clerk provider in your app's root layout.",
      },
    ],
    tags: ["Light Theme", "Clean Design", "Social Auth"],
  },
];
