import React from 'react';
import { RectButton , RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Avatar } from '../Avatar';

type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

type Props = RectButtonProps & {
  data: MemberProps;
}

export function Member({ data }: Props) {
  const isOnline = data.status === 'online';

  const { on, primary } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar urlImage={ data.avatar_url } />

      <View>
        <Text style={styles.title}>
          { data.username }
        </Text>

        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? on : primary
              }
            ]}
          />

          <Text style={styles.nameStatus}>
            { isOnline ? 'Disponível' : 'Ocupado' }
          </Text>
        </View>
      </View>
    </View>
  )
}