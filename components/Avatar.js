//importing image
import Image from "next/image";

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none ml-44'>
   { <Image src={'/Avatar2.png'} 
     width={550}
      height={678}
       alt=''
    className='translate-z-0-w-full h-full'/> }
  </div>;
};

export default Avatar;
