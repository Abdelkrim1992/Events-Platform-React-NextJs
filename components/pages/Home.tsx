import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-contain bg-dotted-pattern py-5 md:py-5">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center gap-5">
            <h1 className="h1-bold ">Connect Your Event to the Right Audience</h1>
            <p className="p-regular-10">Our platform allows you to easily publish and share event details, ensuring maximum visibility and engagement.</p>
            <Button className="button w-full sm:w-fit" size="lg" asChild>
              <Link href="#events" >Explore More</Link>
            </Button>
          </div>
          <Image src="/assets/images/hero.png" alt="logo" width={1000} height={1000} className="object-contain object-center sm:max-h-[80vh] sm:min-h-[50vh]"/>
        </div>
      </section>
    </>
  );
}
