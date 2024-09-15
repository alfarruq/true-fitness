import './footer.css';
import FaFacebookF from '../../assets/FaFacebookF.png';
import FaInstagram from '../../assets/FaInstagram.png';
import FaYoutube  from '../../assets/FaYoutube.png';

const Footer = () => {
  return (
    <footer className="ya-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>КАТАЛОГ ТОВАРОВ</h3>
          <ul>
            <li>КАРДИО ТРЕНАЖЕРЫ</li>
            <li>COMPOSITE STRENGTH</li>
            <li>TRUE STRETCH</li>
            <li>САЙКЛИНГ</li>
            <li>ГРУППОВЫЕ ТРЕНИРОВКИ</li>
            <li>СИЛОВЫЕ ТРЕНАЖЕРЫ</li>
            <li>КОНСОЛИ</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>ИНФОРМАЦИЯ</h3>
          <ul>
            <li>О БРЕНДЕ</li>
            <li>ПРЕИМУЩЕСТВА</li>
            <li>ОТКРЫТЬ КЛУБ</li>
            <li>ПРОДУКЦИЯ</li>
            <li>КОНТАКТЫ</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>КОНТАКТЫ</h3>
          <ul>
            <li>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</li>
            <li>КОНТАКТЫ</li>
          </ul>
        </div>

        <div className="footer-section subscribe">
          <h3>ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</h3>
          <div className="subscribe-form">
            <input type="email" placeholder="E-MAIL" />
            <button type="submit">
              <span className="arrow">➔</span>
            </button>
          </div>
          <div className="social-icons">
          <img className='icon' src={FaFacebookF} alt="" />
          <img className='icon' src={FaInstagram} alt="" />
            <img className='icon' src={FaYoutube} alt="" />
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
