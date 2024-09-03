import { useState,useEffect } from 'react'
import './App.css'
import BotsCollection from './Componets/BotsCollection'
import RecruitBase from './Componets/RecruitBase'

function App() {
  const [data, setData] = useState(null)
  const [bots, setBots] = useState(null)
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json'); // Assuming data.json is in the same directory as your component
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData()

  },[])

  const handleClick = (item) => {
    // Check if the item is already in bots array
    if (!bots.find(bot => bot.id === item.id)) {
      // If not found, add the item to the bots array
      setBots([...bots, item]);
    }
  };

  // handleRemove for dismissing bots from our base
  const handleRemove = (item) => {
    // Filter out the item that was clicked {discontinued bot from base, not deleted from database.}
    const updatedItems = bots.filter(bot => bot.id !== item.id);
    // Update the bots array to contain only bots not yet clicked on / not yet discontinued.
    setBots(updatedItems);
  };

  return (
    <>
      {/* conditionally rendering our army bots when there is at least one bot */}
      {bots != 0 && <RecruitBase ourBots = {bots} onRemove={handleRemove}/> }
      <BotsCollection army={data} handleClick={handleClick}/>
    </>
  )
}

export default App
