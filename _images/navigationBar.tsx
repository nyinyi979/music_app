import { Circle, Path, Svg } from "react-native-svg"
import {BlurView} from "expo-blur";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Link } from "expo-router";
import React from "react";
export default function NavigationBar({active}:{active:"Home"|"Search"|"Setting"}){
    const {styles} = useStyles(styleSheet);
    return(
        <BlurView intensity={50} style={styles.NavBarContainer}>
            <NBHome active={active==="Home"} />
            <NBSearch active={active==="Search"} />
            <NBSetting active={active==="Setting"} />
        </BlurView>
    )
}

export function NBHome({active}:{active: boolean}){
    const [fill, setFill] = React.useState(active);
    const {styles} = useStyles(styleSheet, {fill});
    
    const setFillTrue = () => {
        !active&&setFill(true);
    }
    const setFillFalse = () => {
        !active&&setFill(false);
    }
    return(
        <Link href={"/home"} asChild>
            <View onPointerEnter={setFillTrue} onPointerLeave={setFillFalse} style={{width:"33%",alignItems:"center"}}>
                <Svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fillRule="evenodd" clipRule="evenodd" d="M9.88961 18.9866C9.375 20.1055 9.375 21.3784 9.375 23.9242V31.8749C9.375 35.4104 9.375 37.1782 10.4733 38.2765C11.5652 39.3684 13.3186 39.3748 16.8125 39.3749V30C16.8125 28.4122 18.0997 27.125 19.6875 27.125H25.3125C26.9003 27.125 28.1875 28.4122 28.1875 30V39.3749C31.6814 39.3748 33.4348 39.3684 34.5266 38.2765C35.625 37.1782 35.625 35.4104 35.625 31.8749V23.9242C35.625 21.3784 35.625 20.1055 35.1104 18.9866C34.5958 17.8677 33.6293 17.0393 31.6964 15.3825L29.8214 13.7754C26.3277 10.7808 24.5808 9.28345 22.5 9.28345C20.4192 9.28345 18.6723 10.7808 15.1786 13.7754L15.1786 13.7754L13.3036 15.3825C11.3707 17.0393 10.4042 17.8677 9.88961 18.9866ZM26.1875 39.3749V30C26.1875 29.5168 25.7957 29.125 25.3125 29.125H19.6875C19.2043 29.125 18.8125 29.5168 18.8125 30V39.3749H26.1875Z" fill={styles.iconFill.color}/>
                </Svg>
            </View>
        </Link>
    )
}

export function NBSearch({active}:{active: boolean}){
    const [fill, setFill] = React.useState(active);
    const {styles} = useStyles(styleSheet, {fill});
    
    const setFillTrue = () => {
        !active&&setFill(true);
    }
    const setFillFalse = () => {
        !active&&setFill(false);
    }
    return(
        <Link href={"/search"} asChild>            
            <View onPointerEnter={setFillTrue} onPointerLeave={setFillFalse} style={{width:"33%",alignItems:"center",paddingTop:4}}>
                <Svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="18.3333" cy="18.8333" r="11.6667" stroke={styles.iconFill.color} strokeWidth="3"/>
                    <Path d="M33.3333 33.8333L28.3333 28.8333" stroke={styles.iconFill.color} strokeWidth="3" strokeLinecap="round"/>
                </Svg>
            </View>
        </Link>
    )
}

