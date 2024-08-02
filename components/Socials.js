// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
 
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='fixed top-4 right-4 flex flex-col gap-5 md:flex-row md:gap-x-5 md:top-8 md:right-8'>
      <Link href={'https://youtube.com/@beekay_sa?si=CSgyYaAeZckvFf6n'} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.facebook.com/boikanyo.malepe.7?mibextid=ZbWKwL'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/beekay_mv?igsh=bmp1OTR5bDE4dXhr'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/boikanyo-malepe-b70931219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/BeeMelvin'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine/>
      </Link>
     
    </div>
  );
};

export default Socials;