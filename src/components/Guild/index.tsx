import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';
import { GuildProps } from '../Appointment';
import { GuildIcon } from '../GuildIcon';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = TouchableOpacityProps & {
  data: GuildProps
}

export function Guild({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            { data.name }
          </Text>

          <Text style={styles.type}>
            { data.owner ? 'Administrador' : 'Convidado' }
          </Text>
        </View>
      </View>

      <Feather
        name="chevron-right"
        color={theme.colors.heading}
        size={24}
      />


    </TouchableOpacity>
  )
}