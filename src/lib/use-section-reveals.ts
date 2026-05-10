import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSectionReveals() {
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		const context = gsap.context(() => {
			gsap.utils.toArray<HTMLElement>("[data-scroll-reveal]").forEach((element) => {
				gsap.from(element, {
					y: 36,
					opacity: 0,
					duration: 0.8,
					ease: "power3.out",
					scrollTrigger: {
						trigger: element,
						start: "top 82%",
						once: true,
					},
				});
			});
		});

		return () => context.revert();
	}, []);
}
