import { useBreakpoints } from "@vueuse/core"

export const useResponsive = () => {
	const breakpoints = useBreakpoints({
		mobile: 0,
		tablet: 768,
		laptop: 1024,
		desktop: 1200
	})

	const isMobile = breakpoints.between("mobile", "desktop")

	return { isMobile }
}
