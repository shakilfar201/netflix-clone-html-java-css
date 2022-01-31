import React from 'react';
import './Featured.css';
import backImg from '../../images/pexels-canva-studio-3277802.jpg'
import matrix from '../../images/168519.jpg'
import { Info, PlayArrow } from '@material-ui/icons';

const Featured = () => {
    return (
        <div className='featured'>
            <img width="100%" src={backImg} alt="" />
            <div className="info">
                <img width="60%" src={matrix} alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident alias delectus autem accusamus itaque similique at voluptatibus dolorem quos illum beatae iste et, quasi totam!
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>play</span>
                    </button>
                    <button className="more">
                        <Info />
                        <span>info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;