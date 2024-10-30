import React, {ReactNode} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface CustomDialogProps {
  children: ReactNode;
  onDismiss: () => void;
}

export const CustomDialog: React.FC<CustomDialogProps> = ({
  children,
  onDismiss,
}) => {
  return (
    <View style={styles.dialogContainer}>
      <TouchableOpacity style={styles.dialogBackground} onPress={onDismiss} />
      <View style={styles.dialogContent}>{children}</View>
    </View>
  );
};
