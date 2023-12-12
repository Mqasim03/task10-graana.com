// ImageGrid.js
import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Icon, IconButton, Image, Checkbox, Button, Flex, Alert, AlertIcon, AlertTitle, AlertDescription, Text, colorScheme } from '@chakra-ui/react';
import sort from '../images/sort.png'
import upload from '../images/upload.png'
import cheak from '../images/cheak.png'
import select from '../images/select.png'
import next from '../images/next.png'
import dicon from '../images/dicon.png'
import previous from '../images/previous.png'
import popup from '../images/popup.png'


import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import imageUrls from '../Images.json';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useBreakpointValue,

    useDisclosure
} from '@chakra-ui/react'
import imagesData from '../Images.json';

// const [showCheckboxes, setShowCheckboxes] = useState(false);


const ImageGrid = () => {

    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const toggleCheckboxes = () => {
        setShowCheckboxes(!showCheckboxes);
    };  
    const toggleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
          setSelectedImages(Array.from({ length: imagesData.length }, (_, index) => index));
        } else {
          setSelectedImages([]);
        }
      };
  return (
    <Box ml="22px" p={4} mt='27px'>
     <Flex justifyContent='space-between'>
                <Box fontFamily='Secondary' fontWeight='semibold' fontSize='21px' lineHeight='37.15px' color='#37474F'>
                    Image Bank
                </Box>
                <Box>
                    <Button >
                        <img src={sort} alt="" /> sorted
                    </Button>
                    <Button ml='20px'>
                        <img src={upload} alt="" /> upload
                    </Button>
                </Box>
            </Flex>
            <Box fontFamily='Secondary' color='#737678' fontSize='21.85px' fontWeight='normal' lineHeight='19.18px'>
                Supported file formats: png, jpeg, heic
            </Box>
            <Flex>
                <Box mb={4} alignItems="center" mt='11px'>
                    <img
                        src={cheak} as={showCheckboxes ? MdCheckBox : MdCheckBoxOutlineBlank} boxSize={6}
                        onClick={toggleCheckboxes}
                        mr={2} height='20px' width='20px'
                    />
                </Box>
                {showCheckboxes && (

                    <Flex >
                        {/* <Button onClick={selectAllImages} > */}
                        <Flex gap='16px' ml='20px' mt='11px' mb={4} alignItems="center">
    <Box cursor='pointer'>
        <img
            src={select}
            as={selectAll ? '' : select}  // Use your cheaked icon
            alt=""
            onClick={toggleSelectAll}
            style={{ filter: selectAll ? 'invert(20%) sepia(78%) saturate(6663%) hue-rotate(354deg) brightness(96%) contrast(93%)' : 'none' }}
        />
    </Box>
    <Text  fontFamily='Secondary' fontSize='12.07px' fontWeight='normal' w='59px' color='#737678'>
        Select All
    </Text>
</Flex>
                        {/* </Button> */}
                        <Box onClick={onOpen} cursor='pointer' color='#E85451' w='43px' ml='20px' mt='12px' fontFamily='Secondary' fontWeight='normal' fontSize='12.07px' lineHeight='20.52px'>
                            Delete
                        </Box>
                    </Flex>

                )}</Flex>
                <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent mt='252px' >
                
                    <Box p='24px'>
                    <Box  textAlign='-webkit-center'>
                    <img src={popup} alt="" style={{width:'64px', height:'64px'}}  />
                    </Box>
                    <Box textAlign='-webkit-center' marginTop='16px' fontFamily='Secondary' fontWeight='semibold' fontSize='22.43px' lineHeight='38.13px' color='#37394F'>
                    Are You Sure?</Box>
                    <ModalCloseButton />
                    <ModalBody marginTop='16px' textAlign='-webkit-center' h='64px'>
                    <Box fontFamily='Secondary' fontSize='11.64px' lineHeight='19.8px' fontWeight='normal' color='#37474F'>
                    You want to delete all selected images. These will be permanently removed from image bank.
                    </Box>
                    </ModalBody>
                    

                    <ModalFooter marginTop='24px'>
                        <Button variant='ghost'   mr={3} onClick={onClose} color='#37394F' fontFamily='Secondary' fontSize='11.64px' fontWeight='semibold' lineHeight='19.79px' textAlign='center' >
                            Cancel
                        </Button>
                        
                        <Button w='109px' h='32px' bgColor='#37474F' color='#FFFFFF' ml='8px'><Text w='38px' h='20px'>Delete</Text></Button>
                    </ModalFooter>
                    </Box>
                </ModalContent>
            </Modal>
    <SimpleGrid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)']} gap={4}>
      {imagesData.map((image) => (
        
        <Box key={image.id}>
          <Image src={image.url} alt={image.alt} boxSize="100%" objectFit="cover" />
          
         
        </Box>
        
      ))}
    </SimpleGrid>
    </Box>
  );
};

export default ImageGrid;
