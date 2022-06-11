import React from 'react'
import SliderContainer from './slider'
import Image from 'next/image'
import Rainbow from '../assets/rainbow.webp'
import PinkPanda from '../assets/pinkpanda.webp'

const ClientLogos: React.FC = () => {
	return (
		<SliderContainer initalOffsetX={0} contentWidth={1290}>
			<div className='whitespace-nowrap '>
				<span style={{ width: '150px' }} className='mx-2'>
					<Image src={Rainbow} width={150} height={50} objectFit='contain' />
				</span>
				<span style={{ width: '150px' }} className='mx-2'>
					<Image src={Rainbow} width={150} height={50} objectFit='contain' />
				</span>
				<span style={{ width: '150px' }} className='mx-2'>
					<Image src={Rainbow} width={150} height={50} objectFit='contain' />
				</span>
				<span style={{ width: '150px' }} className='mx-2'>
					<Image src={Rainbow} width={150} height={50} objectFit='contain' />
				</span>
				<span style={{ width: '150px' }} className='mx-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span style={{ width: '150px' }} className='mx-2'>
					<Image src={Rainbow} width={150} height={50} objectFit='contain' />
				</span>
				<span style={{ width: '150px' }} className='mx-2'>
					<Image src={Rainbow} width={150} height={50} objectFit='contain' />
				</span>
				<span style={{ width: '150px' }} className='mx-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span style={{ width: '150px' }} className='mx-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span style={{ width: '150px' }} className='mx-2'>
					<Image src={Rainbow} width={150} height={50} objectFit='contain' />
				</span>
				<span style={{ width: '150px' }} className='mx-2'>
					<Image src={Rainbow} width={150} height={50} objectFit='contain' />
				</span>
				<span style={{ width: '150px' }} className='mx-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
				<span style={{ width: '150px' }} className='mx-2'>
					<Image src={PinkPanda} width={150} height={50} objectFit='contain' />
				</span>
			</div>
		</SliderContainer>
	)
}

export default ClientLogos
