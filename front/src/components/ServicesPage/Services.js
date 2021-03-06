import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@material-ui/core/Button';
import Jumbo from '../Utils/Layouts/Jumbo';
import './Services.scss';

class Services extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.location.pathname === nextProps.location.pathname)
      return false;
    return true;
  }

  render(){
    const hero = {
      title:'Services',
      subTitle:'Designing and delivering specialized software solutions',
      info:'Companies today need specialized software solutions to maintain a competitive advantage.Users expect more both in functionality and usability from the software. Having access to software developers that understand both the right software technologies and the end user’s requirements can be a challenge for companies. We solve this problem.',
    }
    return (
      <div id="root-link">
        <Jumbo
          title={hero.title}
          subTitle={hero.subTitle}
          info={hero.info}
        />
        <div className="service-body">
            <div className="body-wrapper">
              <section className="selections">
                <div className="selection-wrapper">
                  <div>
                    <div className="icon">
                      <ScrollAnimation  animateOnce animateIn="fadeIn"><img alt="science cloud"src="/img/Logos/science_icon.png"/></ScrollAnimation>
                    </div>
                    <div className="info">
                      <h3>Decision Science</h3>
                      <p>Our Decision Science practice focuses on enabling clients to derive insights from their data that
                      facilitate data-based decision making. We work with clients during problem discovery to identify issues
                      that could be solved with data. Next, we help identify their data needs and assist in building data collection
                      steams.</p>
                      <Link to="/Services/Decision-Science"><Button variant="outlined">Read More</Button></Link>
                    </div>
                  </div>
                  <div>
                    <div className="icon">
                      <ScrollAnimation  animateOnce animateIn="fadeIn"><img alt="data cloud" src="/img/Logos/gears.png"/></ScrollAnimation>
                    </div>
                    <div className="info">
                      <h3>Data Engineering</h3>
                      <p>
                         Our Data Engineering practice is focused on developing highly efficient, distributed and easily customizable data solutions.
                         We focus on streaming and batch data pipelines, in transit data enrichment and standardization, data modeling and storage, data
                         governance and data access. We are motivated by our desire to transform businesses into data driven enterprises.
                       </p>
                      <Link to="/Services/Data-Engineering"><Button variant="outlined">Read More</Button></Link>
                    </div>
                  </div>
                  <div>
                    <div className="icon">
                      <ScrollAnimation  animateOnce animateIn="fadeIn"><img alt="cloud clipart"src="/img/Logos/cloud_data.png"/></ScrollAnimation>
                    </div>
                    <div className="info">
                      <h3>Cloud</h3>
                      <p>
                          We revolutionize the way applications are designed, built, and managed. Starting with users and then creating modern cloud
                          based solutions that align to their needs. We manage delivery using an agile process that was developed in
                          by our full-stack engineers to help us stay focused on the right solutions to your toughest engineering problems.
                        </p>
                        <Link to="/Services/Cloud"><Button variant="outlined">Read More</Button></Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
        </div>
      </div>

    );
  }

}

export default Services;
