import { biosLogo } from "@/assets";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Slash } from "lucide-react";
import Image from "next/image";
import React from "react";

const IDCard = ({
	name,
	linkedin,
	className,
}: { name: string; linkedin: string; className?: string }) => {
	return (
		<div className={cn("w-[400px]", className)}>
			{/* STRAP */}
			<div className="w-[10%] h-[80px] bg-[#2b28ff] mx-auto shadow-xl" />
			<div className="w-[48px] h-[30px] bg-[#171717] rounded-[4px] mx-auto" />
			<div className="w-[24px] h-[18px] bg-[#171717] rounded-br-[4px] rounded-bl-[4px] mx-auto relative z-10" />
			{/* STRAP */}

			{/* CARD */}
			<div className="w-full bg-[#f6f6f6] border border-[#e9e9e9] mx-auto -my-[15px] px-1.5 relative z-0 rounded-[28px] shadow-2xl">
				{/* CARD HOLD */}
				<div className="w-[44px] h-[12px] my-[8px] bg-white rounded-full border border-[#e9e9e9] mx-auto" />
				{/* CARD HOLD */}

				{/* CARD INNER */}
				<div className="bg-white min-h-[400px] rounded-[28px] px-[32px]">
					{/* THREE LINES */}
					<div className="flex gap-2 py-5">
						<div className="h-0.5 bg-[#2b28ff] w-full rounded-full" />
						<div className="h-0.5 bg-[#2b28ff] w-full rounded-full" />
						<div className="h-0.5 bg-[#2b28ff] w-full rounded-full" />
					</div>
					{/* THREE LINES */}

					{/* LOGO */}
					<div className="flex justify-between items-center py-5">
						<p className="font-mono font-bold text-xl leading-[1.1]">
							BiOS
							<br />
							Community
						</p>
						<Image
							src={biosLogo}
							alt="BiOS Community Logo"
							className="w-[72px]"
						/>
					</div>
					{/* LOGO */}

					{/* TITLE */}
					<div className="py-7 space-y-2">
						<p className="font-semibold text-gray-600 text-lg">
							I'm attending
						</p>
						<h1 className="font-bold text-[50px] leading-[1.2]">
							Open Source Connect
						</h1>
					</div>
					{/* TITLE */}

					{/* DATE & VENUE */}
					<div className="py-6 flex justify-between items-center font-mono font-medium">
						<div className="font-mono font-medium flex gap-[3px] items-center">
							<span className="">12</span>
							<Slash className="-rotate-[20deg]" size={13} />
							<span className="">01</span>
							<Slash className="-rotate-[20deg]" size={13} />
							<span className="">2025</span>
						</div>
						<p className="">Solace Infotech</p>
					</div>
					{/* DATE & VENUE */}

					{/* NAME */}
					<div className="space-y-2 py-4">
						<p className="text-[18px] px-4 py-2 bg-[#2b28ff] font-semibold text-center rounded-full text-white">
							{name ? name : "Adarsh Dubey"}
						</p>
						<p className="text-center font-semibold text-gray-700">
							{linkedin
								? linkedin
								: "linkedin.com/in/dubeyadarsh"}
						</p>
					</div>
					{/* NAME */}
				</div>
				{/* CARD INNER */}

				{/* WEBSITE LINK */}
				<p className="py-2 text-sm text-gray-500 flex gap-1 items-center w-fit mx-auto">
					Create your own at{" "}
					<span className="text-black">bios.vercel.app/badge</span>
					<ArrowUpRight className="text-[#2b28ff]" size={18} />
				</p>
			</div>
			{/* CARD */}
		</div>
	);
};

export default IDCard;
