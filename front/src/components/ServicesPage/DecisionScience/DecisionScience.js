import React from 'react';
import Jumbo from '../../Utils/Layouts/Jumbo';

function DecisionScience(){
  const hero = {
    title:'Decision Science',
    subTitle:'Descovering Insights from Data',
    info:'Our Decision Science practice empowers clients to derive insights from their data.These insights facilitate data based decision making to improve efficiency, reduce costs, and provide better service to users and customers.',
  }
    return (
      <div id="root-link">
        <Jumbo title={hero.title} subTitle={hero.subTitle} info={hero.info}/>
        <div className="service-body">
          <div className="body-wrapper">
            <div className="selections">
              <div className="selection-wrapper">
                <div className="reverse col-reverse">
                    <ul className="list">
                      <li><p>Data Visualization</p></li>
                      <li><p>Machine Learning</p></li>
                      <li><p>Artificial Intelligence</p></li>
                      <li><p>Interactive Dashboards</p></li>
                      <li><p>APIs</p></li>
                    </ul>
                  <div className="info">
                    <h3>Offerings and Capabilities</h3>
                    <p>
                      The Decision Science practice provides business insights to clients by applying analytic
                      and machine learning techniques to their data in order to facilitate data-driven decisions.</p>
                      <p>These insights are delivered as presentations or reports, interactive dashboards, or API services, according to the use case.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="info no-img">
                    <h3>Data Engineering + Decision Science</h3>
                    <p>
                      Decision Science is a perfect complement to the Data Engineering practice, which helps clients organize, clean,
                      and understand their data. Our Decision Science practice helps derive insights from data to facilitate data-driven
                      decisions.
                     </p>
                     <p>
                       We deliver end-to-end data pipelines that pull data from disparate sources throughout an organization.
                       We consolidate, clean, and catalog it with metadata, and feed it to Decision Science models that serve predictions
                       and analysis in dashboards or APIs. The combination of Data Engineering and Decision Science practices helps enable 1904labs to deliver improved and
                       cohesive analytic pipelines to feed decision-making.
                     </p>
                  </div>
                </div>
                <div className="grid">
                  <div className="info no-img">
                    <h3>How Can Decision Science help you?</h3>
                  </div>
                    <ul>
                        <li><p>Tailored Fit</p></li>
                        <li><p>Greater Transparency</p></li>
                        <li><p>Improved Predictability</p></li>
                        <li><p>Enhanced Flexibility</p></li>
                        <li><p>Better Quality</p></li>
                        <li><p>Reduce Costs</p></li>
                        <li><p>Increase Revenue</p></li>
                        <li><p>Unify Data Source</p></li>
                        <li><p>Faster Time to Market</p></li>
                    </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default DecisionScience;
