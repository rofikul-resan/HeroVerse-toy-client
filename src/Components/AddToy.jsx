const AddToy = () => {
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const pictureURL = form.pictureURL.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const newToy = {
      name,
      pictureURL,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    fetch("http://localhost:5000/toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          window.location.reload();
        }
      });
  };
  return (
    <form
      onSubmit={handleAddToy}
      className="md:w-10/12 my-20 mx-auto px-14 py-6 rounded-lg bg-base-300"
    >
      <h1>Add Toys</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text italic text-xl font-semibold">
              Name
            </span>
          </label>
          <input
            type="text"
            placeholder="Toy Name"
            name="name"
            className="input input-bordered bg-white"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text italic text-xl font-semibold">
              Picture URL
            </span>
          </label>
          <input
            type="text"
            placeholder="Toy Picture URL"
            name="pictureURL"
            className="input input-bordered bg-white"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text italic text-xl font-semibold">
              Seller Name
            </span>
          </label>
          <input
            type="text"
            placeholder="Seller Name"
            defaultValue={"John's Collectibles"}
            name="sellerName"
            className="input input-bordered bg-white"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text italic text-xl font-semibold">
              Seller Email
            </span>
          </label>
          <input
            type="email"
            placeholder="Seller Email"
            defaultValue={"john@example.com"}
            required
            name="sellerEmail"
            className="input input-bordered bg-white"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text italic text-xl font-semibold">
              Sub Category
            </span>
          </label>
          <input
            type="text"
            placeholder="Sub Category"
            defaultValue="marvel"
            name="subCategory"
            className="input input-bordered bg-white"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text italic text-xl font-semibold">
              Price
            </span>
          </label>
          <input
            type="text"
            placeholder=" Toy Price"
            name="price"
            defaultValue={(50 + Math.random() * 50).toFixed(2)}
            className="input input-bordered bg-white"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text italic text-xl font-semibold">
              Available Quantity
            </span>
          </label>
          <input
            type="text"
            placeholder="Available Quantity"
            defaultValue={(100 + Math.random() * 50).toFixed()}
            name="quantity"
            className="input input-bordered bg-white"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text italic text-xl font-semibold">
              Rating
            </span>
          </label>
          <input
            type="text"
            placeholder="Available Quantity"
            defaultValue={(3 + Math.random() * 2).toFixed(1)}
            name="rating"
            className="input input-bordered bg-white"
          />
        </div>
      </div>
      <div className="form-control">
        <textarea
          name="description"
          defaultValue={
            "This Superhero Action Figure Set includes a collection of popular Marvel and DC characters. Each figure is highly detailed and poseable, allowing kids to recreate their favorite superhero battles. The set comes with 6 action figures, including Iron Man, Batman, Spider-Man, Superman, Captain America, and Wonder Woman. It's the perfect gift for superhero fans of all ages!"
          }
          placeholder="Description"
          className="h-60 w-full resize-none input input-bordered bg-white mt-8 p-6"
        ></textarea>
      </div>
      <button className="btn btn-primary btn-block mt-6">Add Toy</button>
    </form>
  );
};

export default AddToy;
