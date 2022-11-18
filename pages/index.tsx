/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { useMediaQuery } from '@mui/material';
import type { NextPage } from 'next';
import Typewriter from 'typewriter-effect';

import BodyWrapper from '../components/BodyWrapper';
import ContentLayout from '../components/ContentLayout';
import FeaturesSection from '../components/FeaturesSection';
import HeadSectionLayout from '../components/HeadSectionLayout';
import ImageLayout from '../components/ImageLayout';
import ListWithIconCard from '../components/ListWithIconCard';
import PrimaryButton from '../components/PrimaryButton';
import ProductsDisplay from '../components/ProductsDisplay';
import SectionLayout from '../components/SectionLayout';
import SubHeading from '../components/SubHeading';
import WhomCard from '../components/WhomCard';
import adly from '../public/assets/adly.svg';
import banner from '../public/assets/banner.svg';
import BlockChain from '../public/assets/BlockChain.svg';
import check from '../public/assets/check.svg';
import Crypto from '../public/assets/Crypto.svg';
import Dao from '../public/assets/Dao.svg';
import developerDaoReview from '../public/assets/developer_dao_review.svg';
import eurion from '../public/assets/eurion.svg';
import familyIcon from '../public/assets/familyIcon.svg';
import filecoinReview from '../public/assets/filecoin-review.svg';
import filverseVase from '../public/assets/fileVase.svg';
import fileverseWindow from '../public/assets/fileverseWindow.svg';
import global from '../public/assets/global.svg';
import gnosischain from '../public/assets/gnosischain.svg';
import illuani from '../public/assets/illuan.svg';
import michealAuroraReview from '../public/assets/micheal-aurora.svg';
import Nft from '../public/assets/Nft.svg';
import padLock from '../public/assets/padlock.svg';
import rajesh from '../public/assets/rajesh.svg';
import solo from '../public/assets/solo.svg';
import Web3 from '../public/assets/Web3.svg';

