import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import { ActivityIndicator, Modal, SafeAreaView, View } from 'react-native';

const Loading = ({ loading }: { loading: boolean }) => {
  return (
    <Modal style={{ flex: 1 }} visible={loading}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    </Modal>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Loading loading={isLoading} />
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          onLoad={handleLoad}
          style={{ flex: 1 }}
          source={{ uri: 'https://hightable.africa' }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
