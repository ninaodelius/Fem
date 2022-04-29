import Button from '../components/button.jsx'
import Link from 'next/dist/client/link'
import { useState } from "react"

export default function SignUpOne() {
  const initialValues= {name:"",lastname:"",email:"",password:""};
  const [formValues,setFormValues] = useState(initialValues);

  const handleChange = (e) =>{
    console.log(e.target)

  }

    return(
        <div className='login-form'>
    <div className='title'>Skapa konto!</div>
    <div className='form'>
         <form>
         <div className='input-container'>
            <label>
              <input type="text"
               name="name" 
               placeholder="Namn"
                value={formValues.name}
                onChange={handleChange}
                />
            </label> 
          </div>
        <div className='input-container'>
            <label>
              <input type="text"
               name="lastname" 
               placeholder="Efternamn" 
               value={formValues.lastname}
               onChange={handleChange}
                />
            </label> 
          </div>
        <div className='input-container'>
            <label>
              <input type="email"
               name="email"
                placeholder="E-mail"
                 value={formValues.email}
                 onChange={handleChange}
                  />
            </label> 
          </div>
          <div className='input-container'>
           <label>
             <input type="text" 
             name="password"
              placeholder="Lösenord" 
              value={formValues.password} 
              onChange={handleChange}
              />
           </label>
          </div>
        <div className="checkbox-container">
          <input type="checkbox" id="remember" name="remember" value="Kom ihåg mig!"></input>
          <label for="remember"> lorem ipsum</label>
        </div>
          <div className='button-container'>
            <Link href= '/about' passHref><Button /></Link>
          </div>
         </form>
      </div>
	  </div>
    )
}