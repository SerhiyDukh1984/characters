import Footer from 'components/Footer/Footer';
import s from './Home.module.css';

const Home = () => {
  return (
    <div className={s.a}>
      <section className={s.section}>
        <h1 className={s.title}>--- Hello ---</h1>
        <p className={s.text}>I hope I coped with the task</p>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
