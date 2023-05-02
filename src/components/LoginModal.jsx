import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,  } from "@chakra-ui/react";
import Login from "./Login";

const LoginModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>

      <Modal closeOnOverlayClick={false} onClose={props.onClose} isOpen={props.isLogin} isCentered>
        <ModalOverlay />
        <ModalContent minH={'610px'} maxW={'400px'}>
          <ModalCloseButton />
          <ModalBody>
            <Login/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
