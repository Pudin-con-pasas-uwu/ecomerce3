import { useRouter } from "next/router";
import { useState } from "react";
import Link from 'next/link';

const LoginPage = () => {

  const router = useRouter()
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {value, name} = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(form.email.trim() === "" && form.password.trim() === ""){
      setError("Ingrese credenciales");
      return;
    } 

    try {
      console.log(form)
      const options = {
        method: 'POST',
        body: JSON.stringify(form)
      };

      const res = await fetch("https://ecommerce-unid.000webhostapp.com/auth", options);
      const data = await res.json();
      console.log(data);

      if (data?.token){
        sessionStorage.setItem('userToken', data.token)
        setError('Bienvenido a la Comarca')
        router.push('/');
      }
    } catch (error) {
      console.log(error)
      setError('Ingrese las credenciales correctas')
    }
  }
  return (
          <main >
            <div className="LoginPage_h1">
              <h1><Link href="/">Regresar</Link></h1>
              {error && <div>{error}</div>}
            </div>
            <div className="form-signin">

            <form className="LoginPageForm" onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 fw-normal">Por favor, inicia sesión</h1>
              <div className="form-floating">
                <input type="email" className="form-control" name="email" id="floatingInput" value={form.email} onChange={handleChange} placeholder="."/>
                <label htmlFor="floatingInput">Correo electrónico</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" name="password" id="floatingPassword" value={form.password} onChange={handleChange}  placeholder="."/>
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>
              <button className="w-100 btn btn-lg btn-dark" id="LoginPage_ButtonLogin" type="submit">Acceder</button>
              {/*<Link href="LoginPage">¿Olvidaste tu contraseña?</Link>*/}
            </form>
            </div>
            <div className="RegisterButton">
            <h6>¿Eres nuevo?</h6>
            <Link id="LoginPage_ButtonRegister" href="RegisterPage">Crear cuenta</Link>
            </div>
          </main>
        );
  }
  
export default LoginPage 