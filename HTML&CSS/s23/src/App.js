import React, { useState } from 'react';
import './App.css';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialFormData = {
  name: '',
  address: '',
  email: '',
  password: '',
  telephone: '',
  course: 'C#', 
  notes: '',
};

const App = () => {
  const [value, setValue] = useState('');
  const [value0, setValue0] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('C#'); 

  const courses = [
    { name: 'C#' },
    { name: 'ReactJs' },
    { name: 'Java' },
    { name: 'C++' },
    { name: 'Python' },
  ];

  const handleReset = () => {
    setValue('');
    setValue0('');
    setValue1('');
    setValue2('');
    setSelectedCourse('C#');
  };

  const handleSubmit = () => {
    if (value === '' || value0 === '' || value1 === '' || value2 === '' || !selectedCourse || value3 === '' || value4 === '') {
      toast.error('All fields must be filled');
      return;
    }

    if (value2.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    const mediumStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!mediumStrengthRegex.test(value2)) {
      toast.error('Password must be stronger');
      return;
    }
    
    toast.success('Form submitted successfully!');
  };

  return (
    <div className="App">
      <h2>Registration Form</h2>
      <label htmlFor="withoutgrouping" className="font-bold block mb-2">
        Name
      </label>
      <InputText
        className='input'
        name="name"
        keyfilter="alpha"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <label htmlFor="withoutgrouping" className="font-bold block mb-2">
        Address
      </label>
      <InputText
      className='input'
        name="address"
        value={value0}
        onChange={(e) => setValue0(e.target.value)}
      />

      <label htmlFor="withoutgrouping" className="font-bold block mb-2">
        E-mail
      </label>
      <InputText
      className='input'
        name="email"
        keyfilter="email"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />

      <label htmlFor="withoutgrouping" className="font-bold block mb-2">
        Password
      </label>
      <Password
      className='input'
        name="password"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
          
      <label htmlFor="withoutgrouping" className="font-bold block mb-2">
        Telephone
      </label>
      <InputNumber
      className='input'
        name="telephone"
        inputId="withoutgrouping"
        value={value3}
        onValueChange={(e) => setValue3(e.value)}
        useGrouping={false}
      />

      <label htmlFor="withoutgrouping" className="font-bold block mb-2">
        Course
      </label>
      <Dropdown
        name="course"
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.value)}
        options={courses}
        optionLabel="name"
        placeholder="C#"
        className='input'
      />
      
      <label htmlFor="withoutgrouping" className="font-bold block mb-2">
       Notes
      </label>
      <InputTextarea
      className='input'
        name="notes"
        value={value4}
        onChange={(e) => setValue4(e.target.value)}
        rows={5}
        cols={30}
      />
      <Button className='button0' label="Submit" type="submit" onClick={handleSubmit} />
      <Button className='button0' onClick={handleReset} label="Reset" />
      <ToastContainer />
    </div>
  );
}

export default App;
