import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Button,
  Checkbox,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  extendTheme,
  ChakraProvider, 
} from '@chakra-ui/react';
import imageUrls from '../Images.json';
import sort from '../images/sort.png';
import upload from '../images/upload.png';
import cheak from '../images/cheak.png';
import next from '../images/next.png';
import dicon from '../images/dicon.png';
import previous from '../images/previous.png';
import popup from '../images/popup.png';
import chek2 from '../images/chek2.png';

const ITEMS_PER_PAGE = 25;

const theme = extendTheme({
    colors: {
      border: {
        500: '#737678',
      },
      radius:{
        rd:'none'
      }
    },
  });

const Dashboard = () => {
    
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const totalPages = Math.ceil(imageUrls.length / ITEMS_PER_PAGE);
  const [selectAll, setSelectAll] = useState(false);
  const paginatedImages = imageUrls.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  

  const toggleCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes);
  };
  

  const toggleImageSelection = (imageId) => {
    const newSelectedImages = [...selectedImages];

    if (!newSelectedImages.includes(imageId)) {
      newSelectedImages.push(imageId);
    } else {
      const index = newSelectedImages.indexOf(imageId);
      newSelectedImages.splice(index, 1);
    }

    setSelectedImages(newSelectedImages);
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);

    if (!selectAll) {
      const allImageIds = paginatedImages.map((image) => image.id);
      setSelectedImages(allImageIds);
    } else {
      setSelectedImages([]);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

    return (
        <ChakraProvider theme={theme}>
        <Box ml="22px" p={4} mt='27px'>
            <Flex justifyContent='space-between'>
                <Box fontFamily='Secondary' fontWeight='semibold' fontSize='21.85px' lineHeight='37.15px' color='#37474F'>
                    Image Bank
                </Box>
                <Box >
                    <Button bgColor='transparent' border='1px' radius='8px' borderColor='#BBBBBB' h='40px'>
                    
                        <img src={sort} alt="" /><Text ml='16px' fontFamily='Secondary' fontSize='14px' fontWeight='normal' lineHeight='23.8px'> Sort</Text>
                    </Button>
                    <Button ml='20px' w='161px' h='40px' bgColor='transparent' border='1px' radius='8px' borderColor='#37474F'>
                        <img src={upload} alt="" /><Text ml='16px' fontFamily='Secondary' fontSize='14px' fontWeight='semibold' color='#37474F' lineHeight='22.05px'>UPLOAD IMAGE</Text>
                    </Button>
                </Box>
            </Flex>
            <Box fontFamily='Secondary' color='#737678' fontSize='11.64px' fontWeight='normal' lineHeight='19.18px'>
                Supported file formats: png, jpeg, heic
            </Box>
            <Flex>
            <Box mb={4} alignItems="center" mt="11px">
      <img
        src={showCheckboxes ? chek2 : cheak} 
        onClick={toggleCheckboxes}
        mr={2}
        height="20px"
        width="20px"
      />
    </Box>
    
      {showCheckboxes && (
        <Flex>
        
          <Flex gap="16px" ml="10px" mt="11px" mb={4} alignItems="center">
         
            <Box>
            <Flex gap='16px'>
            <Box borderRight='1px' w='15px' color='#F2F2F2'></Box>
      <Checkbox
      h='18px'
      borderColor="border.500"
      border='1px'
      color='#737678'
      borderRadius='4px'
          
        colorScheme="red"
        isChecked={selectAll}
        onChange={toggleSelectAll}
       
      />
      
      <Text fontFamily="Secondary" fontSize="12.07px" fontWeight="normal" w="59px" color="#737678">
        Select all
      </Text>
      <Box ml='-18' borderRight='1px' w='15px' color='#F2F2F2'></Box>
      </Flex>
    </Box>
    
</Flex>

                        <Box onClick={onOpen} cursor='pointer' color='#E85451' w='43px' ml='10px' mt='12px' fontFamily='Secondary' fontWeight='normal' fontSize='12.07px' lineHeight='20.52px'>
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
            <SimpleGrid columns={[1, 2, 3, 4, 5]} gap={['6','8px','10px','16px','24px']}>
  {paginatedImages.map((image) => (
    <Box key={image.id} position="relative">
      <Image src={image.url} alt={image.alt}/>
      {console.log(image.id)}
      {showCheckboxes ? (
        <Checkbox
          position="absolute"
          top="10px"
          left="176px"   
          h='18px'
      borderColor="border.500"
      border='1px'
      color='#737678'
      borderRadius='4px'
      bgColor='#FFFFFF'
          
        colorScheme="red"
          isChecked={selectedImages.includes(image.id)}
          onChange={() => toggleImageSelection(image.id)}
        />
      ) : (
        <Image
          src={dicon}
          alt="Delete Icon"
          position="absolute"
          top="5px"
          left="160px"
        />
      )}
    </Box>
  ))}
</SimpleGrid>

            <Box textAlign='center' mt='12px' p='20px'>
            <Flex mt={10} justifyContent='space-between' gap={24}>
            <Box mt={4} textAlign="center" fontFamily='Secondary' fontWeight='normal' fontSize='14px' lineHeight='23.8px' color='#37474F'>
  Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, imageUrls.length)} of {imageUrls.length} images
</Box>
                
                <Flex mt='12px'>
                <Box mt='6px' color='#37474F'>
                <Flex>
                <img src={previous} alt="Previous" onClick={goToPreviousPage} />
                <Text ml='8px' mr='26px' fontFamily='Secondary' fontSize='14px' fontWeight='normal' lineHeight='23.8px'>Previous</Text></Flex>
                </Box>
                {Array.from({ length: totalPages }, (_, i) => (
    (totalPages > 3 && Math.abs(currentPage - (i + 1)) > 2) ? (
        <Text key={i} mx={2} fontSize='14px' fontWeight='normal' lineHeight='23.8px' color='#37474F'>
            ...
        </Text>
    ) : (
        <Button
            key={i}
            
            onClick={() => handlePageChange(i + 1)}
            mx={2}
            variant={currentPage === i + 1 ? '#37474F' : 'outline'}
            bgColor={currentPage === i + 1 ? '#37474F' : 'transparent'}
            color={currentPage === i + 1 ? '#FFFFFF' : '#37474F '}
        >
            {i + 1}
        </Button>
    )
))}
                <Box mt='6px' color='#37474F'>
                <Flex>
                <Text ml='16px' mr='8px' fontFamily='Secondary' fontSize='14px' fontWeight='normal' lineHeight='23.8px'>Next</Text>
                <img src={next} alt="Previous" onClick={goToNextPage} /></Flex>
                </Box>
                </Flex>
                <Box mt={4} w='216px' textAlign='right' fontFamily='Secondary' fontSize='14px' fontWeight='normal' lineHeight='23.8px'>
                    Page {currentPage}of {totalPages}
                </Box>


            </Flex>
            </Box>


        </Box>
        </ChakraProvider>
    );
};

export default Dashboard;
