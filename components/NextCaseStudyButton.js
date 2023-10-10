// NextCaseStudyButton.js
import Link from "next/link";

const NextCaseStudyButton = ({ nextCaseStudy }) => {
	return (
		<Link href={`/case-studies/${nextCaseStudy.slug}`}>
			<a className="next-case-study-button">
				<div className="next-case-study-thumbnail">
					<img src={nextCaseStudy.image} alt={nextCaseStudy.name} />
				</div>
				<div className="next-case-study-info">
					<h3>{nextCaseStudy.name}</h3>
					<p>Next Case Study</p>
				</div>
			</a>
		</Link>
	);
};

export default NextCaseStudyButton;
