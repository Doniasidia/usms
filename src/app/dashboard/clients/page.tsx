"use client";
import React, { useState, ChangeEvent } from "react";
import Image from 'next/image'
import Layout from "@/app/adminLayout";

const TdStyle = {
  ThStyle: 'border-l border-transparent py-2 px-3 text-base font-medium lg:py-4 lg:px-4 bg-blue-100 text-gray-800',
  TdStyle: 'text-dark border-b border-l border-transparent border-[#E8E8E8] bg-sky-100 dark:border-dark dark:text-dark-7 py-1 px-3 text-center text-sm font-medium',
  TdButton: 'inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium',
};
interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}
const TelephoneInput: React.FC<InputProps> = ({ value, onChange, isValid }) => {
  return (
    <div className="mb-4">
      <label htmlFor="telephone" className="block text-gray-700 text-sm font-bold mb-2">
        Numéro de téléphone : 
      </label>
      <input        
        id="telephone"
        name="telephone"
        value={value}
        onChange={onChange}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-indigo-500 ${isValid ? '' : 'border-red-500'}`}
        placeholder="Entrer votre numéro de téléphone"
      />
      {!isValid && <p className="text-red-500 text-xs italic">Veuillez entrer un numéro de téléphone valide.</p>}
    </div>
  );
}

const EmailInput: React.FC<InputProps> = ({ value, onChange, isValid }) => {
  return (
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
        Email : 
      </label>
      <input        
        id="email"
        name="email"
        value={value}
        onChange={onChange}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-indigo-500 ${isValid ? '' : 'border-red-500'}`}
        placeholder="Entrer votre email"
      />
      {!isValid && <p className="text-red-500 text-xs italic">Veuillez entrer une adresse email valide.</p>}
    </div>
  );
}

const Clients = () => {
  const [showForm, setShowForm] = useState(false);
  const [nomEtablissement, setNomEtablissement] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [typepack, setpack] = useState('');
  const [telephoneIsValid, setTelephoneIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [formValid, setFormValid] = useState(true);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the form from submitting by default

    // Validate email
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }

    // Validate telephone
    if (!/^((\+|00)216)?([2579][0-9]{7}|(3[012]|4[01]|8[0128])[0-9]{6}|42[16][0-9]{5})$/.test(telephone)) {
      setTelephoneIsValid(false);
    } else {
      setTelephoneIsValid(true);
    }

    // Check if all fields are valid
    if (nomEtablissement && email && telephone && password && typepack) {
      // Handle form submission logic here
      console.log('Form submitted successfully!');
      setFormValid(true);
    } else {
      window.alert('Veuillez remplir tous les champs.'); // If any field is empty, set the form as invalid
      setFormValid(false);
    }
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setpack(event.target.value);
  };

  return (
    <Layout activePage="clients"> 

      <div className='flex justify-center pt-14 mx-2 w-full '>
        <div className='w-full max-w-[90%] overflow-x-auto rounded-xl rounded-b-none'>
          <table className='w-full table-auto border-collapse'>
            <thead className='text-center bg-primary'>
              <tr>
                <th className={TdStyle.ThStyle}> Nom établissement </th>
                <th className={TdStyle.ThStyle}> Email </th>
                <th className={TdStyle.ThStyle}> Tel </th>
                <th className={TdStyle.ThStyle}> Packs </th>
                <th className={TdStyle.ThStyle}> </th>
                <th className={TdStyle.ThStyle}> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={TdStyle.TdStyle}>Club kids</td>
                <td className={TdStyle.TdStyle}>clubkids@gmail.com</td>
                <td className={TdStyle.TdStyle}>96325874</td>
                <td className={TdStyle.TdStyle}>
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }}>45%</div>
                    
                  </div>
                  <Image src='/circle-plus.svg' alt='add pack' width={20} height={20} style={{ fill: 'blue' }}></Image>
                  </div>
                </td>
                <td className={TdStyle.TdStyle}> 
                <div className="flex items-center justify-center">
                  <button>
                <Image src='/trash-can-alt-1.svg' alt='delete' width={20} height={20}></Image>
                </button>
                </div>
                </td>
                <td className={TdStyle.TdStyle}> 
                <div className="flex items-center justify-center">
                <button>
                <Image src='/file-pen.svg' alt='edit' width={20} height={20}></Image>
                </button>
                </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-lg" style={{ width: '30%', height: '95%', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)' }}>
    <form className="flex flex-col justify-between h-full" onSubmit={handleSubmit}>
    <div className="flex justify-end mt-4 mr-4 absolute top-0 right-0">
<Image src='/close.svg' alt='close' width={15} height={15} onClick={() => setShowForm(false)} className="cursor-pointer" />
</div>

      <h2 className="text-lg font-bold underline mb-4">Ajouter client :</h2>

      <div className="mb-4">
        <label htmlFor="nomEtablissement" className="block text-gray-700 text-sm font-bold mb-2">
          Nom d'établissement :
        </label>
        <input 
                type="text"
                id="nomEtablissement"
                name="nomEtablissement"
                value={nomEtablissement}
                onChange={(e) => setNomEtablissement(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-indigo-500"
                placeholder="Entrer le nom de l'établissement"
              />
      </div>

      <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} isValid={emailIsValid} />

      <TelephoneInput value={telephone} onChange={(e) => setTelephone(e.target.value)} isValid={telephoneIsValid} />


      <div className="mb-4">

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Mot de passe :
        </label>
        <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-indigo-500"
                placeholder="Entrer votre mot de passe"
              />
      </div>
      </div>
       {/* Select Box */}
       <div className="flex items-center mb-4">
  <label htmlFor="typeClient" className="block text-gray-700 text-sm font-bold mb-2">Packs SMS :</label> 
  <div className="relative" style={{ width: '74%' }}>
    <select
      id="typeClient"
      name="typeClient"
      value={typepack} // Use the state variable here
      onChange={handleTypeChange} // Use the defined function here
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-indigo-500"
    >
      <option value=""></option>
      <option value="type1">100 SMS</option>
      <option value="type2">500 SMS</option>
      <option value="type3">10000 SMS</option>
      {/* Add more options as needed */}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4z" /></svg>
    </div>
  </div>
</div>


      <div className="flex justify-end">
        <button
          className="button-color text-white font-bold py-2 px-6 rounded-2xl focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Ajouter
        </button>
      </div>
    </form>
    </div>
)}

      <div className="fixed bottom-6 right-8 mb-4 mr-4">
        <button onClick={toggleForm} className="flex items-center button-color font-bold text-white rounded-xl px-4 py-2">
          <span className="mr-2">Ajouter client</span>
          <Image src='/Add User Male.svg' alt='addUser' width={20} height={20}></Image>
        </button>
      </div>
    </Layout>
  );
}

export default Clients;