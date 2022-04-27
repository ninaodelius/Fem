import Button from '../components/button.jsx'
import Link from 'next/dist/client/link'
export default function SignUpOne() {
    return(
        <div className='login-form'>
<div className='title'>Skapa konto!</div>
<div className='form'>
         <form>
         <div className='input-container'>
            <label>
              <input type="text" name="name" placeholder="Namn" />
            </label> 
          </div>
        <div className='input-container'>
            <label>
              <input type="text" name="lastname" placeholder="Efternamn" />
            </label> 
          </div>
        <div className='input-container'>
            <label>
              <input type="email" name="email" placeholder="E-mail"  />
            </label> 
          </div>
          <div className='input-container'>
           <label>
             <input type="text" name="password" placeholder="Lösenord" />
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