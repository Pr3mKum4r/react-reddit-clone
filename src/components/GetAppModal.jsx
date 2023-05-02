import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Image } from "@chakra-ui/react";
import redditAppQR from '../../public/assets/redditGetApp.jpg';

const GetAppModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal closeOnOverlayClick={false} onClose={props.onClose} isOpen={props.isGetApp} isCentered>
        <ModalOverlay />
        <ModalContent minH={'610px'} maxW={'600px'}>
          <ModalCloseButton />
          <ModalBody p={'50px'}>
            <Image height={'45w0px'} width={'500px'} src={redditAppQR}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GetAppModal;