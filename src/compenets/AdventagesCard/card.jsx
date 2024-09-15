import { useState } from 'react'
import './card.css'
import logo from '../../assets/Rectangle 57.png'
import logo1 from '../../assets/Rectangle 57 (1).png'
import logo2 from '../../assets/Rectangle 57 (2).png'
import logo3 from '../../assets/Rectangle 57 (3).png'
import logo4 from '../../assets/Rectangle 57 (4).png'
import logo5 from '../../assets/Rectangle 57 (5).png'
import logo6 from '../../assets/Rectangle 57 (6).png'
import logo7 from '../../assets/Rectangle 57 (7).png'

function Card() {

    const [data, setData] = useState([
        {
            id: 0,
            img: logo,
            name: `Лучшие характеристики в классе`,
            review: `Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей`
        },
        {
            id: 1,
            img: logo1,
            name: `Высокая надежность оборудования`,
            review: `Высокое качество тренажеров - это визитная карточка TRUE. Кроме того, TRUE предоставляет до 5 лет полной гарантии на кардио тренажеры.`
        },
        {
            id: 2,
            img: logo2,
            name: `Низкая стоимость владения`,
            review: `Тренажеры способны выдерживать серьезную эксплуатационную нагрузку, сохраняя минимальные затраты на сервис, что обеспечивает минимальную стоимость владения`
        },
        {
            id: 3,
            img: logo3,
            name: `Качественный и оперативный сервис`,
            review: `Оборудование должно работать бесперебойно, поэтому мы уделяем особое внимание наличию всех необходимых запчастей и высокой срочности технического реагирования`
        },
        {
            id: 4,
            img: logo4,
            name: `Цены ниже, чем у аналогов`,
            review: `Стоимость тренажеров вас приятно удивит. Несмотря на то, что мы полностью превосходим конкурентов, наши цены ниже`
        },
        {
            id: 5,
            img: logo5,
            name: `Совершенная производительность`,
            review: `Тренажеры TRUE обеспечивают непревзойденный уровень тренировок, для достижения самых высоких результатов.`
        },
        {
            id: 6,
            img: logo6,
            name: `Абсолютные лидеры по количеству инноваций`,
            review: `Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей`
        },
        {
            id: 7,
            img: logo7,
            name: `Максимальное удобство и функциональность`,
            review: `Компания TRUE продумывает все технические нюансы и делает тренажеры максимально удобными и функциональными`
        }

    ])

    return (

        <div className='cards' >
            {data.map((item) => {
                return (
                    <div key={item.id} className='card' >
                        <img src={item.img} alt="" />
                        <h2>{item.name}</h2>
                        <p>{item.review}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Card