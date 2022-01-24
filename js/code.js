function equipos(){
    const Ehttp = new XMLHttpRequest();
    Ehttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let articles = JSON.parse(this.responseText);
            articles.forEach(laptops=>{
                //console.log(laptops.precio);
                 
                allArticles(laptops);
            })
        }else if(this.status == 404 ){
            console.log("something went wrong!")
        }
    }
    Ehttp.open('GET', 'articles.json', true);
    Ehttp.send();
}

equipos();


const Template = document.querySelector('#template').content;
const Tienda = document.querySelector('.container');
const Fragment = document.createDocumentFragment();
const allArticles = (items)=>{

    Template.querySelector('#h2').innerHTML = items.marca;
    Template.querySelector('img').setAttribute("src", items.img);
    Template.querySelector('.equipo').textContent = items.equipo;
    Template.querySelector(".marca").textContent = items.marca;
    Template.querySelector('.modelo').textContent = items.modelo;
    Template.querySelector('.precio').textContent = `${items.precio}${'.00'}`;

    Template.querySelector(".intel").textContent = `${'Intel : '}${items.descripcion.intel}`;
    Template.querySelector(".ram").innerHTML = `${'RAM : '}${items.descripcion.ram}`;
    Template.querySelector('.sdd').textContent = `${'SDD : '}${items.descripcion.sdd}`;
    Template.querySelector('.hdd').textContent = `${'HDD : '}${items.descripcion.hdd}`;
    Template.querySelector('.windows').textContent = `${'Windows : '}${items.descripcion.windows}`;
    const clone = Template.cloneNode(true);
    Fragment.appendChild(clone)
    Tienda.appendChild(Fragment);
    
    

}
