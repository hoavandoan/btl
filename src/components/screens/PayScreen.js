import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { Button, List } from 'react-native-paper';
import {Colors} from "react-native/Libraries/NewAppScreen";
import { ListItem } from 'react-native-material-ui';

const PayScreen = () => {
    const [bankList] = useState([
        'Vietcombank',
        'Techcombank',
        'VPBank',
        'TPBank',
        'Bắc Á Bank',
        'BIDV',
        'ABC',
        'VIB',
    ])

    return (
        <View style={{ flex: 1}}>
            <View style={{ flex: 4}}>
                <ScrollView>
                    {bankList.map((name,index)=>{
                        return <ListItem
                            key={index}
                            divider
                            centerElement={{
                                primaryText: name,
                            }}
                            onPress={() => console.log('item')}
                        />
                        })}

                </ScrollView>

            </View>
            <View style={{ flex: 4,backgroundColor: Colors.lighter,}}>
                <Text>Details Screen</Text>

            </View>
            <View style={styles.wrapButton}>
                <Button mode="contained" onPress={()=>console.log('xác nhận')} style={styles.customButton}>
                    Xác nhận
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapButton:{
        flex: 2,
        backgroundColor: Colors.lighter,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%'
    },
    customButton: {
        width: '40%',
        marginLeft: '30%',
        alignContent:'center',
        justifyContent: 'center',
    },
});

export default PayScreen;
