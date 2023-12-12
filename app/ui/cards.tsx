import Image from "next/image";
import { promises as fs } from "fs";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";

async function Cards() {
    const data = await fs.readFile(
        process.cwd() + "/app/scripts/poke-json.json",
        "utf-8"
    );
    const pokemon = JSON.parse(data);

    return (
        <>
            <div className="max-w-[900px] flex flex-wrap gap-4 px-8">
                {pokemon.map((poke: any, index: number) => {
                    return (
                        <Card
                            key={index}
                            isFooterBlurred
                            className={`w-[calc(50%-16px)] max-w-[calc(50%-16px)] relative card`}
                            style={{ width: "300px", height: "400px" }}
                        >
                            <CardBody className="p-0">
                                <Image
                                    width={300}
                                    height={300}
                                    alt={poke.name}
                                    className="w-full h-56 object-cover"
                                    src={poke.sprites.front_default}
                                />
                            </CardBody>
                            <CardFooter className="absolute bottom-0 left-0 right-0 bg-white/30 border-t-1 border-zinc-100/50 z-10 flex justify-between">
                                <h4 className="text-black font-medium text-4xl uppercase tracking-wide">
                                    {poke.name}
                                </h4>
                                <Link href={{ pathname: '/detalle', query: { id: `${poke.id}` } }}>
                                    <Button
                                        color="warning"
                                        variant="ghost"
                                        radius="md"
                                        size="md"
                                    >
                                        Detalle
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </>
    );
}

export default Cards;
