import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PokemonDetail, PokemonListResponse } from "@/types/pokemon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface PokemonDetailPageProps {
  params: Promise<{ name: string }>;
}

async function getPokemonDetail(name: string): Promise<PokemonDetail> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    next: { revalidate: 3600 }, // Cache trong 1 giờ
  });
  if (!res.ok) {
    if (res.status === 404) notFound();
    throw new Error("Không thể tải thông tin Pokémon");
  }
  return res.json();
}

export default async function PokemonDetailPage({
  params,
}: PokemonDetailPageProps) {
  const { name } = await params;
  const pokemon = await getPokemonDetail(name);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <Link
        href="/pokemon"
        className="inline-block text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-400"
      >
        ← Quay lại PokéDex
      </Link>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
        {/* Hình ảnh */}
        <div className="relative aspect-square rounded-3xl border-2 border-emerald-300 bg-linear-to-br from-emerald-50 to-cyan-50 p-8 shadow-xl dark:border-emerald-900 dark:from-gray-900 dark:to-cyan-950/30">
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            fill
            className="object-contain p-4"
            priority
          />
          <div className="absolute top-4 left-4">
            <Badge
              variant="outline"
              className="bg-white/80 text-xl dark:bg-black/80"
            >
              #{pokemon.id.toString().padStart(3, "0")}
            </Badge>
          </div>
        </div>

        {/* Thông tin */}
        <div className="space-y-6">
          <h1 className="text-5xl font-black capitalize text-gray-900 dark:text-gray-100">
            {pokemon.name}
          </h1>

          <div className="flex gap-2">
            {pokemon.types.map((t) => (
              <Badge
                key={t.type.name}
                className="px-4 py-1 text-lg capitalize bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-300"
              >
                {t.type.name}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader className="py-3 px-4">
                <CardTitle className="text-xs uppercase text-gray-500">
                  Chiều cao
                </CardTitle>
              </CardHeader>
              <CardContent className="py-2 px-4">
                <span className="text-xl font-bold">
                  {pokemon.height / 10} m
                </span>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="py-3 px-4">
                <CardTitle className="text-xs uppercase text-gray-500">
                  Cân nặng
                </CardTitle>
              </CardHeader>
              <CardContent className="py-2 px-4">
                <span className="text-xl font-bold">
                  {pokemon.weight / 10} kg
                </span>
              </CardContent>
            </Card>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-bold mb-3">Chỉ số cơ bản</h3>
            <div className="space-y-3">
              {pokemon.stats.map((s) => (
                <div key={s.stat.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="capitalize text-gray-500">
                      {s.stat.name.replace("-", " ")}
                    </span>
                    <span className="font-bold">{s.base_stat}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500"
                      style={{
                        width: `${Math.min(100, (s.base_stat / 255) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-bold mb-3">Khả năng (Abilities)</h3>
            <div className="flex flex-wrap gap-2">
              {pokemon.abilities.map((a) => (
                <Badge
                  key={a.ability.name}
                  variant="outline"
                  className="capitalize"
                >
                  {a.ability.name.replace("-", " ")}
                  {a.is_hidden && (
                    <span className="ml-1 text-[10px] opacity-50">(Ẩn)</span>
                  )}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=24");
  const data: PokemonListResponse = await res.json();
  return data.results.map((p) => ({
    name: p.name,
  }));
}
