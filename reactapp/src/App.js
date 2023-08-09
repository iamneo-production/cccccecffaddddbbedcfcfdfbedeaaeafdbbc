import React,{useState} from "react"
import Card from "./components/UI/Card/Card";
import Banner from "./components/UI/Banner/Banner";
import Button from "./components/UI/Button/Button";
import data from "./Data/data"
function App() {
  const[result,setResult]=useState({
    result:false,
    score:0
  })
  const[showBanner,setBanner]=useState(false)
  const[showCard,setShowCard]=useState(false)

  const startFunction=()=>{
    setResult({...result,result:false})
    setBanner(false)
    setShowCard(true) 
  }
  const showResults=()=>{
    setBanner(true)
     setResult({...result,result:false})
     setShowCard(false) 
  }
  return (
    <>
      <h1 className="title">Quizz App</h1>
      {showBanner?  <Banner score={result.score}/>:""}

    {

      !showCard && <Button onClick={startFunction}><button onClick={startFunction} className="start-btn">Start Quiz</button></Button>
    }

        {
          showCard && <div className="container">
          {
           data.map((questionProp)=>{
             const{questionId,question,option1,option2,option3,option4,answer}=questionProp
             return <Card 
             key={questionId}
             question={question}
             options={{
             option1: option1,
             option2: option2,
             option3: option3,
             option4: option4
             }}
             answer={answer}
             setResult={setResult}
             
         />
           })
           
          }
       </div>
        }
        
        {
      result.result && <Button onClick={showResults}><button onClick={showResults} className="show-results">Show Results</button></Button>
    }
    </>
  );
}

export default App;
