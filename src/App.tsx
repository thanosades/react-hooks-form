import Form from './components/Form';
import Information from './components/Information';
import './App.css';


export default function App() {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <Information />
        <div className="mt-5 md:mt-0 md:col-span-2">
          <Form />          
        </div>
      </div>
    </div>
  );
}