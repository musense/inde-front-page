import useScrollToTop from "components/hook/useScrollToTop";
import React from "react";
import Carousel from "../index-sections/Carousel";

import IndexViewBlock from "components/IndexViewBlock/IndexViewBlock";
import styles from "./indexView.module.css";

const item0 = {
    src: '/public/img/index/image_1.png',
    altText: 'Lottery',
};
const item1 = {
    src: '/public/img/index/image_2.png',
    altText: 'Sports',
};
const item2 = {
    src: '/public/img/index/image_3.png',
    altText: 'Poker',
};
const item3 = {
    src: '/public/img/index/image_4.png',
    altText: 'Matka',
};

function IndexView() {
    useScrollToTop();

    return (
        <>
     
            <Carousel />
            <div className={styles['index-fixed-background']} />
            <IndexViewBlock
                image={item0}
                title={'Lottery'}
                article={`Lottery is a game that offers the possibility of transforming your life with a modest sum of money. It involves a basic guessing game where you can effortlessly trade in small amounts of your own cash for the chance to win substantial rewards! Take a shot at it and see if you can generate a life-altering miracle. Play Lotto and embrace the excitement!`}
            />
            <IndexViewBlock
                reverse
                image={item1}
                title={'Sports'}
                article={`Sports betting is an immensely popular activity in India, with cricket, football, hockey, volleyball, basketball, and badminton being the most commonly wagered-on sports. The excitement never stops as there is always another event to look forward to. In India, cricket is an integral part of daily life! The allure of sports betting lies in the opportunity ...`}
            />
            <IndexViewBlock
                image={item2}
                title={'Poker'}
                article={`Poker is widely regarded as the most popular card game in the world, offering players endless hours of entertainment. From Teen Patti and Rummy to Andar Bahar, Baccarat, Blackjack, and Texas Hold'em, online casinos offer a wide variety of poker games to cater to players' preferences. The game's simplicity lies in its straightforward combinations...`}
            />
              <IndexViewBlock
                reverse
                image={item3}
                title={'Matka'}
                article={`Matka is considered to be one of the most popular lotteries in India. It offers a range of gaming features, including Jodi, Sangam, and Patti, all of which have Open and Close options. Players can also choose from Big, Small, Odd, and Even options. For those who prefer a fast-paced game, High Speed Matka is available, with numbers drawn every 10 minutes.`}
            />
        </>

    );
}

export default IndexView;

