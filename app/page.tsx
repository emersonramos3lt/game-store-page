import Button from "@/components/Button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import FormComponent from "@/components/FormComponent";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <header>
        <nav className="nav p-10">
          <span className="text-3xl text-white font-medium cursor-pointer transition-colors hover:text-hover">Arcade</span>
        </nav>

        <div className="header-text text-white max-w-[1000px] p-5 pl-20">
          <h1 className="text-2xl mb-8 font-medium">WELCOME TO ARCADE</h1>
          <h2 className="text-7xl font-bold mb-8">DISCOVER THE BEST OF THE GEEK UNIVERSE</h2>
          <p className="text-xl">At Arcade, we offer a complete experience for all fans of games, manga, and comics. With a vast collection of classic and modern games, along with popular manga and comic titles, we guarantee fun and adventure for all ages and tastes. Browse our store and explore worlds of fantasy, thrilling challenges, and unforgettable stories that only geek culture can provide. Play, read, and live the excitement of our universe!</p>

          <div className="button-header mt-12">
            <Button />
          </div>

          <div className="container-header flex gap-8">
            <Image src="/ios.svg" alt="Download on the App Store" title="Download on the App Store" width={160} height={100} className="download-svg cursor-pointer"></Image>
            <Image src="/android.svg" alt="Get it on Google Play" title="Download on the Google Play" width={160} height={100} className="download-svg cursor-pointer"></Image>
          </div>
        </div>
      </header>

      <section className="section-products max-w-[90%] m-auto mt-[12rem]" id="products">

        <div className="header-products flex items-center justify-between mb-14">
          <h1 className="text-white text-5xl font-medium">Most popular in Arcade</h1>

          <Button />
        </div>
      
        <Carousel>
          <CarouselContent className="gap-4">

            <CarouselItem className="carousel-item basis-1/3 -ml-2 md:-ml-4 h-[500px]">
            <div className="pink-background"></div>
              <Image src="/img1.jpg" alt="Product 1" loading="lazy" title="Product example" width={2800} height={1000} className="cursor-pointer carousel-img h-full w-full object-cover"></Image>
            </CarouselItem>

            <CarouselItem className="carousel-item basis-1/3 -ml-2 md:-ml-4 h-[500px]">
              <Image src="/img2.jpg" alt="Product 2" loading="lazy" title="Product Example" width={2800} height={1200} className="cursor-pointer carousel-img h-full w-full object-cover"></Image>
            </CarouselItem>

            <CarouselItem className="carousel-item basis-1/3 -ml-2 md:-ml-4 h-[500px]">
              <Image src="/img3.jpg" alt="Product 3" loading="lazy" title="Product Example" width={2800} height={1000} className="cursor-pointer carousel-img h-full w-full object-cover"></Image>
            </CarouselItem>

            <CarouselItem className="carousel-item basis-1/3 -ml-2 md:-ml-4 h-[500px]">
              <Image src="/img4.jpg" alt="Product 3" loading="lazy" title="Product example" width={2800} height={1000} className="cursor-pointer carousel-img h-full w-full object-cover"></Image>
            </CarouselItem>

            <CarouselItem className="carousel-item basis-1/3 -ml-2 md:-ml-4 h-[500px]">
              <Image src="/img5.jpg" alt="Product 4" loading="lazy" title="Product example" width={2800} height={1000} className="cursor-pointer carousel-img h-full w-full object-cover"></Image>
            </CarouselItem>

            <CarouselItem className="carousel-item basis-1/3 -ml-2 md:-ml-4 h-[500px]">
              <Image src="/img6.jpg" alt="Product 5" loading="lazy" title="Product example" width={2800} height={1000} className="cursor-pointer carousel-img h-full w-full object-cover"></Image>
            </CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="arrows border-4 border-hover text-xl"/>
  <CarouselNext className="arrows border-hover border-4"/>
</Carousel>
      </section>

      <section className="section-manga border-t border-b pb-[8rem] mt-[12rem]">
        <div className="container flex justify-center items-center gap-4 max-w-[90%] m-auto mt-32">
          <div className="container-text text-white max-w-[40%]">
            <h1 className="text-3xl font-semibold mb-8"
            >UNLOCK YOUR NEXT ADVENTURE:</h1>
            <h2 className="text-5xl font-bold mb-16">Enjoy <span className="text-mySecondary font-extrabold">10%</span> Off All Manga Titles!</h2>
            <Button />
          </div>
          <div>
          <Image src="/img-manga.jpg" alt="Manga image" title="Product example"
          width={400} height={400} className="manga-img rounded-3xl shadow-xl shadow-mySecondary cursor-pointer transition duration-500 hover:scale-90"></Image>
          </div>
        </div>
      </section>

      <section className="category-section max-w-[90%] m-auto mt-[12rem] text-white">

        <h1 className="text-5xl font-semibold mb-12">VIEW BY CATEGORY</h1>

        <div className="grid-category grid grid-cols-3 gap-4">
          <div className="product-container max-w-[800px]">
            <Image src="/img5.jpg" alt="Product example" title="Product category" aria-labelledby="caption-1"
            width={2000} height={2000} className="rounded-3xl category-img cursor-pointer"></Image>
            <h2 id="caption-1" className="text-center text-2xl mt-4 cursor-pointer underline underline-offset-2 transition-colors hover:text-mySecondary">Computer Accessories</h2>
          </div>
          <div className="product-container max-w-[800px]">
            <Image src="/img4.jpg" alt="Product example"  title="Product category" aria-labelledby="caption-2"
            width={2000} height={2000} className="rounded-3xl category-img cursor-pointer"></Image>
            <h2 id="caption-2" className="text-center text-2xl mt-4 cursor-pointer underline underline-offset-2 transition-colors hover:text-mySecondary">Mouses</h2>
          </div>
          <div className="product-container max-w-[800px]">
            <Image src="/img6.jpg" alt="Product example" title="Product category" aria-labelledby="caption-3"
            width={2000} height={2000} className="rounded-3xl category-img cursor-pointer"></Image>
            <h2 id="caption-3" className="text-center text-2xl mt-4 cursor-pointer underline underline-offset-2 transition-colors hover:text-mySecondary">Video game controller</h2>
          </div>
        </div>
      </section>

      <FormComponent />

      <Footer />
    </main>
  );
}
