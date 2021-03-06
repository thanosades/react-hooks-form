import Data from './Data';
import { IFormInputs } from '../types';

export default function Information({ data }: { data: IFormInputs | null }) {
  return (
    <div className="md:col-span-1 text-center md:text-right">
      <div className="px-4 sm:px-0 ">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        <p className="mt-1 text-sm text-gray-600">Mockup form using TypeScript, TailwindCSS, react-hook-form and yup.</p>
        <p className="mt-1 text-sm text-gray-600">
          {data === null 
            ? <p>Submitting the form will subtitute this text with the form values.</p>
            : <Data data={data} />
          }
        </p>
      </div>
    </div>
  );
}