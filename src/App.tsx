import { useState } from 'react';
import { IFormInputs } from './types';
import Form from './components/Form';
import Information from './components/Information';
import './App.css';


export default function App() {
  const [data, setData] = useState<IFormInputs | null>(null);

  const showData = (incomingData: IFormInputs) => {
    setData(incomingData);
  }

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <Information data={data} />
        <div className="mt-5 md:mt-0 md:col-span-2">
          <Form showData={showData} />          
        </div>
      </div>
    </div>
  );
}