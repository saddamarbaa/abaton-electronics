/** @format */

import { Card } from "@material-ui/core";
import React, { memo, useRef } from "react";
import classes from "./Contact.module.css";
import Fade from "react-reveal/Fade";

const Contact = () => {
	const emailReference = useRef(null);
	const phoneNumberReference = useRef(null);

	const submitMessageHandler = (event) => {
		event.preventDefault();
		const enteredEmail = emailReference.current.value;
	};

	return (
		<Fade bottom>
			<section className={classes.contact} id='contact'>
				<div className={classes["content-wrapper"]}>
					<h1>Get In Touch</h1>
					<p>
						Whether you're interested in pricing, a 30 day trial, or a
						demo of the dashboard, we'd be delighted to open a dialogue.
					</p>
					<p>
						Complete the form below and we'll be in touch as soon as we
						can.
					</p>

					<div className={classes["form-wrapper"]}>
						<form autoComplete='off'>
							<div className={classes["namesContent"]}>
								<label for='firstName'> </label>
								<input
									style={{ marginRight: "1rem" }}
									placeholder='First Name:'
									type='text'
									id='firstName'
									name='firstName'
									autoComplete='firstName'
									required
								/>

								<label for='lastName'> </label>
								<input
									class='input'
									placeholder='Last Name:'
									type='text'
									id='lastName'
									name='lastName'
									autoComplete='lastName'
									required
								/>
							</div>
							<label for='companyName'> </label>
							<input
								placeholder='Company name:'
								class='input'
								type='text'
								id='companyName'
								name='companyName'
								autoComplete='companyName'
								required
							/>

							<label for='number'> </label>
							<input
								placeholder='Phone number'
								ref={phoneNumberReference}
								class='input'
								type='number'
								id='number'
								name='number'
								autoComplete='number'
								required
							/>

							<label for='email'> </label>
							<input
								placeholder='Email address'
								ref={emailReference}
								class='input'
								type='email'
								id='email'
								name='email'
								autoComplete='email'
								required
							/>

							<textarea
								rows='4'
								cols='50'
								name='comment'
								form='usrform'></textarea>

							<button
								onClick={submitMessageHandler}
								class='button create-button'
								type='submit'
								name='submit'
								id='submit-form'>
								Summit
							</button>
						</form>
					</div>
				</div>
			</section>
		</Fade>
	);
};

export default memo(Contact);
