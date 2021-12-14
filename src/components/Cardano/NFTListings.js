import React from "react";
import NFTPost from "./NFTPost";
import "./NFTListings.css";

const NFTListings = ({ selectedPost }) => {
	const nft_data = [
		{
			id: "1",
			img:
				"https://bafybeiciifhel52fk2wp4gjric4da4rkvfecmmiad5mrjqus4jwubdowse.ipfs.infura-ipfs.io/",
			name: "Chassurico",
			description: "Art by the lovely Love Machine artist",
			pool_pm:
				"https://pool.pm/d00b140f6286b991ab3a8a56d276a05883adf02f15f46506f20fa2b7.0111tyMillion",
			edition: "(1/1)",
			artwork: "11ty Million",
		},
		{
			id: "42",
			img:
				"https://bafybeidgsmb5w64gpsvmkham4xxriaqamsavvakn3sxzuvjlak6s2hg3di.ipfs.infura-ipfs.io/",
			name: "Mycelial Gallery",
			description: "",
			pool_pm:
				"https://pool.pm/ceb5dedd6cda3f0b4a98919b5d3827e15e324771642b57e0e6aabd57.GoldBasho011",
			edition: "(1/122)",
			artwork: "Gold Basho 001",
		},
		{
			id: "2",
			img:
				"https://bafybeig776ujmmhpobnfgkilr2b3yzp4fet43cbfwfglivgfira7exg2y4.ipfs.infura-ipfs.io/",
			name: "New Mindflow",
			description:
				"Dubbed as the first NFTs on cardano with smart contract functionality",
			pool_pm:
				"https://pool.pm/3f72283d65c97eb73d987777965e5f756d4c7c01e93e202042738229.AdaLovelaceUncommon000004",
			edition: "(1/14)",
			artwork: "Ada Lovelace (Uncommon)",
		},
		{
			id: "3",
			img:
				"https://bafybeid2hqrfswaxmqrwp47u6mxayj6z2m3krdgtwio3oa63cswhxtv3jy.ipfs.infura-ipfs.io/",
			name: "Aeoniumsky",
			description: "Aeon is a legend in the NFT space",
			pool_pm:
				"https://pool.pm/6dad8c414e24f941eedb8275c0a1d341e697d584b1b92f4a5193a62f.aeoniumskyB5096",
			edition: "(1/150)",
			artwork: "Block B-5",
		},
		{
			id: "4",
			img:
				"https://bafybeigma2dfxfvhcevbmajyjwg3zpiov2m5jclkk6mccy7wfw35pppy2y.ipfs.infura-ipfs.io/",
			name: "CardanoArts",
			description:
				"Cardano Arts make premium art on the Cardano blockchain",
			pool_pm:
				"https://pool.pm/f3b395f5b0fb9183d5b2099dba149afe521b614dd6e8dff5fa78a65f.CardArts0030",
			edition: "(1/1)",
			artwork: "A shade of Illusion",
		},
		{
			id: "5",
			img:
				"https://bafybeihol3acw3edmgzzav66xawmd7myja2k3s766wp3lrwtd5t6z6uopi.ipfs.infura-ipfs.io/",
			name: "Claymates x Spacebudz",
			description:
				"The Claymates are a blue chip NFT project on the cardano blockchain",
			pool_pm:
				"https://pool.pm/f945eef343e1a08919c3a58ac599a84ba2f25eb8a7d3b1663b8a2687.ClayMatesExtra239",
			edition: "(1/20)",
			artwork: "Dino & Alien ",
		},
		{
			id: "6",
			img:
				"https://bafybeihobqixn6bacnrphk4jfvzsjsntt22gvq3sssnj5usz2guimtmnii.ipfs.infura-ipfs.io/",
			name: "Art of Woman x Backwards Geometry",
			description:
				"A collab piece between Art of Woman and Backwards Geometry",
			pool_pm:
				"https://pool.pm/554a130fe0b1036c5f89faf2597f58505c6c4f13b77c8598c1da9806.BGXAOWVague29",
			edition: "(1/50)",
			artwork: "Vague Memories",
		},
		{
			id: "7",
			img:
				"https://bafybeif7oqt57m5dq6qwwkxxba6575jfo4g7jhr4cbea46smyt2k5hmhje.ipfs.infura-ipfs.io/",
			name: "Thomas Salwoski",
			description: "Fine art connesiur",
			pool_pm:
				"https://pool.pm/d9e16c3659815c0342024550305843e4acc8a796546a4fe98d984c1b.WinterCrane",
			edition: "(1/1)",
			artwork: "Winter Crane",
		},
		{
			id: "8",
			img:
				"https://bafybeic5g6olbefrs7v4sa5daas2xwr34qnbmx75f47eks5ne5egifrwnm.ipfs.infura-ipfs.io/",
			name: "TROBH",
			description: "Creator of the TROBH video-game",
			pool_pm:
				"https://pool.pm/5cf24cdad5e9271d2a4a1e3e7952391bd1e37a7f90916d02f6b7e85b.TROBHLilisTreasure001",
			edition: "(1/3)",
			artwork: "Lillis Treasure",
		},
		{
			id: "9",
			img:
				"https://bafybeie3ozknlul3vyuiw3q2elvi2jq4ej2eblzzdts7hnjm2owntucq44.ipfs.infura-ipfs.io/",
			name: "Steve_3p0",
			description:
				"Steve is one of the first photo Manipulators on Cardano",
			pool_pm:
				"https://pool.pm/8dbef3ae32a5ac935172ab84cb7a3540603207892c9ab63956490086.ZenNaut13",
			edition: "(1/25)",
			artwork: "Zen Naut (Ph 3)",
		},
		{
			id: "10",
			img:
				"https://bafybeihn6phnqnug5pqik25lf3indjbu66l5dqxfae752vecad3qy32ajy.ipfs.infura-ipfs.io/",
			name: "Kid Yokai",
			description:
				"Japanese style masks on avatars following mystical creatures",
			pool_pm:
				"https://pool.pm/9997c9e9e6d0c2f516a2f2229fa39bff9c30b729e3e02679a422d6ec.kidyokai2493",
			edition: "(1/40)",
			artwork: "Daidarabotchi",
		},
		{
			id: "11",
			img:
				"https://bafybeihypylbmz7yzic7lhu523zbuxujioh3ki3zf5gxmgm5lpx5zq4zke.ipfs.infura-ipfs.io/",
			name: "Dracano",
			description: "Baby Dragons that live on the cardano blockchain",
			pool_pm:
				"https://pool.pm/f439a5cfe50a7cdee970e599395e77e9382ef140eff1aebd14c2698f.DRACANONyctenS2N6",
			edition: "(1/13)",
			artwork: "Nycten",
		},
		{
			id: "32",
			img:
				"https://bafybeib2qpcb2xo5dp3ozbfca6mrpzyoqogvvx342at4zb5lgiktt66y6u.ipfs.infura-ipfs.io/",
			name: "Crypto Knitties x Aeoniumsky",
			description: "",
			pool_pm:
				"https://pool.pm/5230d16116431597796d250dcd7acf1e3afb717bf66c8108abdc83df.KnittieAstro102",
			edition: "(1/75)",
			artwork: "Astro",
		},
		{
			id: "35",
			img:
				"https://bafybeieolfmtvrt2tvckrh2hprkabidlt2oyjkh3nkkn22enz2tp2y6pjm.ipfs.infura-ipfs.io/",
			name: "Steve_3p0",
			description: "",
			pool_pm:
				"https://pool.pm/8dbef3ae32a5ac935172ab84cb7a3540603207892c9ab63956490086.BloomNaut10",
			edition: "(1/20)",
			artwork: "Bloom Naut (Ph 2)",
		},
		{
			id: "12",
			img:
				"https://bafybeieufvrqi65pxqimlh3kkpi7x4ygxitjza2vdh24ppmp3oah7ekpyq.ipfs.infura-ipfs.io/",
			name: "Maxing",
			description:
				"Maxings we are all programmed revolves around the nature of ourselves in society",
			pool_pm:
				"https://pool.pm/cbbad8b1d9281660b8627425f5ca19df576dd863e80769aeb22d987d.NumberFourN4",
			edition: "(1/5)",
			artwork: "We are all programmed",
		},
		{
			id: "22",
			img:
				"https://bafybeiflxzuwifzp3cvbb3tv45w3lbmfjhdyrpythskanvknnk2fowenni.ipfs.infura-ipfs.io/",
			name: "The Galactaid Series",
			description: "",
			pool_pm:
				"https://pool.pm/3a489def6b9bce3a294edc0ed43fc80ed8b8999f74df133f66c39a3e.GalactaidOrangeSun3",
			edition: "(1/3)",
			artwork: "Orange Sun",
		},
		{
			id: "13",
			img:
				"https://bafybeidgkqzd36aahpgzvc66dpdijphwknrwpqexhhidmi2gaqgfqwr3xi.ipfs.infura-ipfs.io/",
			name: "Richard Perez",
			description: "A reason for happiness",
			pool_pm:
				"https://pool.pm/2575b5cbb93c8801ade88b531af8779b648beb3633569e22e45a8f82.AFOMReasonforhappiness002",
			edition: "(1/3)",
			artwork: "A fragment of Me",
		},
		{
			id: "14",
			img:
				"https://bafybeifosa4iu7vbp3lwrm3odwv2eat253mefzlb7vr44tsbu7bgevas7i.ipfs.infura-ipfs.io/",
			name: "Three Fold Bold",
			description:
				"Mature art that depicts our favorite disney princesses",
			pool_pm:
				"https://pool.pm/6a2df66936f5ddd4d5b56a7af1956c54ef9a1acc555b3ce0809b9661.TheLostLadiesBelle38",
			edition: "(1/50)",
			artwork: "The Lost Ladies",
		},
		{
			id: "35",
			img:
				"https://bafybeidys37ltyw6otxhrquz7djg5xihsemhojo3xlqmrc5tw7o2kcs3im.ipfs.infura-ipfs.io/",
			name: "Mycelial Gallery",
			description: "",
			pool_pm:
				"https://pool.pm/ceb5dedd6cda3f0b4a98919b5d3827e15e324771642b57e0e6aabd57.SilverHoskinson067",
			edition: "(1/62)",
			artwork: "Silver Charles",
		},
		{
			id: "15",
			img:
				"https://bafybeidyynpslohrdrrpj6cqnwedm2tu5boqaoayjemqt433hsphoxmmmy.ipfs.infura-ipfs.io/",
			name: "Spacecoins",
			description: "Cardanos first native assest has a whitepaper ",
			pool_pm:
				"https://pool.pm/c9eaae8d75de73a7fe542ccaa2585bc7b9f7bda434b1dd2ba2d42dac.spacecoinswhitepaper016",
			edition: "(1/20)",
			artwork: "Spacecoins Whitepaper",
		},
		{
			id: "16",
			img:
				"https://bafybeibhfosq6cpnxpkl363n5ppkz23onfvqxdplx2s2lrnbmdrarnsx2y.ipfs.infura-ipfs.io/",
			name: "ADA Aliens",
			description:
				"Captain Corgi is an out of this world NFT that has landed on the cardano blockchain",
			pool_pm:
				"https://pool.pm/26d7a17de3288bb3591a5fdab49ce874439ea1354f092a83e7fa5ba8.AdalienCC006",
			edition: "(1/10)",
			artwork: "Captain Corgi",
		},
		{
			id: "17",
			img:
				"https://bafybeiefxnhaun3dszba4lcvc4ntvnkas3aiafodqzja4guqozlibjowgy.ipfs.infura-ipfs.io/",
			name: "Artaphakt",
			description:
				"Captain Corgi is an out of this world NFT that has landed on the cardano blockchain",
			pool_pm:
				"https://pool.pm/6179eb9f878f8b46190425501aefc621d3c31ea303d2faa3a3658256.UM0172",
			edition: "(1/1)",
			artwork: "Potential Threat",
		},
		{
			id: "18",
			img:
				"https://bafybeihs5zqs3zzeryer2mok7vziyrqqe7dmktxdi6nccvcyowgzagoxyi.ipfs.infura-ipfs.io/",
			name: "NFT artisans",
			description:
				"Captain Corgi is an out of this world NFT that has landed on the cardano blockchain",
			pool_pm:
				"https://pool.pm/5b38a55d5e3a9c7d635b75809c9cfa839a0baee072ea5ba997f1474a.002UtagawaKunisada",
			edition: "(1/50)",
			artwork: "Utagawa Kunisada",
		},
		{
			id: "19",
			img:
				"https://bafybeigyhxzz3dgjqxewfmfbe5loxhgwg7viww37martwh7wfna5c3trx4.ipfs.infura-ipfs.io/",
			name: "Corn & Friends",
			description:
				"Corn & friends plan on making the first animated series on Cardano",
			pool_pm:
				"https://pool.pm/1018656a869c94433567ee9f6190a467605f9f7b6ded220031d9febc.025CornNFriendsNFT011",
			edition: "(1/69)",
			artwork: "Windy Mo",
		},
		{
			id: "20",
			img:
				"https://bafybeid3hay3wbrhguzz25zhfx6cqrc5eubsrdk265vb62llfzzgoob6pa.ipfs.infura-ipfs.io/",
			name: "CardArts",
			description: "",
			pool_pm:
				"https://pool.pm/f3b395f5b0fb9183d5b2099dba149afe521b614dd6e8dff5fa78a65f.CardArts0002",
			edition: "(1/1)",
			artwork: "Genesis Collection",
		},
		{
			id: "21",
			img:
				"https://bafybeibfw75hdurbs22s46ixclc5ztrofyenfzzwrsmo43gu3o26mn5ply.ipfs.infura-ipfs.io/",
			name: "Atelije NFT",
			description: "",
			pool_pm:
				"https://pool.pm/de1795b68941ce10fd8c480cffe178a954e3bff452b1a4194c7124cd.MasterSword",
			edition: "(1/100)",
			artwork: "Master Sword",
		},
		{
			id: "22",
			img:
				"https://bafybeigrswcrhy63ml7xkuauhfsqn5i6cu4rz7kt7fhrtv6h6txfes4mti.ipfs.infura-ipfs.io/",
			name: "Backwards Geometry",
			description: "",
			pool_pm:
				"https://pool.pm/678618aa90f2f4780b39297bf0b2b23f0a5a17d52e9c9a7c239182c7.BGeoSkulls5",
			edition: "(1/10)",
			artwork: "Skulls",
		},
		{
			id: "40",
			img:
				"https://bafybeiaqggwgfzlza3bj5lybcxcutx2oik2g6utpr6vw4wldjqnfzrcswa.ipfs.infura-ipfs.io/",
			name: "JRDY",
			description: "",
			pool_pm:
				"https://pool.pm/e5101a1222b6113329ba06550923d033104039df077e927251900f81.ASTERIONDIAMOND14",
			edition: "(1/1)",
			artwork: "Playfull Unsig",
		},
		{
			id: "23",
			img:
				"https://bafybeiamesvxlne5hq5lkwxdlfxnnjrg4rqg3fa5slmkf2rvirtu6fxbo4.ipfs.infura-ipfs.io/",
			name: "Silvio Hiro",
			description: "",
			pool_pm:
				"https://pool.pm/221ea9679e8c7256bea997a7acc566676d5ad931200c936e256ad677.AlonzoAbstract6",
			edition: "(1/120)",
			artwork: "Alonzo",
		},
		{
			id: "24",
			img:
				"https://bafybeichdihnxwz4kivcmp3hwvdqwbjyyqsws4qooaxxrfbz24ye5g372i.ipfs.infura-ipfs.io/",
			name: "The Card Room",
			description: "",
			pool_pm:
				"https://pool.pm/2b9fb283d8116489f4a494e76c75efe0d9992aaef6c65eaf9b374298.TCRx001x03x023",
			edition: "(1/73)",
			artwork: "King of Rats",
		},
		{
			id: "25",
			img:
				"https://bafybeigpsjd7v35fwhrhyegsdzvwkpv3mpvdcnjifq3srlj6l2dk3wkzk4.ipfs.infura-ipfs.io/",
			name: "Goat Tribe",
			description: "",
			pool_pm:
				"https://pool.pm/c281975562f394761771f13f599881517fa8455946e7e30454de22da.GOATTribe09550",
			edition: "(1/10,000)",
			artwork: "Goat Tribe",
		},
		{
			id: "34",
			img:
				"https://bafybeigwial3sjkin463bpojddm6oknfsc22tg4rla4tgxkrmq4egjwity.ipfs.infura-ipfs.io/",
			name: "Chadi Nassar",
			description: "",
			pool_pm:
				"https://pool.pm/a025d91dca7804ae13c5231c4c44a6cfa16aa98634e9e0e874380797.CMBYNSP176",
			edition: "(1/88)",
			artwork: "Call me by your name",
		},
		{
			id: "35",
			img:
				"https://bafybeidqkh7uuc6m3nlshbkarhduxvlu2npooj2brnzydo3qamkzqj6nxe.ipfs.infura-ipfs.io/",
			name: "CryptoKnitties",
			description: "",
			pool_pm:
				"https://pool.pm/9bee44c5c494dee38622e6da0b3b312820f9f75dd6cc256c769db788.CryptoKnittie09005",
			edition: "(1/10,000)",
			artwork: "Crypto Knittie S1",
		},
		{
			id: "26",
			img:
				"https://bafybeiav6xbijwvx777xzrd7imi4zlvxhibrgmr6cpgo5jissj2272sw3i.ipfs.infura-ipfs.io/",
			name: "Zombie Chains",
			description: "",
			pool_pm:
				"https://pool.pm/96580bbc4fe27ac0d127db3f8a0dc698c58d303d8cae870f5771f336.ZombieChains09553",
			edition: "(1/10,000)",
			artwork: "Zombie Chains",
		},
		{
			id: "27",
			img:
				"https://bafybeigdkdprkmkj2atwioh35exxsbd76cjwmvynhq5ffm464k6t7pv2ca.ipfs.infura-ipfs.io/",
			name: "Old Money",
			description: "",
			pool_pm:
				"https://pool.pm/a4c45615825acae7c4937ee4d45d2ff9a29328084e2dc34bf4af37b2.TheInflationTimesLXI110",
			edition: "(1/700)",
			artwork: "The Inflation Times, Vol LXI",
		},
		{
			id: "28",
			img:
				"https://bafybeiencnns2iqrwd4rniedu6o3y4yxhri6l2tpmruvkq35fftef37uiu.ipfs.infura-ipfs.io/",
			name: "Fernando Tornelli",
			description: "",
			pool_pm:
				"https://pool.pm/1ff603f645d2aea6f032bb1dc490ca27fd221906c02790262fa65ae2.HAPPYMANFROMTHERIVER01",
			edition: "(1/20)",
			artwork: "Happy man from the river",
		},
		{
			id: "29",
			img:
				"https://bafybeie2xxhxsysayrncwaoitylif3wct57yuyhzgrvewgyqrazclmbsvu.ipfs.infura-ipfs.io/",
			name: "ai_Xeres",
			description: "",
			pool_pm:
				"https://pool.pm/f413e051d684495f65c97299bdbcc8c7f4520ed70fb0b2f385245027.Anatural",
			edition: "(1/1)",
			artwork: "Harmonics A",
		},
		{
			id: "30",
			img:
				"https://bafybeife7ic3py3b7yk5ljkotfbxycul2faryxeg2adyui5nbith2p2nba.ipfs.infura-ipfs.io/",
			name: "Monroe",
			description: "",
			pool_pm:
				"https://pool.pm/c0651746ffa8b643e28bdaaa24c2ca050a7f7823f3a98dcaf3c540bf.MONROEFUSION003",
			edition: "(1/1)",
			artwork: "Monroe Colors",
		},
		{
			id: "31",
			img:
				"https://bafybeiafbkwn4rifsifjbeaadn7ewguy53f5qcky23ndhhpgur6w44hbrq.ipfs.infura-ipfs.io/",
			name: "Ydesh",
			description: "",
			pool_pm:
				"https://pool.pm/276663aa662470ffdd3bc3f529e2cbe06c6f920e4625c00d3fc2c88f.Weasel360",
			edition: "(1/999)",
			artwork: "Weasel Valley",
		},
		{
			id: "32",
			img:
				"https://bafybeig6xi7cfnfg47how6w6r27lxdw22crhclxwxozziyw3oauwt7iici.ipfs.infura-ipfs.io/",
			name: "CNFT Con",
			description: "",
			pool_pm:
				"https://pool.pm/5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad.LegacyPass1087",
			edition: "(1/2500)",
			artwork: "Legacy Pass",
		},
		{
			id: "33",
			img:
				"https://bafybeigsm7rdlu2rqplcf2mp7zbcl65oo4b64qn3ex6n2l2v6usb4ih5gq.ipfs.infura-ipfs.io/",
			name: "Sushi Bytes",
			description: "",
			pool_pm:
				"https://pool.pm/cd4f09ef0a8f9a3557903d2c9a45b2f6198f1267c2031bc9228ed74a.SushiByte2107",
			edition: "(1/2799)",
			artwork: "Ninja Pink",
		},
		{
			id: "36",
			img:
				"https://bafybeifgwhlfm2ra2kdlefegoj4vzwrhwchljnaa7ncr33n6qedwnbsife.ipfs.infura-ipfs.io/",
			name: "Fernando Tornelli",
			description: "",
			pool_pm:
				"https://pool.pm/e5101a1222b6113329ba06550923d033104039df077e927251900f81.ASTERIONDIAMOND14",
			edition: "(1/20)",
			artwork: "Asterion Diamond",
		},
		{
			id: "37",
			img:
				"https://bafybeibmcaarrwlkcdifcsajqb6bnvq7udw5bw5tz3vobaq3nmqbaytnya.ipfs.infura-ipfs.io/",
			name: "Jonathan Dickson",
			description: "",
			pool_pm:
				"https://pool.pm/38675a13f223490d845e9ca82f494770ec32662efee8413bbe634502.Timehastoldme003",
			edition: "(1/20)",
			artwork: "Time has told me",
		},
		{
			id: "38",
			img:
				"https://bafybeicbo2lv36p2y3nr45hbdaoozir5dmcdskgw7iwz6tilfllznjubm4.ipfs.infura-ipfs.io/",
			name: "Monogram",
			description: "",
			pool_pm:
				"https://pool.pm/38675a13f223490d845e9ca82f494770ec32662efee8413bbe634502.Timehastoldme003",
			edition: "(1/100)",
			artwork: "Monogram enters the space",
		},
		{
			id: "40",
			img:
				"https://bafybeib2lhtyuvkjpgn7dlpjfkssm5rp5jcwhx2bi375ebdjpqhcgwiera.ipfs.infura-ipfs.io/",
			name: "Charles gitnick x glus",
			description: "",
			pool_pm:
				"https://pool.pm/df142ed23ec3d8f636d1b62e6eedf96141abec51ab18363d0bf6316d.EndViolence111",
			edition: "(1/150)",
			artwork: "End Gun Violence",
		},
		{
			id: "41",
			img:
				"https://bafybeidpey4pbkc6uovrbeyyr2guflefegrcdzuovjtn3ex6x5hzmjwqra.ipfs.infura-ipfs.io/",
			name: "Just a JPEG",
			description: "",
			pool_pm:
				"https://pool.pm/5b24387f4e6a48493e2254739272d70dac718e97ad1eec5502c82d6d.Series01JPEG6004",
			edition: "(1/100)",
			artwork: "Series 01",
		},
	];

	const NFTList = nft_data.map((post) => {
		return (
			<NFTPost
				key={post.id}
				name={post.name}
				description={post.description}
				img={post.img}
				pool={post.pool_pm}
				edition={post.edition}
				artwork={post.artwork}
				selectedPost={selectedPost}
			/>
		);
	});

	return <div className="container reddit-list"> {NFTList} </div>;
};

export default NFTListings;
