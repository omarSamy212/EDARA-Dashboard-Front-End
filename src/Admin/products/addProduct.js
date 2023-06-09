import { Link, useParams } from "react-router-dom";
import "../header/header.css";
import "../products/addProduct.css";
import Footer1 from "../footer/Footer1";
import { Header } from "../header/header";
import { useRef } from "react";
import { getAuthToken } from "../../services/auth";
import axios from "axios";
export const AddProduct = () => {
  const { id } = useParams();

  const form = useRef({
    name: "",
    quantity: "",
    imageUrl: "",
  });

  const { token, user } = getAuthToken();
  const submit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/api/product/",
        {
          name: form.current.name.value,
          quantity: form.current.quantity.value,
          imageUrl: form.current.imageUrl.value,
          warehouseId: id,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        alert("Product Added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="Omar">
      <Header />

      <div id="form" className="Design">
        <div className="card">
          <form onSubmit={(e) => submit(e)}>
            <p>Manage Product</p>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="form6Example1"
                    class="form-control"
                    ref={(val) => {
                      form.current.name = val;
                    }}
                  />
                </div>
              </div>
              {/* <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example2">
                    Product Id
                  </label>
                  <input type="text" id="form6Example2" class="form-control" />
                </div>
              </div> */}
            </div>

            <div class="row mb-4">
              {/* <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example1">
                    Location
                  </label>
                  <input type="text" id="form6Example1" class="form-control" />
                </div>
              </div> */}
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example2">
                    Image URL
                  </label>
                  <input
                    type="text"
                    id="form6Example2"
                    class="form-control"
                    ref={(val) => {
                      form.current.imageUrl = val;
                    }}
                  />
                </div>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example1">
                    Stock
                  </label>
                  <input
                    type="text"
                    id="form6Example1"
                    class="form-control"
                    ref={(val) => {
                      form.current.quantity = val;
                    }}
                  />
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer1 />
    </div>
  );
};
