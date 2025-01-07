import React, { ReactNode } from 'react'
import { ScrollView } from 'react-native';
import { IconButton, Modal, Portal } from 'react-native-paper';

interface IProps {
    openModal: boolean;
    onClose: () => void;
    children: ReactNode;

}

const CustomModal = ({ openModal, onClose, children }: IProps) => {
    const containerStyle = { backgroundColor: 'white', padding: 10, margin: 20, borderRadius: 8 };

    return (
        <Portal>
            <Modal visible={openModal} dismissable={false} contentContainerStyle={containerStyle}>
                <IconButton icon="close" size={25} iconColor='#646464' onPress={onClose} />
                <ScrollView>
                    {children}
                </ScrollView>
            </Modal>
        </Portal>
    );
}

export default CustomModal