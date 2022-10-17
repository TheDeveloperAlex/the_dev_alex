import ProjectSectionItem from '../components/projects/sectionItem';
import donutMaster from '../public/donutMaster.jpeg';
import shopFuture from '../public/shopFuture.jpeg';
import taskManeger from '../public/taskManeger.jpeg';

export default function Projects() {
  
  const donutMasterText = 'Responsive mobile-focused landing page to meet and attract customers to cooking donut master.';
  const donutMasterTechnologies = 'html5 - css3 - js - sass ‒ bem';
  const shopFutureText = 'Mobile-first adaptive web-page with authorization, profile page, ability to add new products and order confirmation.';
  const shopFutureTechnologies = 'html5 - css3 - js - webpack- sass ‒ bem';
  const taskManagerText = 'Habit application to help people to quit smoking, with authorization, profile page, ability to add new habits and track them down.';
  const taskManagerTechnologies = 'react.js - redux.js - html5 - css3 - axios - react router, redux persist, redux thunk, typescript.';


  const projectsData = [
    { header: 'Donut master', text: donutMasterText, technologies: donutMasterTechnologies, image: donutMaster, },
    { header: 'Shop from future', text: shopFutureText, technologies: shopFutureTechnologies, image: shopFuture, },
    { header: 'Task-manager', text: taskManagerText, technologies: taskManagerTechnologies, image: taskManeger, },
  ];

  const collectionItems = projectsData.map(({ header, text, technologies, image }) => {
    return <ProjectSectionItem header={header} text={text} image={image} technologies={technologies} key={header} />
  })


  return (
    <div className="project-container" >
      <h1 className="project-main-header" >Projects</h1>
      <div>
        {collectionItems}
      </div>
    </div>
  );
}