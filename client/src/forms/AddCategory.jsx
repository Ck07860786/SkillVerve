import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
  

function AddCategory({handleSubmit,value,setValue}) {
  return (
    <>
    <form onSubmit={handleSubmit}>
     <Card>
  <CardHeader>
    <CardTitle>Create Category</CardTitle>
    <CardDescription>Create New Category</CardDescription>
  </CardHeader>
  <CardContent>
   <Input 
   type='text'
    placeholder='Enter category name'
    id='name'
    value={value}
    onChange={(e)=>setValue(e.target.value)}
    
     />
  </CardContent>
  <CardFooter>
    <Button type='submit'>Create Category</Button>
  </CardFooter>
</Card>
</form>
    </>
  )
}

export default AddCategory


