"use client"

import { useState } from "react";
import IDCard from "@/components/id-card";

export default function Home() {
	const [name, setName] = useState("")
	const [linkedin, setLinkedin] = useState("")
	const [email, setEmail] = useState("")
	return <main>
		<IDCard name={name} linkedin={linkedin} />
		<div className="">
			<div className="flex justify-center items-center flex-col gap-2 my-10 max-w-[400px] mx-auto">
				<input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border border-gray-300 rounded-md w-full" />
				<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="p-2 border border-gray-300 rounded-md w-full" />
				<input type="text" placeholder="Linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} className="p-2 border border-gray-300 rounded-md w-full" />
			</div>
		</div>
	</main>;
}
