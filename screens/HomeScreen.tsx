import { Foundation } from '@expo/vector-icons'
import { View, Text, Image, ScrollView } from 'native-base'
import Story from '../components/Story'
import Post from '../components/Post';

const HomeScreen = () => {
    return (
        <ScrollView py={10} px={5}>
            <View flexDirection={"row"} alignItems="center" justifyContent={"space-between"}>
                <Text fontSize={24} color="blue.700" fontWeight="bold">LinkedIn</Text>
                <Foundation name="shopping-bag" size={25} color="black" />
            </View>
            <ScrollView my={5} horizontal showsHorizontalScrollIndicator={false}>
                <Story />
                <Story />
                <Story />
                <Story />
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View mx={2} bg="blue.600" borderRadius={20} p={2}>
                    <Text color="white">
                        Business
                    </Text>
                </View>
                <View mx={2} borderWidth={2} borderRadius={20} p={2}>
                    <Text>
                        Business
                    </Text>
                </View>
                <View mx={2} borderWidth={2} borderRadius={20} p={2}>
                    <Text>
                        Business
                    </Text>
                </View>
                <View mx={2} borderWidth={2} borderRadius={20} p={2}>
                    <Text>
                        Business
                    </Text>
                </View>
                <View mx={2} borderWidth={2} borderRadius={20} p={2}>
                    <Text>
                        Business
                    </Text>
                </View>
            </ScrollView>
            <ScrollView my={5}>
                <Post />
                <Post />
                <Post />
            </ScrollView>
        </ScrollView>
    )
}

export default HomeScreen