import { Publish } from "@material-ui/icons";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { updateProduct } from "../../redux/apiCalls";
import { userRequest } from "../../requestMethods";
import "./product.css";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);
  const [products, setProducts] = useState({});
  const handleChange = (e) => {
    setProducts((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  console.log(pStats)
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    updateProduct(productId, products, dispatch);
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product?.img} alt="" className="productInfoImg" />
            <span className="productName">{product?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product?.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label htmlFor="title">Product Name</label>
            <input
            id="title"
              type="text"
              placeholder={product?.title}
              name="title"
              onChange={handleChange}
            />
            <label htmlFor="desc">Product Description</label>
            <input
            id="desc"
              type="text"
              placeholder={product?.desc}
              name="desc"
              onChange={handleChange}
            />
            <label htmlFor="price">Price</label>
            <input
            id="price"
              type="number"
              placeholder={product?.price}
              name="price"
              onChange={handleChange}
            />
            <label htmlFor="idStock">In Stock</label>
            <select  name="inStock" onChange={handleChange} id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={
                  product?.img ||
                  "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                }
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button onClick={handleClick} className="productButton">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
