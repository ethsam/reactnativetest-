import { Platform } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class App extends Component {
    state = {
        location: null,
        errorMessage: null,
    };

    UNSAFE_componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };

    render() {
        let text = 'Waiting..';
        let geoextract;
        let latitude;
        let longitude;
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = this.state.location;
            geoextract = text.coords;
            latitude = JSON.stringify(geoextract.latitude);
            longitude = JSON.stringify(geoextract.longitude);
            // text = JSON.stringify(this.state.location);
        }

        // return (
        //     <View>
        //         <Text>{ latitude }</Text>
        //         <Text>{ longitude }</Text>
        //     </View>
        // );
    }
}

// import getPositionComponent from '/components/getPositionComponent';

export default getPositionComponent;