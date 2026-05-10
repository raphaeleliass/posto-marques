import { gsap } from "gsap";
import { ArrowUpRight, Fuel, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		const context = gsap.context(() => {
			gsap.from("[data-hero-reveal]", {
				y: 28,
				opacity: 0,
				duration: 0.9,
				ease: "power3.out",
				stagger: 0.12,
			});
		}, sectionRef);

		return () => context.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pt-28 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20"
		>
			<div className="absolute top-20 right-0 h-48 w-48 rounded-full bg-pm-neon/12 blur-3xl" />
			<div className="absolute bottom-20 left-0 h-56 w-56 rounded-full bg-pm-orange/10 blur-3xl" />

			<div className="relative z-10 max-w-3xl">
				<p
					data-hero-reveal
					className="mb-6 inline-flex items-center gap-2 rounded-full border border-pm-neon/25 bg-white/[0.04] px-4 py-2 font-semibold text-pm-neon text-xs uppercase tracking-[0.24em] shadow-lg shadow-pm-neon/10 backdrop-blur"
				>
					<span className="size-2 rounded-full bg-pm-neon shadow-lg shadow-pm-neon/70" />
					Experiência premium
				</p>

				<h1
					data-hero-reveal
					className="max-w-4xl text-balance font-heading text-8xl text-pm-text leading-[0.78] tracking-[-0.025em] sm:text-9xl md:text-[10rem] lg:text-[11rem]"
				>
					Abasteça.
					<span className="block text-pm-neon drop-shadow-[0_0_22px_rgb(34_255_90_/_0.22)]">
						Siga o fluxo.
					</span>
				</h1>

				<p
					data-hero-reveal
					className="mt-7 max-w-xl text-lg text-pm-text/64 leading-8 sm:text-xl"
				>
					Combustível confiável, loja de conveniência e lava rápido em uma
					parada objetiva para você voltar ao caminho sem perder tempo.
				</p>

				<div data-hero-reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
					<Button
						className="h-12 rounded-full bg-pm-neon px-6 font-semibold text-pm-bg shadow-pm-neon/20 shadow-xl hover:bg-pm-neon/90"
						onClick={() => {
							window.location.hash = "contato";
						}}
					>
						Entrar em contato
						<ArrowUpRight />
					</Button>
					<Button
						variant="outline"
						className="h-12 rounded-full border-white/15 bg-white/[0.04] px-6 text-pm-text hover:border-pm-orange/60 hover:bg-pm-orange/10"
						onClick={() => {
							window.location.hash = "localizacao";
						}}
					>
						Ver localização
						<MapPin />
					</Button>
				</div>
			</div>

			<motion.div
				data-hero-reveal
				whileHover={{ y: -6 }}
				transition={{ type: "spring", stiffness: 180, damping: 22 }}
				className="relative z-10 mx-auto w-full max-w-115 rounded-[2.4rem] border border-white/10 bg-pm-surface-strong p-3 shadow-2xl shadow-black/40 sm:p-4"
			>
				<div className="relative min-h-[520px] overflow-hidden rounded-[1.9rem] border border-white/10 bg-[radial-gradient(circle_at_70%_18%,rgb(34_255_90_/_0.18),transparent_28%),linear-gradient(145deg,#242823,#090a09_58%,#050605)] p-6">
					<div className="absolute inset-y-0 left-18 w-px bg-white/8" />
					<div className="absolute inset-y-12 left-22 w-px bg-pm-neon/20" />
					<div className="absolute top-6 right-6 rounded-full border border-pm-neon/25 bg-pm-neon/10 px-4 py-2 font-semibold text-pm-neon text-xs uppercase tracking-[0.22em]">
						Aberto
					</div>

					<div className="absolute top-8 left-6 grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-pm-neon">
						<Fuel className="size-6" />
					</div>

					<div className="absolute top-28 right-8 left-8 text-right">
						<p className="font-heading text-[9.5rem] text-pm-neon leading-[0.78] tracking-[-0.03em] drop-shadow-[0_0_24px_rgb(34_255_90_/_0.24)]">
							GO
						</p>
						<p className="font-semibold text-pm-text/56 text-xs uppercase tracking-[0.28em]">
							Fuel / shop / wash
						</p>
					</div>

					<div className="absolute right-6 bottom-6 left-6 rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur">
						<p className="font-heading text-5xl leading-none">Posto Marques</p>
						<p className="mt-3 max-w-xs text-pm-text/58 text-sm leading-6">
							Uma parada rápida, limpa e segura para seguir melhor.
						</p>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
