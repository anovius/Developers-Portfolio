import React from 'react';
import {Link} from 'react-scroll';

class Navbar extends React.Component {
    state = {
        isSidebar: false,
    }
    showHideSideBar = () => {
        const sidebar = this.state.isSidebar;
        this.setState({
          isSidebar: !sidebar
        });
    }
    render() {
        let sidebar = null;
        if(this.state.isSidebar){
            sidebar = (
                <div className = "sidebar">
                    <div className="close">
                        <i className='bx bx-x bx-md' onClick={this.showHideSideBar}></i>
                    </div>
                    <br/><br/><br/>
                    <Link to="skills" smooth={true} duration={200}><button onClick={this.showHideSideBar}><i className='bx bx-brain'></i>Skills</button> </Link> <br/>
                    <Link to="projects" smooth={true}><button onClick={this.showHideSideBar}><i className='bx bx-code-block'></i>Projects</button></Link> <br/>
                    <Link to="contact" smooth={true} duration={200}><button onClick={this.showHideSideBar}><i className='bx bxs-contact'></i>Contact</button> </Link> <br/>
                    <Link to="connect" smooth={true} duration={200}><button onClick={this.showHideSideBar}><i className='bx bx-user-plus'></i> Connect</button></Link> <br/>
                </div>
            );
        }
        return(
            <>
            <div className="navbar">
                <div className="container-fluid">
                    <a class="navbar-brand">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-terminal-fill" viewBox="0 0 16 16">
                        <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146z"/>
                        </svg>
                        &nbsp;Portfolio
                    </a>
                    <div className="d-flex">
                        <i className='bx bx-menu bx-sm' onClick={this.showHideSideBar}></i>
                    </div>
                </div>
            </div>
            <div>
                {sidebar}
            </div>
            </>
        )
    }
}
export default Navbar;