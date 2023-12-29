import React,{useState, useEffect} from 'react'

function CombinesInput() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        username:"",
        phone:"",
        password:""
    })

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }
    
  return (
    <div>
        <input type="text" placeholder='Name' value={formData.name} name="name" onChange={(e)=>{handleChange(e)}}/>

        <input type="text" placeholder='Email'value={formData.email} name="email" onChange={(e)=>{{handleChange(e)}}}/>

        <input type="text" placeholder='UserName' value={formData.username} name="username" onChange={(e)=>{{handleChange(e)}}}/>

        <input type="text" placeholder='Phone No' value={formData.phone} name="phone" onChange={(e)=>{{handleChange(e)}}}/>

        <input type="text" placeholder='Password'value={formData.password} name="password" onChange={(e)=>{{handleChange(e)}}}/>
    </div>
  )
}

export default CombinesInput