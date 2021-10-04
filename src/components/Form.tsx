import { useForm } from 'react-hook-form';
import { IFormInputs } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email(),
  country: yup.string().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  stateProvince: yup.string().required(),
  zip: yup.string().test('len', 'Must be exactly 5 characters', (val?: string) => !!val && val!.length === 5)
});

export default function Form({ showData }: { showData: (incomingData: IFormInputs) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormInputs) => showData(data);
  return (
    <form action="#" onSubmit={handleSubmit(onSubmit)}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
              <input
                type="text"
                {...register("firstName")}
                id="firstName"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              {errors.firstName && <span className="text-red-600 text-sm pl-2">{errors.firstName.message}</span>}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
              <input
                type="text"
                {...register("lastName")}
                id="lastName"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              {errors.lastName && <span className="text-red-600 text-sm pl-2">{errors.lastName.message}</span>}
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="text"
                {...register("email")}
                id="email"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              {errors.email && <span className="text-red-600 text-sm pl-2">{errors.email.message}</span>}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
              <select
                id="country"
                {...register("country")}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="col-span-6">
              <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street address</label>
              <input
                type="text"
                {...register("street")}
                id="street"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              {errors.street && <span className="text-red-600 text-sm pl-2">{errors.street.message}</span>}
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                {...register("city")}
                id="city"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              {errors.city && <span className="text-red-600 text-sm pl-2">{errors.city.message}</span>}
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label htmlFor="stateProvince" className="block text-sm font-medium text-gray-700">State / Province</label>
              <input
                type="text"
                {...register("stateProvince")}
                id="stateProvince"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              {errors.stateProvince && <span className="text-red-600 text-sm pl-2">{errors.stateProvince.message}</span>}
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
              <input
                type="text"
                {...register("zip")}
                id="zip"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              {errors.zip && <span className="text-red-600 text-sm pl-2">{errors.zip.message}</span>}
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >Save</button>
        </div>
      </div>
    </form>
  );
}
