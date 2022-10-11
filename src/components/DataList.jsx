import DataItem from "./DataItem";

function DataList({ datapoints, onReset }) {
  const handleReset = () => {
    onReset();
  };

  return (
    <section>
      {datapoints.map((datapoint, index) => (
        <DataItem datapoint={datapoint} key={index} />
      ))}
      {datapoints.length > 0 && (
        <button
          className="w-full cursor-pointer rounded-md p-2 text-2xl bg-blue-900"
          onClick={handleReset}
        >
          Reset Data
        </button>
      )}
    </section>
  );
}

export default DataList;
