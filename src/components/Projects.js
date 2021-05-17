import React from 'react';

class Projects extends React.Component {
    render() {
        return(
            <>
            <div className="section" id="projects">
                <center>
                    <h1>
                        <i className="bx bx-code-block"></i>
                        &nbsp;Projects
                        <hr/>
                    </h1>
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <h3>Diary Social Media</h3>
                            <hr/>
                            <p>It is simple social media where user can create account, follow un-follow others, and create their dairy public or private.</p>
                            <p><h><b>Technologies : </b></h>HTML, CSS, Bootstrap, JS, PHP and MySql</p>
                            <a href="https://github.com/anovius/Diary-Social-Media" target="_blank">Source Code</a>
                        </div>
                        <div className="col-md-3">
                            <h3>Real time Chat</h3>
                            <hr/>
                            <p>It is chat application where user creates or login his account, search his friends and chat with them realtime.</p>
                            <p><h><b>Technologies : </b></h>HTML, CSS, Bootstrap, JS, PHP and MySql</p>
                            <a href="https://github.com/anovius/real-time-chat-PHP" target="_blank">Source Code</a>
                        </div>
                        <div className="col-md-3">
                            <h3>Chess</h3>
                            <hr/>
                            <p>Two player GUI based Chess game a made as OOP project in University. All moves with proper guide indicator was implemented for each piece.</p>
                            <p><h><b>Technologies : </b></h>C#, .Net Framework</p>
                            <a href="https://github.com/anovius/" target="_blank">Source Code</a>
                        </div>
                        <div className="col-md-3">
                            <h3>School Management System</h3>
                            <hr/>
                            <p>Web based system where you can maintain students, teacher, fee and attendance records.</p>
                            <p><h><b>Technologies : </b></h>HTML, CSS, Bootstrap, JS, PHP and MySql</p>
                            <a href="https://github.com/anovius/SMS-PHP" target="_blank">Source Code</a>
                        </div>
                        <div className="col-md-3">
                            <h3>Pixbrainy</h3>
                            <hr/>
                            <p>Web project for Pixbraiy.com. Simple responsive website made up in Reacts Js. Front-end project where company info placed</p>
                            <p><h><b>Technologies : </b></h>React JS, Bootstrap, JS, PHP and MySql</p>
                            <a href="https://pixbrainy.com/" target="_blank">Visit Site</a>
                        </div>
                        <div className="col-md-3">
                            <h3>BrilBrands</h3>
                            <hr/>
                            <p>Web project for BrilBrands.com. Simple responsive for a digital marketing company. Users can contact to the owners</p>
                            <p><h><b>Technologies : </b></h>HTML, CSS, Bootstrap, JS, PHP and MySql</p>
                            <a href="https://brilbrands.com/" target="_blank">Visit Site</a>
                        </div>
                        <div className="col-md-3">
                            <h3>Blog Website</h3>
                            <hr/>
                            <p>Blog website where user create account and post, edit, update and delete blogs. Administration was also implemented</p>
                            <p><h><b>Technologies : </b></h>HTML, CSS, Bootstrap, JS, Asp .Net</p>
                            <a href="https://github.com/anovius/Blog-MVC-Dotnet" target="_blank">Source Code</a>
                        </div>
                        <div className="col-md-3">
                            <h3>Data Structures</h3>
                            <hr/>
                            <p>Famous data structures coded in c++. For example Stack, Queue, Linked List, Polynomial, Stack Template</p>
                            <p><br/><h><b>Technologies : </b></h>C++</p>
                            <a href="https://github.com/anovius/Blog-MVC-Dotnet" target="_blank">Source Code</a>
                        </div>
                        <div className="col-md-3">
                            <h3>Portfolio</h3>
                            <hr/>
                            <p>My responsive portfolio to show case my skills and projects</p>
                            <p><br/><br/><br/><h><b>Technologies : </b></h>React Js, Bootstrap</p>
                            <a href="#">Visit Site</a>
                        </div>
                    </div>
                </center>
            </div>
            </>
        )
    }
}

export default Projects;