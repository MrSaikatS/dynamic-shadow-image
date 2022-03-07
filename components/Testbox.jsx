const Testbox = ({ img }) => {
	// console.log(img);

	return (
		<>
			<div className='relative'>
				<img
					className='absolute rounded-2xl scale-105 blur-lg'
					src={img}
					alt='Shadow Image'
				/>
				<img className='relative rounded-2xl' src={img} alt='Main Image' />
			</div>
		</>
	);
};

export default Testbox;
