import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { fadeIn } from '../utils/animations';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <Header />
      <motion.section initial="initial" animate="animate" variants={fadeIn}>
        <h1>Plan Your Perfect Sri Lankan Adventure</h1>
        <img src="/images/robot.png" alt="Robot" />
        <p>Your guide for amazing travel planning.</p>
      </motion.section>
      <Footer />
    </div>
  );
}
