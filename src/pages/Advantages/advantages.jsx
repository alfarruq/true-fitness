import Card from "../../compenets/AdventagesCard/card";
import "./advantages.css";
import logo from '../../assets/Rectangle 54.png'


function Advantages() {
    return ( 
        <main className="advantages container" >
            <section className="section-one" >
                <h3>НАШИ ПРЕИМУЩЕСТВА</h3>
                <h2>ПРЕИМУЩЕСТВА TRUE FITNESS</h2>
                <h4>Благодаря которым мы являемся мировым лидером в производстве фитнес-оборудования</h4>
            </section>
            <section className="section-two" >
            <Card/>
            </section>
            <section className="section-three" >
                <button>TOP 5</button>
                <p>Бренд TRUE Fitness входит в TOП 5 крупнейших производителей фитнес оборудования</p>
            </section>
            <section className="section-four" >
                <img src={logo} alt="" />
                <div className="email" >
                    <h3>TRUE FITNESS</h3>
                    <h4>Получите <span>эксклюзивное предложение</span> на тренажеры <span>TRUE FITNESS</span></h4>
                    <p>Мы будем рады проконсультировать Вас и помочь с подбором оборудования</p>
                    <div className="inputs" >
                        <input placeholder="ИМЯ" type="text" name="" id="" />
                        <input placeholder="+998 (99) 999-99-99" type="number" name="" id="" />
                        <input placeholder="E-MAIL" type="email" name="" id="" />
                        <button>ОТПРАВИТЬ</button>
                    </div>
                    <div className="p" >
                        <p>«Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности»</p>
                    </div>
                </div>
            
            </section>
        </main>
     );
}

export default Advantages;