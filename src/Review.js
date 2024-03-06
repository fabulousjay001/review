import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
	const [index, setIndex] = useState(0);

	const { name, job, image, text } = people[index];

	const checkNumber = (number) => {
		if (number > people.length - 1) {
			return 0;
		} else if (number < 0) {
			return people.length - 1;
		} else {
			return number;
		}
	};

	const nextItem = () => {
		setIndex(checkNumber(index + 1));
	};

	const prevItem = () => {
		setIndex(checkNumber(index - 1));
	};

	const randomPersons = () => {
		let randomNumber = Math.floor(Math.random() * people.length);
		if (randomNumber === index) {
			randomNumber = index + 1;
		}
		setIndex(checkNumber(randomNumber)); //we passed in checknumber cos we dont value to be bigger than index	};

	return (
		<article className="review">
			<div className="img-container">
				<img src={image} alt={name} className="person-img" />
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<p className="job">{job}</p>
			<p className="info">{text}</p>
			<div className="">
				<button onClick={prevItem} className="prev-btn">
					<FaChevronLeft />
				</button>
				<button onClick={nextItem} className="next-btn">
					<FaChevronRight />
				</button>
			</div>
			<button onClick={randomPersons} className="random-btn">
				Surprise Me
			</button>
		</article>
	);
};

export default Review;
