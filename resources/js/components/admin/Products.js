import React, {useState} from "react";
import ProductCard from "../../UI/product-card";
import Input from "../../UI/input";

function Products() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [price, setPrice] = useState("");
    const [product_image, setProductImage] = useState("");
    const [kilo, setKilo] = useState("");

    return (
        <div>
            <div className="row mt-5">
                <h4>Product</h4>
                <div className="col-md-6">
                    <Input
                        label_id={"title"}
                        label={"Title"}
                        type={"text"}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            name=""
                            id="description"
                            cols="30"
                            rows="5"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea
                            name=""
                            id="address"
                            cols="30"
                            rows="2"
                            className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        ></textarea>
                        <Input
                            label_id={"price"}
                            label={"Price"}
                            type={"text"}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <Input
                            label_id={"product_image"}
                            label={"Product Image"}
                            type={"file"}
                            value={product_image}
                            onChange={(e) => setProductImage(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-8">
                    <label htmlFor="farmer">Select Farmer</label>
                    <select name="" id="farmer" className="form-control">
                        <option value="farmer1">Farmer 1</option>
                        <option value="farmer2">Farmer 2</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <Input
                        label_id={"kilo"}
                        label={"Kilo"}
                        type={"number"}
                        value={kilo}
                        onChange={(e) => setKilo(e.target.value)}
                    />
                </div>
                <div className="col-md-12">
                    <button className="btn btn-primary px-5">SAVE</button>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-5">
                <div className="col">
                    <ProductCard
                        title={"Test"}
                        image={"https://random.imagecdn.app/500/150"}
                        description={
                            "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                        }
                    />
                </div>
                <div className="col">
                    <ProductCard
                        title={"Test"}
                        image={"https://random.imagecdn.app/500/200"}
                        description={
                            "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                        }
                    />
                </div>
                <div className="col">
                    <ProductCard
                        title={"Test"}
                        image={"https://random.imagecdn.app/500/350"}
                        description={
                            "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                        }
                    />
                </div>
                <div className="col">
                    <ProductCard
                        title={"Test"}
                        image={"https://random.imagecdn.app/500/250"}
                        description={
                            "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Products;
