function DataItem({ datapoint }) {
  return (
    <article className="flex items-center justify-start gap-4 mb-6">
      <div>
        <img src={datapoint.current.condition.icon} />
      </div>
      <div>
        <h1 className="text-xl">
          {datapoint.location.name}, {datapoint.location.country}
        </h1>
        <h2 className="text-lg">
          Current temperature: {datapoint.current.temp_c} &#8451;
        </h2>
      </div>
    </article>
  );
}

export default DataItem;
