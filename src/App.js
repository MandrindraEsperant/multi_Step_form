
import './App.css';
import { StepperContext } from './contexts/StepperContext';
import Account from './components/steps/Account';
import Stepper from './components/Stepper';
import StepperControl from './components/StepperControl';
import Details from './components/steps/Details';
import Final from './components/steps/Final';
import { useState } from 'react';

function App() {

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([])

  const steps = [
    "Acount information",
    "Personal details",
    "Complete"
  ];

  const displayStep =(step)=> {
    switch(step){
      case 1: return  <Account/>;
      case 2: return  <Details/>;
      case 3: return  <Final/>;
      default: 
    }
  };

  const handleClick = (direction)=>{
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // chick if steps are within bounds

    newStep> 0 && newStep <= steps.length && setCurrentStep(newStep);
  }


  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* Stepper */}
      <div className='container hotizontal mt-5'>
        <Stepper 
          steps = {steps}
          currentStep ={currentStep}
        />
         {/* Display Component */}
         <div className='my-10 p-10'>
            <StepperContext.Provider value={{
              userData,
              setUserData,
              finalData,
              setFinalData
            }} >
              {displayStep(currentStep)}
            </StepperContext.Provider>
         </div>
      </div>
     

      {/* Navigation controls */}
      <StepperControl 
       steps={steps}
       handleClick={handleClick}
       currentStep={currentStep}
      />
    </div>
  );
}

export default App;
