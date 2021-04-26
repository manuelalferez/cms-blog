import Layout from '../components/Layout.js';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';

const Index = ({ postList }) => {
	return (
		<div>
			<Layout>
				<ul className="space-y-4 grid justify-items-left pt-9 max-w-xl mx-auto">
					{postList.map((post) => {
						return (
							<li key={post.title} className="flex">
								<span className="block pr-10 text-gray-600 p-2 font-light">{post.date}</span>
								<Link href="/">
									<a className="text-blue-800 hover:bg-gray-100 p-2 font-medium">{post.title}</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</Layout>
		</div>
	);
};

export const getStaticProps = async () => {
	const path = process.cwd() + '/posts/';
	const fileNames = fs.readdirSync(path);

	const postList = fileNames.map((fileName) => {
		const filePath = path + fileName;
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		const result = matter(fileContent);
		return {
			title: result.data.title,
			date: result.data.date,
		};
	});

	return {
		props: {
			postList: postList.sort((a, b) => {
				const aDate = new Date(a.date);
				const bDate = new Date(b.date);
				return aDate < bDate ? 1 : -1;
			}),
		},
	};
};

export default Index;
