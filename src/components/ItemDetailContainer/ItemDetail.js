import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = () => {
  return (
    <div className="itemDetail">
      <div className="img-detail-cont">
        <img src="/img/class.jpg" alt="" className="img-detail" />
      </div>
      <div className="text-container">
        <div className="titulo-container">
            <h1>Titulo</h1>
            {/* <span>extra extra</span> */}
        </div>
        
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <ItemCount />
        <button className="agregar">AGREGAR AL CARRITO</button>
      </div>
    </div>
  );
};

export default ItemDetail;
