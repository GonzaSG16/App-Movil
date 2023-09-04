import React from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';

const ModalComponent = ({ modalVisible, onCancel, onConfirm }) => {
    return (
        <Modal visible={modalVisible} animationType="slide">
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Eliminar</Text>
                <Text style={styles.modalMessage}>¿Estás seguro de eliminar?</Text>
                <View style={styles.modalButtons}>
                    <Button title="Cancelar" onPress={onCancel} />
                    <Button title="Confirmar" onPress={onConfirm} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#ff0000',
    },
    modalMessage: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        color: '#333333',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});

export default ModalComponent;
