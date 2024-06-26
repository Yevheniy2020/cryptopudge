'use client'
import Head from 'next/head'
import Benefits from '../blocks/Benefits';
import Break from '../blocks/Break';
import Epilogue from '../blocks/Epilogue';
import Features from '../blocks/Features';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Hero from '../blocks/Hero';
import Highlights from '../blocks/Highlights';
import Notice from '../components/Notice';
import * as Global from '../global/global.json';

const LOREM = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book.
`;

export default function Home() {
  return (
    <div style={{overflow: 'hidden'}}>
      <Head>
        <title>{Global.product}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Notice id="subscribed">Thank you for subscribing</Notice>
        <div data-aos="fade-down"  data-aos-delay="200">
      <Header  id="top" title={Global.product} />
        </div>
      <main>
          <Hero
          title="The first pudge meme on blockchain TON and the cryptocurrence!!!"
          subtitle="This pudge wiil hook your TON and make you rich"
          illustration="/pudge-transparent.gif"
        />

          <Benefits
          background="alternate"
          title="Pudge got tired of existing in Dota2, so he became CRYPTO PUDGE to conquer the TON ecosystem!"
          subtitle="A brief history of our CRYPTO PUDGE "
          benefits={[
            {illustration:'/logo.png', title:'Pudge turned to crypto enthusiasts to send him to TON ', text:''},
            {illustration:'/main.png', title:'Pudge turns into CRYPTO PUDGE', text:''},
            {illustration:'/pud-walk.gif', title:'Pudge conquers TON and flies TO THE MOON', text:''},
          ]}
        />
        <div  data-aos="fade-up"  data-aos-delay="200" >
        <Break
          title=""
          subtitle=""
          illustration=""
          action=""
        />
        </div>

        <Highlights
          title="Roadmap CRYPTO PUDGE"
          subtitle="(he dismembered pudge)"
          highlights={[
            {illustration:'/logo.png', title:'Launch $cryptopudge ', text:''},
            {illustration:'/main.png', title:'MEX (listing in Coinmarketcap and coingecko)', text:''},
              {illustration:'/pud-han.gif', title:'CEX', text:''},
          ]}
        />

          <div data-aos="fade-up"  data-aos-delay="200" >
              <div style={{maxWidth: '1000px' ,width: '100%', margin: '0 auto', height: '600px', paddingBottom:'30px'}}>
              <iframe height="100%" width="100%" id="geckoterminal-embed" title="GeckoTerminal Embed"
                      src="https://www.geckoterminal.com/ru/ton/pools/EQBF2bOuBURU4v1QXZSluYDZCxSO4ioB25WyBS5XmTbZ8jc8?embed=1&info=0&swaps=1"
                      frameBorder="0" allow="clipboard-write" allowFullScreen></iframe>
              </div>
          </div>


        <Features
          background="alternate"
          title="How Crypto Pudge will hook its Customers"
          subtitle=""
          features={[
            {illustration:'/last/airdrop.jpeg', title:'Bonus campaign(airdrops)', text:''},
            {illustration:'/last/nft.png', title:'NFT-coolection', text:''},
            {illustration:'/last/game.jpeg', title:'Game', text:''},
            {illustration:'/last/money.jpeg', title:'Money draws between holders', text:''},
          ]}
        />

        <Epilogue
          title="Pudge's victory in the TON race is inevitabl"
          subtitle="You have to either be with him or he will eat you"
          illustration="/pud-dance.gif"

        />
      </main>

      <Footer
        title={Global.product}
      />
    </div>
  )
}
