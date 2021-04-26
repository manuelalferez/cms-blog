import Layout from '../components/Layout.js';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';

const Index = ({ postList }) => {
	return (
		<div>
			<Layout>
				<div className="flex justify-center pt-2">
					<p className="max-w-xl p-2">
						Hi, my name is Manuel and I am studying at the University of Jaén. Sharing project on GitHub.
						Learning about Open Source.
					</p>
				</div>
				<ul className="space-y-4 grid justify-items-center pt-9">
					{postList.map((post) => {
						return (
							<li key={post.title} className="flex">
								<span className="block pr-10 text-gray-600 p-2 font-light">{post.date}</span>
								<Link
									href={{
										pathname: 'post/[id]',
										query: {
											id: post.id,
										},
									}}
								>
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
			id: fileName.replace('.md', '').trim(),
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
