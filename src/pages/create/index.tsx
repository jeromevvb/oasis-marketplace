import { useState } from 'react';
import Results from '@/components/Sections/CreateSection/Results';
import CreateSection from '@/components/Sections/CreateSection';
import HeadData from "@/components/Head";
  
export default function Create() {

  /* Loading State for button */
  const [isLoading, setIsLoading] = useState(false)
   /* State for badge */
  const [inputValue, setInputValue] = useState("")
  /* State for create section and results */
  const [create, setCreate] = useState(true);
  const [showResults, setShowResults] = useState(false);

  /* handleInputValue function for Badge */
  const handleInputValue = () => {
    const newValue = 'Tripping Duck';
    setInputValue(prevValue => prevValue + newValue);
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
      {/* Results */}
      {showResults &&
        <Results
        name={"Tripping Duck"}
        URL={`https://images-platform.99static.com/pULAgn-AED8QzzPGS40V0GCDOEk=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/130/130378/attachment_130378088`}
          onClick={handleCreatePage} />}
      {/* Create */}
      {create &&
        <CreateSection
          value={inputValue}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          TextButtonOnClick={handleInputValue}
          CreateButtonOnClick={handleClick}
          Loading={isLoading}
      />}
    </>
  );
}
