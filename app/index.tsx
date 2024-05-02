import React from "react";
import WelcomeCarousel from "../_components/welcome_carousel";
import { ScrollView } from "react-native";

export default function Page() {
  return (
      <ScrollView>
        <WelcomeCarousel />
      </ScrollView>
  );
}

