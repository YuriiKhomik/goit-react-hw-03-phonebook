export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" value={value} onChange={onChange}></input>
    </>
  );
};
