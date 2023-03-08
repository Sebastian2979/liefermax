import cookie from 'cookie'

export default function handler(req, res){

    if(req.method === 'POST'){
        const {benutzer, password} = req.body

        if(benutzer === ADMIN_BENUTZER && password === ADMIN_PASSWORD){
            res.setHeader('Set-Cookie', cookie.serialize('token', process.env.TOKEN, {
                maxAge: 60 * 60,
                sameSite: 'strict',
                path: '/'
            }))
            res.status(200).json('Erfolgreich')
        } else {
            res.status(400).json('Login fehlgeschlagen')
        }
        
    }
}