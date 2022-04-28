import Button from '../components/button.jsx'
import Link from 'next/dist/client/link'
export default function SignUpTwo() {



  return (
    <div className='form'>
         <form>
         <div className='input-container'>
            <label for="name">Jobbtitel*</label>
            <label>
            <input type="text" name="name" placeholder="Java-utvecklare"  />
            </label> 
          </div>
        <div className='input-container'>
        <label for="lastname">Hur länge har du jobbat?*</label>
            <label>
              <input type="text" name="lastname" placeholder="1 år"  />
            </label> 
          </div>
        <div className='input-container'>
        <label for="email">Ange minst 2 kompetenser</label>
            <label>
              <input type="text" name="email" placeholder="#Java #Spring"  />
            </label> 
          </div>
          <div className='input-container'>
          <label for="password">Taggar du vill följa</label>
           <label>
             <input type="text" name="password" placeholder="#Java #Microservices" />
           </label>
          </div>
          <div className='button-container'>
          </div>
         </form>
         
      </div>
  )
}