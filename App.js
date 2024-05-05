import React, { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  Text,
  TextInput,
  View,
  ToastAndroid,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  const checkPalindrome = () => {
    const processedText = text.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversedText = processedText.split('').reverse().join('');

    if (processedText === reversedText) {
      
      ToastAndroid.show('iki palindrome', ToastAndroid.SHORT);
      Alert.alert('Palindrome broo', 'Yo iki palindrome.', [{ text: 'OK' }]);
    } else {
      ToastAndroid.show('Iki uduk palindrome.', ToastAndroid.SHORT);
      Alert.alert('Uduk palindrome', 'Iki uduk Palindrome.', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text >Validator Palindrome</Text>
      <Image
        source={{
          uri: 'https://th.bing.com/th/id/OIP.UqU1oQkJ1ESPe3iPfoRmNQHaEO?w=294&h=180&c=7&r=0&o=5&pid=1.7',
        }}
        style={{ width: 200, height: 200 }}
      />
    
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: 200,
          height: 40,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
        placeholder="Lebokne Text"
        value={text}
        onChangeText={setText}
      />
      <Button 
      color="red"
      title="Cobaksekbro" onPress={checkPalindrome} />
    </View>
  );
}