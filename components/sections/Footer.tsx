import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper md:flex-between flex-center flex-col md:flex-row gap-5 text-center">
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt="logo" width={120} height={40} />
        </Link>
        <p>2024 Events .All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
