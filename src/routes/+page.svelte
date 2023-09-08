<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Battlefy } from '$lib/types';
	import { page } from '$app/stores';

	let post: any;
	onMount(async () => {
		post = await fetch(
			`https://api.battlefy.com/stages/${$page.url.searchParams.get('id')}/matches`,
			{
				method: 'GET',
				headers: {
					'Access-Control-Allow-Origin': '*',
					mode: 'no-cors'
				}
			}
		);
	});

	let data = writable([] as Battlefy[]);
	$: if (post)
		post.json().then((json: Battlefy[]) => {
			json.sort((a, b) => {
				if (a.matchNumber > b.matchNumber) return -1;
				if (a.matchNumber < b.matchNumber) return 1;
				return 0;
			});
			data.set(json);
			console.log(json);
		});
</script>

<main>
	<!-- <p>{JSON.stringify($data)}</p> -->
	{#if $data.length > 0}
		<svg
			id="Layer_2"
			data-name="Layer 2"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1792.4 982.03"
		>
			<g id="Layer_1-2" data-name="Layer 1">
				<g id="title">
					<rect id="bracket-bg" y="886.41" width="725.75" height="95.62" style="fill: #1a1a1a;" />
					<text
						id="bracket-name"
						transform="translate(357.87 956.91)"
						text-anchor="middle"
						style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 64.76px; font-weight: 300; isolation: isolate;"
						>{$page.url.searchParams.get('name')}</text
					>
				</g>
				<g
					style={$page.url.searchParams.get('hide') == 'true'
						? 'transform: translateX(-290px)'
						: ''}
				>
					<g id="round-5">
						<rect
							id="bg"
							x="1375.29"
							y="370.93"
							width="417.11"
							height="77.95"
							style={$data[0].top.winner || $data[0].bottom.winner
								? 'fill: #44c5ec;'
								: 'fill: #1a1a1a;'}
						/>
						<text
							id="name"
							transform="translate(1581.42 415.19)"
							dominant-baseline="middle"
							text-anchor="middle"
							style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 50px; font-weight: 300; isolation: isolate;"
							>{$data[0].top.winner
								? $data[0].top?.team?.name || ''
								: $data[0].bottom.winner
								? $data[0].bottom?.team?.name || ''
								: ''}</text
						>
					</g>
					<g id="round-4">
						<g id="r4-join">
							<line
								x1="1304.48"
								y1="306.04"
								x2="1341.39"
								y2="306.04"
								style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
							/>
							<line
								x1="1339.89"
								y1="409.9"
								x2="1375.29"
								y2="409.9"
								style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
							/>
							<line
								x1="1341.39"
								y1="515.26"
								x2="1341.39"
								y2="304.55"
								style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
							/>
							<line
								x1="1304.48"
								y1="513.8"
								x2="1341.39"
								y2="513.8"
								style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
							/>
						</g>
						<g id="team-2">
							<rect
								id="bg-2"
								data-name="bg"
								x="1013.18"
								y="486.56"
								width="291.3"
								height="54.44"
								style={$data[0].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
							/>
							<line
								id="bar-2"
								data-name="bar"
								x1="1063.49"
								y1="486.56"
								x2="1063.49"
								y2="540.99"
								style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
							/>
							<text
								id="name-2"
								data-name="name"
								transform="translate(1073.33 520.96)"
								style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22px; font-weight: 300; isolation: isolate;"
								>{$data[0].bottom.team
									? $data[0].bottom.team.name
									: $data[0].isBye
									? 'Bye'
									: ''}</text
							>
							<text
								id="score-2"
								data-name="score"
								transform="translate(1029.77 524.25)"
								style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 29.54px; font-weight: 300; isolation: isolate;"
								>{$data[0].bottom.score ? $data[0].bottom.score : 0}</text
							>
						</g>
						<g id="team-1">
							<rect
								id="bg-3"
								data-name="bg"
								x="1013.18"
								y="278.8"
								width="291.3"
								height="54.44"
								style={$data[0].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
							/>
							<line
								id="bar-3"
								data-name="bar"
								x1="1063.49"
								y1="278.81"
								x2="1063.49"
								y2="333.24"
								style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
							/>
							<text
								id="name-3"
								data-name="name"
								transform="translate(1073.33 313.21)"
								style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22px; font-weight: 300; isolation: isolate;"
								>{$data[0].top.team ? $data[0].top.team.name : $data[0].isBye ? 'Bye' : ''}</text
							>
							<text
								id="score-3"
								data-name="score"
								transform="translate(1029.77 316.5)"
								style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 29.54px; font-weight: 300; isolation: isolate;"
								>{$data[0].top.score ? $data[0].top.score : 0}</text
							>
						</g>
					</g>
					<g id="round-3">
						<g id="r3-joins">
							<g id="r3-join">
								<line
									x1="942.37"
									y1="98.27"
									x2="979.28"
									y2="98.27"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="977.78"
									y1="306.02"
									x2="1013.18"
									y2="306.02"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="979.28"
									y1="307.48"
									x2="979.28"
									y2="96.77"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="942.37"
									y1="306.02"
									x2="979.28"
									y2="306.02"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
							</g>
							<g id="r3-join-2" data-name="r3-join">
								<line
									x1="942.37"
									y1="514.2"
									x2="979.28"
									y2="514.2"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="977.78"
									y1="514.2"
									x2="1013.18"
									y2="514.2"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="979.28"
									y1="723.41"
									x2="979.28"
									y2="512.7"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="942.37"
									y1="721.96"
									x2="979.28"
									y2="721.96"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
							</g>
						</g>
						<g id="game-2">
							<g id="team-2-2" data-name="team-2">
								<rect
									id="bg-4"
									data-name="bg"
									x="651.07"
									y="694.31"
									width="291.3"
									height="54.44"
									style={$data[1].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
								/>
								<line
									id="bar-4"
									data-name="bar"
									x1="701.38"
									y1="694.32"
									x2="701.38"
									y2="748.75"
									style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
								/>
								<text
									id="name-4"
									data-name="name"
									transform="translate(711.22 728.72)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22px; font-weight: 300; isolation: isolate;"
									>{$data[1].bottom.team
										? $data[1].bottom.team.name
										: $data[1].isBye
										? 'Bye'
										: ''}</text
								>
								<text
									id="score-4"
									data-name="score"
									transform="translate(667.66 732.01)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 29.54px; font-weight: 300; isolation: isolate;"
									>{$data[1].bottom.score ? $data[1].bottom.score : 0}</text
								>
							</g>
							<g id="team-1-2" data-name="team-1">
								<rect
									id="bg-5"
									data-name="bg"
									x="651.07"
									y="486.56"
									width="291.3"
									height="54.44"
									style={$data[1].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
								/>
								<line
									id="bar-5"
									data-name="bar"
									x1="701.38"
									y1="486.56"
									x2="701.38"
									y2="540.99"
									style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
								/>
								<text
									id="name-5"
									data-name="name"
									transform="translate(711.22 520.96)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22px; font-weight: 300; isolation: isolate;"
									>{$data[1].top.team ? $data[1].top.team.name : $data[1].isBye ? 'Bye' : ''}</text
								>
								<text
									id="score-5"
									data-name="score"
									transform="translate(667.66 524.25)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 29.54px; font-weight: 300; isolation: isolate;"
									>{$data[1].top.score ? $data[1].top.score : 0}</text
								>
							</g>
						</g>
						<g id="game-1">
							<g id="team-2-3" data-name="team-2">
								<rect
									id="bg-6"
									data-name="bg"
									x="651.07"
									y="278.8"
									width="291.3"
									height="54.44"
									style={$data[2].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
								/>
								<line
									id="bar-6"
									data-name="bar"
									x1="701.38"
									y1="278.81"
									x2="701.38"
									y2="333.24"
									style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
								/>
								<text
									id="name-6"
									data-name="name"
									transform="translate(711.22 313.21)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22px; font-weight: 300; isolation: isolate;"
									>{$data[2].bottom.team
										? $data[2].bottom.team.name
										: $data[1].isBye
										? 'Bye'
										: ''}</text
								>
								<text
									id="score-6"
									data-name="score"
									transform="translate(667.66 316.5)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 29.54px; font-weight: 300; isolation: isolate;"
									>{$data[2].bottom.score ? $data[2].bottom.score : 0}</text
								>
							</g>
							<g id="team-1-3" data-name="team-1">
								<rect
									id="bg-7"
									data-name="bg"
									x="651.07"
									y="71.05"
									width="291.3"
									height="54.44"
									style={$data[2].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
								/>
								<line
									id="bar-7"
									data-name="bar"
									x1="701.38"
									y1="71.06"
									x2="701.38"
									y2="125.49"
									style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
								/>
								<text
									id="name-7"
									data-name="name"
									transform="translate(711.22 105.45)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22px; font-weight: 300; isolation: isolate;"
									>{$data[2].top.team ? $data[2].top.team.name : $data[2].isBye ? 'Bye' : ''}</text
								>
								<text
									id="score-7"
									data-name="score"
									transform="translate(667.66 108.74)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 29.54px; font-weight: 300; isolation: isolate;"
									>{$data[2].top.score ? $data[2].top.score : 0}</text
								>
							</g>
						</g>
					</g>
					<g id="round-2">
						<g id="r2-joins">
							<g id="r2-join">
								<line
									x1="580.27"
									y1="669.59"
									x2="617.17"
									y2="669.59"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="615.67"
									y1="721.53"
									x2="651.07"
									y2="721.53"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="615.67"
									y1="668.16"
									x2="615.67"
									y2="774.9"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="580.27"
									y1="773.47"
									x2="617.16"
									y2="773.47"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
							</g>
							<g id="r2-join-2" data-name="r2-join">
								<line
									x1="580.27"
									y1="461.84"
									x2="617.17"
									y2="461.84"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="615.67"
									y1="513.78"
									x2="651.07"
									y2="513.78"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="615.67"
									y1="460.41"
									x2="615.67"
									y2="567.15"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="580.27"
									y1="565.72"
									x2="617.16"
									y2="565.72"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
							</g>
							<g id="r2-join-3" data-name="r2-join">
								<line
									x1="580.27"
									y1="254.09"
									x2="617.17"
									y2="254.09"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="615.67"
									y1="306.02"
									x2="651.07"
									y2="306.02"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="615.67"
									y1="252.66"
									x2="615.67"
									y2="359.39"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="580.27"
									y1="357.96"
									x2="617.16"
									y2="357.96"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
							</g>
							<g id="r2-join-4" data-name="r2-join">
								<line
									x1="580.27"
									y1="46.33"
									x2="617.17"
									y2="46.33"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="615.67"
									y1="98.27"
									x2="651.07"
									y2="98.27"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="615.67"
									y1="44.9"
									x2="615.67"
									y2="151.64"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
								<line
									x1="580.27"
									y1="150.21"
									x2="617.16"
									y2="150.21"
									style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
								/>
							</g>
						</g>
						<g id="game-4">
							<g id="team-2-4" data-name="team-2">
								<rect
									id="bg-8"
									data-name="bg"
									x="288.97"
									y="746.25"
									width="291.3"
									height="54.44"
									style={$data[3].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
								/>
								<line
									id="bar-8"
									data-name="bar"
									x1="339.28"
									y1="746.26"
									x2="339.28"
									y2="800.69"
									style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
								/>
								<text
									id="name-8"
									data-name="name"
									transform="translate(349.12 780.66)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22px; font-weight: 300; isolation: isolate;"
									>{$data[3].bottom.team
										? $data[3].bottom.team.name
										: $data[3].isBye
										? 'Bye'
										: ''}</text
								>
								<text
									id="score-8"
									data-name="score"
									transform="translate(305.56 783.95)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 29.54px; font-weight: 300; isolation: isolate;"
									>{$data[3].bottom.score ? $data[3].bottom.score : 0}</text
								>
							</g>
							<g id="team-1-4" data-name="team-1">
								<rect
									id="bg-9"
									data-name="bg"
									x="288.97"
									y="642.37"
									width="291.3"
									height="54.44"
									style={$data[3].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
								/>
								<line
									id="bar-9"
									data-name="bar"
									x1="339.28"
									y1="642.38"
									x2="339.28"
									y2="696.81"
									style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
								/>
								<text
									id="name-9"
									data-name="name"
									transform="translate(349.12 676.78)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22px; font-weight: 300; isolation: isolate;"
									>{$data[3].top.team ? $data[3].top.team.name : $data[3].isBye ? 'Bye' : ''}</text
								>
								<text
									id="score-9"
									data-name="score"
									transform="translate(305.56 680.07)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 29.54px; font-weight: 300; isolation: isolate;"
									>{$data[3].top.score ? $data[3].top.score : 0}</text
								>
							</g>
						</g>
						<g id="game-3">
							<g id="team-2-5" data-name="team-2">
								<rect
									id="bg-10"
									data-name="bg"
									x="288.97"
									y="538.5"
									width="291.3"
									height="54.44"
									style={$data[4].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
								/>
								<line
									id="bar-10"
									data-name="bar"
									x1="339.28"
									y1="538.5"
									x2="339.28"
									y2="592.93"
									style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
								/>
								<text
									id="name-10"
									data-name="name"
									transform="translate(349.12 572.9)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22px; font-weight: 300; isolation: isolate;"
									>{$data[4].bottom.team
										? $data[4].bottom.team.name
										: $data[4].isBye
										? 'Bye'
										: ''}</text
								>
								<text
									id="score-10"
									data-name="score"
									transform="translate(305.56 576.19)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 29.54px; font-weight: 300; isolation: isolate;"
									>{$data[4].bottom.score ? $data[4].bottom.score : 0}</text
								>
							</g>
							<g id="team-1-5" data-name="team-1">
								<rect
									id="bg-11"
									data-name="bg"
									x="288.97"
									y="434.62"
									width="291.3"
									height="54.44"
									style={$data[4].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
								/>
								<line
									id="bar-11"
									data-name="bar"
									x1="339.28"
									y1="434.63"
									x2="339.28"
									y2="489.05"
									style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
								/>
								<text
									id="name-11"
									data-name="name"
									transform="translate(349.12 469.02)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22px; font-weight: 300; isolation: isolate;"
									>{$data[4].top.team ? $data[4].top.team.name : $data[4].isBye ? 'Bye' : ''}</text
								>
								<text
									id="score-11"
									data-name="score"
									transform="translate(305.56 472.31)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 29.54px; font-weight: 300; isolation: isolate;"
									>{$data[4].top.score ? $data[4].top.score : 0}</text
								>
							</g>
						</g>
						<g id="game-2-2" data-name="game-2">
							<g id="team-2-6" data-name="team-2">
								<rect
									id="bg-12"
									data-name="bg"
									x="288.97"
									y="330.74"
									width="291.3"
									height="54.44"
									style={$data[5].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
								/>
								<line
									id="bar-12"
									data-name="bar"
									x1="339.28"
									y1="330.75"
									x2="339.28"
									y2="385.18"
									style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
								/>
								<text
									id="name-12"
									data-name="name"
									transform="translate(349.12 365.15)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22px; font-weight: 300; isolation: isolate;"
									>{$data[5].bottom.team
										? $data[5].bottom.team.name
										: $data[5].isBye
										? 'Bye'
										: ''}</text
								>
								<text
									id="score-12"
									data-name="score"
									transform="translate(305.56 368.44)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 29.54px; font-weight: 300; isolation: isolate;"
									>{$data[5].bottom.score ? $data[5].bottom.score : 0}</text
								>
							</g>
							<g id="team-1-6" data-name="team-1">
								<rect
									id="bg-13"
									data-name="bg"
									x="288.97"
									y="226.87"
									width="291.3"
									height="54.44"
									style={$data[5].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
								/>
								<line
									id="bar-13"
									data-name="bar"
									x1="339.28"
									y1="226.87"
									x2="339.28"
									y2="281.3"
									style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
								/>
								<text
									id="name-13"
									data-name="name"
									transform="translate(349.12 261.27)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22px; font-weight: 300; isolation: isolate;"
									>{$data[5].top.team ? $data[5].top.team.name : $data[5].isBye ? 'Bye' : ''}</text
								>
								<text
									id="score-13"
									data-name="score"
									transform="translate(305.56 264.56)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 29.54px; font-weight: 300; isolation: isolate;"
									>{$data[5].top.score ? $data[5].top.score : 0}</text
								>
							</g>
						</g>
						<g id="game-1-2" data-name="game-1">
							<g id="team-2-7" data-name="team-2">
								<rect
									id="bg-14"
									data-name="bg"
									x="288.97"
									y="122.99"
									width="291.3"
									height="54.44"
									style={$data[6].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
								/>
								<line
									id="bar-14"
									data-name="bar"
									x1="339.28"
									y1="122.99"
									x2="339.28"
									y2="177.42"
									style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
								/>
								<text
									id="name-14"
									data-name="name"
									transform="translate(349.12 157.39)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22px; font-weight: 300; isolation: isolate;"
									>{$data[6].bottom.team
										? $data[6].bottom.team.name
										: $data[6].isBye
										? 'Bye'
										: ''}</text
								>
								<text
									id="score-14"
									data-name="score"
									transform="translate(305.56 160.68)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 29.54px; font-weight: 300; isolation: isolate;"
									>{$data[6].bottom.score ? $data[6].bottom.score : 0}</text
								>
							</g>
							<g id="team-1-7" data-name="team-1">
								<rect
									id="bg-15"
									data-name="bg"
									x="288.97"
									y="19.11"
									width="291.3"
									height="54.44"
									style={$data[6].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
								/>
								<line
									id="bar-15"
									data-name="bar"
									x1="339.28"
									y1="19.12"
									x2="339.28"
									y2="73.55"
									style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
								/>
								<text
									id="name-15"
									data-name="name"
									transform="translate(349.12 53.52)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22px; font-weight: 300; isolation: isolate;"
									>{$data[6].top.team ? $data[6].top.team.name : $data[6].isBye ? 'Bye' : ''}</text
								>
								<text
									id="score-15"
									data-name="score"
									transform="translate(305.56 56.81)"
									style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 29.54px; font-weight: 300; isolation: isolate;"
									>{$data[6].top.score ? $data[6].top.score : 0}</text
								>
							</g>
						</g>
					</g>
					{#if $page.url.searchParams.get('hide') !== 'true'}
						<g id="round-1">
							<g id="r1-joins">
								<g id="r1-join">
									<line
										x1="218.16"
										y1="20.39"
										x2="255.07"
										y2="20.39"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="46.33"
										x2="288.97"
										y2="46.33"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="19.11"
										x2="253.56"
										y2="73.55"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="218.16"
										y1="72.32"
										x2="255.05"
										y2="72.32"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
								</g>
								<g id="r1-join-2" data-name="r1-join">
									<line
										x1="218.16"
										y1="124.26"
										x2="255.07"
										y2="124.26"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="150.21"
										x2="288.97"
										y2="150.21"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="122.99"
										x2="253.56"
										y2="177.43"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="218.16"
										y1="176.2"
										x2="255.05"
										y2="176.2"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
								</g>
								<g id="r1-join-3" data-name="r1-join">
									<line
										x1="218.16"
										y1="228.14"
										x2="255.07"
										y2="228.14"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="254.09"
										x2="288.97"
										y2="254.09"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="226.87"
										x2="253.56"
										y2="281.31"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="218.16"
										y1="280.08"
										x2="255.05"
										y2="280.08"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
								</g>
								<g id="r1-join-4" data-name="r1-join">
									<line
										x1="218.16"
										y1="332.02"
										x2="255.07"
										y2="332.02"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="357.96"
										x2="288.97"
										y2="357.96"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="330.74"
										x2="253.56"
										y2="385.18"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="218.16"
										y1="383.95"
										x2="255.05"
										y2="383.95"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
								</g>
								<g id="r1-join-5" data-name="r1-join">
									<line
										x1="218.16"
										y1="435.89"
										x2="255.07"
										y2="435.89"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="461.84"
										x2="288.97"
										y2="461.84"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="434.62"
										x2="253.56"
										y2="489.06"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="218.16"
										y1="487.83"
										x2="255.05"
										y2="487.83"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
								</g>
								<g id="r1-join-6" data-name="r1-join">
									<line
										x1="218.16"
										y1="539.77"
										x2="255.07"
										y2="539.77"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="565.72"
										x2="288.97"
										y2="565.72"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="538.5"
										x2="253.56"
										y2="592.94"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="218.16"
										y1="591.71"
										x2="255.05"
										y2="591.71"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
								</g>
								<g id="r1-join-7" data-name="r1-join">
									<line
										x1="218.16"
										y1="643.65"
										x2="255.07"
										y2="643.65"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="669.59"
										x2="288.97"
										y2="669.59"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="642.37"
										x2="253.56"
										y2="696.81"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="218.16"
										y1="695.58"
										x2="255.05"
										y2="695.58"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
								</g>
								<g id="r1-join-8" data-name="r1-join">
									<line
										x1="218.16"
										y1="747.53"
										x2="255.07"
										y2="747.53"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="773.47"
										x2="288.97"
										y2="773.47"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="253.56"
										y1="746.25"
										x2="253.56"
										y2="800.69"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
									<line
										x1="218.16"
										y1="799.46"
										x2="255.05"
										y2="799.46"
										style="fill: none; stroke: #1a1a1a; stroke-miterlimit: 10; stroke-width: 3px;"
									/>
								</g>
							</g>
							<g id="game-8">
								<g id="team-2-8" data-name="team-2">
									<rect
										id="bg-16"
										data-name="bg"
										y="779.03"
										width="218.16"
										height="40.77"
										style={$data[7].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-16"
										data-name="bar"
										x1="37.67"
										y1="779.03"
										x2="37.67"
										y2="819.8"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-16"
										data-name="name"
										transform="translate(45.04 804.8)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[7].bottom.team
											? $data[7].bottom.team.name
											: $data[7].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-16"
										data-name="score"
										transform="translate(12.42 807.26)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[7].bottom.score ? $data[7].bottom.score : 0}</text
									>
								</g>
								<g id="team-1-8" data-name="team-1">
									<rect
										id="bg-17"
										data-name="bg"
										y="727.1"
										width="218.16"
										height="40.77"
										style={$data[7].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-17"
										data-name="bar"
										x1="37.67"
										y1="727.1"
										x2="37.67"
										y2="767.87"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-17"
										data-name="name"
										transform="translate(45.04 752.87)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[7].top.team
											? $data[7].top.team.name
											: $data[7].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-17"
										data-name="score"
										transform="translate(12.42 755.32)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[7].top.score ? $data[7].top.score : 0}</text
									>
								</g>
							</g>
							<g id="game-7">
								<g id="team-2-9" data-name="team-2">
									<rect
										id="bg-18"
										data-name="bg"
										y="675.16"
										width="218.16"
										height="40.77"
										style={$data[8].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-18"
										data-name="bar"
										x1="37.67"
										y1="675.16"
										x2="37.67"
										y2="715.93"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-18"
										data-name="name"
										transform="translate(45.04 700.93)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[8].bottom.team
											? $data[8].bottom.team.name
											: $data[8].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-18"
										data-name="score"
										transform="translate(12.42 703.39)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[8].bottom.score ? $data[8].bottom.score : 0}</text
									>
								</g>
								<g id="team-1-9" data-name="team-1">
									<rect
										id="bg-19"
										data-name="bg"
										y="623.23"
										width="218.16"
										height="40.77"
										style={$data[8].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-19"
										data-name="bar"
										x1="37.67"
										y1="623.23"
										x2="37.67"
										y2="664"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-19"
										data-name="name"
										transform="translate(45.04 649)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[8].top.team
											? $data[8].top.team.name
											: $data[8].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-19"
										data-name="score"
										transform="translate(12.42 651.45)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[8].top.score ? $data[8].top.score : 0}</text
									>
								</g>
							</g>
							<g id="game-6">
								<g id="team-2-10" data-name="team-2">
									<rect
										id="bg-20"
										data-name="bg"
										y="571.29"
										width="218.16"
										height="40.77"
										style={$data[9].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-20"
										data-name="bar"
										x1="37.67"
										y1="571.29"
										x2="37.67"
										y2="612.06"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-20"
										data-name="name"
										transform="translate(45.04 597.06)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[9].bottom.team
											? $data[9].bottom.team.name
											: $data[9].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-20"
										data-name="score"
										transform="translate(12.42 599.52)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[9].bottom.score ? $data[9].bottom.score : 0}</text
									>
								</g>
								<g id="team-1-10" data-name="team-1">
									<rect
										id="bg-21"
										data-name="bg"
										y="519.35"
										width="218.16"
										height="40.77"
										style={$data[9].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-21"
										data-name="bar"
										x1="37.67"
										y1="519.35"
										x2="37.67"
										y2="560.13"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-21"
										data-name="name"
										transform="translate(45.04 545.12)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[9].top.team
											? $data[9].top.team.name
											: $data[9].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-21"
										data-name="score"
										transform="translate(12.42 547.58)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[9].top.score ? $data[9].top.score : 0}</text
									>
								</g>
							</g>
							<g id="game-5">
								<g id="team-2-11" data-name="team-2">
									<rect
										id="bg-22"
										data-name="bg"
										y="467.42"
										width="218.16"
										height="40.77"
										style={$data[10].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-22"
										data-name="bar"
										x1="37.67"
										y1="467.42"
										x2="37.67"
										y2="508.19"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-22"
										data-name="name"
										transform="translate(45.04 493.19)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[10].bottom.team
											? $data[10].bottom.team.name
											: $data[10].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-22"
										data-name="score"
										transform="translate(12.42 495.65)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[10].bottom.score ? $data[10].bottom.score : 0}</text
									>
								</g>
								<g id="team-1-11" data-name="team-1">
									<rect
										id="bg-23"
										data-name="bg"
										y="415.48"
										width="218.16"
										height="40.77"
										style={$data[10].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-23"
										data-name="bar"
										x1="37.67"
										y1="415.48"
										x2="37.67"
										y2="456.25"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-23"
										data-name="name"
										transform="translate(45.04 441.25)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[10].top.team
											? $data[10].top.team.name
											: $data[10].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-23"
										data-name="score"
										transform="translate(12.42 443.71)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[10].top.score ? $data[10].top.score : 0}</text
									>
								</g>
							</g>
							<g id="game-4-2" data-name="game-4">
								<g id="team-2-12" data-name="team-2">
									<rect
										id="bg-24"
										data-name="bg"
										y="363.55"
										width="218.16"
										height="40.77"
										style={$data[11].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-24"
										data-name="bar"
										x1="37.67"
										y1="363.55"
										x2="37.67"
										y2="404.32"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-24"
										data-name="name"
										transform="translate(45.04 389.32)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[11].bottom.team
											? $data[11].bottom.team.name
											: $data[11].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-24"
										data-name="score"
										transform="translate(12.42 391.77)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[11].bottom.score ? $data[11].bottom.score : 0}</text
									>
								</g>
								<g id="team-1-12" data-name="team-1">
									<rect
										id="bg-25"
										data-name="bg"
										y="311.61"
										width="218.16"
										height="40.77"
										style={$data[11].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-25"
										data-name="bar"
										x1="37.67"
										y1="311.61"
										x2="37.67"
										y2="352.38"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-25"
										data-name="name"
										transform="translate(45.04 337.38)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[11].top.team
											? $data[11].top.team.name
											: $data[11].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-25"
										data-name="score"
										transform="translate(12.42 339.84)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[11].top.score ? $data[11].top.score : 0}</text
									>
								</g>
							</g>
							<g id="game-3-2" data-name="game-3">
								<g id="team-2-13" data-name="team-2">
									<rect
										id="bg-26"
										data-name="bg"
										y="259.68"
										width="218.16"
										height="40.77"
										style={$data[12].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-26"
										data-name="bar"
										x1="37.67"
										y1="259.68"
										x2="37.67"
										y2="300.45"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-26"
										data-name="name"
										transform="translate(45.04 285.45)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[12].bottom.team
											? $data[12].bottom.team.name
											: $data[12].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-26"
										data-name="score"
										transform="translate(12.42 287.9)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[12].bottom.score ? $data[12].bottom.score : 0}</text
									>
								</g>
								<g id="team-1-13" data-name="team-1">
									<rect
										id="bg-27"
										data-name="bg"
										y="207.74"
										width="218.16"
										height="40.77"
										style={$data[12].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-27"
										data-name="bar"
										x1="37.67"
										y1="207.74"
										x2="37.67"
										y2="248.51"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-27"
										data-name="name"
										transform="translate(45.04 233.51)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[12].top.team
											? $data[12].top.team.name
											: $data[12].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-27"
										data-name="score"
										transform="translate(12.42 235.97)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[12].top.score ? $data[12].top.score : 0}</text
									>
								</g>
							</g>
							<g id="game-2-3" data-name="game-2">
								<g id="team-2-14" data-name="team-2">
									<rect
										id="bg-28"
										data-name="bg"
										y="155.81"
										width="218.16"
										height="40.77"
										style={$data[13].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-28"
										data-name="bar"
										x1="37.67"
										y1="155.81"
										x2="37.67"
										y2="196.58"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-28"
										data-name="name"
										transform="translate(45.04 181.58)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[13].bottom.team
											? $data[13].bottom.team.name
											: $data[13].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-28"
										data-name="score"
										transform="translate(12.42 184.03)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[13].bottom.score ? $data[13].bottom.score : 0}</text
									>
								</g>
								<g id="team-1-14" data-name="team-1">
									<rect
										id="bg-29"
										data-name="bg"
										y="103.87"
										width="218.16"
										height="40.77"
										style={$data[13].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-29"
										data-name="bar"
										x1="37.67"
										y1="103.87"
										x2="37.67"
										y2="144.64"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-29"
										data-name="name"
										transform="translate(45.04 129.64)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[13].top.team
											? $data[13].top.team.name
											: $data[13].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-29"
										data-name="score"
										transform="translate(12.42 132.1)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[13].top.score ? $data[13].top.score : 0}</text
									>
								</g>
							</g>
							<g id="game-1-3" data-name="game-1">
								<g id="team-2-15" data-name="team-2">
									<rect
										id="bg-30"
										data-name="bg"
										y="51.94"
										width="218.16"
										height="40.77"
										style={$data[14].bottom.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-30"
										data-name="bar"
										x1="37.67"
										y1="51.94"
										x2="37.67"
										y2="92.71"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-30"
										data-name="name"
										transform="translate(45.04 77.71)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[14].bottom.team
											? $data[14].bottom.team.name
											: $data[14].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-30"
										data-name="score"
										transform="translate(12.42 80.16)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[14].bottom.score ? $data[14].bottom.score : 0}</text
									>
								</g>
								<g id="team-1-15" data-name="team-1">
									<rect
										id="bg-31"
										data-name="bg"
										width="218.16"
										height="40.77"
										style={$data[14].top.winner ? 'fill: #44c5ec;' : 'fill: #1a1a1a;'}
									/>
									<line
										id="bar-31"
										data-name="bar"
										x1="37.67"
										x2="37.67"
										y2="40.77"
										style="fill: none; stroke: #fff; stroke-miterlimit: 10;"
									/>
									<text
										id="name-31"
										data-name="name"
										transform="translate(45.04 25.77)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 16.48px; font-weight: 300; isolation: isolate;"
										>{$data[14].top.team
											? $data[14].top.team.name
											: $data[14].isBye
											? 'Bye'
											: ''}</text
									>
									<text
										id="score-31"
										data-name="score"
										transform="translate(12.42 28.23)"
										style="fill: #fff; font-family: Nohemi-Light, Nohemi; font-size: 22.12px; font-weight: 300; isolation: isolate;"
										>{$data[14].top.score ? $data[14].top.score : 0}</text
									>
								</g>
							</g>
						</g>
					{/if}
				</g>
			</g>
		</svg>
	{/if}
</main>
