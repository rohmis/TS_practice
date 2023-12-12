// import React, { useState } from 'react'

// interface myButton{
//  text:string | number | boolean;
//  onClick?:()=> void;
//  something?: boolean;
// }
// interface Book{
//     name:string;
//     price:number;
// }

// const Button:React.FC<myButton>=(props)=>{
//   const {text,onClick}=props;
//   const [value,setValue]=useState<Book>({
//     name:'one',
//     price:1000
//   });
//   return (
//     <div>
//         <h1>Name {value.name}( Rs. {value.price})</h1>
// <button onClick={()=>setValue({name:'two',price:2000})}>{props.text}</button>
//     </div>
//   )
// }

// export default Button

import React, { useState } from 'react'

interface myButton{
 text:string | number | boolean;
 onClick?:()=> void;
 something?: boolean;
}
interface Book{
    name:string;
    price:number;
}

const Button:React.FC<myButton>=(props)=>{
  const {text,onClick}=props;
  const [value,setValue]=useState<string |undefined>();

  const handleNameChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
 setValue(e.target.value)
  }
  return (
    <div>
        <input onChange={handleNameChange} type="text" placeholder='Enter your name'/>
        <h1>{value}</h1>
    </div>
  )
}

export default Button