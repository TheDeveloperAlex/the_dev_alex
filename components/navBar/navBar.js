
import Link from "next/link";
import CustomLink from "./link";
import LogoReact from "./logoReact";

export default function NavBar({ theme, setTheme }) {


  // ==========================================================
  const onChangeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      if (typeof window !== "undefined") {
        localStorage.setItem('theme', 'dark');
      }
      return;
    }
    setTheme('light');
    if (typeof window !== "undefined") {
      localStorage.setItem('theme', 'light');
    }
  }
  // ==========================================================
  
  const linksData = [
    {content: 'Projects', href: '/projects', isLinkWeb: false},
    {content: 'Contact', href: 'mailto: semenenkoalex688@gmail.com', isLinkWeb: true},
  ];
  
  const linksItems = linksData.map(({ content, href, isLinkWeb }, i) => {
    const isLast = i === linksData.length - 1;
    return isLinkWeb ? (
      <div key={href} style={{ display: 'flex', alignItems: 'center' }}  >
        <a className="default-link" href={href} >
          <div style={{ padding: '0 15px', lineHeight: '24px', fontWeight: '300' }}>
            {content}
          </div>
        </a>
        {!isLast &&
          <div className="link-item-delimiter" ></div>
        }
      </div>
    ) : (
      <div key={href} style={{ display: 'flex', alignItems: 'center' }} >
        <CustomLink href={href} content={content} />
        {!isLast &&
          <div className="link-item-delimiter" ></div>
        }
      </div>
    )
  });

  // ===========================================================================
  
  return (
    <div className="nav-bar" >
      <div className="nav-bar-left-part">
        <button className="nav-bar-button" onClick={onChangeTheme} >
          <div className="logo-react-wrapper" > 
            
          </div>
        </button>
        <Link href={'/'} >
          <div className="nav-bar-link-name-wrapper" >
            <span className="nav-bar-link-name" >Oleksandr Semenenko</span>
            <span className="nav-bar-link-job" ><span style={{ marginRight: '5px' }} >React</span> <LogoReact /> <span style={{ marginLeft: '5px' }} >Developer</span></span>
          </div>
        </Link>

      </div>
      <div className="nav-bar-right-part" >
        {linksItems}
      </div>
    </div>
  );
}