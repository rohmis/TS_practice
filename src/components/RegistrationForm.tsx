// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { Button, Table } from "react-bootstrap";
// import Form from "react-bootstrap/Form";

// interface RegistrationData {
//   email: string;
//   password: string;
//   checked: boolean;
// }

// const RegistrationForm: React.FC = () => {
//   const initialFormData: RegistrationData = {
//     email: '',
//     password: '',
//     checked: false,
//   };

//   const [formData, setFormData] = useState<RegistrationData>(initialFormData);
//   const [formDataList, setFormDataList] = useState<RegistrationData[]>([]);

//   const handleInputChange = (
//     event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = event.target;
//     const target = event.target as HTMLInputElement;

//     setFormData(prevData => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? target.checked : value,
//     }));
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setFormDataList(prevList => [...prevList, formData]);
//     setFormData(initialFormData); // Reset form data after submission
//   };

//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check
//             type="checkbox"
//             label="Check me out"
//             name="checked"
//             checked={formData.checked}
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//       <hr />
//       <DisplayFormData formData={formData} />
//     </div>
//   );
// };


// interface DisplayFormDataListProps {
//   formData: RegistrationData[];
// }

// const DisplayFormData: React.FC<DisplayFormDataListProps> = ({ formData }) => {
//   return (
//     <div>
//       <h2>Form Data List</h2>
//       <Table>
//         <thead>
//           <tr>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Checked</th>
//           </tr>
//         </thead>
//         <tbody>
//           {formData.map((data, index) => (
//             <tr key={index}>
//               <td>{data.email}</td>
//               <td>{data.password}</td>
//               <td>{data.checked.toString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default RegistrationForm;


import React, { useState, ChangeEvent, FormEvent } from 'react';
import {Button,Table} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

interface RegistrationData {
  email: string;
  password: string;
  checked: boolean;
}

const RegistrationForm: React.FC = () => {
  const initialFormData: RegistrationData = {
    email: '',
    password: '',
    checked: false,
  };

  const [formData, setFormData] = useState<RegistrationData>(initialFormData);
  const [formDataList, setFormDataList] = useState<RegistrationData[]>([]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    const target = event.target as HTMLInputElement;

    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? target.checked : value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormDataList(prevList => [...prevList, formData]);
    setFormData(initialFormData); // Reset form data after submission
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        {/* ... (existing form code) ... */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            name="checked"
            checked={formData.checked}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <hr />
      <DisplayFormDataList formDataList={formDataList} />
    </div>
  );
};

interface DisplayFormDataListProps {
  formDataList: RegistrationData[];
}

const DisplayFormDataList: React.FC<DisplayFormDataListProps> = ({ formDataList }) => {
  return (
    <div>
      <h2>Form Data List</h2>
      <Table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Checked</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((data, index) => (
            <tr key={index}>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>{data.checked.toString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RegistrationForm;
