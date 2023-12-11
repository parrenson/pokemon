import { promises as fs } from 'fs';

export default async function Cards() {
    const data = await fs.readFile(process.cwd() + '/app/scripts/poke-json.json', 'utf-8');

    <h1>{data}</h1>
}
