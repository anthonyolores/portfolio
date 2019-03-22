import React from 'react';

const SectionContainer = props =>

    <section className="section-container">
        <div className="section-title"><h2>{props.title}</h2></div>
        <div className="section-body">
            {
                props.position != 0?
                    <div className="row">
                        <p>{props.text}</p>
                        {
                            props.image != null?
                                <img alt="image alt" src={props.image}/>
                            :''
                        }
                    </div>
                :
                    <div className="column">
                        <div style={props.direction===0?{order:1}:{}}>
                            <p>{props.text}</p>
                        </div>
                        <div >
                            <img style={props.direction===0?{float: 'unset'}:{}} alt="image alt" src={props.image}/>
                        </div>
                    </div>
            }
            
        </div>
    </section>;

export default SectionContainer;