import { useState } from 'react'
import { useRouter } from 'next/router'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

export default function login() {

    const [benutzer, setBenutzer] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)
    const router = useRouter()

    const login = async() => {
        try{
            await axios.post('https://liefermax-sebastian2979.vercel.app/api/login', {benutzer, password})
            router.push('/backend')
        }catch(error){
            setError(true)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            {error && <p className='text-danger'>Login fehlgeschlagen</p>}
            <div className='row mt-4'>
                <Form>
                    <Form.Group className='mb-2' control='benutzer'>
                        <Form.Control type='text' placeholder='Benutzer' onChange={ (e) => setBenutzer(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='mb-2' control='passwort'>
                        <Form.Control type='password' placeholder='Passwort' onChange={ (e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant='primary' onClick={login} >Login</Button>
                </Form>
            </div>
        </div>
    )
}
