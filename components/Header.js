import React from 'react';
import {View} from 'react-native';

const header = props => {
    return (
        <View>
            <FlatList
            data={[
                {key: 'Kênh người bán hàng'},
                {key: 'Đăng ký'},
                {key: 'Đăng nhập'},
                {key: 'Giỏ hàng'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
};

export default header;