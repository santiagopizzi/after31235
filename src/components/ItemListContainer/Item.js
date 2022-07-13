import "./Item.css";

const Item = () => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src="/img/hook.jpg" alt="" className="img-item"/>
      </div>

      <h3 className="">Item</h3>
      {/* <span className="">Extra! Extra!</span> */}
      <button>DETALLE</button>
    </div>
  );
};

export default Item;
