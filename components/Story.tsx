import { Image, Text, View } from 'native-base';

const Story = () => {
    return (
        <View alignItems={"center"} px={"2"}>
            <View
                borderWidth={'2'}
                borderRadius={'50'}
                alignItems="center"
                justifyContent={'center'}
                w="20"
                h={'20'}
                borderColor={'blue.600'}
            >
                <Image
                    borderWidth="2"
                    w="16"
                    h="16"
                    borderRadius={'50'}
                    source={{ uri: 'https://i.pravatar.cc/150?img=32' }}
                />
            </View>
            <Text>Bella</Text>
        </View>
    );
};

export default Story;
