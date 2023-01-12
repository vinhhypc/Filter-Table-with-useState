function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2" style={{ color: "blue" }}>
        {category}
      </th>
    </tr>
  );
}
export default ProductCategoryRow;
