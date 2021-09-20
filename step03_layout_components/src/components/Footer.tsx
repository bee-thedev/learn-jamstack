import React from 'react';


type FooterProps={
    socialmedia: string,
    address: string

}

export default ({socialmedia, address} : FooterProps) => {
    return (
        <div>
            <ul>
                <h1>{socialmedia}</h1>
                <p>{address}</p>
          <li>
            <a href="https://www.facebook.com/BeenyshSara/" target="_blank">
                FaceBook
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Codenator007" target="_blank">
                Twitter
            </a>
          </li>
        </ul>
        </div>
    );
}