export default function Catalog(){
    var items = [
        {
            name: "Удлинитель b325",
            img: "./7fe7dc6fcb0c9a52d27214a47b1fbae5.jpg",
            cost: "420р."
        },
        {
            name: "Светодиодная лента Неон",
            img: "./white-led-strip-sealed.1.jpg",
            cost: "890р."
        }
    ]

  return(
    <div className="Catalog-flex">
        {items.map(elem => <div><img src={elem.img}></img><p>{elem.name}</p><p>{elem.cost}</p><button>В корзину</button></div>)}
    </div>
  )  
}