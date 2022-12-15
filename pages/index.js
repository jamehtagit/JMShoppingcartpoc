import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import useBestquery from '../util/reqctquery'
export default function Home() {
	const {  isLoading,
		isFetching,
		data,
		status} =  useBestquery()

	return (
		<>
			<Head>
				<title>JM Gadgets | Home</title>
			</Head>
			<div className="container">
				<h2 className={styles.title}>
					All Products <span>🤖</span>
				</h2>
				<div className={styles.products_container}>
					{data?.products?.map((product) => {
						return (
							<div className={styles.product_card} key={product.id}>
								
									
										<div className={styles.product_img}>
											<Image src={product.image} alt={product.title} width="100" height="150" />
										</div>
									
								
								<div className={styles.product_content}>
									<h3>{product.title}</h3>
									<p>${product.price}</p>
									<button
										className="btn snipcart-add-item"
										data-item-id={product.id}
										data-item-price={product.price}
									    data-item-image={product.image}
										data-item-name={product.title}
									>
										Add to cart 🛒
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

