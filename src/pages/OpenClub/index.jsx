import { useState } from 'react';
import './index.css';
import Rectangle from "../../assets/Rectangle.png";

const OpenClub = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    clubType: '',
    launchTime: '',
    services: [],
    comment: '',
    plan: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value),
      }));
    } else if (type === 'file') {
      setFormData({ ...formData, plan: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="open-club">
      <div className="image-container">
        <img src={Rectangle} alt="Club Layout" />
      </div>
      <h1>ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Ваше Имя:</label>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Номер Телефона:</label>
          <input
            type="tel"
            name="phone"
            placeholder="+998 (99) 999-99-99"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Город:</label>
          <input
            type="text"
            name="city"
            placeholder="Город"
            value={formData.city}
            onChange={handleChange}
          />

          <label>Хотите открыть:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="radio"
                name="clubType"
                value="Фитнес студия"
                onChange={handleChange}
              />
              Фитнес студия
            </label>
            <label>
              <input
                type="radio"
                name="clubType"
                value="Фитнес клуб"
                onChange={handleChange}
              />
              Фитнес клуб
            </label>
            <label>
              <input
                type="radio"
                name="clubType"
                value="Детский Спортзал"
                onChange={handleChange}
              />
              Детский Спортзал
            </label>
          </div>

          <label>Планируемый срок запуска проекта:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="radio"
                name="launchTime"
                value="1 месяц"
                onChange={handleChange}
              />
              1 месяц
            </label>
            <label>
              <input
                type="radio"
                name="launchTime"
                value="3 месяца"
                onChange={handleChange}
              />
              3 месяца
            </label>
          </div>

          <label>Какие услуги вас интересуют:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="services"
                value="Консультация"
                onChange={handleChange}
              />
              Консультация
            </label>
            <label>
              <input
                type="checkbox"
                name="services"
                value="Подбор Оборудования"
                onChange={handleChange}
              />
              Подбор Оборудования
            </label>
          </div>

          <label>Загрузить план помещения:</label>
          <input 
            type="file" 
            name="plan" 
            onChange={handleChange} 
          />

          <label>Комментарий:</label>
          <textarea
            name="comment"
            placeholder="Комментарий"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default OpenClub;
