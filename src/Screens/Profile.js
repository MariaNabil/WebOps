import React from 'react';
import { Text, View, Button }
  from 'react-native';

export default function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile</Text>
      <Button
        title="Go to Details"
      />
    </View>
  );
}