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
                    <h1 className="so"><b>Современное и <br /> надежное <br /> оборудование для <br /> фитнес-клубов</b></h1>
                    <h1 className="h1-2-home"><span className="span-ble">кардио <br /> тренажеры</span></h1>
                </div>
                <div className="img-2" >
                    <img src={salam} alt="" />

                </div>
            </section>


            <section className="sec-3">

            </section>
        </main>
    );
}

export default Home;