import React from 'react';
import avatarDefault from '../assets/avatarDefault.svg';

const Avatar = ({ src, alt }) => {
    return (
        <div>
            {src ? (
                <img src={src} alt={alt} className="w-20 h-20 md:w-50 md:h-50 rounded-full border" />
            ) : (
                <img src={avatarDefault} alt="default avatar" className="w-20 h-20 md:w-50 md:h-50 rounded-full border" />
            )}
        </div>
    );
};

export default Avatar;
