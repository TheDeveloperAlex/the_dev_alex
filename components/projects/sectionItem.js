import Image from "next/image";

export default function ProjectSectionItem({ header, text, technologies, image }) {

  return (
    <div className="project-item" >
      <div className="project-item-text-wrapper"  >
        <h2 className="project-item-header" >{header}</h2>
        <div className="project-item-text-about" ><span className="about-project" >{`About project: `}</span>{text}</div>
        <div className="project-item-text-about" ><span className="about-project" >{`technologies: `}</span>{technologies}</div>
      </div>
      <div className='project-item-image-position-container' >
        <div className='project-item-image-wrapper'>
          <Image src={image} layout="fixed" className='project-item-image'  />
        </div>
      </div>
    </div>
  )
} 