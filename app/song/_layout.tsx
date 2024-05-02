import { Stack } from 'expo-router';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export default function Layout() {
    const {styles} = useStyles(styleSheet);
    return (
        <Stack
            initialRouteName='song'
            screenOptions={{
                headerStyle: {
                    backgroundColor: styles.stack.backgroundColor,
                    height: 30
                },
                headerTintColor: styles.stack.color,
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 16
                },
            }}        
        />
    );
}

const styleSheet = createStyleSheet((theme)=>({
    stack:{
        backgroundColor: theme.color.white,
        color: theme.color.black
    }
}))
