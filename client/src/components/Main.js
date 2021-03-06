import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {Helmet} from 'react-helmet';



//components
import Photography from './Photography';
import HomePage from './HomePage';
import DevAndDesign from './DevAndDesign';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Header from './Header';
import backgroundImage from '../images/portfolio-background.jpg';


const Main = ({location}) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'repeat',
    zIndex: 0
  }
  const currentKey = location.pathname.split('/')[1] || '/'
  return (
    <div>
      <Helmet>
        <title>Devin O&#8217;Leary Web Development and Design</title>
        <meta name="description" content="I\'m Devin O\'Leary, a Web Developer and Designer, Photographer, Cyclist, Surfer, Adventurer, and really just someone trying to live an authentic and impactful life. Send me a message so we can talk about creating something great!"/>
      </Helmet>
      {location.pathname !== "/" && <Header location={location}/>}
      <div style={backgroundStyle}>
        <TransitionGroup>
          <CSSTransition key={currentKey} classNames="fade" timeout={1500}>
            <Switch location={location}>
              <Route path="/" exact component={HomePage}/>
              <Route path="/photography" component={Photography}/>
              <Route path="/dev&design" component={DevAndDesign}/>
              <Route path="/about" component={AboutMe}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
      {location.pathname !== "/" && <Footer location={location}/>}
    </div>
  );
};








export default withRouter(Main);
