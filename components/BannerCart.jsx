import Image from "next/image";
export const BannerCart = ({ src, alt, title, price, count }) => {
  return (
    <div className="p-2">
      <div className="p-10 rounded-lg bg-blue-600 w-full text-white flex justify-around items-center relative border-4">
        <p className="absolute left-10">{count}.</p>
        <div className="w-20 h-10 absolute overflow-hidden left-32">
          <Image src={src} alt={alt} layout="fill" objectFit="cover" />
        </div>

        <p className="font-semibold text-xl absolute left-[30%]">{title}</p>
        <p className="text-red-300 font-semibold text-lg absolute right-[20%]">
          ${price}
        </p>
      </div>
    </div>
  );
};
export default BannerCart;
