const Testbox = ({ img }) => {
	// console.log(img);

	return (
		<>
			<div className='relative'>
				<img
					className='absolute scale-105 blur-lg'
					src={img}
					alt='Shadow Image'
				/>
				<img className='relative' src={img} alt='Main Image' />
			</div>
		</>
	);
};

export default Testbox;
