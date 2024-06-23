import React from 'react';
import './FeatureComponent.css'; // Import the CSS file for styling

const FeatureComponent = () => {
    return (
        <div className="feature-container">
            <div className="feature-section1">
                <div className="icon1"><i className="fas fa-users"></i>
                <h3>People</h3>
                </div>
                <div className="description">
                   
                    <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                    <button className="auth-btn join" >Connect</button>
                </div>
            </div>
            <div className="feature-section2">
                <div className="icon2"><i className="fas fa-map-marker-alt"></i>
                <h3>Places</h3>
                </div>
                <div className="description">
                    
                    <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
                    <button className="auth-btn join" >Meet up</button>
                </div>
            </div>
            <div className="feature-section3">
                <div className="icon3"><i className="fas fa-shopping-basket"></i>
                <h3>Products</h3>
                </div>
                <div className="description">
                    
                    <p>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members</p>
                    <button className="auth-btn join" >Get it</button>
                </div>
            </div>
            <div className="feature-section4">
                <div className="icon4"><i className="fas fa-tasks"></i>
                <h3>Programs</h3>
                </div>
                <div className="description">
                   
                    <p>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
                    <button className="auth-btn join" >Attend</button>
                </div>
            </div>
        </div>
    );
}
export default FeatureComponent;