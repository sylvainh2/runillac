import { Link } from "react-router-dom";
import bulletin from "../assets/img/BULLETIN ADHESION 2026 2027.pdf";
import imgAmbiance from "../assets/img/FB_IMG_1665583425942.jpg";
import imgEntrain from "../assets/img/FB_IMG_1665584768238-2.jpg";
import imgChall from "../assets/img/FB_IMG_1665583114508.jpg";
import imgFete from "../assets/img/FB_IMG_1665583242135.jpg";
import { useEffect } from "react";

function Accueil() {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    return(
     <>
      <main className="accueil">
        <section>
        <h1 className="titrePageAccueil">Run'illac – Club de course à pied de Saint-Jean-d'Illac</h1>
            <div className="container">
                <div className="row col-md-12">
                    <div className="imageAccueil">
                        <a href={bulletin} className="btnPlusAccueil gauche" target="_blank" rel="noreferrer">Bulletin d'adhésion</a>
                        <Link to={"/savoir"} className="btnPlusAccueil droite" href="#">En savoir +</Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid grilleAccueil">
            <div className="container">
                <div className="row col-md-12">
                    <div className="wrapperAccueil">
                            <img className="contGrille1Accueil imgAccueil" src={imgAmbiance} alt="Coureurs de Run'illac à Saint-Jean-d'Illac"/>
                        
                        <article className="textAccueil contGrille2Accueil">
                            <h2 className="accueilTitle">Un club de course à pied convivial à Saint-Jean-d'Illac</h2>
                            <p className="accueilPara">Pas envie de courir seul ou besoin de retrouver la motivation ?</p>
                            <p className="accueilPara">Venez rejoindre Run'illac, le club de course à pied de Saint-Jean-d'Illac. Vous y trouverez un groupe de coureurs motivés et une ambiance conviviale, avec de l'entraide et des encouragements pour progresser à votre rythme.</p>
                        </article>
                        <article className="textAccueil contGrille3Accueil">
                            <h2 className="accueilTitle">Des entraînements motivants, variés, supervisés.</h2>
                            <p className="accueilPara">Nos entraînements sont dispensés à des horaires fixes, sur des lieux définis, par des entraineurs bénévoles, toujours dans la bonne humeur et le respect de chacun. Ils sont adaptés dans la mesure du possible aux attentes et ambitions de chacun.</p>
                        </article>
                        <img className="contGrille4Accueil imgAccueil" src={imgEntrain} alt="Entraînement du club de course à pied Run'illac"/>
                        <img className="contGrille5Accueil imgAccueil" src={imgChall} alt="Coureurs de Run'illac participant à une course"/>
                        <article className="textAccueil contGrille6Accueil">
                            <h2 className="accueilTitle">Challenges, courses suivis par le club.</h2>
                            <p className="accueilPara">De nombreux coureurs du club, participent à des courses ou challenges, souvent dans le département, afin de garder une grande motivation et s'améliorer. Mais ils participent aussi à de nombreuses courses hors du département, allant même aux quatres coins de l'hexagone, mais aussi à l'étranger, afin de découvrir de nouveaux et magnifiques paysages, ou de se challenger davantage.</p>
                        </article>
                        <article className="textAccueil contGrille7Accueil">
                            <h2 className="accueilTitle">Le club c'est le sport mais pas que!!!</h2>
                            <p className="accueilPara">Les entraînements, les courses c'est bien, mais il faut aussi savoir décompresser et resserrer les liens entre chacun. Pour cela, le club organise des soirées et sorties extra sportives en famille.
                                On ne refuse jamais non plus un petit apéritif, petit-déjeuner après les entraînements afin de fêter anniversaires ou autres évènements!</p>
                        </article>
                        <img className="contGrille8Accueil imgAccueil" src={imgFete} alt="Moment convivial entre les membres de Run'illac"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
  );
}
export default Accueil;