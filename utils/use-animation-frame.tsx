import React, { useEffect, useRef } from 'react'

const useAnimateionFrame = (enabled: boolean, callback: () => void) => {
	const requestRef = useRef<any>()

	const animate = () => {
		callback()
		requestRef.current = requestAnimationFrame(animate)
	}

	useEffect(() => {
		if (enabled) {
			animate()
		} else {
			cancelAnimationFrame(requestRef.current)
		}
	}, [enabled])
}

export default useAnimateionFrame
