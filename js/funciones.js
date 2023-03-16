//objeto.JSON que guarda la info de las tecnologias
//que voy aprendiendo tiene el id,nombre,nivel que manejo y una imagen 
const listSkills = [
  {
    id: 1,
    Name: "HTML",
    Level: "Alto",
    image: "html5",
  },
  {
    id: 2,
    Name: "CSS",
    Level: "Alto",
    image: "css",
  },
  {
    id: 3,
    Name: "JavaScript",
    Level: "Medio",
    image: "javaScript",
  },
  {
    id: 4,
    Name: "Java",
    Level: "Medio",
    image: "java",
  },
  {
    id: 5,
    Name: "Python",
    Level: "Medio",
    image: "py",
  },
  {
    id: 6,
    Name: "Bootstrap",
    Level: "Medio",
    image: "bootstrap",
  },
  {
    id: 7,
    Name: "Node",
    Level: "Bajo",
    image: "node",
  },
  {
    id: 8,
    Name: "Express",
    Level: "Bajo",
    image: "ex",
  },  
];
//foreach recorriendo el JSON y creando por cada iteracion  un div con
//los atributos de cada tegnologia  y escribiendolos dentro
// de un div padre llamado skills con el hinnerHTML 

listSkills.forEach(obj => {
  let skillContainer = document.getElementById("skills");
  skillContainer.innerHTML += `
        <div class="cardSkill">            
            <div class="techimg-card">
                <img class="img-skill" src="/img/${obj.image}.png" alt="">
            </div>
            <h2>${obj.Name}</h2>
            <h5 class="levelTotal">Manejo: ${obj.Level}</h5>
        </div>
        `;
});
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

const  proyects =[
    {
        id:1,
        name:"Pagina plomeros",        
        url:"https://www.plomerossaor.com/",
        dominio:"plomerossaor.com",
        image:"SAOR"

    },
    {
      id:2,
      name:"Portafolio",
      url:"#",
      dominio:"ortegacode.com",
      image:"porta"

  },
  {
    id:3,
    name:"BLOG",
    url:"#",
    dominio:"ortegacode.com",
    image:"BLOG"

},
{
  id:4,
  name:"Figuras Geometricas",
  url:"#",
  dominio:"ortegacode.com",
  image:"geo"

},
];
proyects.forEach(pro=>{
    let proyectContainer = document.getElementById("proyects-container")
    proyectContainer.innerHTML +=`
    <div class="card-projets">
        <h3>${pro.name}</h3>
        <div class="img-proyect">
          <img class="img-pro"src="/img/${pro.image}.png" alt="">
        </div>        
        <a class="link-web" target="_blank"  href="${pro.url}">${pro.dominio}</a> 

    </div>    
    `;  

})

let form=document.getElementById("form-section")
form.innerHTML=`
<div class="container_img-form"><img class="img-form" src="./img/buzon.png" alt=""></div>
<div class="container-form" id="container_form" ><h2 class="titulo-form">Aqui me puedes contactar</h2><br><br>
    <form action="" class="form_po">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <textarea name="mensaje" id="texto-mensaje" cols="30" rows="5" placeholder="Escriba aqui su mensaje¡¡"></textarea><br>
        <input type="button" value="Enviar">
    </form>
</div> 
`