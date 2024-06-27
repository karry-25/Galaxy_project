import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Alert,
    SafeAreaView,
    StatusBar,
    ScrollView,
    useColorScheme,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button as PButton } from 'react-native-paper';

export default function ImageCamera({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1
    };
    const [images, addImage] = React.useState([]);
    const [{ cameraRef }, { takePicture }] = useCamera(null);

    const captureHandle = async () => {
        try {
            const data = await takePicture();
            // console.log(data.uri);
            // console.log(RNFS.TemporaryDirectoryPath);
            console.log(RNFS.ExternalCachesDirectoryPath);
            // console.log(RNFS.ExternalDirectoryPath);
            // console.log(RNFS.ExternalStorageDirectoryPath);
            const filePath = data.uri;
            var filename = "/PUMP_OQ_";
            var date = new Date();
            var datestr = date.toLocaleDateString();
            datestr = datestr.replace('/', '').replace('/', '');
            var time = date.toTimeString();
            time = time.split(' ');
            time = time[0];
            time = time.replace(':', '');
            time = time.replace(':', '');
            filename = filename + datestr + time + '.jpg';
            const newFilePath = RNFS.ExternalCachesDirectoryPath + filename;
            RNFS.moveFile(filePath, newFilePath)
                .then(() => {
                    // Alert.alert("Image Saved", ' IMAGE MOVED' + filePath + '-- to --' + newFilePath);
                    Alert.alert('Image Saved');
                })
                .catch(error => {
                    console.log(error);
                })
            images.push({ filePath : newFilePath , fileName : filename });
        } catch (error) {
            console.log(error);
        }
    }

    const takeVideo = async () => {
      if (this.camera) {
        try {
          const promise = this.camera.recordAsync(this.state.recordOptions);

          if (promise) {
            this.setState({ isRecording: true });
            const data = await promise;
            this.setState({ isRecording: false });
            console.warn('takeVideo', data);
          }
        } catch (e) {
          console.error(e);
        }
      }
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            {/* <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            /> */}
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={backgroundStyle}>

                {/* <View style={[
                    styles.container,
                    {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: 'column',


                    },
                ]}> */}
                <View style={styles.body}>
                    <RNCamera
                        ref={cameraRef}
                        type={RNCamera.Constants.Type.back}
                        style={styles.preview}
                    >
                        <View style={[
                            styles.container,
                            {
                                // Try setting `flexDirection` to `"row"`.
                                flexDirection: 'row',
                            },
                        ]}>

                            <View style={{ flex: 3, paddingLeft: 2, paddingBottom: 5, marginBottom: 5, marginLeft: 2 }}>
                                <PButton
                                    icon="camera"
                                    mode="contained"
                                    onPress={captureHandle}
                                >

                                </PButton>
                            </View>
                            <View style={{ flex: 3, paddingLeft: 2, paddingBottom: 5, marginBottom: 5, marginLeft: 2 }}>
                                <PButton
                                    icon="camera"
                                    mode="contained"
                                    onPress={takeVideo}
                                >

                                </PButton>
                            </View>

                            <View style={{ flex: 3, paddingLeft: 2, paddingBottom: 5, marginBottom: 5, marginRight: 2 }}>
                                <PButton
                                    // icon="camera"
                                    mode="contained"
                                    onPress={() => {
                                        // Pass and merge params back to home screen
                                        navigation.navigate({
                                            name: 'OQToDQ',
                                            params: { post: images },
                                            merge: true,
                                        });
                                    }}
                                >
                                    Done
                                </PButton>
                            </View>

                        </View>
                        {/* <View>
                            <Button
                                onPress={captureHandle}
                                title="Capture"
                                color=""
                            />
                        </View>
                        <View>
                            <Button

                                title="Done"
                                color=""
                            />
                        </View> */}
                        {/* captureButtonImage={require('./assets/capture.png')} */}
                    </RNCamera>
                </View>
                {/* </View> */}
            </ScrollView>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});