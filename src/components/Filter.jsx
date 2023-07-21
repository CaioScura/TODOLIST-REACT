const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-option">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>

            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort("Crescente")}>Crescente</button>
                <button onClick={() => setSort("Decrescente")}>Decrescente</button>
            </div>
        </div>
    </div>
  )
}

export default Filter