import { PortalProvider } from '@gorhom/portal';
import { Button, Image, ScrollView, Text, TextArea, View } from 'native-base';
import { useRef, useState } from 'react';
import BottomSheet from '../components/BootomSheet';
import { Picker } from '@react-native-picker/picker';
import { Feather, MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';

const AddScreen = () => {
	const [selectedValue, setSelectedvalue] = useState();

	return (
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
			<TextArea my={5} h={'32'} placeholder="what do you want to talk about ?" />
			<Button mt="5" bg="blue.600">
				Publish
			</Button>
			<ScrollView my={10}>
				<View
					my="2"
					flexDirection={'row'}
					borderBottomWidth="1"
					pb="2"
					borderBottomColor={'gray.200'}>
					<Feather name="file-text" size={25} color="#999" />
					<Text color="gray.500" px="2">
						Create a story
					</Text>
				</View>
				<View
					my="2"
					flexDirection={'row'}
					borderBottomWidth="1"
					pb="2"
					borderBottomColor={'gray.200'}>
					<MaterialIcons name="add-photo-alternate" size={25} color="#999" />
					<Text color="gray.500" px="2">
						Add a photo
					</Text>
				</View>
				<View
					my="2"
					flexDirection={'row'}
					borderBottomWidth="1"
					pb="2"
					borderBottomColor={'gray.200'}>
					<Entypo name="video" size={25} color="#999" />
					<Text color="gray.500" px="2">
						Add a Video
					</Text>
				</View>
				<View
					my="2"
					flexDirection={'row'}
					borderBottomWidth="1"
					pb="2"
					borderBottomColor={'gray.200'}>
					<Ionicons name="document-outline" size={25} color="#999" />
					<Text color="gray.500" px="2">
						Add a Document
					</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default AddScreen;
