function Properties() {
  return (
    <div className="properties">
      <div className="properties_title">
        <h4>Propiedades</h4>
      </div>
      <div className="properties_content">
        <div className="table_wrap">
          <div className="table_filter">
            <span className="table_filter_title">Buscar:</span>
            <input
              type="text"
              id="search"
              className="table_filter_search"
              autoComplete="off"
              spellCheck="false" />
          </div>
          <div className="table_scrolling">
            <table className="table">
              <thead className="table_head">
                <tr>
                  <th><strong>Imagen</strong></th>
                  <th><strong>Nombre</strong></th>
                  <th><strong>Nombre del dueño</strong></th>
                  <th><strong>Dirección</strong></th>
                  <th><strong>Precio</strong></th>
                  <th><strong>Código interno</strong></th>
                  <th><strong>Año</strong></th>
                </tr>
              </thead>
              <tfoot className="table_foot">
                <tr>
                  <th><span>Imagen</span></th>
                  <td><span>Nombre</span></td>
                  <td><span>Nombre del dueño</span></td>
                  <td><span>Dirección</span></td>
                  <td><span>Precio</span></td>
                  <td><span>Código interno</span></td>
                  <td><span>Año</span></td>
                </tr>
              </tfoot>
              <tbody className="table_body"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Properties };