const Home: NextPage = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <BodyWrapper>
      <>
        <HeadSectionLayout>
          <>
            <div className="flex min-h-[85vh] justify-center p-4">
              <div
                className={` lg:w-[90%] ${
                  isMediaMax1025px && 'w-full'
                } flex flex-wrap items-center`}
              >
                <div className={`lg:w-[50%] ${isMediaMax1025px && 'w-full'}`}>
                  <div
                    className={`font-bold  lg:text-4xl ${
                      isMediaMax1025px &&
                      'text-2xl flex flex-col items-center justify-center'
                    } `}
                  >
                    Web3’s Simplest Way to
                    <Typewriter
                      options={{
                        strings: ['Share Files', 'Collaborate', 'Coordinate'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                  <p
                    className={`mt-4 ${
                      isMediaMax1025px ? 'text-center w-full' : 'w-[80%]'
                    }`}
                  >
                    On-chain people and communities deserve on-chain tools for
                    private communication and collaboration. We present to you
                    Fileverse Solo & Fileverse Portal!
                  </p>
                  <div
                    className={`mt-4  ${
                      isMediaMax1025px && 'flex justify-center'
                    } `}
                  >
                    <PrimaryButton title={'Learn More'} linkTo={'#product'} />
                  </div>
                </div>
                <div
                  className={`lg:w-[50%] ${
                    isMediaMax1025px && 'w-full'
                  } flex justify-center`}
                >
                  <img
                    className=""
                    src={fileverseWindow.src}
                    alt="fileverse-window"
                  />
                </div>
              </div>
            </div>
          </>
        </HeadSectionLayout>
        <HeadSectionLayout id="product" noFooter={true}>
          <>
            <div
              className={`flex mt-[4.5vh] lg:w-[90%] ${
                isMediaMax1025px && 'flex-wrap'
              } justify-center items-center lg:p-4`}
            >
              <ProductsDisplay
                productName={`Fileverse Solo`}
                CTAButtonLink={'https://beta.fileverse.io'}
                CTAButtonTitle={'Launch App'}
                displayImage={solo}
                firstDescription={'Private-first file sharing, simplified.'}
                secondDescription={'Share private files with or without wallet'}
                CTADescription={'Private. Decentralised. Encrypted.'}
              />
              {/* {!isMediaMax1025px && (
                <div className="h-full flex items-center justify-center">
                  <div className="relative w-[50px] h-[500px]">
                    <div className="line"></div>
                    <div className="text-center h-[12px] absolute left-0 right-0 top-[50%] mt-[-12px] z-20">
                      <div className="bg-yellow font-semibold">OR</div>
                    </div>
                  </div>
                </div>
              )} */}

              <ProductsDisplay
                background={'bg-white'}
                productName={`Fileverse Portal`}
                CTAButtonLink={'https://fileverse.on.fleek.co/'}
                firstDescription={
                  'Like Google Workspace, but on-chain, encrypted, and privacy-enchancing'
                }
                CTAButtonTitle={'Create Your Portal'}
                CTAbuttonDisabled={true}
                displayImage={banner}
                CTADescription={'Communicate. Collabrate. Coordinate.'}
              />
            </div>
          </>
        </HeadSectionLayout>
        <SectionLayout>
          <div className={`lg:flex`}>
            <ImageLayout>
              <img
                className="h-full"
                src={filverseVase.src}
                alt="fileverse-wallet-vase"
              />
            </ImageLayout>
            <ContentLayout>
              <div className="">
                <div className="flex w-full">
                  <h2
                    className={`font-bold  ${
                      isMediaMax1025px
                        ? 'text-2xl text-center w-full'
                        : 'text-3xl ml-12'
                    }`}
                  >
                    What you can expect
                  </h2>
                </div>
                <div className="w-full">
                  <ListWithIconCard
                    title="Decentralisation"
                    icon={check}
                    paragraph={
                      'Your files are kept on peer-to-peer storage networks and your interactions with peers are managed on-chain. Oh.. and you can also enable End-to-End encryption!'
                    }
                  />
                  <ListWithIconCard
                    title="Simplicity"
                    icon={padLock}
                    paragraph={
                      'Everything you need to move away from centralised apps, just a few clicks away. All from the comfort of your crypto wallet. All without cutting corners on privacy and security.'
                    }
                  />
                  <ListWithIconCard
                    title="Coordination"
                    icon={global}
                    paragraph={
                      'Blockchains are like community computers, enabling you to coordinate globally with people. Fileverse shows you how. Jump into the space of permissionless coordinating & collaboration.'
                    }
                  />
                  <div
                    className={`mt-8 lg:pl-12  ${
                      isMediaMax1025px && 'flex justify-center'
                    }`}
                  >
                    <PrimaryButton linkTo="/features" title="Learn More" />
                  </div>
                </div>
              </div>
            </ContentLayout>
          </div>
        </SectionLayout>
        <FeaturesSection />
        <div className="flex flex-col mt-8 justify-center ">
          <div className="">
            <div className="p-4">
              <SubHeading
                text={'For whom is Fileverse Solo and Filverse Portal?'}
              />
            </div>
            <div className="flex justify-center">
              <div className="w-[75%]">
                <div className=" flex pb-8 flex-wrap bg-yellow justify-center drop-shadow-lg rounded-md w-full">
                  <WhomCard
                    image={familyIcon}
                    title={'The Web3 Curious'}
                    description={`Web3 is not only about speculation & finance. Try just
                      sharing files peer-to-peer with no one snooping on and
                      selling your personal data.`}
                  />

                  <WhomCard
                    image={Dao}
                    title={'DAOs'}
                    description={`On-chain organisations deserve on-chain collaboration
                      tools and analytics. Fileverse Portal is built for you!`}
                  />

                  <WhomCard
                    image={Nft}
                    title={`Crypto Natives`}
                    description={`Think your wallet is just for buying and selling? Your
                      wallet is a powerful cryptography tool that unlocks new
                      forms of social coordination. Enter the Portal!`}
                  />

                  <WhomCard
                    image={Web3}
                    title={`Web3 Companies`}
                    description={`Start decentralising your collaboration and communication
                      stack. Enjoy intuitive Web3 tools to share content, chat,
                      live edit, etc, with your teams.`}
                  />

                  <WhomCard
                    image={Crypto}
                    title={`Content Creators`}
                    description={`You're not going to gate that Subscriber-only article via
                      user accounts and database entries are you? Token-gate it
                      & start creating on-chain analytics for your content.`}
                  />

                  <WhomCard
                    image={BlockChain}
                    title={'NFT Communities'}
                    description={`On-chain communities deserve on-chain collaboration tools
                      and analytics. Try Filverse Portal for a real
                      decentralised and on-chain experience.`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFE60033] w-[100vw] mt-12 p-4">
          <SubHeading text="Fileverse on Twitter" />
          <div className="mt-8">
            <div className="flex overflow-x-auto no-scrollbar">
              <img src={developerDaoReview.src} alt="tweet" />

              <img src={adly.src} alt="tweet" />
              <img src={illuani.src} alt="tweet" />
              <img src={filecoinReview.src} alt="tweet" />
              <img src={eurion.src} alt="tweet" />
              <img src={michealAuroraReview.src} alt="tweet" />
              <img src={rajesh.src} alt="tweet" />
              <img src={gnosischain.src} alt="tweet" />
            </div>
          </div>
        </div>
      </>
    </BodyWrapper>
  );
};

export default Home;
