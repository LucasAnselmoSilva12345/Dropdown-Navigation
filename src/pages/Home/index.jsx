import React from 'react';
import Header from '../../components/Header';

import imageHeroMobile from '../../assets/images/image-hero-mobile.png';

import imageClientAudioPhile from '../../assets/images/client-audiophile.svg';
import imageClientDatabiz from '../../assets/images/client-databiz.svg';
import imageClientMaker from '../../assets/images/client-maker.svg';
import imageClientMeet from '../../assets/images/client-meet.svg';

import {
  HomeContainer,
  HomeContent,
  HomeTitle,
  HomeDescription,
  HomeButton,
  HomeImageContainer,
  HomeImageWrapper,
  HomeImage,
} from './style.js';

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <HomeContent>
          <HomeTitle>Make remote work</HomeTitle>
          <HomeDescription>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </HomeDescription>
          <HomeButton>Learn more</HomeButton>

          <HomeImageContainer>
            <HomeImageWrapper src={imageClientDatabiz} />
            <HomeImageWrapper src={imageClientAudioPhile} />
            <HomeImageWrapper src={imageClientMaker} />
            <HomeImageWrapper src={imageClientMeet} />
          </HomeImageContainer>
        </HomeContent>
        <section>
          <HomeImage src={imageHeroMobile} alt="" />
        </section>
      </HomeContainer>
    </>
  );
}
