import React, { useState, useEffect } from 'react';
import Employee from '../types';

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/customers')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.employee_id}>
            <strong>Name:</strong> {employee.name}
            <br />
            <strong>Surname:</strong> {employee.surname}
            <br />
            <strong>Seniority:</strong> {employee.seniority}
            <br />
            <strong>Mechanical Certification Status:</strong>{' '}
            {employee.mechanical_certification_status ? 'Certified' : 'Not Certified'}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
