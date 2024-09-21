'use client'
import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';

const Page = () => {

    const remove = async () => {
        const raw = await axios.delete('https://jsonplaceholder.typicode.com/users/10')
        console.log(raw.status)
        if (raw.status) {
            console.log('id no. 10 deleted succesfully!  HURRAY!!!!!!!!!!')
        }
        else{
            console.log('error deleting id')
        }
    }


    return (
        <Button className='btn-primary' type='submit' onClick={() => remove()}> delete   </Button>
    )
}

export default Page