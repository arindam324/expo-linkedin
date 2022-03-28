import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Text, View } from 'native-base';

const Post = () => {
    return (
        <View p={2} my={5} >
            <View flexDirection={'row'} alignItems="center" justifyContent={'space-between'}>
                <View flexDirection={'row'} alignItems="center">
                    <Image
                        w="12"
                        h={'12'}
                        borderRadius="50"
                        source={{
                            uri: 'https://i.pravatar.cc/150?img=56',
                        }}
                    />
                    <View px="2">
                        <Text fontWeight={'bold'}>Errick Jones</Text>
                        <Text color={'muted.400'}>12k followers</Text>
                    </View>
                </View>
                <Entypo name="dots-three-horizontal" size={20} color="#999" />
            </View>
            <Text lineHeight={20}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem fugiat corrupti vero at
                ipsam, incidunt voluptatem quasi? Error, quam sint!
            </Text>
            <Image
                w="100%"
                h="200"
                borderRadius={'20'}
                source={{
                    uri:
                        'https://images.pexels.com/photos/10922830/pexels-photo-10922830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
            />
            <View flexDirection={"row"} justifyContent="space-between" alignItems="center">
                <View flexDirection={"row"} my={2} alignItems="center">
                    <View bg="blue.500" borderRadius={"50"} p={2}>
                        <AntDesign name="like1" color="white" />
                    </View>
                    <View bg="red.500" p={2} borderRadius="50">
                        <AntDesign name="hearto" color="white" />
                    </View>
                    <Text mx="2">1220</Text>
                </View>
                <Text>
                    44 comments

                </Text>
            </View>
            <View flexDirection={"row"} alignItems="center" justifyContent={"space-between"}>
                <View flexDirection={"row"} alignItems="center">
                    <AntDesign name="like2" size={20} />
                    <Text mx={2}>Like</Text>
                </View>
                <View flexDirection={"row"} alignItems="center">
                    <FontAwesome name="comment-o" size={20} />
                    <Text mx={2}>Comment</Text>
                </View>
                <View flexDirection={"row"} alignItems="center">
                    <MaterialCommunityIcons name="share-outline" size={20} />
                    <Text mx={2}>Share</Text>
                </View>
            </View>
        </View>
    );
};

export default Post;
