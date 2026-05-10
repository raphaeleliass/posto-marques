import { navigation } from "./site-data";

export function Header() {
	return (
		<header className="fixed inset-x-0 top-0 z-50 border-white/10 border-b bg-pm-bg/72 backdrop-blur-xl">
			<nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
				<a href="#topo" className="group flex items-center gap-3">
					<span className="grid size-10 place-items-center rounded-2xl border border-pm-neon/45 bg-pm-surface font-heading text-2xl text-pm-neon shadow-lg shadow-pm-neon/20 tracking-[0.02em]">
						PM
					</span>
					<span className="font-semibold text-pm-text text-sm uppercase tracking-[0.22em]">
						Posto Marques
					</span>
				</a>

				<div className="hidden items-center gap-7 md:flex">
					{navigation.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="font-medium text-pm-text/55 text-xs uppercase tracking-[0.22em] transition hover:text-pm-neon"
						>
							{item.label}
						</a>
					))}
				</div>

				<a
					href="#contato"
					className="rounded-full border border-pm-neon/35 bg-pm-neon/8 px-4 py-2 font-semibold text-pm-text text-xs uppercase tracking-[0.18em] transition hover:border-pm-neon/80 hover:bg-pm-neon/14"
				>
					Fale conosco
				</a>
			</nav>
		</header>
	);
}
