import { promises as fs } from "fs";
import Image from "next/image";

async function Detalle(params: any) {
  const queryId = params.searchParams.id;
  const dataJson = await fs.readFile(
    process.cwd() + "/app/scripts/poke-json.json",
    "utf-8"
  );
  const pokemon = JSON.parse(dataJson);
  const result = pokemon.filter((data: any) => data.id == queryId);

  return (
    <div>
      {result.map((poke: any) => (
        <>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3" style={{ width: "18rem" }}>
                <Image
                  className="card-img-top"
                  width="200"
                  height="200"
                  src={poke.sprites.front_shiny}
                  alt={`${poke.name} front_shiny`}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3" style={{ width: "18rem" }}>
                <Image
                  className="card-img-top"
                  width="200"
                  height="200"
                  src={poke.sprites.back_shiny}
                  alt={`${poke.name} back_shiny`}
                />
              </div>
            </div>
          </div>
          <h1 className="">Nombre: {poke.name}</h1>
          <div>
            <h1>Habilidades:</h1>
            <table className="table text-justify">
              <thead className="text-center">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Efectos</th>
                </tr>
              </thead>
              {poke.abilities.map((abt: any) => (
                <>
                  <tbody>
                    <tr>
                      <th>{abt.ability.name}</th>
                      <th>
                        {abt.ability.effect_entries.map((efc: any) => (
                          <>
                            {efc.effect}
                          </>
                        ))}
                      </th>
                    </tr>
                  </tbody>
                </>
              ))}
            </table>
          </div>
          <div className="mt-3">
            <h1>Movimientos:</h1>
            <table className="table text-justify">
              <thead className="text-center">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Efectos</th>
                </tr>
              </thead>
              {poke.moves.map((mv: any) => (
                <>
                  <tbody>
                    <tr>
                      <th>{mv.move.name}</th>
                      <th>
                        {mv.effect_entries.map((efe: any) => (
                          <>
                            {efe.effect}
                          </>
                        ))}
                      </th>
                    </tr>
                  </tbody>
                </>
              ))}
            </table>
          </div>
        </>
      ))}
    </div>
  );
}
export default Detalle;
