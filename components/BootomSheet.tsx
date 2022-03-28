import { Portal } from '@gorhom/portal';
import { Button, Image, ScrollView, Text, TextArea, View } from 'native-base';
import { RefObject, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useWindowDimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Feather, MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';

type Props = {
    modalRef: RefObject | null;
    onClose: () => void;
};

const BottomSheet = ({ modalRef, onClose }: Props) => {
    const { height } = useWindowDimensions();
    const [selectedValue, setSelectedvalue] = useState();
    return (
        <Portal>
            <Modalize modalHeight={height} ref={modalRef}>
                <View px="5" py={`10`}>
                    <Text fontSize={20} fontWeight="bold" textAlign={'center'}>
                        Start Post
                    </Text>

                    <Image
                        w={'10'}
                        h="10"
                        borderRadius={'50'}
                        source={{ uri: 'https://i.pravatar.cc/150?img=53' }}
                    />
                    <Picker
                        mode="dialog"
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedvalue(itemValue)}>
                        <Picker.Item label="Anyone" value="0" />
                        <Picker.Item label="Friends" value="1" />
                        <Picker.Item label="private" value="2" />
                    </Picker>
                    <TextArea h={"32"} placeholder="what do you want to talk about ?" />
                    <Button mt="5" bg="blue.600">
                        Publish
                    </Button>
                    <ScrollView my={10}>
                        <View my="2" flexDirection={"row"}
                            borderBottomWidth="1" pb="2" borderBottomColor={"gray.200"}>
                            <Feather name="file-text" size={25} color="#999" />
                            <Text color="gray.500" px="2">Create a story</Text>
                        </View>
                        <View my="2" flexDirection={"row"}
                            borderBottomWidth="1" pb="2" borderBottomColor={"gray.200"}>
                            <MaterialIcons name="add-photo-alternate" size={25} color="#999" />
                            <Text color="gray.500" px="2">Add a photo</Text>
                        </View>
                        <View my="2" flexDirection={"row"}
                            borderBottomWidth="1" pb="2" borderBottomColor={"gray.200"}>
                            <Entypo name="video" size={25} color="#999" />
                            <Text color="gray.500" px="2">Add a Video</Text>
                        </View>
                        <View my="2" flexDirection={"row"}
                            borderBottomWidth="1" pb="2" borderBottomColor={"gray.200"}>
                            <Ionicons name="document-outline" size={25} color="#999" />
                            <Text color="gray.500" px="2">Add a Document</Text>
                        </View>
                    </ScrollView>
                </View>
            </Modalize>
        </Portal>
    );
};

export default BottomSheet;
