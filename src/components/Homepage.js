import React from 'react';
import MainPhoto from './img/main_photo.png';
class Homepage extends React.Component{
    render() {
        return (
            <>
            <div className="homepage" id="home">
                <div className="row justify-content-center m-0">
                    <div className="col-md-5 order-md-2 photo">
                        <br/><br/>
                        <img src={MainPhoto} className="img-fluid"></img>
                    </div>
                    <div className="col-md-7 order-md-1">
                        <div className="text">
                            <h1>Hi, I am<br/>Usman Farooq</h1> <br/>
                            <p>I am a <h>software engineer</h> based in Lahore, Pakistan. My main area of interest is <h>web development</h> for last 4 years. I also love to solve problems and take part in competitive programming competitions. <br/> <br/>
                            I am currently studying <h>Bachelor of Computer Science</h> from Punjab University College of Information technology and expected to graduate in 2022.
                            I love to play <h>cricket</h> and create creative graphics work in my free time. <br/></p>
                            <a href="mailto:anovius10@gmail.com"><button><i class='bx bx-mail-send bx-md'></i></button></a>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
};

export default Homepage;