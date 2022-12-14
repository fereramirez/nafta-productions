import { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/nav";

import styles from "../styles/work.module.scss";

const Work: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NAFTA Works</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <article className={styles.project}>
          <h3 className={styles.title}>SIESTA</h3>
          <video autoPlay loop muted poster="/siesta-poster.png">
            <source
              src={
                "https://res.cloudinary.com/fenkratos/video/upload/v1667175694/Nafta/siesta_tocidv.mp4"
              }
              type="video/mp4"
            />
          </video>
        </article>

        <article className={styles.project}>
          <h3 className={styles.title}>POSEÍDO</h3>
          <video autoPlay loop muted poster="/poseido-poster.png">
            <source
              src={
                "https://res.cloudinary.com/fenkratos/video/upload/v1667175693/Nafta/poseido_lgkxu8.mp4"
              }
              type="video/mp4"
            />
          </video>
        </article>

        <article className={styles.project}>
          <h3 className={styles.title}>FRODO</h3>
          <video autoPlay loop muted poster="/frodo-poster.png">
            <source
              src={
                "https://res.cloudinary.com/fenkratos/video/upload/v1667175694/Nafta/frodo_rbgqzf.mp4"
              }
              type="video/mp4"
            />
          </video>
        </article>

        <article className={styles.project}>
          <h3 className={styles.title}>TRAP</h3>
          <video autoPlay loop muted poster="/trap-poster.png">
            <source
              src={
                "https://res.cloudinary.com/fenkratos/video/upload/v1667175692/Nafta/trap_zilb8b.mp4"
              }
              type="video/mp4"
            />
          </video>
        </article>

        <article className={styles.project}>
          <h3 className={styles.title}>MILI</h3>
          <video autoPlay loop muted poster="/mili-poster.png">
            <source
              src={
                "https://res.cloudinary.com/fenkratos/video/upload/v1667175692/Nafta/mili_nxdnzx.mp4"
              }
              type="video/mp4"
            />
          </video>
        </article>

        <article className={styles.project}>
          <h3 className={styles.title}>DUELE</h3>
          <video autoPlay loop muted poster="/duele-poster.png">
            <source
              src={
                "https://res.cloudinary.com/fenkratos/video/upload/v1667175692/Nafta/duele_vb8rtk.mp4"
              }
              type="video/mp4"
            />
          </video>
        </article>

        <article className={styles.project}>
          <h3 className={styles.title}>PARTICLES</h3>
          <video autoPlay loop muted poster="/particles-poster.png">
            <source
              src={
                "https://res.cloudinary.com/fenkratos/video/upload/v1667175692/Nafta/particules_rd1nlj.mp4"
              }
              type="video/mp4"
            />
          </video>
        </article>

        <article className={styles.project}>
          <h3 className={styles.title}>MUSIC</h3>
          <video autoPlay loop muted poster="/music-poster.png">
            <source
              src={
                "https://res.cloudinary.com/fenkratos/video/upload/v1667175692/Nafta/music_q19szu.mp4"
              }
              type="video/mp4"
            />
          </video>
        </article>

        <article className={styles.project}>
          <h3 className={styles.title}>MOMIA</h3>
          <video autoPlay loop muted poster="/momia-poster.png">
            <source
              src={
                "https://res.cloudinary.com/fenkratos/video/upload/v1667175692/Nafta/momia_cufgzf.mp4"
              }
              type="video/mp4"
            />
          </video>
        </article>

        <article className={styles.project}>
          <h3 className={styles.title}>ESTRACTOR</h3>
          <video autoPlay loop muted poster="/estractor-poster.png">
            <source
              src={
                "https://res.cloudinary.com/fenkratos/video/upload/v1667175693/Nafta/estractor_qkzl1s.mp4"
              }
              type="video/mp4"
            />
          </video>
        </article>
      </main>
    </div>
  );
};

export default Work;
