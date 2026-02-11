export default function Product({ product }) {
  let stockText = product.inStock ? "På lager" : "Udsolgt";
  let stockClass = product.inStock ? "in-stock" : "out-of-stock";
  let dyrt = product.price > 100 ? "Dyrt!" : "Billigt:)";
  let category =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <div className="product">
      <img className="productImage" src={product.image} alt={product.title} />
      <div className="prodctInfo">
        <h2 className="productTitle">{product.title}</h2>
        <p className="productDescription">
          {product.description || "No description available"}
        </p>
        <p className="productDyrt">{dyrt}</p>
        <p className="productCategory">{category}</p>
        <p className="productPrice">Pris: {product.price} kr</p>
        <span className={`productStock ${stockClass}`}>{stockText}</span>

        {product.rating.count > 100 && (
          <p className="productRating">Populært Produkt</p>
        )}
      </div>
    </div>
  );
}
