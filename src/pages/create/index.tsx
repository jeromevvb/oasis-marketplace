import { ChangeEvent, useState } from 'react';
import Results from '@/components/Sections/CreateSection/Results';
import CreateSection from '@/components/Sections/CreateSection';
import HeadData from "@/components/Head";
  
export default function Create() {

  /* Loading State for button */
  const [isLoading, setIsLoading] = useState(false)
  /* State for input value */
  const [inputValue, setInputValue] = useState("");
  /* State for Image URL in Results */
  const [URLValue, setURLValue] = useState("");
  /* State for Create section */
  const [create, setCreate] = useState(true);
  /* State for Results */
  const [showResults, setShowResults] = useState(false);

   /* handleBadgeClick function for Badge */
  const handleBadgeValue = (buttonValue: string) => {
    setInputValue(() => buttonValue);

    switch (buttonValue) {
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
   /* handleBadgeValue function for Value Input Change */
   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
     setInputValue(e.target.value);
     setURLValue("")
   };

  /* HandleClick function for Create Button */
  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
      setCreate(false);
      setShowResults(true);
    }, 2000)
  }

  /* HandleCreatePage function for Try Again Button */
    const handleCreatePage = () => {
    setShowResults(false);
    setCreate(true);
  }

  /* Rendering */
  return (
    <>
      <HeadData
        title={"Create | Oasis Marketplace"} />
      {/* Create */}
      {create &&
        <CreateSection
          BadgeColor={"blue.500"}
          BadgeFontSize={"sm"}
          value={inputValue}
          onBadgeClick={handleInputChange}
          onChange={handleInputChange}
          TextButtonOnClick={handleBadgeValue}
          CreateButtonOnClick={handleClick}
          Loading={isLoading}
      />}
      {/* Results */}
      {showResults &&
        <Results
          name={inputValue}
          URL={URLValue}
          onClick={handleCreatePage} />}
    </>
  );
}
