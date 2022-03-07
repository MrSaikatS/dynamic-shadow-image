import Testbox from "../components/Testbox";

const imgs = ["/2325446.jpg", "/2387873.jpg", "/844297.jpg", "/2559941.jpg"];

const index = () => {
	return (
		<main>
			<div className='my-14 text-white text-center text-4xl'>
				Dynamic Shadow Image
			</div>
			<div className='w-fit mx-auto mb-14'>
				<div className='grid grid-rows-4 grid-cols-1 gap-28'>
					{imgs.map((imgs, index) => {
						return <Testbox key={index} img={imgs} />;
					})}
				</div>
			</div>
		</main>
	);
};

export default index;
