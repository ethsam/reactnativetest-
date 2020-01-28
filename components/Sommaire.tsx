import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

const data = [
    { key: 'Itineraires' }, { key: 'Mon portefeuille' }, { key: 'Mes comptes' }, { key: 'Autres' },
];

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};

const numColumns = 2;

export default class Sommaire extends Component {

    renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }

        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>{item.key}</Text>
                <Text style={styles.itemText}></Text>
            </View>
        );
    };

    render() {
        // let lati = GetpositionHome
        return (
            <FlatList
                data={formatData(data, numColumns)}
                style={styles.container}
                renderItem={this.renderItem}
                numColumns={numColumns}
            />
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
    },
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 15,
        margin: 7,
        height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: '#fff',
    },
});