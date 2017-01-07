import React, { Component } from 'react';
let currentPage = "about";

class About extends Component {
  render() {
    return (
      <div id={currentPage} className="main-content">
        <h2 className="page-title">{this.props.route.title}</h2>
          <div id="about-image"></div>
          <div id="about-content">
            <div id="bio">
              <h3>Biography</h3>
              <p>In an era where rappers live fabricated lifestyles to appease
                those who are far more concerned with swag, West Palm Beach rapper
                ShayJToday, is a breath of fresh air. Beginning his journey in hip-hop
                at the young age of 11, ShayJToday first found his love for rap music.
                During the early stages of his artistic development, ShayJToday was
                heavily influenced by southern rap, taking notes from notable rappers
                from the south. It was not until ShayJToday reached the age
                of 17 that he started to take his music seriously. From there met his
                mentor/producer Meni Faces through a childhood friend. Meni Faces began
                to expand Shay J’s mind beyond the south and introduced him to the music
                of Pharcyde, J Dilla, Slum Village including other artists from different
                regions which became the grounds to his style.
              </p>
              <p>
                Now with a few projects under his belt, and ShayJToday has shared
                stages with the likes of Common, Kid Cudi, and Inspectah Deck of the
                Wu Tang-Clan. With many years ahead of him, ShayJToday hopes to be one
                of hip-hop’s elite artists.
              </p>
            </div>
            <div id="valyou-promo">
              <h3>val&#123;you&#125;. - Coming 2017</h3>
              <iframe
                src="https://www.youtube.com/embed/msi-viOAK50"
                frameBorder="0"
                allowFullScreen>
              </iframe>
            </div>
          </div>
      </div>
    );
  }
}

export default About;
