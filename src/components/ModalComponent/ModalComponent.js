import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function ModalComponent({
  isOpen,
  onClose,
  title,
  body,
  footer,
  zIndex = "2000",
  isCentered,
  motionPreset = "slideInBottom",
  scrollBehavior = "inside",
  size,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered={isCentered}
      zIndex={zIndex}
      motionPreset={motionPreset}
      scrollBehavior={scrollBehavior}
      size={size}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
