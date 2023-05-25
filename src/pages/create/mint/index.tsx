import { ChangeEvent, FormEvent, useState } from 'react';
import HeadData from "@/components/Head";
import MintSection from "@/components/Sections/CreateSection/MintSection";
import Minted from "@/components/Sections/CreateSection/MintSection/Minted";

export default function Mint() {

  /* Loading State for button */
  const [isLoading, setIsLoading] = useState(false)
  /* State for input value */
  const [inputValue, setInputValue] = useState("");
  /* State for Price in Minted */
  const [priceValue, setPriceValue] = useState("");
  /* State for Copy in Minted */
  const [copyValue, setCopyValue] = useState("");
  /* State for Image URL in Minted */
  const [URLValue, setURLValue] = useState("");
  /* State for Mint Section */
  const [create, setCreate] = useState(true);
  /* State for Minted Results */
  const [showMinted, setShowMinted] = useState(false);
  
  /* HandleClick function for Mint Button */
  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowMinted(true);
      setCreate(false);
    }, 2000)
  }

  /* handleURLValue function for Card Image */
  const handleURLValue = (link: string) => {
    setInputValue(link)

    switch (link) {
      case 'Tripping Duck':
        setURLValue('https://images-platform.99static.com/pULAgn-AED8QzzPGS40V0GCDOEk=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/130/130378/attachment_130378088');
        break;
      case 'Pizza Rabbit':
        setURLValue('https://i.pinimg.com/736x/10/d2/31/10d2313d6f321909c93b61c332371d0a.jpg');
        break;
      case 'Tense Zombie':
        setURLValue('https://www.seoclerk.com/pics/001/304/405/e4ac00883fbd1fbf6ea19e7e6e3e8d60.jpg');
        break;
      case 'Fancy Eagle':
        setURLValue('https://i.etsystatic.com/30251997/r/il/55b4ea/3715516762/il_570xN.3715516762_ao3a.jpg');
        break;
      default:
        setURLValue("") 
    };
  }
  /* handlePriceChange function for Price Value Change */
  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPriceValue(e.target.value)
  }
  /* handleCopyChange function for Copy Value Change */
  const handleCopyInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCopyValue(e.target.value)
    handleCopyStepperChange(e.target.value);
  }

  const handleCopyStepperChange = (e: string) => {
    setInputValue(e)
    setCopyValue(e)
  };

   /* handleInputChange function for Value Input Change */
   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setURLValue("")
    handleURLValue(e.target.value)
  };
  
  /* Rendering */
  return (
    <>
      <HeadData
        title={"Mint | Oasis Marketplace"} />
      {showMinted &&
        <Minted
        name={inputValue}
        URL={URLValue}
        copies={copyValue}
        price={priceValue} />}
      {create &&
      <MintSection
        MintButtonOnClick={handleClick}
        nameValue={inputValue}
        priceValue={priceValue}
        copyValue={copyValue}
        Loading={isLoading}
        onInputChange={handleInputChange}
        onPriceChange={handlePriceChange}
        onCopyInputChange={handleCopyInputChange} />}
    </>
  )
}