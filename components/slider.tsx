import React, { useContext, useEffect, useRef } from 'react'
import Image from 'next/image'
import PinkPanda from '../assets/pinkpanda.webp'
import { SizeContext } from '../utils/size-observer'
import useAnimateionFrame from '../utils/use-animation-frame'

interface Props {
	contentWidth: number
}

const SliderContainer: React.FC<Props> = ({ contentWidth }) => {
	const { innerWidth } = useContext(SizeContext)

	const refScrollX = useRef<number>(0)
	const refContainer = useRef<HTMLDivElement>(null)
	const refContent = useRef<HTMLDivElement>(null)

	let enabled = false

	if (innerWidth != 0) {
		enabled = innerWidth < contentWidth
	}

	useAnimateionFrame(enabled, () => {
		const { current: elContainer } = refContainer
		const { current: elContent } = refContent
		if (elContainer && elContent) {
			refScrollX.current += 0.5
			elContainer.scrollLeft = refScrollX.current
			// console.log(elContainer.scrollLeft)

			if (elContainer.scrollLeft >= (elContent.clientWidth - elContainer.clientWidth)) {
				refScrollX.current = 0
				elContainer.scrollLeft = refScrollX.current
			}

		}
	})

	useEffect(() => {
		const { current: elContent } = refContent
		if (elContent) {
			console.log(`refContent width: ${elContent.clientWidth}`)
		}
	}, [])


	return (
		<div ref={refContainer} className='slider-container whitespace-nowrap overflow-x-hidden'>
			<div ref={refContent} className='content inline-block'>
				<span className='inline-flex items-center justify-center  w-40 border-black border-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span className='inline-flex items-center justify-center  w-40 border-black border-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span className='inline-flex items-center justify-center  w-40 border-black border-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span className='inline-flex items-center justify-center  w-40 border-black border-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span className='inline-flex items-center justify-center  w-40 border-black border-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span className='inline-flex items-center justify-center  w-40 border-black border-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span className='inline-flex items-center justify-center  w-40 border-black border-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span className='inline-flex items-center justify-center  w-40 border-black border-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span className='inline-flex items-center justify-center  w-40 border-black border-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span className='inline-flex items-center justify-center  w-40 border-black border-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span className='inline-flex items-center justify-center  w-40 border-black border-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span className='inline-flex items-center justify-center  w-40 border-black border-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span>Last item</span>
			</div>
		</div>
	)
}

export default SliderContainer
