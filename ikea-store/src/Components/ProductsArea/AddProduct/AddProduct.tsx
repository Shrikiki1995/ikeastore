import "./AddProduct.css";

function AddProduct(): JSX.Element {
    return (
        <div className="AddProduct">
            <h2>Add furniture</h2>
            <form >
                <label>Name</label>
                <input type="text"></input>

                <label>Dismonsions</label>
                <input type="text"></input>

                <label>Color</label>
                <input type="text"></input>

                <label>Price</label>
                <input type="text"></input>

                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddProduct;
