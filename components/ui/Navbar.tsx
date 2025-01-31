import { Link } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>  <Link href="/">
    <div className="flex items-center gap-2.5 cursor-pointer">
        <Image
            src="/images/logo.svg"
            alt="logo"
            width={46}
            height={44}
        />

    </div>
</Link>



</nav>
  )
}

export default Navbar