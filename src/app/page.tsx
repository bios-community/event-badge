"use client";

import { bg } from "@/assets";
import IDCard from "@/components/id-card";
import html2canvas from "html2canvas";
import downloadjs from "downloadjs";
import Image from "next/image";
import { useState } from "react";
import * as htmlToImage from 'html-to-image'

export default function Home() {
	const [name, setName] = useState("");
	const [linkedin, setLinkedin] = useState("");
	const [email, setEmail] = useState("");

	const handleDownload = async () => {
		const element = document.getElementById("download");
		if (!element) return;

		// const canvas = await html2canvas(element, { scrollX: 0, scrollY: 0, allowTaint: true, useCORS: true });
		// const dataURL = canvas.toDataURL("image/png");
		const dataURL = await htmlToImage.toPng(element)
		downloadjs(dataURL, "invoke-card.png", "image/png")
	};

	return (
		<>
			<main className="flex flex-col-reverse md:flex-row max-w-7xl mx-auto px-7 gap-7">
				<div className="flex justify-center flex-col gap-5 grow -translate-y-20 min-[450px]:translate-y-0">
					<p className="text-2xl font-semibold">
						Enter your details below:
					</p>
					<div className="flex justify-center items-center flex-col gap-2">
						<input
							type="text"
							placeholder="Email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							className="p-2 border border-gray-300 rounded-md w-full"
						/>
						<input
							type="text"
							placeholder="Name"
							value={name}
							onChange={e => setName(e.target.value)}
							className="p-2 border border-gray-300 rounded-md w-full"
						/>
						<input
							type="text"
							placeholder="Linkedin"
							value={linkedin}
							onChange={e => setLinkedin(e.target.value)}
							className="p-2 border border-gray-300 rounded-md w-full"
						/>
					</div>
					<button
						type="button"
						onClick={handleDownload}
						className="bg-[#2b28ff] hover:opacity-90 transition-opacity p-2 rounded-md text-white font-semibold"
					>
						Download
					</button>
				</div>
				<div className="md:grow scale-[80%] -translate-x-[10%] min-[450px]:scale-[100%] min-[450px]:-translate-x-0 origin-top">
					<IDCard
						name={name}
						linkedin={linkedin}
						className="mx-auto"
					/>
				</div>
			</main>
			{/* Off-screen Div for Download */}
			<h2 className="text-center font-semibold text-2xl mt-20">Downloaded image will be:</h2>
			<div className="mt-10" />
			<div
				className="aspect-square overflow-hidden w-[760px] relative bg-[url('/bg.jpeg')] bg-cover bg-center mb-20"
				id="download"
			>
				<IDCard name={name} linkedin={linkedin} className="mx-auto" />
			</div>
		</>
	);
}
