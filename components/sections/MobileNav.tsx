import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import NavItems from "./NavItems"
  

const MobileNav = () => {
  return (
    <nav className="md:hidden">
<Sheet>
  <SheetTrigger className="ml-5">
    <Image src="/assets/icons/menu.svg" alt="menu" width={25} height={25} className="cursor-pointer"/>
  </SheetTrigger>
  <SheetContent className="flex flex-col md:hidden">
    <SheetHeader>
      <SheetTitle >
        <NavItems />
      </SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>
    </nav>
  )
}

export default MobileNav
