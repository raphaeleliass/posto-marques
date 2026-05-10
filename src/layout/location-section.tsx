import { ArrowUpRight, Clock3, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

export function LocationSection() {
	return (
		<section
			id="localizacao"
			className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-20"
		>
			<div
				data-scroll-reveal
				className="grid overflow-hidden rounded-[2.2rem] border border-white/10 bg-pm-surface lg:grid-cols-[1.15fr_0.85fr]"
			>
				<div className="relative min-h-[420px] p-8 sm:p-10">
					<div className="absolute inset-8 rounded-[1.5rem] border border-pm-neon/15" />
					<div className="absolute inset-x-20 top-1/2 h-px bg-pm-neon/20" />
					<div className="absolute inset-y-16 left-1/2 w-px bg-pm-neon/20" />
					<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
					<div className="absolute top-[42%] left-[54%] grid size-20 place-items-center rounded-[1.5rem] bg-pm-neon text-pm-bg shadow-2xl shadow-pm-neon/25">
						<MapPin className="size-7" />
					</div>
					<div className="relative z-10 max-w-xs rounded-3xl border border-white/10 bg-pm-bg/78 p-5 backdrop-blur">
						<p className="font-semibold text-pm-orange text-xs uppercase tracking-[0.24em]">
							Localização
						</p>
						<p className="mt-4 font-heading text-5xl leading-[0.9] tracking-[-0.02em]">
							Rota limpa para continuar.
						</p>
					</div>
				</div>

				<div className="border-white/10 border-t bg-pm-bg p-8 text-pm-text sm:p-10 lg:border-t-0 lg:border-l">
					<h2 className="font-heading text-7xl leading-[0.84] tracking-[-0.02em] sm:text-8xl">
						Venha até nós.
					</h2>

					<div className="mt-10 grid gap-5">
						<div className="flex gap-4 border-white/12 border-t pt-5">
							<MapPin className="mt-1 size-5 text-pm-neon" />
							<p className="text-white/70">Rod. Cel. Leôncio Viêira - Guaçuí</p>
						</div>
						<div className="flex gap-4 border-white/12 border-t pt-5">
							<Clock3 className="mt-1 size-5 text-pm-orange" />
							<p className="text-white/70">Domingo à domingo | 6h às 22h</p>
						</div>
					</div>
					<Button
						className="mt-10 h-12 rounded-full bg-pm-neon px-6 font-semibold text-pm-bg hover:bg-pm-neon/90"
						onClick={() => {
							window.open(
								"https://maps.app.goo.gl/S8w6wAbLofPtaMm16",
								"_blank",
							);
						}}
					>
						Abrir rota
						<ArrowUpRight />
					</Button>
				</div>
			</div>
		</section>
	);
}
