import Link from "next/link";
import Image from "next/image";
import { PokemonListResponse, PokemonDetail } from "@/types/pokemon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

async function getPokemonList(limit = 20): Promise<PokemonDetail[]> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  if (!res.ok) throw new Error("Không thể tải danh sách Pokémon");

  const data: PokemonListResponse = await res.json();

  // Fetch chi tiết cho từng Pokémon để lấy ảnh
  const details = await Promise.all(
    data.results.map(async (p) => {
      const resp = await fetch(p.url);
      return resp.json();
    }),
  );

  return details;
}

export default async function PokemonPage() {
  const pokemons = await getPokemonList(24);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <section className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-emerald-100 bg-linear-to-r from-emerald-50 via-white to-cyan-50 p-6 shadow-sm dark:border-emerald-900/40 dark:from-emerald-950/20 dark:via-gray-950 dark:to-cyan-950/20 md:flex-row md:items-center">
        <div>
          <h1 className="mb-2 bg-linear-to-r from-emerald-700 to-cyan-600 bg-clip-text text-4xl font-extrabold text-transparent dark:from-emerald-300 dark:to-cyan-300">
            PokéDex
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Khám phá thế giới Pokémon từ PokéAPI
          </p>
        </div>
        <Badge variant="outline" className="px-4 py-1 text-lg">
          Tổng cộng {pokemons.length} Pokémon
        </Badge>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} href={`/pokemon/${pokemon.name}`}>
            <Card className="group cursor-pointer overflow-hidden border-gray-200/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-xl dark:hover:border-emerald-800">
              <CardHeader className="relative aspect-square bg-linear-to-br from-emerald-50 to-cyan-50 p-0 dark:from-gray-900 dark:to-cyan-950/30">
                <div className="absolute top-2 right-2 z-10">
                  <span className="text-xs font-bold text-gray-400">
                    #{pokemon.id.toString().padStart(3, "0")}
                  </span>
                </div>
                <div className="relative w-full h-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={
                      pokemon.sprites.other["official-artwork"].front_default ||
                      pokemon.sprites.front_default
                    }
                    alt={pokemon.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="mb-3 text-center capitalize transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-300">
                  {pokemon.name}
                </CardTitle>
                <div className="flex justify-center gap-2">
                  {pokemon.types.map((t) => (
                    <Badge
                      key={t.type.name}
                      className="capitalize bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-300"
                    >
                      {t.type.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