export function NBSetting({active}:{active: boolean}){
    const [fill, setFill] = React.useState(active);
    const {styles} = useStyles(styleSheet, {fill});
    
    const setFillTrue = () => {
        !active&&setFill(true);
    }
    const setFillFalse = () => {
        !active&&setFill(false);
    }
    return(
        <Link href={"/setting"} asChild>            
            <View onPointerEnter={setFillTrue} onPointerLeave={setFillFalse} style={{width:"33%",alignItems:"center",paddingTop:4}}>
                <Svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M23.5134 5.63434H22.0134V5.70915L22.0209 5.78359L23.5134 5.63434ZM23.5134 5.63432H25.0134V5.5595L25.006 5.48506L23.5134 5.63432ZM23.6567 7.06655L22.1641 7.21581L22.1641 7.21581L23.6567 7.06655ZM24.4545 9.74584L25.0285 8.36002V8.36002L24.4545 9.74584ZM26.9132 8.41546L25.9634 7.25453V7.25453L26.9132 8.41546ZM28.0272 7.50403L28.977 8.66496V8.66496L28.0272 7.50403ZM29.4107 6.70615L29.4854 5.20802L29.4854 5.20802L29.4107 6.70615ZM30.7079 7.63773L29.6472 8.69839V8.69839L30.7079 7.63773ZM32.8622 9.79208L31.8016 10.8527V10.8527L32.8622 9.79208ZM32.9959 12.4728L31.835 11.5229V11.5229L32.9959 12.4728ZM32.0845 13.5868L30.9235 12.6369L32.0845 13.5868ZM33.4334 16.8433L33.2841 18.3359L33.4334 16.8433ZM34.8657 16.9866L35.0149 15.494L35.0149 15.494L34.8657 16.9866ZM36.4081 17.4007L35.2959 18.4072L35.296 18.4072L36.4081 17.4007ZM36.4081 23.5994L35.296 22.5929L35.2959 22.5929L36.4081 23.5994ZM34.8657 24.0134L35.0149 25.506H35.0149L34.8657 24.0134ZM33.434 24.1566L33.5832 25.6492H33.5833L33.434 24.1566ZM30.7547 24.9545L32.1405 25.5285L32.1405 25.5285L30.7547 24.9545ZM32.0851 27.4132L33.246 26.4633H33.246L32.0851 27.4132ZM32.996 28.5265L31.8351 29.4764L31.8351 29.4764L32.996 28.5265ZM33.7939 29.91L35.292 29.9847L33.7939 29.91ZM28.0273 33.4953L28.9771 32.3343L28.9771 32.3343L28.0273 33.4953ZM26.9133 32.5838L25.9634 33.7448L25.9634 33.7448L26.9133 32.5838ZM23.6567 33.9327L22.1642 33.7835L22.1642 33.7835L23.6567 33.9327ZM23.5134 35.3657L25.006 35.5149V35.5149L23.5134 35.3657ZM23.0994 36.9081L22.0929 35.7959L22.0929 35.796L23.0994 36.9081ZM16.9007 36.9081L17.9072 35.796L17.9072 35.7959L16.9007 36.9081ZM16.4866 35.3657L14.994 35.5149L16.4866 35.3657ZM16.3433 33.9334L14.8508 34.0826L16.3433 33.9334ZM15.5455 31.2541L16.1195 29.8683L16.1195 29.8683L15.5455 31.2541ZM13.0868 32.5845L14.0367 33.7454H14.0367L13.0868 32.5845ZM11.9727 33.496L11.0228 32.3351L11.0228 32.3351L11.9727 33.496ZM10.5892 34.2939L10.5145 35.792H10.5145L10.5892 34.2939ZM9.29201 33.3623L8.23135 34.423H8.23135L9.29201 33.3623ZM7.13765 31.208L6.07699 32.2686H6.07699L7.13765 31.208ZM6.20608 29.9107L7.70422 29.836V29.836L6.20608 29.9107ZM7.00395 28.5273L8.16489 29.4771H8.16489L7.00395 28.5273ZM7.91545 27.4132L9.07639 28.3631H9.07639L7.91545 27.4132ZM6.56654 24.1567L6.41729 25.6492H6.41729L6.56654 24.1567ZM5.13434 24.0134L5.28359 22.5209L5.20915 22.5134H5.13434V24.0134ZM5.13432 24.0134L4.98506 25.506L5.0595 25.5134H5.13432V24.0134ZM3.59189 23.5994L4.70407 22.5929H4.70407L3.59189 23.5994ZM3.33334 22.0234H1.83334H3.33334ZM3.33334 18.9766H4.83334H3.33334ZM3.59189 17.4007L2.47971 16.3941L2.47971 16.3941L3.59189 17.4007ZM5.13434 16.9866L4.98508 15.494H4.98508L5.13434 16.9866ZM6.56717 16.8433L6.71643 18.3358H6.71643L6.56717 16.8433ZM7.91608 13.5867L6.75514 14.5366L6.75514 14.5366L7.91608 13.5867ZM7.00403 12.472L8.16497 11.5222L8.16497 11.5222L7.00403 12.472ZM6.20616 11.0885L7.70429 11.1633V11.1633L6.20616 11.0885ZM7.13773 9.79133L8.19839 10.852L8.19839 10.852L7.13773 9.79133ZM9.29208 7.63697L8.23142 6.57631L8.23142 6.57631L9.29208 7.63697ZM10.5893 6.7054L10.5146 5.20726L10.5146 5.20726L10.5893 6.7054ZM11.9728 7.50327L12.9226 6.34234V6.34234L11.9728 7.50327ZM13.0869 8.41481L12.137 9.57574V9.57574L13.0869 8.41481ZM16.3434 7.0659L17.836 7.21516V7.21516L16.3434 7.0659ZM16.4866 5.63434L14.994 5.48508V5.48508L16.4866 5.63434ZM16.9007 4.09189L15.8942 2.97971L15.8942 2.97971L16.9007 4.09189ZM23.0994 4.09189L22.0929 5.20407V5.20407L23.0994 4.09189ZM25.0134 5.63434V5.63432H22.0134V5.63434H25.0134ZM25.1492 6.9173L25.006 5.48508L22.0209 5.78359L22.1641 7.21581L25.1492 6.9173ZM25.0285 8.36002C25.4276 8.52531 25.4401 8.86845 25.3642 8.56695C25.2878 8.26332 25.236 7.78477 25.1492 6.9173L22.1641 7.21581C22.2407 7.98187 22.3114 8.72847 22.4549 9.29887C22.5989 9.87138 22.9286 10.7374 23.8805 11.1317L25.0285 8.36002ZM25.9634 7.25453C25.2886 7.80658 24.9136 8.1083 24.6449 8.26898C24.378 8.42854 24.6295 8.19474 25.0285 8.36002L23.8805 11.1317C24.8323 11.5259 25.6779 11.1467 26.1845 10.8437C26.6893 10.5419 27.2672 10.0639 27.8631 9.5764L25.9634 7.25453ZM27.0773 6.34309L25.9634 7.25453L27.8631 9.5764L28.977 8.66496L27.0773 6.34309ZM29.4854 5.20802C28.8695 5.1773 28.3825 5.40137 28.0306 5.6208C27.715 5.81757 27.3792 6.09613 27.0773 6.34309L28.977 8.66496C29.1476 8.52539 29.2779 8.4189 29.3914 8.3306C29.5052 8.242 29.5746 8.19348 29.6179 8.16645C29.6602 8.14013 29.6469 8.15383 29.5925 8.17165C29.5277 8.19289 29.4373 8.20935 29.3359 8.20429L29.4854 5.20802ZM31.7685 6.57707C31.4928 6.3013 31.1863 5.99071 30.8919 5.76351C30.5635 5.51015 30.1013 5.23874 29.4854 5.20802L29.3359 8.20429C29.2346 8.19924 29.1463 8.17387 29.0839 8.14628C29.0315 8.12314 29.0197 8.10818 29.0591 8.13858C29.0996 8.16979 29.1637 8.22496 29.2682 8.32445C29.3723 8.4236 29.4914 8.54253 29.6472 8.69839L31.7685 6.57707ZM33.9229 8.73142L31.7685 6.57707L29.6472 8.69839L31.8016 10.8527L33.9229 8.73142ZM35.2919 11.0146C35.2612 10.3987 34.9898 9.93642 34.7365 9.60809C34.5093 9.31366 34.1987 9.00719 33.9229 8.73142L31.8016 10.8527C31.9574 11.0086 32.0764 11.1277 32.1755 11.2318C32.275 11.3362 32.3302 11.4004 32.3614 11.4409C32.3918 11.4802 32.3768 11.4685 32.3537 11.4161C32.3261 11.3537 32.3007 11.2653 32.2957 11.164L35.2919 11.0146ZM34.1569 13.4226C34.4038 13.1208 34.6824 12.7849 34.8792 12.4694C35.0986 12.1175 35.3227 11.6305 35.2919 11.0146L32.2957 11.164C32.2906 11.0627 32.3071 10.9723 32.3283 10.9074C32.3461 10.853 32.3598 10.8398 32.3335 10.882C32.3065 10.9254 32.258 10.9947 32.1694 11.1086C32.0811 11.222 31.9746 11.3523 31.835 11.5229L34.1569 13.4226ZM33.2454 14.5367L34.1569 13.4226L31.835 11.5229L30.9235 12.6369L33.2454 14.5367ZM32.1399 15.4715C32.3052 15.8705 32.0714 16.122 32.2309 15.8552C32.3916 15.5864 32.6933 15.2114 33.2454 14.5367L30.9235 12.6369C30.436 13.2328 29.958 13.8107 29.6562 14.3155C29.3532 14.8222 28.974 15.6677 29.3683 16.6195L32.1399 15.4715ZM33.5826 15.3508C32.7151 15.264 32.2366 15.2122 31.933 15.1358C31.6315 15.0599 31.9746 15.0724 32.1399 15.4715L29.3683 16.6195C29.7625 17.5714 30.6285 17.9011 31.2011 18.0451C31.7714 18.1886 32.518 18.2593 33.2841 18.3359L33.5826 15.3508ZM35.0149 15.494L33.5826 15.3508L33.2841 18.3359L34.7164 18.4791L35.0149 15.494ZM37.5203 16.3942C37.1065 15.9369 36.6037 15.751 36.1997 15.6573C35.8375 15.5733 35.403 15.5328 35.0149 15.494L34.7164 18.4791C34.9358 18.5011 35.1032 18.5179 35.2459 18.5357C35.389 18.5535 35.4723 18.5683 35.5221 18.5798C35.5706 18.5911 35.5515 18.5914 35.5005 18.5655C35.4396 18.5347 35.364 18.4824 35.2959 18.4072L37.5203 16.3942ZM38.1667 18.9767C38.1667 18.5867 38.1696 18.1503 38.1221 17.7815C38.069 17.3702 37.9341 16.8514 37.5203 16.3941L35.296 18.4072C35.2279 18.332 35.1834 18.2516 35.1587 18.1879C35.1381 18.1345 35.1403 18.1156 35.1467 18.165C35.1532 18.2156 35.1596 18.3 35.1631 18.4442C35.1666 18.588 35.1667 18.7562 35.1667 18.9767H38.1667ZM38.1667 22.0234V18.9767H35.1667V22.0234H38.1667ZM37.5203 24.6059C37.9341 24.1486 38.069 23.6299 38.1221 23.2185C38.1696 22.8497 38.1667 22.4134 38.1667 22.0234H35.1667C35.1667 22.2438 35.1666 22.4121 35.1631 22.5558C35.1596 22.7 35.1532 22.7844 35.1467 22.8351C35.1403 22.8844 35.1381 22.8655 35.1587 22.8121C35.1834 22.7485 35.2279 22.6681 35.296 22.5929L37.5203 24.6059ZM35.0149 25.506C35.403 25.4672 35.8375 25.4267 36.1997 25.3427C36.6037 25.249 37.1065 25.0631 37.5203 24.6059L35.2959 22.5929C35.364 22.5176 35.4396 22.4653 35.5005 22.4345C35.5515 22.4086 35.5706 22.409 35.5221 22.4202C35.4723 22.4317 35.389 22.4465 35.2459 22.4643C35.1032 22.4821 34.9357 22.499 34.7164 22.5209L35.0149 25.506ZM33.5833 25.6492L35.0149 25.506L34.7164 22.5209L33.2847 22.6641L33.5833 25.6492ZM32.1405 25.5285C31.9752 25.9275 31.6321 25.94 31.9336 25.8642C32.2372 25.7878 32.7158 25.7359 33.5832 25.6492L33.2847 22.6641C32.5187 22.7407 31.7721 22.8113 31.2017 22.9548C30.6292 23.0988 29.7632 23.4286 29.3689 24.3804L32.1405 25.5285ZM33.246 26.4633C32.694 25.7886 32.3923 25.4135 32.2316 25.1448C32.072 24.878 32.3058 25.1294 32.1405 25.5285L29.3689 24.3804C28.9746 25.3323 29.3538 26.1778 29.6568 26.6845C29.9587 27.1893 30.4366 27.7672 30.9242 28.363L33.246 26.4633ZM34.1569 27.5767L33.246 26.4633L30.9242 28.363L31.8351 29.4764L34.1569 27.5767ZM35.292 29.9847C35.3227 29.3688 35.0987 28.8818 34.8792 28.5299C34.6825 28.2143 34.4039 27.8785 34.1569 27.5767L31.8351 29.4764C31.9746 29.647 32.0811 29.7773 32.1694 29.8907C32.258 30.0046 32.3066 30.0739 32.3336 30.1173C32.3599 30.1595 32.3462 30.1463 32.3284 30.0919C32.3071 30.027 32.2907 29.9366 32.2957 29.8353L35.292 29.9847ZM33.923 32.2678C34.1987 31.9921 34.5093 31.6856 34.7365 31.3912C34.9899 31.0629 35.2613 30.6006 35.292 29.9847L32.2957 29.8353C32.3008 29.734 32.3262 29.6456 32.3538 29.5832C32.3769 29.5308 32.3919 29.519 32.3615 29.5584C32.3302 29.5989 32.2751 29.6631 32.1756 29.7675C32.0764 29.8716 31.9575 29.9907 31.8017 30.1465L33.923 32.2678ZM33.923 32.2679L33.923 32.2678L31.8017 30.1465L31.8016 30.1465L33.923 32.2679ZM31.7686 34.4222L33.923 32.2679L31.8016 30.1465L29.6473 32.3009L31.7686 34.4222ZM29.4855 35.7913C30.1014 35.7605 30.5636 35.4891 30.8919 35.2358C31.1864 35.0086 31.4928 34.698 31.7686 34.4222L29.6473 32.3009C29.4914 32.4567 29.3724 32.5757 29.2683 32.6748C29.1638 32.7743 29.0996 32.8295 29.0592 32.8607C29.0198 32.8911 29.0316 32.8761 29.0839 32.853C29.1464 32.8254 29.2347 32.8 29.336 32.795L29.4855 35.7913ZM27.0774 34.6562C27.3793 34.9032 27.7151 35.1817 28.0307 35.3785C28.3826 35.5979 28.8695 35.822 29.4855 35.7913L29.336 32.795C29.4373 32.7899 29.5278 32.8064 29.5926 32.8276C29.647 32.8454 29.6602 32.8592 29.618 32.8328C29.5747 32.8058 29.5053 32.7573 29.3915 32.6687C29.278 32.5804 29.1477 32.4739 28.9771 32.3343L27.0774 34.6562ZM25.9634 33.7448L27.0774 34.6562L28.9771 32.3343L27.8631 31.4229L25.9634 33.7448ZM25.0286 32.6393C24.6296 32.8045 24.3781 32.5707 24.6449 32.7303C24.9136 32.891 25.2887 33.1927 25.9634 33.7448L27.8631 31.4229C27.2673 30.9354 26.6894 30.4574 26.1846 30.1555C25.6779 29.8526 24.8324 29.4734 23.8806 29.8676L25.0286 32.6393ZM25.1493 34.082C25.236 33.2145 25.2879 32.736 25.3643 32.4323C25.4401 32.1308 25.4276 32.474 25.0286 32.6393L23.8806 29.8676C22.9287 30.2619 22.599 31.1279 22.4549 31.7004C22.3114 32.2708 22.2408 33.0174 22.1642 33.7835L25.1493 34.082ZM25.006 35.5149L25.1493 34.082L22.1642 33.7835L22.0209 35.2164L25.006 35.5149ZM24.1059 38.0203C24.5631 37.6065 24.749 37.1037 24.8427 36.6997C24.9267 36.3375 24.9672 35.903 25.006 35.5149L22.0209 35.2164C21.999 35.4357 21.9821 35.6032 21.9643 35.7459C21.9465 35.889 21.9317 35.9723 21.9202 36.0221C21.909 36.0706 21.9086 36.0515 21.9345 36.0005C21.9653 35.9396 22.0176 35.864 22.0929 35.7959L24.1059 38.0203ZM21.5234 38.6667C21.9134 38.6667 22.3497 38.6696 22.7185 38.6221C23.1299 38.569 23.6486 38.4341 24.1059 38.0203L22.0929 35.796C22.1681 35.7279 22.2485 35.6834 22.3121 35.6587C22.3655 35.6381 22.3844 35.6403 22.3351 35.6467C22.2844 35.6532 22.2 35.6596 22.0558 35.6631C21.9121 35.6666 21.7438 35.6667 21.5234 35.6667V38.6667ZM18.4767 38.6667H21.5234V35.6667H18.4767V38.6667ZM15.8941 38.0203C16.3514 38.4341 16.8702 38.569 17.2815 38.6221C17.6503 38.6696 18.0867 38.6667 18.4767 38.6667V35.6667C18.2562 35.6667 18.088 35.6666 17.9442 35.6631C17.8 35.6596 17.7156 35.6532 17.665 35.6467C17.6156 35.6403 17.6345 35.6381 17.6879 35.6587C17.7516 35.6834 17.832 35.7279 17.9072 35.796L15.8941 38.0203ZM14.994 35.5149C15.0328 35.903 15.0733 36.3375 15.1573 36.6997C15.251 37.1037 15.4369 37.6065 15.8942 38.0203L17.9072 35.7959C17.9824 35.864 18.0347 35.9396 18.0655 36.0005C18.0914 36.0515 18.0911 36.0706 18.0798 36.0221C18.0683 35.9723 18.0535 35.889 18.0357 35.7459C18.0179 35.6032 18.0011 35.4358 17.9791 35.2164L14.994 35.5149ZM14.8508 34.0826L14.994 35.5149L17.9791 35.2164L17.8359 33.7841L14.8508 34.0826ZM14.9715 32.6399C14.5724 32.4746 14.56 32.1315 14.6358 32.433C14.7122 32.7366 14.764 33.2152 14.8508 34.0826L17.8359 33.7841C17.7593 33.0181 17.6886 32.2715 17.5451 31.7011C17.4011 31.1286 17.0714 30.2625 16.1195 29.8683L14.9715 32.6399ZM14.0367 33.7454C14.7114 33.1934 15.0864 32.8916 15.3552 32.731C15.622 32.5714 15.3705 32.8052 14.9715 32.6399L16.1195 29.8683C15.1677 29.474 14.3222 29.8532 13.8155 30.1562C13.3107 30.4581 12.7328 30.936 12.1369 31.4235L14.0367 33.7454ZM12.9226 34.6569L14.0367 33.7454L12.1369 31.4235L11.0228 32.3351L12.9226 34.6569ZM10.5145 35.792C11.1304 35.8227 11.6174 35.5987 11.9693 35.3792C12.2849 35.1825 12.6207 34.9039 12.9226 34.6569L11.0228 32.3351C10.8522 32.4747 10.7219 32.5811 10.6085 32.6694C10.4947 32.758 10.4253 32.8066 10.3819 32.8336C10.3397 32.8599 10.3529 32.8462 10.4073 32.8284C10.4722 32.8072 10.5626 32.7907 10.6639 32.7957L10.5145 35.792ZM8.23135 34.423C8.50712 34.6987 8.81359 35.0093 9.10802 35.2365C9.43634 35.4899 9.89857 35.7613 10.5145 35.792L10.664 32.7957C10.7653 32.8008 10.8536 32.8262 10.916 32.8538C10.9684 32.8769 10.9802 32.8919 10.9408 32.8615C10.9003 32.8302 10.8361 32.7751 10.7317 32.6756C10.6276 32.5764 10.5085 32.4575 10.3527 32.3017L8.23135 34.423ZM6.07699 32.2686L8.23135 34.423L10.3527 32.3017L8.19831 30.1473L6.07699 32.2686ZM4.70794 29.9855C4.73866 30.6014 5.01007 31.0636 5.26343 31.3919C5.49063 31.6864 5.80122 31.9928 6.07699 32.2686L8.19831 30.1473C8.04246 29.9914 7.92353 29.8724 7.82438 29.7683C7.72489 29.6638 7.66972 29.5996 7.63851 29.5592C7.60811 29.5198 7.62306 29.5316 7.6462 29.5839C7.67379 29.6464 7.69916 29.7347 7.70422 29.836L4.70794 29.9855ZM5.84302 27.5774C5.59606 27.8793 5.3175 28.2151 5.12072 28.5307C4.90129 28.8826 4.67722 29.3695 4.70794 29.9855L7.70422 29.836C7.70927 29.9373 7.69282 30.0278 7.67157 30.0926C7.65376 30.147 7.64005 30.1602 7.66638 30.118C7.69341 30.0747 7.74192 30.0053 7.83052 29.8915C7.91882 29.778 8.02531 29.6477 8.16489 29.4771L5.84302 27.5774ZM6.75452 26.4634L5.84302 27.5774L8.16489 29.4771L9.07639 28.3631L6.75452 26.4634ZM7.86001 25.5285C7.69473 25.1295 7.92853 24.878 7.76897 25.1449C7.60829 25.4136 7.30658 25.7886 6.75452 26.4634L9.07639 28.3631C9.56391 27.7672 10.0419 27.1893 10.3437 26.6845C10.6467 26.1779 11.0259 25.3323 10.6317 24.3805L7.86001 25.5285ZM6.41729 25.6492C7.28477 25.736 7.76332 25.7878 8.06694 25.8642C8.36844 25.9401 8.0253 25.9276 7.86001 25.5285L10.6317 24.3805C10.2374 23.4286 9.37137 23.0989 8.79886 22.9549C8.22846 22.8114 7.48186 22.7407 6.7158 22.6641L6.41729 25.6492ZM4.98508 25.506L6.41729 25.6492L6.7158 22.6641L5.28359 22.5209L4.98508 25.506ZM5.13432 25.5134H5.13434V22.5134H5.13432V25.5134ZM2.47971 24.6059C2.89351 25.0631 3.39627 25.249 3.80027 25.3427C4.16255 25.4267 4.597 25.4672 4.98506 25.506L5.28358 22.5209C5.06426 22.499 4.89682 22.4821 4.75416 22.4643C4.61102 22.4465 4.52767 22.4317 4.47791 22.4202C4.42944 22.409 4.44848 22.4086 4.49954 22.4345C4.56044 22.4653 4.63601 22.5176 4.70407 22.5929L2.47971 24.6059ZM1.83334 22.0234C1.83334 22.4134 1.83043 22.8497 1.87797 23.2185C1.93098 23.6299 2.06591 24.1486 2.47971 24.6059L4.70407 22.5929C4.77213 22.6681 4.81666 22.7485 4.84129 22.8121C4.86196 22.8655 4.85972 22.8844 4.85336 22.8351C4.84683 22.7844 4.84045 22.7 4.83694 22.5558C4.83344 22.4121 4.83334 22.2438 4.83334 22.0234H1.83334ZM1.83334 18.9766L1.83334 22.0234H4.83334L4.83334 18.9766H1.83334ZM2.47971 16.3941C2.06591 16.8514 1.93098 17.3702 1.87797 17.7815C1.83043 18.1503 1.83334 18.5867 1.83334 18.9766H4.83334C4.83334 18.7562 4.83344 18.588 4.83694 18.4442C4.84045 18.3 4.84683 18.2156 4.85336 18.1649C4.85972 18.1156 4.86196 18.1345 4.84129 18.1879C4.81666 18.2516 4.77213 18.332 4.70407 18.4072L2.47971 16.3941ZM4.98508 15.494C4.59702 15.5328 4.16256 15.5733 3.80028 15.6573C3.39628 15.751 2.89352 15.9369 2.47971 16.3941L4.70407 18.4072C4.63601 18.4824 4.56043 18.5347 4.49954 18.5655C4.44848 18.5914 4.42944 18.5911 4.47791 18.5798C4.52768 18.5683 4.61102 18.5535 4.75417 18.5357C4.89683 18.5179 5.06427 18.5011 5.28359 18.4791L4.98508 15.494ZM6.41792 15.3507L4.98508 15.494L5.28359 18.4791L6.71643 18.3358L6.41792 15.3507ZM7.86064 15.4714C8.02593 15.0724 8.36906 15.0599 8.06756 15.1357C7.76394 15.2121 7.28539 15.264 6.41792 15.3507L6.71643 18.3358C7.48249 18.2592 8.22909 18.1886 8.79948 18.0451C9.372 17.9011 10.238 17.5713 10.6323 16.6195L7.86064 15.4714ZM6.75514 14.5366C7.3072 15.2113 7.60891 15.5864 7.7696 15.8551C7.92915 16.1219 7.69535 15.8705 7.86064 15.4714L10.6323 16.6195C11.0265 15.6676 10.6473 14.8221 10.3444 14.3154C10.0425 13.8106 9.56453 13.2327 9.07701 12.6369L6.75514 14.5366ZM5.84309 13.4219L6.75514 14.5366L9.07701 12.6369L8.16497 11.5222L5.84309 13.4219ZM4.70802 11.0138C4.6773 11.6298 4.90137 12.1167 5.1208 12.4686C5.31758 12.7842 5.59613 13.12 5.84309 13.4219L8.16497 11.5222C8.02539 11.3516 7.9189 11.2213 7.8306 11.1078C7.742 10.994 7.69348 10.9246 7.66645 10.8813C7.64013 10.839 7.65384 10.8523 7.67165 10.9067C7.69289 10.9715 7.70935 11.062 7.70429 11.1633L4.70802 11.0138ZM6.07707 8.73067C5.8013 9.00644 5.49071 9.31291 5.26351 9.60734C5.01015 9.93566 4.73874 10.3979 4.70802 11.0138L7.70429 11.1633C7.69924 11.2646 7.67387 11.3529 7.64628 11.4153C7.62314 11.4677 7.60819 11.4795 7.63858 11.4401C7.66979 11.3997 7.72496 11.3355 7.82445 11.231C7.9236 11.1269 8.04253 11.0078 8.19839 10.852L6.07707 8.73067ZM8.23142 6.57631L6.07707 8.73067L8.19839 10.852L10.3527 8.69763L8.23142 6.57631ZM10.5146 5.20726C9.89865 5.23798 9.43642 5.50939 9.10809 5.76275C8.81367 5.98995 8.50719 6.30054 8.23142 6.57631L10.3527 8.69763C10.5086 8.54178 10.6277 8.42285 10.7318 8.3237C10.8362 8.22421 10.9004 8.16904 10.9409 8.13783C10.9802 8.10743 10.9685 8.12238 10.9161 8.14552C10.8537 8.17311 10.7653 8.19848 10.664 8.20354L10.5146 5.20726ZM12.9226 6.34234C12.6208 6.09538 12.2849 5.81682 11.9694 5.62004C11.6175 5.40061 11.1305 5.17654 10.5146 5.20726L10.664 8.20354C10.5627 8.20859 10.4723 8.19214 10.4074 8.17089C10.353 8.15308 10.3398 8.13937 10.382 8.1657C10.4254 8.19273 10.4947 8.24124 10.6086 8.32984C10.722 8.41814 10.8523 8.52464 11.0229 8.66421L12.9226 6.34234ZM14.0367 7.25387L12.9226 6.34234L11.0229 8.66421L12.137 9.57574L14.0367 7.25387ZM14.9716 8.35937C15.3706 8.19409 15.6221 8.42789 15.3552 8.26833C15.0865 8.10765 14.7115 7.80593 14.0367 7.25387L12.137 9.57574C12.7329 10.0633 13.3108 10.5412 13.8156 10.8431C14.3222 11.1461 15.1678 11.5253 16.1196 11.131L14.9716 8.35937ZM14.8509 6.91665C14.7641 7.78412 14.7123 8.26267 14.6359 8.56629C14.56 8.86779 14.5725 8.52466 14.9716 8.35937L16.1196 11.131C17.0715 10.7367 17.4012 9.87073 17.5452 9.29821C17.6887 8.72782 17.7594 7.98122 17.836 7.21516L14.8509 6.91665ZM14.994 5.48508L14.8509 6.91665L17.836 7.21516L17.9791 5.78359L14.994 5.48508ZM15.8942 2.97971C15.4369 3.39352 15.251 3.89628 15.1573 4.30028C15.0733 4.66256 15.0328 5.09702 14.994 5.48508L17.9791 5.78359C18.0011 5.56427 18.0179 5.39683 18.0357 5.25417C18.0535 5.11102 18.0683 5.02768 18.0798 4.97791C18.0911 4.92944 18.0914 4.94848 18.0655 4.99954C18.0347 5.06043 17.9824 5.13601 17.9072 5.20407L15.8942 2.97971ZM18.4767 2.33334C18.0867 2.33334 17.6503 2.33043 17.2815 2.37797C16.8702 2.43098 16.3514 2.56591 15.8942 2.97971L17.9072 5.20407C17.832 5.27213 17.7516 5.31666 17.6879 5.34129C17.6345 5.36196 17.6156 5.35972 17.665 5.35336C17.7156 5.34683 17.8 5.34045 17.9442 5.33694C18.088 5.33344 18.2562 5.33334 18.4767 5.33334V2.33334ZM21.5234 2.33334H18.4767V5.33334H21.5234V2.33334ZM24.1059 2.97971C23.6486 2.56591 23.1299 2.43098 22.7185 2.37797C22.3497 2.33043 21.9134 2.33334 21.5234 2.33334V5.33334C21.7438 5.33334 21.9121 5.33344 22.0558 5.33694C22.2 5.34045 22.2844 5.34683 22.3351 5.35336C22.3844 5.35972 22.3655 5.36196 22.3121 5.34129C22.2485 5.31666 22.1681 5.27213 22.0929 5.20407L24.1059 2.97971ZM25.006 5.48506C24.9672 5.097 24.9267 4.66255 24.8427 4.30027C24.749 3.89627 24.5631 3.39351 24.1059 2.97971L22.0929 5.20407C22.0176 5.13601 21.9653 5.06044 21.9345 4.99954C21.9086 4.94848 21.909 4.92944 21.9202 4.97791C21.9317 5.02767 21.9465 5.11102 21.9643 5.25416C21.9821 5.39682 21.999 5.56426 22.0209 5.78358L25.006 5.48506ZM25.1667 20.5C25.1667 23.3535 22.8535 25.6667 20 25.6667V28.6667C24.5103 28.6667 28.1667 25.0103 28.1667 20.5H25.1667ZM20 15.3333C22.8535 15.3333 25.1667 17.6465 25.1667 20.5H28.1667C28.1667 15.9897 24.5103 12.3333 20 12.3333V15.3333ZM14.8333 20.5C14.8333 17.6465 17.1465 15.3333 20 15.3333V12.3333C15.4897 12.3333 11.8333 15.9897 11.8333 20.5H14.8333ZM20 25.6667C17.1465 25.6667 14.8333 23.3535 14.8333 20.5H11.8333C11.8333 25.0103 15.4897 28.6667 20 28.6667V25.6667Z" fill={styles.iconFill.color}/>
                </Svg>
            </View>
        </Link>
    )
}



const styleSheet = createStyleSheet((theme)=>({
    NavBarContainer:{
        display: "flex",
        position:"absolute",
        bottom:0,
        flexDirection:"row",
        width: 432,
        alignSelf:"center",
        padding: 5,
        overflow:"hidden"
    },
    iconFill:{
        variants:{
            fill:{
                true: {
                    color: "#4AD1C9"
                },
                false: {
                    color: theme.color.darkGray
                }
            }
        }
    },
}));