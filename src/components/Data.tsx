import { IFormInputs } from '../types';

export default function Data({ data }: { data: IFormInputs }) {
  return (
    <div>
      {
       Object
        .keys(data)
        .map(key => (<p key={data.email}>{key}: {data[key]}</p>))
      }
    </div>
  )
}