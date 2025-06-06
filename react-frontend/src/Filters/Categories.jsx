// const categoriesData = [];

function Categories({ types }) {
  return (
    <div>
      {types.map((type, index) => {
        return (
          <div key={index} className="flex gap-2 items-center">
            <input id={type.type} name={type.type} type="checkbox" />
            <label for={type.type} className="text-sm">
              {type.name}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
