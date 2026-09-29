import cgu from "../assets/img/RunIllac_CGU.pdf";

function Cg() {

    return(
        <>
            <h1>Conditions générales d'utilisation du site Run'illac</h1>
            <div className="cgMainContent">
                    <iframe src={cgu} width="100%" height="800px" title="Conditions générales d'utilisation du site Run'illac"/>
            </div>
        </>
    )
}

export default Cg;