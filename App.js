import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { IdnowManager } from '@tokenstreet/react-native-idnow-videoident'

export default function App() {

  const handlePress = async () => {
    try {
      console.log('START IDENT')
      const { resultCode } = await IdnowManager.startVideoIdent({ transactionToken: 'TST-YOURCODE' });
      console.log(resultCode);
    } catch (error) {
      console.error(error)
      if (error !== null && typeof error === 'object' && 'resultCode' in error) {
          const identificationError = error;
          console.log(identificationError.resultCode);
          console.log(identificationError.errorMessage);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text>
        <Button title="Start VideoIdent" onPress={handlePress}>
        </Button>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
