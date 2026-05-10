import { ArrowUpRight, Phone, ShieldCheck } from "lucide-react";

export function ContactSection() {
	return (
		<section
			id="contato"
			className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
		>
			<div data-scroll-reveal className="rounded-[2.2rem] border border-pm-neon/20 bg-[radial-gradient(circle_at_10%_20%,var(--color-pm-neon-soft),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-8 shadow-2xl shadow-pm-neon/5 sm:p-10 lg:p-14">
				<div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
					<div>
						<p className="inline-flex items-center gap-2 font-semibold text-pm-neon text-xs uppercase tracking-[0.26em]">
							<ShieldCheck className="size-4" />
							Contato
						</p>
						<h2 className="mt-5 max-w-3xl text-balance font-heading text-7xl leading-[0.82] tracking-[-0.02em] sm:text-8xl lg:text-9xl">
							Fale agora. Siga depois.
						</h2>
					</div>

					<div className="grid gap-4">
						<a
							href="tel:+5500000000000"
							className="flex items-center justify-between rounded-3xl border border-pm-neon/25 bg-pm-neon p-5 font-semibold text-pm-bg transition hover:bg-pm-neon/90"
						>
							<span className="flex items-center gap-3">
								<Phone className="size-5" />
								(00) 0000-0000
							</span>
							<ArrowUpRight className="size-5" />
						</a>
						<a
							href="mailto:contato@postomarques.com.br"
							className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.05] p-5 text-pm-text transition hover:border-pm-orange/50 hover:bg-pm-orange/10"
						>
							<span>contato@postomarques.com.br</span>
							<ArrowUpRight className="size-5" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
