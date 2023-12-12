import { promises as fs } from "fs";
import {
  Card,
  Spacer,
  Divider,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
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
    <div className="max-w-[900px] flex flex-wrap justify-center gap-4 px-8">
      <div className="">
        {result.map((poke: any) => (
          <div key={poke.id} className="flex flex-row space-y-4">
            <Card className="card" style={{ width: "200px", height: "200px" }}>
              <Image
                width={300}
                height={200}
                src={poke.sprites.front_shiny}
                alt={`${poke.name} front_shiny`}
                quality={100}
              />
            </Card>
            <Spacer x={4} />
            <Card className="card" style={{ width: "200px", height: "200px" }}>
              <Image
                width={300}
                height={200}
                src={poke.sprites.back_shiny}
                alt={`${poke.name} back_shiny`}
                quality={100}
              />
            </Card>
          </div>
        ))}
      </div>
      <div className="">
        {result.map((poke: any) => (
          <div key={poke.id} className="space-y-4">
            <div className="flex items-center">
              <h1 className="font-bold text-xl mr-2">Nombre:</h1>
              <span className="text-lg text-uppercase">{poke.name}</span>
            </div>
            <div>
              <Card className="max-w-[400px]">
                <CardHeader className="flex">
                  <div className="flex flex-col">
                    <h4 className="text-medium font-medium">Habilidades</h4>
                  </div>
                </CardHeader>
                <Divider className="my-1" />
                <CardBody>
                  <table className="min-w-full bg-white">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left py-2 px-4">Nombre</th>
                        <th className="text-left py-2 px-4">Efectos</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      {poke.abilities.map((abt: any, index: number) => (
                        <tr key={index}>
                          <td className="border py-2 px-4">{abt.ability.name}</td>
                          <td className="border py-2 px-4">
                            {abt.ability.effect_entries.map(
                              (efc: any, index: number) => (
                                <span key={index}>
                                  - {efc.effect}
                                  <br />
                                </span>
                              )
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardBody>
              </Card>
            </div>
            <div className="mt-4">
              <Card className="max-w-[400px]">
                <CardHeader className="flex">
                  <div className="flex flex-col">
                    <h4 className="text-medium font-medium">Movimientos</h4>
                  </div>
                </CardHeader>
                <Divider className="my-1" />
                <CardBody>
                  <table className="min-w-full bg-white">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left py-2 px-4">Nombre</th>
                        <th className="text-left py-2 px-4">Efectos</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      {poke.moves.map((mv: any, index: number) => (
                        <tr key={index}>
                          <td className="border py-2 px-4">{mv.move.name}</td>
                          <td className="border py-2 px-4">
                            {mv.effect_entries.map(
                              (efc: any, index: number) => (
                                <span key={index}>
                                  - {efc.effect}
                                  <br />
                                </span>
                              )
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardBody>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detalle;
