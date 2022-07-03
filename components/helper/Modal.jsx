import { Modal } from "native-base";

function ConfirmModal({ modalVisible, setModalVisible, message }) {
  return (
    <Modal
      isOpen={modalVisible}
      onClose={() => setModalVisible(false)}
      avoidKeyboard
      justifyContent="flex-end"
      bottom="4"
      size="lg"
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>{message}</Modal.Header>
      </Modal.Content>
    </Modal>
  );
}
export default ConfirmModal;
