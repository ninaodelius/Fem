import Button from "../../components/button"

export default function SignIn(){
    return(
        <div className='login-form'>
            <div className='title1'>WEME</div>
                <div className='form'>
                <form>
                <div className='input-container'>
                    <label>
                    <input type="email" name="email" placeholder="E-mail"/>
                    </label> 
                </div>
                <div className='input-container'>
                <label>
                    <input type="text" name="password" placeholder="Lösenord" />
                </label>
                </div>
                <div className="checkbox-container">
                <input type="checkbox" id="remember" name="remember" value="Kom ihåg mig!"></input>
                <label for="remember"> Kom ihåg mig?</label>
                <p>Glömt lösenord?</p>
                </div>
                <div className='button-container'>
                    <Button>Logga in</Button>
                </div>
                </form>
        </div>
</div>

    )
}