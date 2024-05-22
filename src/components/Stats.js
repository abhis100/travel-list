export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        {" "}
        <em> Start packing </em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;

  if (percentage === 100)
    return (
      <p className="stats">
        <em> Everything packed!! Ready to go! </em>
      </p>
    );

  return (
    <div className="stats">
      <footer>
        <em>
          {`${numPacked} out of ${numItems} ${
            numItems === 1 ? "item" : "items"
          } packed (${percentage}%)`}
        </em>
      </footer>
    </div>
  );
}
