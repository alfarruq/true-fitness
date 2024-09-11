<<<<<<< HEAD
import sec1img from "../../assets/img-1home.png";
import "./index.css"
import salam from "../../assets/image 6.png";
import sala from "../../assets/logo (3).png";
import on from "../..//assets/pause.png";

function Home() {
    return (
        <main className="container">
            <section className="sec-1">
                <div className="">
                    <img className="imgno1" src={sec1img} alt="" />
                    
                </div>
=======
import "./index.css"
import salam from "../../assets/image 6.png";
import run from "../../assets/run.png";
import group from "../../assets/Mask group.png";
import Card from "../../compenets/home-cards/hcard";
import homebg from "../../assets/homebg.png"
import pause from "../../assets/pause.png"



function Home() {

    let info = [
        { src: group, h2: "КОНСАЛТИНГ", p: "Помогаем в разработке концепции клуба, зонировании, оснащении и расчете финансовых показателей.", },
        { src: "", h2: "", p: "", },
        { src: "", h2: "", p: "", },
        { src: "", h2: "", p: "", },
        { src: "", h2: "", p: "", },
        { src: "", h2: "", p: "", }
    ]

    return (
        <main className="container">
            <section className="sec-1">

                <div className="sec-11">
                    <div className="img-hhh1">
                        <img src={pause} alt="" />
                        <h1 className="ccccccc">TRUE FITNESS - ПРЕМИУМ <br /> ТРЕНАЖЕРЫ ИЗ США</h1>
                    </div>
                </div>

>>>>>>> home
                <div className="sec-1-div">
                    <div>
                        < hr className="hr" />
                        <h2 className="sec-1-h2">TRUE - ведущий мировой <br /> производитель премиального фитнес <br /> оборудования</h2>
                        <hr className="hr" />
                    </div>
                </div>
            </section>


            <section className="sec-2">
                <div>
                    <h1 className="h1-home">TRUE <br /><span className="span-ble">FITNESS</span></h1>
<<<<<<< HEAD
                    <h1 className="so"><b>Современное и <br /> надежное <br /> оборудование для <br /> фитнес-клубов</b></h1>
=======
                    <h1 className="so"><b>Современное и <br /> надежное <br /> оборудование<br /> для  фитнес-клубов</b></h1>
>>>>>>> home
                    <h1 className="h1-2-home"><span className="span-ble">кардио <br /> тренажеры</span></h1>
                </div>
                <div className="img-2" >
                    <img src={salam} alt="" />

                </div>
            </section>


            <section className="sec-3">
<<<<<<< HEAD

=======
                <div>
                    <div className="back">
                        <h1 className="sec3-h1">Лучшие <br /> характеристики</h1>
                        <div className="hrr"></div>
                        <p className="color">Наши тренажеры имеют самые совершенные <br /> характеристики в классе, от более мощных технических <br /> показателей до расширенных функциональных <br /> возможностей</p>
                    </div>
                    <div className="backk">
                        <h1></h1>
                        <h1 className="sec3-h1">ВЫСОКОЕ КАЧЕСТВО И <br /> НАДЕЖНОСТЬ</h1>
                        <div className="hrrr"></div>
                        <p className="colorr">Высокое качество тренажеров - это визитная карточка <br /> TRUE. Кроме того TRUE предоставляет до 5 лет гарантии на <br /> кардиотренажеры.</p>
                    </div>
                </div>
                <div>
                    <div className="backkk">
                        <h1></h1>
                        <h1 className="sec3-h1">Низкая СТОИМОСТЬ <br /> ВЛАДЕНИЕ</h1>
                        <div className="hrrr"></div>
                        <p className="colorr">Надежность оборудования обеспечивает низкие затраты <br /> на сервисное обслуживание, так по стоимости затрат на <br /> эксплуатацию TRUE выигрывает у конкурентов.</p>
                    </div>

                    <div className="backkkk">
                        <h1 className="sec3-h1">Лучшие <br /> характеристики</h1>
                        <div className="hrr"></div>
                        <p className="color">Наши тренажеры имеют самые совершенные <br /> характеристики в классе, от более мощных технических <br /> показателей до расширенных функциональных <br /> возможностей</p>
                    </div>
                </div>
            </section>

            <section className="sec-4">


                <div>
                    <h1 className="sec-4h1">Мы предлагаем <br /> полный комплекс услуг</h1>
                    <div className="cardsh">
                        {
                            info.map((product) => {
                                return <Card key={product.id} data={product} />
                            })
                        }
                    </div>
                </div>


                <div>
                    <img src={run} alt="" />
                </div>
>>>>>>> home
            </section>
        </main>
    );
}

export default Home;