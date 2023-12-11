import Image from "next/image";
import Cards from "./ui/cards";
import { promises as fs } from "fs";
import Link from "next/link";


async function Home() {
  const dataJson = await fs.readFile(
    process.cwd() + "/app/scripts/poke-json.json",
    "utf-8"
  );
  const pokemon = JSON.parse(dataJson);

  return (
    <div className="row">
      {pokemon.map((poke: any) => {
          return (
            <>
              <div className="col-md-4">
                <div className="card text-center" style={{ width: "18rem" }}>
                  <Image width="100" height="100" className="card-img-top" src={poke.sprites.front_default} alt={poke.name}/>
                  <div className="card-body">
                    <h2 className="card-title text-uppercase">{poke.name}</h2>
                    <Link href={{ pathname: '/detalle', query: { id: `${poke.id}` } }} className="btn btn-primary">
                      Detalle
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default Home;
