import React from 'react';

import Link from 'next/link';
import { BiChevronsRight } from 'react-icons/bi';

import {
  BodyHeader,
  BodyWrapper,
  Hero,
  HeroImage,
  InnerWrapper,
  MainWrapper,
  MobileContentNav,
  More,
  Right,
  SubHeader,
  Typography,
  Wrapper,
} from './content-styles';

const Content = () => {
  return (
    <>
      <Hero>
        <HeroImage src="/termImg.png" />
      </Hero>
      <Wrapper>
        {/* <Nav /> */}
        <MainWrapper>
          <MobileContentNav>
            <p>
              <a href="#ourTeam">Our team</a>
            </p>
            <BiChevronsRight />
            <p>
              <a href="#legalSupport">Legal support</a>
            </p>
            <BiChevronsRight />
            <p>
              <a href="#more"> More about Hightable</a>
            </p>
          </MobileContentNav>
          <BodyHeader>HighTable&apos;s content integrity</BodyHeader>
          <InnerWrapper>
            <BodyWrapper>
              <SubHeader id="ourTeam">Our team</SubHeader>
              <Typography>
                &quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam,eaque ipsa quae&quot;
                <br />
                <br /> ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem. Ut enim ad minima
                <br />
                <br /> veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain
                to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you
                a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
                is pleasure, but because those who do not know how to pursue pleasure rationally <br />
                <br />
                encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or
                desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in
                which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever one
                who avoids a pain that produces no resultant pleasure? <br />
                <br /> <SubHeader id="legalSupport">Legal support</SubHeader>
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                <br />
                <br /> veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain
                to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you
                a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
                is pleasure, but because those who do not know how to pursue pleasure rationally <br />
                <br />
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how
                all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete
                account of the system, and expound the actual teachings of the great explorer of the truth, the
                master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                pleasure, but because those who do not know how to pursue pleasure rationally <br />
                <br />
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how
                all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete
                account of the system, and expound the actual teachings of the great explorer of the truth, the
                master-builder of
                <br /> <br />
                <SubHeader id="more">More about Hightable</SubHeader>
                human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but
                because those who do not know how to pursue pleasure rationally
              </Typography>
              <More>
                <Link href="#">
                  <p>https://loremipsum.com</p>
                </Link>
                <Link href="#">
                  <p>https://loremipsum.com</p>
                </Link>
                <Link href="#">
                  <p>https://loremipsum.com</p>
                </Link>
              </More>
            </BodyWrapper>
            <Right>
              <p>
                <a href="#ourTeam">Our team</a>
              </p>
              <p>
                <a href="#legalSupport">Legal support</a>
              </p>
              <p>
                <a href="#more"> More about Hightable</a>
              </p>
            </Right>
          </InnerWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  );
};

export default Content;
