import React, { useState } from "react";
import "./IndicadorTable.css";

export const IndicadorTable: React.FC = () => {
  const dados = [
    {
      indicador: "Consumo de energia elétrica",
      fonte: "ANEEL",
      dimensao: "ambiental",
      mensuracao: "kWh/mês",
      metaIndicador: "Reduzir 10%",
      metaImpacto: "Diminuir emissões de CO2",
      mensuracaoImpacto: "Toneladas de CO2 evitadas",
      ods: "ODS 7",
      metasOds: "7.2",
      link: "https://exemplo.com/energia",
      boasPraticas: "Painéis solares"
    },
    {
      indicador: "Índice de satisfação dos colaboradores",
      fonte: "Pesquisa Interna",
      dimensao: "social",
      mensuracao: "Percentual",
      metaIndicador: "Atingir 85%",
      metaImpacto: "Melhoria no trabalho",
      mensuracaoImpacto: "Avaliação anual",
      ods: "ODS 8",
      metasOds: "8.5",
      link: "https://exemplo.com/satisfacao",
      boasPraticas: "Qualidade de vida"
    },
    {
      indicador: "Volume de resíduos reciclados",
      fonte: "Relatório Sustentabilidade",
      dimensao: "ambiental",
      mensuracao: "Toneladas",
      metaIndicador: "Aumentar 20%",
      metaImpacto: "Reduzir aterro",
      mensuracaoImpacto: "Toneladas desviadas",
      ods: "ODS 12",
      metasOds: "12.5",
      link: "https://exemplo.com/reciclagem",
      boasPraticas: "Reciclagem interna"
    }
  ];

  const [dimensoesSelecionadas, setDimensoesSelecionadas] = useState<string[]>([]);
  const [odsSelecionados, setOdsSelecionados] = useState<string[]>([]);
  const [atributoSelecionado, setAtributoSelecionado] = useState<string>("");
  const [valoresSelecionados, setValoresSelecionados] = useState<string[]>([]);
  const [filtrosVisiveis, setFiltrosVisiveis] = useState(true);

  const handleDimensaoChange = (dim: string) => {
    setDimensoesSelecionadas(prev =>
      prev.includes(dim) ? prev.filter(d => d !== dim) : [...prev, dim]
    );
  };

  const handleOdsChange = (ods: string) => {
    setOdsSelecionados(prev =>
      prev.includes(ods) ? prev.filter(o => o !== ods) : [...prev, ods]
    );
  };

  const handleValorChange = (valor: string) => {
    setValoresSelecionados(prev =>
      prev.includes(valor) ? prev.filter(v => v !== valor) : [...prev, valor]
    );
  };

  const limparFiltros = () => {
    setDimensoesSelecionadas([]);
    setOdsSelecionados([]);
    setAtributoSelecionado("");
    setValoresSelecionados([]);
  };

  const dadosFiltrados = dados.filter(item => {
    const passaDimensao = dimensoesSelecionadas.length === 0 || dimensoesSelecionadas.includes(item.dimensao);
    const passaOds = odsSelecionados.length === 0 || odsSelecionados.includes(item.ods);
    const passaOutroFiltro =
      !atributoSelecionado || valoresSelecionados.length === 0 ||
      valoresSelecionados.includes((item as any)[atributoSelecionado]);
    return passaDimensao && passaOds && passaOutroFiltro;
  });

  const valoresDisponiveis = atributoSelecionado
    ? Array.from(new Set(dados.map(item => (item as any)[atributoSelecionado])))
    : [];

  return (
    <div className="container-principal">
      {/* Filtros colapsáveis */}
      <div className={`filtro-container ${filtrosVisiveis ? "" : "fechado"}`}>
        <div className="filtro-header">
          <h3>Filtros</h3>
          <button onClick={() => setFiltrosVisiveis(!filtrosVisiveis)}>
            {filtrosVisiveis ? "Esconder" : "Mostrar"}
          </button>
        </div>

        {filtrosVisiveis && (
          <>
            <div className="filtro-grupo">
              <h4>Dimensão</h4>
              {["ambiental", "social", "econômica", "institucional"].map(dim => (
                <label key={dim} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={dimensoesSelecionadas.includes(dim)}
                    onChange={() => handleDimensaoChange(dim)}
                  />
                  {dim.charAt(0).toUpperCase() + dim.slice(1)}
                </label>
              ))}
            </div>

            <div className="filtro-grupo">
              <h4>ODS</h4>
              {["ODS 7", "ODS 8", "ODS 12"].map(ods => (
                <label key={ods} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={odsSelecionados.includes(ods)}
                    onChange={() => handleOdsChange(ods)}
                  />
                  {ods}
                </label>
              ))}
            </div>

            <div className="filtro-grupo">
              <h4>Outros Atributos</h4>
              <select
                value={atributoSelecionado}
                onChange={e => {
                  setAtributoSelecionado(e.target.value);
                  setValoresSelecionados([]);
                }}
              >
                <option value="">Selecione o atributo</option>
                <option value="fonte">Fonte</option>
                <option value="mensuracao">Mensuração</option>
                <option value="metaIndicador">Meta do Indicador</option>
                <option value="metaImpacto">Meta do Impacto</option>
                <option value="mensuracaoImpacto">Mensuração do Impacto</option>
                <option value="metasOds">Metas dos ODS</option>
                <option value="boasPraticas">Boas Práticas</option>
              </select>

              {valoresDisponiveis.length > 0 && (
                <div className="checkbox-container">
                  {valoresDisponiveis.map((valor, idx) => (
                    <label key={idx} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={valoresSelecionados.includes(valor)}
                        onChange={() => handleValorChange(valor)}
                      />
                      {valor}
                    </label>
                  ))}
                </div>
              )}
            </div>

            <button className="botao-limpar" onClick={limparFiltros}>
              Limpar Todos os Filtros
            </button>
          </>
        )}
      </div>

      {/* Tabela */}
      <div className="tabela-container">
        <p className="contador">{dadosFiltrados.length} indicador(es) encontrado(s)</p>
        <table className="tabela-indicadores">
          <thead>
            <tr>
              <th>Indicador</th>
              <th>Fonte</th>
              <th>Dimensão</th>
              <th>Mensuração</th>
              <th>Meta</th>
              <th>Meta Impacto</th>
              <th>Mensuração Impacto</th>
              <th>ODS</th>
              <th>Metas ODS</th>
              <th>Link</th>
              <th>Boas Práticas</th>
            </tr>
          </thead>
          <tbody>
            {dadosFiltrados.length === 0 ? (
              <tr>
                <td colSpan={11}>Nenhum indicador encontrado com os filtros aplicados.</td>
              </tr>
            ) : (
              dadosFiltrados.map((item, index) => (
                <tr key={index}>
                  <td>{item.indicador}</td>
                  <td>{item.fonte}</td>
                  <td>{item.dimensao}</td>
                  <td>{item.mensuracao}</td>
                  <td>{item.metaIndicador}</td>
                  <td>{item.metaImpacto}</td>
                  <td>{item.mensuracaoImpacto}</td>
                  <td>{item.ods}</td>
                  <td>{item.metasOds}</td>
                  <td>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      Acessar
                    </a>
                  </td>
                  <td>{item.boasPraticas}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
