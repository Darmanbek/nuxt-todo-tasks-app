export const useDrawerStore = defineStore("drawer", () => {
	const right = ref(false)
	const left = ref(false)

	const toggleDrawer = (type: "left" | "right") => {
		console.log(type)
		if (type === "right") {
			console.log(right)
			right.value = !right.value
			return
		}
		console.log(left)
		left.value = !left.value
	}

	return { left, right, toggleDrawer }
})
