import Link from 'next/link'
import Image from 'next/image'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
 
export default function Navigation() {
  const wAnzahl = useSelector((state) => state.warenkorb.wAnzahl)
  return (
    <div className='shadow sticky-top p-2 mb-2 bg-danger'>
      <div className='d-flex justify-content-between align-items-center'>
        <Link href='/'>
          <Image src={'/bilder/logo.png'} alt='Logo' width={180} height={75} />
        </Link>
        <Link href='/warenkorb'>
          <Image src={'/bilder/warenkorb.png'} alt='Logo' width={30} height={30} />
          {wAnzahl > 0 && <Badge style={{position: 'absolute', right: '25px', top: '25px'}} pill bg='success'>{wAnzahl}</Badge>}
        </Link>
      </div>
    </div>
  )
}