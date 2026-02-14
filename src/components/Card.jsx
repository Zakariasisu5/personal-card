import React from 'react';
import './Card.css';
import profileImage from '../assets/profile2.jpg';
import { FaGithub, FaLinkedin, FaTwitter, FaReact } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiTypescript } from 'react-icons/si';

// Card component to display developer profile information

function Card(){
    return (
        <div className="dev-card">
            <img src={profileImage} alt="Profile" className="dev-avatar" />
            <div className="dev-info">
                <h2 className="dev-name">Zakaria Sisu</h2>
                <p className="dev-bio">Frontend developer building accessible, responsive UIs. Passionate about React and web performance.</p>
                <ul className="dev-skills">
                    <li className="dev-skill"><FaReact className="skill-icon"/> React</li>
                    <li className="dev-skill"><SiJavascript className="skill-icon"/> JavaScript</li>
                    <li className="dev-skill"><SiCss3 className="skill-icon"/> CSS</li>
                    <li className="dev-skill"><SiTypescript className="skill-icon"/> TypeScript</li>
                    <li className="dev-skill"><span className="skill-icon">📱</span> Responsive Design</li>
                </ul>

                <div className="dev-social">
                    <a href="https://github.com/Zakariasisu5" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/zakaria" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/zakaria" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;