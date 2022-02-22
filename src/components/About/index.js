import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        She/Her. I have been in the hospitality industry for the last 12 years and have loved the fast-pace and problem sloving aspects. In my free time I love to travel, enjoy the outdoors, and practice yoga. I have chosen to be a coding student in order to better have a career and personal life that flow in conjuction with one another. Learning to code has been humbling, frustrating, ulitimately rewarding. I look forward to continue building in this medium. 
        </p>
      </div>
    </section>
  );
}

export default About;
