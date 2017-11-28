import React from 'react';

import ProjectSlider from './ProjectSlider';

const AnimationProject = () => {
  const iframeStyle = {
    width: '100%'
  }
  return (
    <div className="full-width">
      <hgroup className="project-title">
        <h2 className="text-center">My Animations</h2>
        <hr className="divider-colored"/>
      </hgroup>
      <section className="flex-container center">
        <div className='animation-container'>
          <ProjectSlider>
            <div className="flex-container center img-project_preview">
              <iframe height='265' scrolling='no' title='Sunset' src='//codepen.io/djoleary07/embed/preview/gXbNpv/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/djoleary07/pen/gXbNpv/'>Sunset</a> by Devin OLeary (<a href='https://codepen.io/djoleary07'>@djoleary07</a>) on <a href='https://codepen.io'>CodePen</a>.
              </iframe>
            </div>
            <div className="flex-container center img-project_preview">
              <iframe height='265' scrolling='no' title='Sunset' src='//codepen.io/djoleary07/embed/preview/gXbNpv/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/djoleary07/pen/gXbNpv/'>Sunset</a> by Devin OLeary (<a href='https://codepen.io/djoleary07'>@djoleary07</a>) on <a href='https://codepen.io'>CodePen</a>.
              </iframe>
            </div>
          </ProjectSlider>
        </div>
      </section>
    </div>
  );
}

export default AnimationProject;
