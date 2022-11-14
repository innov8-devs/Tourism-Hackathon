/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import Image from 'next/image';

// import Button from '../components/Button';
import Sub from '../components/Home/Sub';
import styles from '../styles/aboutStyles.module.css';

import { BodyWrapper, MainWrapper, Typography, Wrapper } from './about-styles';

const About = () => {
  return (
    <>
      <Wrapper>
        <MainWrapper>
          <BodyWrapper>
            <div className={styles.body1}>
              <h1 className={styles.bodyheader}>Who We Are</h1>
            </div>

            <div style={{ padding: '0 9%' }}>
              <Typography abnormal>
                At HighTable, we’re committed to bridging the gap between consumers and hospitality businesses across
                Africa.
                <br />
                We’re combining the warm and personal aspects of community engagement with the convenience and
                scalability of tech to
                <br /> create an ecosystem that produces and sustains high-value solutions catered
                <b />
                to moving the hospitality and tourism industries forward.
                <br />
                Whether you’re looking for new dining experiences, attractions, nightlife, activities, adventures,
                lodging, or people to connect with your journey starts here.
              </Typography>
            </div>

            <div className={styles.Mission}>
              <div className={styles.column2}>
                <div className={styles.header2}>
                  <h1 className={styles.headermission}>Our Mission</h1>
                </div>
                <div className={styles.body8}>
                  <p className={styles.Typo2}>
                    Our mission is to transform hospitality, tourism, and entertainment experiences across Africa using
                    disruptive technology, innovative minds, and community engagement.
                  </p>
                </div>
              </div>
              <img src="../About/Mission.png" alt="mission" className={styles.img1} />
            </div>

            <div className={styles.Vision}>
              <div className={styles.row3}>
                <div className={styles.column3}>
                  <div className={styles.body10}>
                    <h1 className={styles.header3}>Our Vision</h1>
                  </div>

                  <div className={styles.body8}>
                    <p className={styles.Typo3}>
                      We see HighTable being the leading platform connecting consumers to businesses using tech
                      solutions; In doing so, we aim to nurture organic and fruitful relationships between consumers,
                      business owners and their communities.
                    </p>
                  </div>
                </div>
                <div className={styles.imgvision}>
                  <img src="../About/vision.png" alt="vision" className={styles.img2} />
                </div>
              </div>
            </div>

            {/* Ourr Values */}
            <div className={styles.valuessection}>
              <div className={styles.body2}>
                <h1 className={styles.valuesheader}>Our Values</h1>
              </div>

              <div className={styles.container}>
                <div className={styles.valuescontainer}>
                  <img src="../About/collaboration.png" alt="vision" className={styles.easyimg} />
                  <h2 className={styles.easy}>Collaboration</h2>
                  <p className={styles.paragraph1}>
                    Together,we go further. Our collective talent creativity and experiences enable us achieve greatly.
                  </p>
                </div>
                <div className={styles.valuescontainer}>
                  <img src="../About/passion.png" alt="vision" className={styles.satisfactionimg} />
                  <h2 className={styles.satisfaction}>Passion</h2>
                  <p className={styles.paragraph2}>
                    The passion for the solutions we build and the communities we serve inspires new ideas and
                    perpetuates excellence.
                  </p>
                </div>
                <div className={styles.valuescontainer}>
                  <img src="../About/integrity.png" alt="support" className={styles.supportimg} />
                  <h2 className={styles.support}> Integrity </h2>
                  <p className={styles.integrityparagraph}>
                    Integrity is the backbone of trust therefore, we practice honesty, transparency, and fairness daily.
                  </p>
                </div>
                <div className={styles.valuescontainer}>
                  <img src="../About/innovation.png" alt="support" className={styles.supportimg} />
                  <h2 className={styles.support}> Innovation </h2>
                  <p className={styles.paragraph2}>
                    Fueled by our passion, we actively seek new and better solutions that exceed expectations and
                    deliver value.
                  </p>
                </div>
                <div className={styles.valuescontainer}>
                  <img src="../About/impact.png" alt="support" className={styles.supportimg} />
                  <h2 className={styles.support}>Impact</h2>
                  <p className={styles.impactparagraph}>
                    We strive to effect positive change and experiences for our colleagues, customers, and community.
                  </p>
                </div>
              </div>
              {/* <div className={styles.container2}>
                <div className={styles.valuescontainer2}>
                  <img src="../About/innovation.png" alt="support" className={styles.supportimg} />
                  <h2 className={styles.support}> Innovation </h2>
                  <p className={styles.paragraph2}>
                    Fueled by our passion, we actively seek new and better solutions that exceed expectations and
                    deliver value.
                  </p>
                </div>
                <div className={styles.valuescontainer2}>
                  <img src="../About/impact.png" alt="support" className={styles.supportimg} />
                  <h2 className={styles.support}>Impact</h2>
                  <p className={styles.impactparagraph}>
                    We strive to effect positive change and experiences for our colleagues, customers, and community.
                  </p>
                </div>
              </div> */}
            </div>
            {/* End of our Values */}

            <div className={styles.section4}>
              <div className={styles.body3}>
                <h1 className={styles.header4}>Why Us</h1>
              </div>

              <div className={styles.container}>
                <div className={styles.column1}>
                  <img src="../About/easy.png" alt="vision" className={styles.easyimg} />
                  <h2 className={styles.easy}>Easy to use</h2>
                  <p className={styles.paragraph3}>
                    Why choose when you can have both? Our platform offers you the opportunity to discover a variety of
                    businesses across Africa.
                  </p>
                </div>
                <div className={styles.column1}>
                  <img src="../About/star.png" alt="vision" className={styles.satisfactionimg} />
                  <h2 className={styles.satisfaction}>5-Star Satisfaction</h2>
                  <p className={styles.paragraph3}>
                    We have powerful solutions, but simple designs that wont confuse you. Perform various functions and
                    transactions in just a few clicks.
                  </p>
                </div>
                <div className={styles.column1}>
                  <img src="../About/support.png" alt="support" className={styles.supportimg} />
                  <h2 className={styles.support}> 24/7 Support </h2>
                  <p className={styles.paragraph3}>
                    {' '}
                    Need help with something? No worries, we are always here to help! Send us an email or submit a
                    ticket and we guide you through any issues you may have.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.section5}>
              <div className={styles.body5}>
                <h1 className={styles.bodyheader2}>How Hightable Works</h1>
              </div>

              <Typography className={styles.Typo5} center>
                Click on the video below to show you the Hightable side of life
              </Typography>
              <div className={styles.nestedimages}>
                <img src="../About/howhightableworks.png" alt="vision" className={styles.hightablework} />
                <img src="../About/playerbutton.png" alt="vision" className={styles.playbutton} />

                <div className={styles.thirdbutton}>
                  <img src="../About/player.png" alt="vision" className={styles.player} />
                </div>
              </div>
            </div>
            <div className={styles.section6}>
              <div className={styles.body4}>
                <h1 className={styles.usersheading}>What our users are saying </h1>
              </div>
              <Carousel animationHandler={'slide'} autoPlay interval={2000} infiniteLoop>
                <div className={styles.recommendationContainer}>
                  <div className={styles.hyphy1}>
                    <img src="../About/hyphen1.png" alt="hyp" className={styles.hyphen1} />
                  </div>
                  <div className={styles.hyphy2}>
                    <img src="../About/hyphen2.png" alt="hyp" className={styles.hyphen2} />
                  </div>
                  <Typography className={styles.Typo6} center>
                    The app is user friendly, and automatically syncs my location making it easier to discover amazing
                    spots and restaurants near me
                    <div className={styles.Avatar}>
                      <img src="/images/ridwan.jpg" alt="hyp" className={styles.imgavatar} />
                      <div className={styles.body7}>
                        <text className={styles.ada}>Paul Lawal</text>
                      </div>
                    </div>
                  </Typography>
                </div>
                <div className={styles.recommendationContainer}>
                  <div className={styles.hyphy1}>
                    <img src="../About/hyphen1.png" alt="hyp" className={styles.hyphen1} />
                  </div>
                  <div className={styles.hyphy2}>
                    <img src="../About/hyphen2.png" alt="hyp" className={styles.hyphen2} />
                  </div>
                  <Typography className={styles.Typo6} center>
                    HighTable is simply the best. It’s amazing how you can easily find a community of people who love to
                    do the same thing as you
                    <div className={styles.Avatar}>
                      <img src="/images/charles.jpg" alt="hyp" className={styles.imgavatar} />
                      <div className={styles.body7}>
                        <text className={styles.ada}>Charles Agbaje</text>
                      </div>
                    </div>
                  </Typography>
                </div>
                <div className={styles.recommendationContainer}>
                  <div className={styles.hyphy1}>
                    <img src="../About/hyphen1.png" alt="hyp" className={styles.hyphen1} />
                  </div>
                  <div className={styles.hyphy2}>
                    <img src="../About/hyphen2.png" alt="hyp" className={styles.hyphen2} />
                  </div>
                  <Typography className={styles.Typo6} center>
                    User interface is fantastic, mobile friendly, and payments are swift and accessible. I can&apos;t
                    wait to see what other fantastic things highTable has in store for us
                    <div className={styles.Avatar}>
                      <img src="/images/ejiro.jpg" alt="hyp" className={styles.imgavatar} />
                      <div className={styles.body7}>
                        <text className={styles.ada}>Ejiro Kakada</text>
                      </div>
                    </div>
                  </Typography>
                </div>
                <div className={styles.recommendationContainer}>
                  <div className={styles.hyphy1}>
                    <img src="../About/hyphen1.png" alt="hyp" className={styles.hyphen1} />
                  </div>
                  <div className={styles.hyphy2}>
                    <img src="../About/hyphen2.png" alt="hyp" className={styles.hyphen2} />
                  </div>
                  <Typography className={styles.Typo6} center>
                    I literally just discovered one of the biggest concerts coming up this month, and I was able to pay
                    an early bird ticket! Please continue to upload events ahead of others!
                    <div className={styles.Avatar}>
                      <img src="/images/emmanuella.jpg" alt="hyp" className={styles.imgavatar} />
                      <div className={styles.body7}>
                        <text className={styles.ada}>Emmanuella Ebere</text>
                      </div>
                    </div>
                  </Typography>
                </div>
                <div className={styles.recommendationContainer}>
                  <div className={styles.hyphy1}>
                    <img src="../About/hyphen1.png" alt="hyp" className={styles.hyphen1} />
                  </div>
                  <div className={styles.hyphy2}>
                    <img src="../About/hyphen2.png" alt="hyp" className={styles.hyphen2} />
                  </div>
                  <Typography className={styles.Typo6} center>
                    HighTable has helped me to select the best restaurants to cool off. Now I can see the ratings and
                    menu of several restaurants, and decide if I want to go there or not
                    <div className={styles.Avatar}>
                      <img src="/images/dora.jpg" alt="hyp" className={styles.imgavatar} />
                      <div className={styles.body7}>
                        <text className={styles.ada}>Dora Nnaji</text>
                      </div>
                    </div>
                  </Typography>
                </div>
                <div className={styles.recommendationContainer}>
                  <div className={styles.hyphy1}>
                    <img src="../About/hyphen1.png" alt="hyp" className={styles.hyphen1} />
                  </div>
                  <div className={styles.hyphy2}>
                    <img src="../About/hyphen2.png" alt="hyp" className={styles.hyphen2} />
                  </div>
                  <Typography className={styles.Typo6} center>
                    What you see is what you get! HighTable has one of the most honest restaurant reviews and ratings
                    I&apos;ve ever seen
                    <div className={styles.Avatar}>
                      <img src="/images/lulu.jpg" alt="hyp" className={styles.imgavatar} />
                      <div className={styles.body7}>
                        <text className={styles.ada}>Lulu Ugo</text>
                      </div>
                    </div>
                  </Typography>
                </div>
              </Carousel>

              <Sub />
            </div>
          </BodyWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  );
};

export default About;
