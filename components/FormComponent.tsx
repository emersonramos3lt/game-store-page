import React from 'react'
import Form from 'next/form'

const FormComponent = () => {
  return (
    <section className='max-w-[90%] m-auto text-center text-white mt-40'>
        <h1 className='text-4xl font-bold'>NEWSLETTER</h1>
        <p className='text-xl'>Subscribe and receive updates on new products and special offers</p>
        <Form action="/" className='max-w-[700px] m-auto'>
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" placeholder='Type your email'/>
        </Form>
    </section>
  )
}

export default FormComponent