import React, { useState } from 'react';
import './HomeScreen.css'; // Import the CSS file for styling

const HomeScreen = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    }

    return (
        <div className="home-screen">
            <div className="left-section">
                <h1 className='discription1'>Explore your</h1> 
                <h1 className='discription2'>hobby or passion</h1>
                <h1 className='discription3'>or passion</h1>
                <h1 className='discription4'>passion</h1>
                
                <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                </p>
                <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
            </div>
            <div className="right-section">
                <div className="button-container">
                    <button
                        className={`auth-btn sign-in ${activeButton === 'sign-in' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('sign-in')}
                    >
                        Sign In
                    </button>
                    <button
                        className={`auth-btn join ${activeButton === 'join' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('join')}
                    >
                        Join Now
                    </button>
                </div>
                <hr />
                <p className="connect-text">or connect with</p>
                <div className="social-login-container">
                    <button className="social-login google">
                        <i className="fab fa-google"></i> Continue with Google
                    </button>
                    <button className="social-login facebook">
                        <i className="fab fa-facebook"></i> Continue with Facebook
                    </button>
                </div>
                {activeButton === 'sign-in' && (
                    <div className="form-container">
                        <form>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}
                {activeButton === 'join' && (
                    <div className="form-container">
                        <form>
                            <input type="text" placeholder="Full Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomeScreen;
