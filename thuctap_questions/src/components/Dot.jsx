const Dot = () => {
	return (
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={14}
				height={14}
				viewBox="0 0 14 14"
				fill="none"
			>
				<circle cx={7} cy={7} r={7} fill="white" />
				<circle
					cx={7}
					cy={7}
					r="6.5"
					stroke="black"
					strokeOpacity="0.3"
					strokeDasharray="2 2"
				/>
			</svg>
		</div>
	);
};

export default Dot;
