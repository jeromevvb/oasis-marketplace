import { useState } from 'react';
import HeadData from "@/components/Head";
import MintSection from "@/components/Sections/CreateSection/MintSection";
import Minted from "@/components/Sections/CreateSection/MintSection/Minted";

export default function Mint() {

  /* Loading State for button */
  const [isLoading, setIsLoading] = useState(false)
  /* State for Minted Results and Create Section */
  const [create, setCreate] = useState(true);
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
  
  /* Rendering */
  return (
    <>
      <HeadData
        title={"Mint | Oasis Marketplace"} />
      {showMinted && <Minted />}
      {create &&
      <MintSection
        onClick={handleClick}
        Loading={isLoading} />}
    </>
  )
}