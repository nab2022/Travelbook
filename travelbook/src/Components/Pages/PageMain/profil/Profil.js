import {Link} from 'react-router-dom'; 

function Profil (){
   
    async function getProfil() {
        
        const options = {
            method : "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "bearer token"
            }
     
        }
        
        const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/TravelBook/user", options);
        
const data =await response.json();
console.log(data);

}
getProfil();

return(

    <div>
        
        
       
    <nav>

    <Link to="/pagemain">Accueil</Link>
    <Link to="/editprofil">Editer mon profil</Link>

    </nav>
    
    <h2>Mon profil</h2>



            </div>

)


}


export default Profil; 
