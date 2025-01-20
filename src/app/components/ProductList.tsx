import Image from "next/image";
import Link from "next/link";


const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/15447422/pexels-photo-15447422/free-photo-of-drone-shot-of-city-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absoulte object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image src="https://images.pexels.com/photos/20263436/pexels-photo-20263436/free-photo-of-revel-atlantic-city-hotel-in-atlantic-city-in-usa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="2v5w"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold ">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-elysian text-elysian w-max py-2 px-4 text-xs hover:bg-elysian hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/15447422/pexels-photo-15447422/free-photo-of-drone-shot-of-city-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absoulte object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image src="https://images.pexels.com/photos/20263436/pexels-photo-20263436/free-photo-of-revel-atlantic-city-hotel-in-atlantic-city-in-usa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="2v5w"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold ">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-elysian text-elysian w-max py-2 px-4 text-xs hover:bg-elysian hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/15447422/pexels-photo-15447422/free-photo-of-drone-shot-of-city-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absoulte object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image src="https://images.pexels.com/photos/20263436/pexels-photo-20263436/free-photo-of-revel-atlantic-city-hotel-in-atlantic-city-in-usa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="2v5w"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold ">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-elysian text-elysian w-max py-2 px-4 text-xs hover:bg-elysian hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/15447422/pexels-photo-15447422/free-photo-of-drone-shot-of-city-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absoulte object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image src="https://images.pexels.com/photos/20263436/pexels-photo-20263436/free-photo-of-revel-atlantic-city-hotel-in-atlantic-city-in-usa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="2v5w"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold ">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-elysian text-elysian w-max py-2 px-4 text-xs hover:bg-elysian hover:text-white">Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductList;