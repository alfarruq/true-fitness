import "./footer.css";
import facebook from "../../assets/facebook.png";  
import instagram from "../../assets/instagram.png";  
import youtube from "../../assets/youtube.png";  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Каталог Товаров</h4>
          <ul>
            <li>Кардио тренажёры</li>
            <li>Composite Strength</li>
            <li>True Stretch</li>
            <li>Сайклинг</li>
            <li>Групповые тренировки</li>
            <li>Силовые тренажёры</li>
            <li>Консоли</li>
          </ul>
          <p>© TRUE FITNESS</p>
        </div>

        <div className="footer-column">
          <h4>Информация</h4>
          <ul>
            <li>О Бренде</li>
            <li>Преимущества</li>
            <li>Открыть Клуб</li>
            <li>Продукции</li>
            <li>Контакты</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Контакты</h4>
          <ul>
            <li>Политика конфиденциальности</li>
            <li>Контакты</li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <h4>Подписаться на новости и акции</h4>
          <form>
            <input type="email" placeholder="E - MAIL" />
            <button type="submit">➤</button>
          </form>
          <div className="social-icons">
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={youtube} alt="YouTube" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
