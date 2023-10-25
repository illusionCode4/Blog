import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/joey.JPG'
          alt='An image showing Max'
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <h1>hi,i'm Joey</h1>
      <p>I blog about web development</p>
    </section>
  );
}

export default Hero;
