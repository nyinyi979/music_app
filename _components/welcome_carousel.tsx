import React from "react";
import { View } from "react-native";
import Swiper from "react-native-swiper";
import { FirstPage, SecondPage } from "./welcome_component";

export default function WelcomeCarousel(){
    const swiperRef = React.useRef<Swiper>(null);

    return(
        <View style={{alignSelf:"center",width:430,height:932}}>
            <Swiper 
            ref={swiperRef}
            scrollEnabled={false}
            showsPagination={true}
            bounces
            dotStyle={{width:"30%",height:5,backgroundColor:"white"}}
            activeDotStyle={{width:"30%",height:5,backgroundColor:"#4AD1C9"}}
            loop={false}>
                <FirstPage swiper={swiperRef}/>
                <SecondPage />
            </Swiper>
        </View>
    )
}