import React from 'react';
import {Element} from 'react-scroll';

//components
import ProjectList from './ProjectList'
import SkillsSection from './SkillsSection';
import LoadingPane from '../../small-components/LoadingPane';
import ProjectWindowDirectory from './ProjectWindowDirectory';
import animations from '../../small-components/animations';


class ProjectListContainer extends React.Component{
  componentDidMount(){
    const projectItems = this.list.querySelectorAll('.project-list-items');
    animations.fadeInList(projectItems);
  }
  render(props){
    return(
      <section className="flex-container center column">
        <SkillsSection {...props}/>
        <Element name='projectPane'><div></div></Element>
        <ProjectWindowDirectory {...props} closeProject={this.props.closeProject}/>
        <ProjectList {...props} isOpen={this.props.isOpen} updateCategoryList={this.props.updateCategoryList} ref={ref => this.list = ref}/>
      </section>
    ) 
  }
}

export default ProjectListContainer;
