import { FormControl, Input } from "@chakra-ui/react"
  
export default function Form() {
  return (
    <>
      <FormControl>
        <Input
          type={'text'}
          size={{ base: 'md', md: 'lg' }}
          borderColor={'white'}
          placeholder="Type what you want to create..."
          _placeholder={{ color: 'gray.400' }}
          _hover={{borderColor: 'cyan.600'}}/>
      </FormControl>
    </>
  )
}