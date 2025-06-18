import React, { useState } from "react";
import {
	Home,
	User,
	Bell,
	MessageCircle,
	Search,
	Heart,
	Share,
	MoreHorizontal,
	Phone,
	Users,
	Settings,
	LogOut,
	Plus,
	Newspaper,
	Info,
	Activity,
	FileText,
	Send,
	History,
	PlayCircle,
	FileIcon,
	Headphones,
	Link,
	Clock,
} from "lucide-react";

// Define types for better TypeScript support
type MediaType = "all" | "photos" | "videos" | "docs" | "audio" | "links";

interface MediaItem {
	id: number;
	type: "photo" | "video" | "doc" | "audio" | "link";
	url?: string;
	name?: string;
}

const Profile: React.FC = () => {
	// const [activeCall, setActiveCall] = useState(false);
	const [activeTab, setActiveTab] = useState("messages"); // messages or history
	const [mediaTab, setMediaTab] = useState<MediaType>("all");
	const [messageInput, setMessageInput] = useState("");

	const stories = [
		{
			id: 1,
			name: "John Wick",
			image:
				"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
			isOwn: true,
		},
		{
			id: 2,
			name: "Idris Elba",
			image:
				"https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150",
		},
		{
			id: 3,
			name: "Juliet Lopez",
			image:
				"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
		},
		{
			id: 4,
			name: "Kelly Hawthorne",
			image:
				"https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
		},
		{
			id: 5,
			name: "Kat Dennings",
			image:
				"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=150",
		},
		{
			id: 6,
			name: "Chris Hemsworth",
			image:
				"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
		},
	];

	const userPosts = [
		{
			id: 1,
			author: "John Wick",
			authorImage:
				"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50",
			time: "3h",
			content:
				"Just finished an amazing photoshoot in downtown NYC! The city never fails to inspire me. 📸",
			image:
				"https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800",
			likes: 1247,
			comments: 89,
			shares: 23,
		},
		{
			id: 2,
			author: "John Wick",
			authorImage:
				"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50",
			time: "1d",
			content:
				"Behind the scenes of today's portrait session. Love capturing authentic moments.",
			image:
				"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800",
			likes: 892,
			comments: 45,
			shares: 12,
		},
		{
			id: 3,
			author: "John Wick",
			authorImage:
				"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50",
			time: "2d",
			content: "Golden hour magic in Central Park ✨",
			image:
				"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
			likes: 2156,
			comments: 134,
			shares: 67,
		},
	];

	// Random posts from story characters
	const feedPosts = [
		{
			id: 1,
			author: "Idris Elba",
			authorImage:
				"https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=50",
			time: "2h",
			content:
				"Amazing day at the Grand Canyon with friends! 🏔️ Nature never ceases to amaze me.",
			image:
				"https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800",
			likes: 2847,
			comments: 164,
			shares: 89,
		},
		{
			id: 2,
			author: "Juliet Lopez",
			authorImage:
				"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50",
			time: "4h",
			content:
				"Working on some new design concepts today. Creativity flows best with good coffee ☕",
			image:
				"https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
			likes: 1523,
			comments: 78,
			shares: 34,
		},
		{
			id: 3,
			author: "Kelly Hawthorne",
			authorImage:
				"https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=50",
			time: "6h",
			content: "Sunset yoga session by the beach. Finding peace in movement 🧘‍♀️",
			image:
				"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=800",
			likes: 987,
			comments: 45,
			shares: 23,
		},
		{
			id: 4,
			author: "Kat Dennings",
			authorImage:
				"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=50",
			time: "8h",
			content:
				"New York City never gets old! Every street corner tells a story 🏙️",
			image:
				"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800",
			likes: 2156,
			comments: 134,
			shares: 67,
		},
		{
			id: 5,
			author: "Chris Hemsworth",
			authorImage:
				"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50",
			time: "12h",
			content:
				"Training session complete! Nothing beats the feeling of pushing your limits 💪",
			image:
				"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
			likes: 3421,
			comments: 198,
			shares: 156,
		},
	];

	// const contacts = [
	// 	{
	// 		name: "Juliet Lopez",
	// 		status: "Calling",
	// 		platform: "Skype",
	// 		image:
	// 			"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50",
	// 		isActive: true,
	// 	},
	// 	{
	// 		name: "Idris Elba",
	// 		status: "Calling",
	// 		platform: "Skype",
	// 		image:
	// 			"https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=50",
	// 	},
	// 	{
	// 		name: "Kelly",
	// 		status: "Calling",
	// 		platform: "facebook",
	// 		image:
	// 			"https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=50",
	// 	},
	// 	{
	// 		name: "Kat",
	// 		status: "Calling",
	// 		platform: "WhatsApp",
	// 		image:
	// 			"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=50",
	// 	},
	// ];

	const messages = [
		{
			id: 1,
			text: "Hey! How's the design project going?",
			time: "10:30 AM",
			sent: false,
		},
		{
			id: 2,
			text: "It's going great! Just finished the mockups",
			time: "10:32 AM",
			sent: true,
		},
		{
			id: 3,
			text: "Can't wait to see them! When can we review?",
			time: "10:35 AM",
			sent: false,
		},
		{
			id: 4,
			text: "How about tomorrow at 2 PM?",
			time: "10:37 AM",
			sent: true,
		},
		{ id: 5, text: "Perfect! See you then 👍", time: "10:38 AM", sent: false },
	];

	const historyItems = [
		{
			id: 1,
			type: "call",
			action: "Video call",
			time: "2 hours ago",
			duration: "45 min",
		},
		{ id: 2, type: "message", action: "Sent message", time: "4 hours ago" },
		{ id: 3, type: "like", action: "Liked your post", time: "6 hours ago" },
		{
			id: 4,
			type: "comment",
			action: "Commented on your photo",
			time: "1 day ago",
		},
		{
			id: 5,
			type: "call",
			action: "Voice call",
			time: "2 days ago",
			duration: "23 min",
		},
	];

	const mediaItems: Record<MediaType, MediaItem[]> = {
		all: [
			{
				id: 1,
				type: "photo",
				url: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=200",
			},
			{
				id: 2,
				type: "video",
				url: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
			},
			{
				id: 3,
				type: "photo",
				url: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=200",
			},
			{ id: 4, type: "doc", name: "Project_Brief.pdf" },
			{ id: 5, type: "audio", name: "Voice_Note.mp3" },
			{ id: 6, type: "link", name: "Design Inspiration", url: "dribbble.com" },
		],
		photos: [
			{
				id: 1,
				type: "photo",
				url: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=200",
			},
			{
				id: 3,
				type: "photo",
				url: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=200",
			},
		],
		videos: [
			{
				id: 2,
				type: "video",
				url: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
			},
		],
		docs: [{ id: 4, type: "doc", name: "Project_Brief.pdf" }],
		audio: [{ id: 5, type: "audio", name: "Voice_Note.mp3" }],
		links: [
			{ id: 6, type: "link", name: "Design Inspiration", url: "dribbble.com" },
		],
	};

	const handleSendMessage = () => {
		if (messageInput.trim()) {
			// Here you would typically add the message to the messages array
			console.log("Sending message:", messageInput);
			setMessageInput("");
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
			<div className="flex min-h-screen">
				{/* Far Left Navigation Bar */}
				<div className="w-20 bg-slate-900/80 backdrop-blur-sm border-r border-slate-700/50 flex-shrink-0">
					<div className="p-4 h-full flex flex-col">
						{/* Logo */}
						<div className="flex justify-center mb-8">
							<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
								<div className="w-4 h-4 bg-white rounded-full"></div>
							</div>
						</div>

						{/* Top Navigation Icons */}
						<nav className="space-y-4 flex-1">
							{[
								{ icon: Bell, label: "Notifications" },
								{ icon: Home, label: "Home" },
								{ icon: User, label: "Profile", active: true },
								{ icon: MessageCircle, label: "Messages" },
							].map((item, index) => (
								<button
									key={index}
									className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
										item.active
											? "bg-blue-600 text-white"
											: "hover:bg-slate-700/50 text-slate-400 hover:text-white"
									}`}
									title={item.label}
								>
									<item.icon className="w-5 h-5" />
								</button>
							))}
						</nav>

						{/* Bottom Navigation Icons */}
						<nav className="space-y-4">
							{[
								{ icon: Settings, label: "Settings" },
								{ icon: Users, label: "Social" },
								{ icon: LogOut, label: "Logout" },
							].map((item, index) => (
								<button
									key={index}
									className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-slate-700/50 text-slate-400 hover:text-white"
									title={item.label}
								>
									<item.icon className="w-5 h-5" />
								</button>
							))}
						</nav>
					</div>
				</div>

				{/* User Information Sidebar */}
				<div className="w-80 bg-slate-800/50 backdrop-blur-sm border-r border-slate-700/50 flex-shrink-0">
					<div className="p-6">
						{/* Search Bar */}
						<div className="mb-6">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
								<input
									type="text"
									placeholder="Search..."
									className="w-full bg-slate-700/50 border border-slate-600 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
								/>
							</div>
						</div>

						{/* Profile Section */}
						<div className="text-center mb-8">
							<div className="relative inline-block">
								<img
									src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
									alt="John Wick"
									className="w-20 h-20 rounded-full border-4 border-blue-500 mx-auto"
								/>
								<div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
							</div>
							<h2 className="text-xl font-bold mt-3">John Wick</h2>
							<p className="text-slate-400 text-sm">NYC Photographer</p>
							<p className="text-green-400 text-sm font-medium">Online</p>

							<div className="flex justify-center space-x-8 mt-4">
								<div className="text-center">
									<p className="text-2xl font-bold">2802</p>
									<p className="text-slate-400 text-sm">Followers</p>
								</div>
								<div className="text-center">
									<p className="text-2xl font-bold">980</p>
									<p className="text-slate-400 text-sm">Following</p>
								</div>
							</div>
						</div>

						{/* Horizontal Profile Navigation */}
						<div className="mb-6">
							<div className="flex space-x-1 bg-slate-700/30 rounded-xl p-1">
								{[
									{ icon: Newspaper, label: "News" },
									{ icon: Info, label: "About" },
									{ icon: Users, label: "People" },
									{ icon: FileText, label: "Posts", active: true },
									{ icon: Activity, label: "Activity" },
								].map((item, index) => (
									<button
										key={index}
										className={`flex-1 flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
											item.active
												? "bg-blue-600 text-white"
												: "hover:bg-slate-600/50 text-slate-300 hover:text-white"
										}`}
									>
										<item.icon className="w-4 h-4" />
										<span className="text-xs">{item.label}</span>
									</button>
								))}
							</div>
						</div>

						{/* User Stats */}
						<div className="bg-slate-700/30 rounded-xl p-4 mb-6">
							<h3 className="font-semibold mb-3 text-sm">Profile Stats</h3>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span className="text-slate-400">Posts</span>
									<span className="font-medium">127</span>
								</div>
								<div className="flex justify-between">
									<span className="text-slate-400">Photos</span>
									<span className="font-medium">1,284</span>
								</div>
								<div className="flex justify-between">
									<span className="text-slate-400">Likes Received</span>
									<span className="font-medium">15.2K</span>
								</div>
							</div>
						</div>

						{/* User Posts in Sidebar */}
						<div>
							<h3 className="font-semibold mb-3 text-sm">Recent Posts</h3>
							<div className="space-y-3">
								{userPosts.slice(0, 2).map((post) => (
									<div key={post.id} className="bg-slate-700/30 rounded-xl p-3">
										<div className="flex items-center space-x-2 mb-2">
											<img
												src={post.authorImage}
												alt={post.author}
												className="w-6 h-6 rounded-full"
											/>
											<div>
												<p className="text-xs font-medium">{post.author}</p>
												<p className="text-xs text-slate-400">{post.time}</p>
											</div>
										</div>
										<p className="text-xs text-slate-300 mb-2 line-clamp-2">
											{post.content}
										</p>
										<img
											src={post.image}
											alt="Post content"
											className="w-full h-20 object-cover rounded-lg"
										/>
										<div className="flex items-center justify-between mt-2 text-xs text-slate-400">
											<span>{post.likes} likes</span>
											<span>{post.comments} comments</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Main Content - Feed Posts */}
				<div className="flex-1 flex justify-center">
					<div className="w-full max-w-4xl">
						<div className="p-6">
							{/* Story Header */}
							<div className="mb-4">
								<h3 className="text-lg font-semibold">Story</h3>
							</div>

							{/* Story Navigation and Stories */}
							<div className="mb-6">
								<div className="flex items-center justify-between mb-4">
									<div className="flex space-x-2 text-sm text-slate-400">
										<span className="px-3 py-1 bg-blue-600 text-white rounded-full">
											All
										</span>
										<span className="px-3 py-1 hover:bg-slate-700 rounded-full cursor-pointer">
											Facebook
										</span>
										<span className="px-3 py-1 hover:bg-slate-700 rounded-full cursor-pointer">
											Instagram
										</span>
										<span className="px-3 py-1 hover:bg-slate-700 rounded-full cursor-pointer">
											Twitter
										</span>
										<span className="px-3 py-1 hover:bg-slate-700 rounded-full cursor-pointer">
											LinkedIn
										</span>
										<span className="px-3 py-1 hover:bg-slate-700 rounded-full cursor-pointer">
											Rayze
										</span>
										<span className="px-3 py-1 hover:bg-slate-700 rounded-full cursor-pointer">
											Snapchat
										</span>
									</div>
								</div>

								<div className="flex space-x-3 overflow-x-auto pb-2">
									{stories.map((story) => (
										<div key={story.id} className="flex-shrink-0 text-center">
											<div className="relative">
												<img
													src={story.image}
													alt={story.name}
													className="w-16 h-16 rounded-xl object-cover border-2 border-blue-500"
												/>
												{story.isOwn && (
													<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
														<Plus className="w-3 h-3 text-white" />
													</div>
												)}
											</div>
											<p className="text-xs mt-1 text-slate-300 truncate w-16">
												{story.name}
											</p>
										</div>
									))}
								</div>
							</div>

							{/* Feed Posts */}
							<div className="space-y-6">
								{feedPosts.map((post) => (
									<div
										key={post.id}
										className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden"
									>
										{/* Post Header */}
										<div className="p-4 flex items-center justify-between">
											<div className="flex items-center space-x-3">
												<img
													src={post.authorImage}
													alt={post.author}
													className="w-10 h-10 rounded-full"
												/>
												<div>
													<h4 className="font-semibold">{post.author}</h4>
													<p className="text-sm text-slate-400">
														{post.time} • Public
													</p>
												</div>
											</div>
											<MoreHorizontal className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white" />
										</div>

										{/* Post Content */}
										<div className="px-4 pb-4">
											<p className="text-slate-200 mb-3">{post.content}</p>
										</div>

										{/* Post Image */}
										<div className="px-4 pb-4">
											<img
												src={post.image}
												alt="Post content"
												className="w-full h-64 object-cover rounded-xl"
											/>
										</div>

										{/* Post Actions */}
										<div className="px-4 pb-4 border-t border-slate-700/50 pt-4">
											<div className="flex items-center justify-between text-sm text-slate-400 mb-3">
												<span>{post.likes.toLocaleString()} likes</span>
												<span>{post.comments} comments</span>
											</div>
											<div className="flex items-center justify-between">
												<button className="flex items-center space-x-2 text-slate-400 hover:text-red-400 transition-colors">
													<Heart className="w-5 h-5" />
													<span>Like</span>
												</button>
												<button className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors">
													<MessageCircle className="w-5 h-5" />
													<span>Comment</span>
												</button>
												<button className="flex items-center space-x-2 text-slate-400 hover:text-green-400 transition-colors">
													<Share className="w-5 h-5" />
													<span>Share</span>
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Right Sidebar - Fixed width and positioned to the right */}
				<div className="w-80 bg-slate-800/50 backdrop-blur-sm border-l border-slate-700/50 flex-shrink-0">
					<div className="p-6">
						{/* Active Call */}
						<div className="mb-6">
							<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 text-center">
								<img
									src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
									alt="Juliet Lopez"
									className="w-16 h-16 rounded-full mx-auto mb-3 border-3 border-white"
								/>
								<h3 className="font-semibold text-lg">Juliet Lopez</h3>
								<p className="text-blue-100 text-sm mb-3">
									Designer on Calling...
								</p>

								<div className="flex justify-center space-x-4 mb-4">
									<button className="p-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors">
										<Phone className="w-5 h-5" />
									</button>
									<button className="p-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors">
										<Phone className="w-5 h-5" />
									</button>
								</div>

								<div className="grid grid-cols-4 gap-2 text-xs">
									<div className="bg-white/20 rounded-lg p-2">
										<Phone className="w-4 h-4 mx-auto mb-1" />
										<span>Mute</span>
									</div>
									<div className="bg-white/20 rounded-lg p-2">
										<MessageCircle className="w-4 h-4 mx-auto mb-1" />
										<span>Message</span>
									</div>
									<div className="bg-white/20 rounded-lg p-2">
										<Users className="w-4 h-4 mx-auto mb-1" />
										<span>Social</span>
									</div>
									<div className="bg-white/20 rounded-lg p-2">
										<MoreHorizontal className="w-4 h-4 mx-auto mb-1" />
										<span>History</span>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Info */}
						<div className="mb-6">
							<h3 className="font-semibold mb-3">Contact Information</h3>
							<div className="space-y-3 text-sm">
								<div className="flex items-center justify-between">
									<span className="text-slate-400">Phone Number</span>
									<span>+1 765 555 3055</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-slate-400">E-mail</span>
									<span>julietlopez@example.com</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-slate-400">Work at</span>
									<span>Design Studio</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-slate-400">Location</span>
									<span>New York, NY</span>
								</div>
							</div>
						</div>

						{/* Social Contact */}
						<div className="mb-6">
							<h3 className="font-semibold mb-3">Social Contact</h3>
							<div className="space-y-2 text-sm">
								<div className="flex items-center justify-between">
									<span className="text-slate-400">Facebook</span>
									<a href="#" className="text-blue-400 hover:text-blue-300">
										facebook.com/julietlopez
									</a>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-slate-400">Instagram</span>
									<a href="#" className="text-pink-400 hover:text-pink-300">
										@julietlopez
									</a>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-slate-400">Twitter</span>
									<a href="#" className="text-blue-400 hover:text-blue-300">
										@julietlopez
									</a>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-slate-400">LinkedIn</span>
									<a href="#" className="text-blue-400 hover:text-blue-300">
										linkedin.com/in/julietlopez
									</a>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-slate-400">Dribbble</span>
									<a href="#" className="text-pink-400 hover:text-pink-300">
										dribbble.com/julietlopez
									</a>
								</div>
							</div>
						</div>

						{/* Activity Status Header */}
						<div className="mb-3">
							<h3 className="font-semibold">Activity Status</h3>
						</div>

						{/* Message/History Navigation */}
						<div className="mb-4">
							<div className="flex space-x-1 bg-slate-700/30 rounded-lg p-1">
								<button
									onClick={() => setActiveTab("messages")}
									className={`flex items-center space-x-1 px-3 py-2 rounded flex-1 justify-center text-sm transition-all duration-200 ${
										activeTab === "messages"
											? "bg-blue-600 text-white"
											: "text-slate-400 hover:text-white"
									}`}
								>
									<Send className="w-4 h-4" />
									<span>Messages</span>
								</button>
								<button
									onClick={() => setActiveTab("history")}
									className={`flex items-center space-x-1 px-3 py-2 rounded flex-1 justify-center text-sm transition-all duration-200 ${
										activeTab === "history"
											? "bg-blue-600 text-white"
											: "text-slate-400 hover:text-white"
									}`}
								>
									<History className="w-4 h-4" />
									<span>History</span>
								</button>
							</div>
						</div>

						{/* Activity Content */}
						<div className="mb-6">
							{activeTab === "messages" ? (
								<div className="space-y-3">
									{/* Messages Container with Modern Scrollbar */}
									<div className="max-h-48 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800 scrollbar-thumb-rounded-full">
										{messages.map((message) => (
											<div
												key={message.id}
												className={`flex ${
													message.sent ? "justify-end" : "justify-start"
												}`}
											>
												<div
													className={`max-w-xs p-3 rounded-lg text-sm ${
														message.sent
															? "bg-blue-600 text-white rounded-br-sm"
															: "bg-slate-700 text-slate-200 rounded-bl-sm"
													}`}
												>
													<p>{message.text}</p>
													<p
														className={`text-xs mt-1 ${
															message.sent ? "text-blue-200" : "text-slate-400"
														}`}
													>
														{message.time}
													</p>
												</div>
											</div>
										))}
									</div>

									{/* Message Input */}
									<div className="flex items-center space-x-2 mt-4">
										<input
											type="text"
											value={messageInput}
											onChange={(e) => setMessageInput(e.target.value)}
											placeholder="Type a message..."
											className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
											onKeyPress={(e) =>
												e.key === "Enter" && handleSendMessage()
											}
										/>
										<button
											onClick={handleSendMessage}
											className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
										>
											<Send className="w-4 h-4" />
										</button>
									</div>
								</div>
							) : (
								<div className="space-y-3 max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800 scrollbar-thumb-rounded-full">
									{historyItems.map((item) => (
										<div key={item.id} className="flex items-center space-x-3">
											<div
												className={`p-2 rounded-full ${
													item.type === "call"
														? "bg-green-500/20 text-green-400"
														: item.type === "message"
														? "bg-blue-500/20 text-blue-400"
														: item.type === "like"
														? "bg-red-500/20 text-red-400"
														: "bg-purple-500/20 text-purple-400"
												}`}
											>
												{item.type === "call" && <Phone className="w-3 h-3" />}
												{item.type === "message" && (
													<MessageCircle className="w-3 h-3" />
												)}
												{item.type === "like" && <Heart className="w-3 h-3" />}
												{item.type === "comment" && (
													<MessageCircle className="w-3 h-3" />
												)}
											</div>
											<div className="flex-1">
												<p className="text-sm font-medium">{item.action}</p>
												<div className="flex items-center space-x-2 text-xs text-slate-400">
													<Clock className="w-3 h-3" />
													<span>{item.time}</span>
													{item.duration && <span>• {item.duration}</span>}
												</div>
											</div>
										</div>
									))}
								</div>
							)}
						</div>

						{/* Media Gallery */}
						<div>
							<div className="mb-3">
								<h3 className="font-semibold">Media</h3>
							</div>

							{/* Compressed Media Navigation - Single Line */}
							<div className="flex gap-0.5 mb-3 bg-slate-700/30 rounded-lg p-1">
								{[
									{ key: "all" as MediaType, label: "All" },
									{ key: "photos" as MediaType, label: "Photos" },
									{ key: "videos" as MediaType, label: "Videos" },
									{ key: "docs" as MediaType, label: "Docs" },
									{ key: "audio" as MediaType, label: "Audio" },
									{ key: "links" as MediaType, label: "Links" },
								].map((tab) => (
									<button
										key={tab.key}
										onClick={() => setMediaTab(tab.key)}
										className={`flex-1 px-1.5 py-1 rounded text-xs transition-all duration-200 ${
											mediaTab === tab.key
												? "bg-blue-600 text-white"
												: "text-slate-400 hover:text-white hover:bg-slate-600/50"
										}`}
									>
										{tab.label}
									</button>
								))}
							</div>

							{/* Media Content */}
							<div className="grid grid-cols-3 gap-2">
								{mediaItems[mediaTab]?.map((item: MediaItem) => (
									<div
										key={item.id}
										className="aspect-square rounded-lg overflow-hidden bg-slate-700/30 flex items-center justify-center"
									>
										{item.type === "photo" && (
											<img
												src={item.url}
												alt={`Media ${item.id}`}
												className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
											/>
										)}
										{item.type === "video" && (
											<div className="relative w-full h-full">
												<img
													src={item.url}
													alt={`Video ${item.id}`}
													className="w-full h-full object-cover"
												/>
												<PlayCircle className="absolute inset-0 m-auto w-6 h-6 text-white" />
											</div>
										)}
										{item.type === "doc" && (
											<div className="text-center p-2">
												<FileIcon className="w-6 h-6 mx-auto mb-1 text-slate-400" />
												<p className="text-xs text-slate-300 truncate">
													{item.name}
												</p>
											</div>
										)}
										{item.type === "audio" && (
											<div className="text-center p-2">
												<Headphones className="w-6 h-6 mx-auto mb-1 text-slate-400" />
												<p className="text-xs text-slate-300 truncate">
													{item.name}
												</p>
											</div>
										)}
										{item.type === "link" && (
											<div className="text-center p-2">
												<Link className="w-6 h-6 mx-auto mb-1 text-slate-400" />
												<p className="text-xs text-slate-300 truncate">
													{item.name}
												</p>
												<p className="text-xs text-slate-400 truncate">
													{item.url}
												</p>
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
