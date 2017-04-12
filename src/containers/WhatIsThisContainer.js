import { h } from 'preact';
import styles from 'styles';

const WhatIsThis = () => (
  <div>
    <blockquote className={styles['blockquote-big']}>
      {`
        We all have the exact same 1,440 minutes per day. You don't get more or less than
        Elon Musk, Bill Gates, Mark Zuckerberg or whoever inspire you. Use them wisely.
      `}
      <sup><small><a href="#1440">[1]</a></small></sup>
    </blockquote>
    <h1>What is this?</h1>
    <p>
      This is a simple web page that shows you the number of minutes remaining in the day
      in a block mode (and with a giant number in the center), each block represents one
      of the 1,440 minutes that the day has and it goes empty every second.
    </p>
    <h1>Why do I want this?</h1>
    <p>
      {`
        This is not about what you want but about what you can realize by watching every minute getting empty.
      `}
    </p>
    <h1>What do you mean?</h1>
    <p>
      {`
        Many times you think you don't have enough time to achieve your dreams, to fulfill
        your goals or to do that hobby that you like so much, but many times you dedicate time
        to meaningless activities that do not contribute anything to improve on you.
        Time runs, in fact as you find yourself reading this text, one of the blocks is
        about to get empty and you will have one minute less.
      `}
    </p>
    <h1>One minute? But that is only 0.0694% of the minutes of the day</h1>
    <p>
      One of the remaining and available minutes of the day.
    </p>
    <h1>Remaining? Available?</h1>
    <p>
      Yes, remaining and available minutes.
    </p>
    <p>
      Since the beginning of this day a plenty amount of minutes has passed and only remain
      a few of which you have available some of them only to investing in what you have
      always wanted. 😄
    </p>
    <h1>{'I\'m not following you'}</h1>
    <p>
      Well, there are activities that you probably have to do like sleep, eat, getting washed
      and dressed, work or getting in the bus. All this takes you most of the remaining minutes
      of the day, but you can invest those few minutes that are available in some activity
      that improves something in you.
    </p>
    <h1>But I barely have 300 minutes available a day</h1>
    <p>
      Minutes you can use to improve yourself.
    </p>
    <p>
      Going out to jog only takes 20 to 30 minutes,
      if you are a good reader you can easily read a page of a book every minute,
      do you have an idea of a project and do not know where to start? Invest five minutes
      to think and develop the idea. In fact 300 minutes is approximately 20% of the day.
      Investing 20% of your time to improve yourself does not sound as a bad idea,
      think well in what you invest every minute of the day and use them wisely.
    </p>
    <blockquote className={styles['blockquote-big']}>
      The key is in not spending time, but in investing it.
      <p>Stephen R. Covey</p>
    </blockquote>

    <h4>Notes</h4>
    <small id="1440">[1] This text is based on the one that appears <a href="https://medium.com/@chris_behnke/embrace-your-1440-e015f721a27a" target="_blank" rel="noopener noreferrer">here</a>.</small>
  </div>
);

export default WhatIsThis;
