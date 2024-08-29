'use client'
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Page = () => {
  const [userData, setUserData] = useState({
    name: '',
    password: ''
  });

  // async function handleSubmit(e) {
  //   try {
  //     e.preventDefault();
  //     console.log(userData);
  //     const response = await fetch('https://fakestoreapi.com/products', {
  //       method: 'POST',
  //       body: JSON.stringify(userData),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });

  //     if (response.status === 200) {
  //       console.log('Data Submitted Successfully');
  //       alert('Data Submitted Successfully');
  //       const result = await response.json();
  //       console.log(result)
  //     } else {
  //       alert('Error Submitting Data');
  //     }

  //     setUserData({
  //       name: '',
  //       password: ''
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     alert('Error Submitting Data');
  //   }
  // }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { userData });
      const result = response.data;
      console.log(result)
      const status = response.status;
      console.log(status)
      if (status === 201) {
        console.log(result)
        console.log('Data Submitted Succesfully')
        alert('Data Submitted Succesfully')
      }
      else {
        alert('Error Submitting Data');
      }
      setUserData({
        name: '',
        password: ''
      })
    }
    catch (error) {
      console.log(error)
    }
  }


  // async function handleUpdate() {
  //   const res = axios.put('https://jsonplaceholder.typicode.com/users/1', {
  //       name: 'navdeep Singh',
  //       username: 'navi',
  //       email: 'ns5516517@gmail.com'
  //   })
  //   const result =  (await res).data
  //   console.log(result)
  //   if ((await res).status === 200) {
  //     alert('Data updated successfully')
  //   }
  // }
  // handleUpdate()
  // async function handleUpdate() {
  //   const res = axios.put('https://jsonplaceholder.typicode.com/users/1', {
  //       name: 'navdeep Singh',
  //       username: 'navi',
  //       email: 'ns5516517@gmail.com'
  //   })
  //   const result =  (await res).data
  //   console.log(result)
  //   if ((await res).status === 200) {
  //     alert('Data updated successfully')
  //   }
  // }
  // handleUpdate()
  // async function handleUpdate() {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: 'navdeep Singh',
  //       username: 'navi',
  //       email: 'ns5516517@gmail.com'
  //     })
  //   })
  //   console.log(res.status)
  //   const result = await res.json()
  //   console.log(result)
  //   if (res.status === 200) {
  //     alert('Data updated successfully')
  //   }
  // }
  // handleUpdate()

  // async function handleUpdate() {
  //   const res = await fetch('https://reqres.in/api/users/2' , {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type' : 'application/json'
  //     },
  //     body: JSON.stringify({
  //       email: 'ns5516517@gmail.com',
  //       first_name: 'NAVDEEP'
  //     })
  //   })
  //   console.log(res)
  //   const result = await res.json()
  //   console.log(result)
  //   if(res.status === 200) {
  //     alert('Email updated succesfully')
  //   }
  //   else{
  //     alert('something went wrong')
  //   }
  // }
  // handleUpdate()


  async function handleUpdate() {
    const res = await fetch('https://reqres.in/api/users/2', {
      email: 'ns5516517@gmail.com',
      first_name: 'NAVDEEP'
    })
  }
  handleUpdate()

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Page;
