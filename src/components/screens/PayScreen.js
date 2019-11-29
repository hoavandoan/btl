import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button, List, TextInput} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ListItem} from 'react-native-material-ui';

const PayScreen = () => {



    const [money, setMoney] = useState('');
    const [isConfirm, setIsConfirm] = useState(false);
    const [bankList] = useState([
        'Vietcombank',
        'Techcombank',
        'VPBank',
        'TPBank',
        'Bắc Á Bank',
        'BIDV',
        'ABC',
        'VIB',
    ]);
    const confirmMoney = () => {
        setIsConfirm(true)
        setMoney('')
    };

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 4,
                backgroundColor: Colors.lighter,}}>
                <ScrollView>
                    {bankList.map((name, index) => {
                        return <ListItem
                            key={index}
                            divider
                            centerElement={{
                                primaryText: name,
                            }}
                            onPress={() => console.log('item')}
                        />;
                    })}

                </ScrollView>

            </View>
            <View style={styles.form}>
                <Text>Số tiền là: {isConfirm && money} </Text>
                <TextInput
                    value={money}
                    onChangeText={(number) => setMoney(number)}
                    mode={'outlined'}
                    placeholder='Nhập số tiền'
                    style={{width: '70%', height: 40, marginBottom: 20, marginLeft: '15%'}}
                />
                <TextInput
                    mode={'outlined'}
                    placeholder='Nhập số OTP ngân hàng'
                    style={{width: '70%', height: 40, marginLeft: '15%'}}
                />
            </View>
            <View style={styles.wrapButton}>
                <Button
                    mode="contained"
                    onPress={confirmMoney}
                    style={styles.customButton}>
                    Xác nhận
                </Button>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    form: {
        flex: 4,
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
    },
    wrapButton: {
        flex: 2,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
    },
    customButton: {
        width: '40%',
        marginLeft: '30%',
        alignContent: 'center',
        justifyContent: 'center',
    },
});

export default PayScreen;
