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
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine/>
      </Link>
     
    </div>
  );
};

export default Socials;