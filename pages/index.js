import Image from 'next/image';
import Link from 'next/link';

import photo from '../images/me.jpeg';

export default function Index() {
  
  const linksData = [
    { content: 'Projects', color: '#385df2', href: '/projects', isLinkWeb: false  },
    { content: 'Github', color: '#80D8Da', href: 'https://github.com/TheDeveloperAlex/', isLinkWeb: true  },
  ];

  const onClick = (href) => {
      window.location.href = href;
  }

  const linkItems = linksData.map(({ content, color, href, isLinkWeb }) => {
    return isLinkWeb ? (
      <button key={`${color}${href}`} onClick={() => onClick(href)} className='circle-link circle-link-second' style={{ background: color }} >
          <div className='circle-link-component' >
            {content}
          </div>
        </button>
    ) : (
        <div className='circle-link' style={{ background: color }} key={href}>
        <Link href={href}  >
          <div className='circle-link-component' >
            {content}
          </div>
        </Link>
        </div>
    )
  })


  return (
    <div className="main-section" >
      <div className='main-section-content-wrapper' >
        <div className='image-wrapper'>
          <Image src={photo} layout="fill" className='image'  />
        </div>
        <div className='text-wrapper' >
          <div className='hi-text' >Hello</div>
          <h1 className='header' >A Bit About Me</h1>
          <div className='description' >
            I'm 17 years old. I am a react developer at Resonance. I love sports and wildlife.
          </div>
          <div className='buttons-wrapper' >
            {linkItems}
          </div>
        </div>
      </div>
    </div>
  );
}