//next image;
import Image from 'next/image';

//importing link
import Link from 'next/link';




const ProjectsBtn = () => {
  return <div className='mx-auto xl:mx-0'>
    <Link 
    href={'/Boikanyo Malepe CV.pdf'}
    download={"Boikanyo Malepe CV"}
      className='relative w-[185px] h-[185px] flex justify-center items-center
      bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
    <Image 
    src={ '/Download CV.png'}
    width={141}
    height={148}
    alt=''
    className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
    />
   
    
    </Link>
  </div>;
};

export default ProjectsBtn;
