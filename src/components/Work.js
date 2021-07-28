/** @format */

import React from "react";
import classes from "./Work.module.css";

const Work = () => {
	return (
		<section id='work' className={classes.work}>
			<div className={classes.head}>
				<div className={classes.image}>
					<img src='/images/anton.png' alt='features Image' />
				</div>
				<div className={classes.content}>
					<h2>Who we are</h2>
					<p>
						We are Abaton Electronics, a company specializing in
						automation's, robotics, creating electrical constructions and
						installing security systems. Our goal is to make people’s life
						easier by making some ordinary everyday tasks less time
						consuming with our devices.
					</p>
				</div>
			</div>

			<div id='work' className={classes["work-bottom-wrap"]}>
				<div className={classes["work-bottom-content"]}>
					<div className={classes["image-warper"]}>
						<img src='/images/facetwo.png' alt='features Image' />
					</div>
					<h3>adalah contoh teks atau dummy</h3>
					<p>
						adalah contoh teks atau dummy dalam industri percetakan dan
						penataan huruf atau typesetting. Lorem Ipsum telah menjadi
						standar contoh teks sejak tahun 1500an, saat seorang tukang
						cetak yang tidak dikenal mengambil.
					</p>
				</div>
				<div className={classes["work-bottom-content"]}>
					<div className={classes["image-warper"]}>
						<img src='/images/sensor.png' alt='features Image' />
					</div>
					<h3>adalah contoh teks atau dummy</h3>
					<p>
						adalah contoh teks atau dummy dalam industri percetakan dan
						penataan huruf atau typesetting. Lorem Ipsum telah menjadi
						standar contoh teks sejak tahun 1500an, saat seorang tukang
						cetak yang tidak dikenal mengambil.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Work;
