"use client";

import {Form, Input, Button} from '@nextui-org/react';

export default function Product() {

  async function onSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  return (
    <div className="flex items-center justify-center  bg-gray-100">
    <Form
    className="w-full max-w-xs flex flex-col gap-3 bg-white p-4 shadow-md rounded mt-auto"
    validationBehavior="native"
    /*onReset={() => setAction("reset")}*/
    onSubmit={onSubmit}
  >
    <Input
      isRequired
      errorMessage="Please enter a valid username"
      label="Username"
      labelPlacement="outside"
      name="username"
      placeholder="Enter your username"
      type="text"
    />

    <Input
      isRequired
      errorMessage="Please enter a valid email"
      label="Email"
      labelPlacement="outside"
      name="email"
      placeholder="Enter your email"
      type="email"
    />
    <Input
      isRequired
      errorMessage="Please enter a valid price"
      label="Price"
      labelPlacement="outside"
      name="price"
      placeholder="Enter your email"
      type="number"
    />
    <div className="flex gap-2">
      <Button color="primary" type="submit">
        Submit
      </Button>
      <Button type="reset" variant="flat">
        Reset
      </Button>
    </div>
  </Form>
  </div>
  );
}
