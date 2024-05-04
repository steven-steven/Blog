---
title: Dropping NFT
publish_at: November 22, 2021
layout: post
---

It was 7pm Monday in Toronto, I sat in an unfamiliar hotel room right after work. I've scheduled 8pm to grab lunch with a friend whom I haven't met in 2 years since school goes lockdown. And the next day will be my first ever visit to the office and meeting my co-workers in 3D for the first time, 6 months after joining the company. That's for another time; but point is - all was unfamiliar. I jumped onto Etherscan that evening to start the sale and push some code to enable minting from our website. And tadah! We dropped our first NFT!

![DDG meme](dropping-nft/duckmeme.png "=400x400")
> (Credits: Our member Sherley. See more of DDG art on our [Twitter](https://twitter.com/DDGNFT))

Let's take a step back. The last 2 months has been quite a ride. My friend invited me on a side project early September, to help build an NFT collectible. We are a team of 4 (2 dev, 1 artist, and 1 marketing person who brought and planned out the idea). Equipped with a simple curiosity and no experience in this space, I gotta say, this team was a blast! Honestly everyone plays a huge part in the project and we all carried it to the end with great planning.

Results you ask? Let's not talk about that 😅. Here's a link to [the site](https://nft-website-1a829tf3x-steveninfinity29.vercel.app/) and a link to [the contract on etherscan](https://etherscan.io/address/0xc15a882ee6ab53c00af7d73d21438a5f880e0107/#code). I'm used to getting side projects ditched, but this one's different. It's live and we pretty much brought it to completion! (and maybe the sunk cost of the time/money I've spent helps to justify my attachment to it).

Failures aside, I wanna spend some time in this blogpost to reflect on the iteration and end-to-end process of deploying this NFT, but more from the technical POV because I have nothing much to say about the business/art side anyway.

Disclaimer, I am a newb in this space and just learning and writing from experience - so take my word with a huge bag of salt 🧂. If you want a soft intro to Ethereum blockchain, I think the official doc has a [good intro](https://ethereum.org/en/developers/docs/intro-to-ethereum/).

## Table of Contents

1. [My thoughts on NFT overall](#my-thoughts-on-nft-overall)
2. [TLDR; and the bit about what nft is](#tldr-and-the-bit-about-what-nft-is)
3. [Wallet and ethereum networks](#wallet-and-ethereum-networks)
4. [Metadata](#metadata)
5. [Pinata / IPFS](#pinata-ipfs)
6. [Opensea Storefront](#opensea-storefront)
7. [Collectible](#collectible)
8. [V1: failed iteration](#v1-failed-iteration)
9. [V2: final iteration](#v2-final-iteration)
10. [Adding web3 to our website](#adding-web3-to-our-website)
11. [The contract](#the-contract)
12. [Price](#price)
13. [Etherscan](#etherscan)
14. [Deploying the contract was super scary](#deploying-the-contract-was-super-scary)
15. [Overall](#overall)

### My thoughts on NFT overall
Before we begin, I think it helps to start off with where I stand on this NFT hype. I think it's dumb (both pre-/post- mortem of this project). Don't get me wrong, I do believe in Crypto (especially with Ethereum 2.0 going proof-of-stake soon), and absolutely love the idea of transactions being decentralized and transparent. Imagine what these decentralized apps can be used… but not art. It could just be me, but I don't find a reason to spend money on digital art if it weren't for the investment hope/expectation that the art will eventually increase in price. I just dislike this easy money scheme that's not providing much value, but again that's my opinion. You're free to disagree, and I myself could change my mind in the future.

Playing the devil's advocate, I think it comes back to what art means. Have you seen how a red-painted canvas was sold for $1.1M ([source](https://www.iloboyou.com/ridiculous-paintings-sold-for-millions/))? Exactly… How? I just don't see the value, and I myself won't spend my lunch money for this painting. I might've offended a few artists there, so perhaps I'll stop. 🙊

### TLDR; and the bit about what NFT is
Art is sold in marketplaces like `Opensea`. If you're just publishing a single image, I think you're just a few clicks away. For more complex and generic contract however, you may want to roll up your sleeve and get ready to write some Solidity code, publish that contract to the blockchain, and use Etherscan as a place to view the contract, view transaction logs, and perform R/W methods exposed by the contract. You can then link Opensea to the contract and anyone can buy/exchange minted NFT art from a single collection dashboard with fancy filters.

'Mint' refers to process of creating a token (the NFT/currency) and pushing it to the blockchain. A smart contract is a program (stores data and perform methods). The mint function grabs the token metadata off-chain and creates/store the token in the contract. After you mint, you now have some actual currency/token/art that you can exchange, and the contract will track and can perform transactions on all tokens it has minted.

### Wallet and ethereum networks
Metamask is a wallet in the browser, where you can perform transactions using some ethereum 💰. There are multiple ethereum networks. I've only needed to use 'Mainnet' (which is where you trade real ethereum), and 'Rinkeby' which is a test network with fake ethereum that you can get from the [faucet](https://faucet.rinkeby.io/). These two environments are identical but completely separate (analogous to a staging environment)

### Metadata
We talked about 'metadata'. That's actually all you're buying. A blob of JSON file stored off-chain on some random server, perhaps with an attributes like name, description, different trait information, and the url to the actual image (again is hosted on some random server). Now that clearly raise questions. What if the server stops running? What if the owner changes the json metadata (e.g. url of the image)? 💥

I believe the best practice is to host the metadata and image on an IPFS like Pinata, so those assets remain unchanged and unique. I learned that publishing identical assets to IPFS will give you the same unique CID/link, so I think that's the only way you can guarantee uniqueness in this whole process. But again, that's up to the contract owner. They may choose to host it on their own server if they wish to. 🤷‍♂️ That lack of enfocement bothers me.

There is some standards on the structure of the metadata. I think this specification is Opensea specific (I could be wrong, but you can find it [on their docs](https://docs.opensea.io/docs/metadata-standards)). Once the token is minted, Opensea could parse the metadata of that token and do all things like display image, filter custom attributes, name, description, etc.

![Opensea metadata](dropping-nft/metadataOnOpensea.png "=400x400")

[Here's an opensea testnet collection](https://testnets.opensea.io/collection/duck-duck-goose-ipt2wg9heh) that I created as an example.

### Pinata / IPFS
Pinata is a storage platform, and we didn't pay a cent to upload 10k images and metadata for each of those tokens. Uploading 10k images can be tricky, but luckily there's an API you can use to upload the files programmatically. First I had to upload the images in, get the url, put that in the token metadata json file, and upload the metadata.

The uploaded file's URL is in the following form, where CID is a unique content ID that's a hash of the actual file. :
> `https://gateway.pinata.cloud/ipfs/{CID}`

That is fine for images, but we need an easy way to refer to the metadata file from the contract without storing the list of urls (or CID) in the contract (I think that'll add to cost). How do we do this? Well luckily if you upload a folder, the url will be
> `https://gateway.pinata.cloud/ipfs/{folder_CID}/{file_name}`

([resource](https://forum.openzeppelin.com/t/why-doesnt-openzeppelin-erc721-contain-settokenuri/6373/6)). Thus, what I did was to name the token metadata with an easy-to-remember name (i.e. incrementing number from 1 to 10000), place them all inside a folder, and upload the folder to IPFS in a batch. Now, in the contract mint function, I can simply grab the next token metadata by incrementing the number (aka tokenID) and prepend the base url to the folder (downside to this approach is minting is no longer random as discussed [later on when talking about Contract](http://localhost:3000/blog/dropping-nft#the-contract)).

Another interesting thing about IPFS, is that you can refer to the resource using just `ipfs://YOUR_CID` instead of the url (note that pinata is just one of many ipfs gateway). I'm not sure how this works behind the scene but cool 😎.

Resource: more about IPFS best practices for NFT ([source](https://docs.ipfs.io/how-to/best-practices-for-nft-data/#metadata))

### Opensea Storefront
Opensea is your marketplace. However we learned that it can only display NFTs that are minted. (we learned this the hardway. [See V1](#v1-failed-iteration)). A storefront is a 1:1 mapping with a contract. If you had an existing deployed contract you can add it to opensea easily by [getting it listed here](https://opensea.io/get-listed). Only the contract owner can edit the storefront (login with the same wallet account you used to deploy the contract). As a contract owner, you could update the storefront such as the avatar, description, name, socials, fees you get for secondary sales, payout address, etc.

If you own a minted nft, you are a click away from selling/auctioning them, selling a bundle, etc.

When you're testing, you would deploy the contract you wrote to a Rinkeby test network with fake money. Apps like Opensea and etherscan has a dedicated environment for the test network as well.

### Collectible
We have a total of 10k tokens uniquely generated with a set of traits that has various rareness level. The member of our team who did the artwork gave us a set of assets. We then wrote a script to generate and combine the different layers, while keeping a hash to store the uniquely created combination. The other approach is to brute force and pre-generate all permutation, but we quickly realize that it'd take forever to generate 10M, just to pick 10k from it.  Anyway this was a good [starting point](https://github.com/HashLips/generative-art-opensource) for us.

### V1: failed iteration
Our first attempt was to follow Opensea's official [starter code](https://github.com/ProjectOpenSea/opensea-creatures). It looks promising - there's a few modes available (e.g. factory contract, lootbox, simple item sale..). The starter code includes JS that runs with [Truffle](http://trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts) to deploy/migrate the contract to the network, and once minted it's directly in the Opensea storefront UI. All gucci.

However, the caveat here is that minting costs a LOT of gas fee (talk about that [later](#price)). And to have each of our 10k tokens pre-minted before sale can turn us homeless for sure. Ideally we want an option where we can let users mint on purchase. But how would unminted nft show up in the storefront? That's when Opensea's '[factory contract](https://docs.opensea.io/docs/2-custom-item-sale-contract)' comes in to rescue.. or at least we first thought it would 😥.

Basically a factory contract is a type of contract that Opensea provides, which is like a mystery box (or pokemon cards). Once people buy them, it's minted on purchase, and will show up as a minted NFT. Behind the scenes, the factory contract is a normal contract with the 'mint()' function configured to call the 'mint()' function of another contract. So under the hood you'll end up with 2 different contracts (one is the factory, and one is the actual token contract). Turns out, that ruins everything because we realized that tokens minted from the factory would go to a separate collection, and we aren't the owner of that collection so we wouldn't be able to change the storefront (a [related github issue](https://github.com/ProjectOpenSea/opensea-creatures/issues/123) from people with the same issue).
  - An initial workaround I tried was to configure the storefront from a metadata through the contract. But it's either that the things we can configure with the metadata is limited, or the [opensea contract-metadata documentation](https://docs.opensea.io/docs/contract-level-metadata) for it is 💩, it doesn't seem like we could change all settings (e.g. banner image) using the metadata. Here was a [github issue](https://github.com/ProjectOpenSea/opensea-creatures/issues/92) where I, along with many others in the internet, ask our concern but there was no solution to it 🤷‍♂️. After testing around, I decided it's not worth it and time to look for another approach..

![Start over](dropping-nft/startover.png "=400x400")

### V2: final iteration
With a lot of dead ends, our final approach is to ditch this factory nonsense and just write our own contract externally from Opensea. Instead of relying on the opensea code, I wrote and deploy my own, and then register the contract to opensea after. With that approach, since only NFT tokens that has been minted will show up in Opensea collection, the idea is for buyers to mint it externally out of opensea (i.e. from our website or etherscan). Only after it's minted will it appear in Opensea. This is also where I transition to Remix IDE and I'm glad I did.

We knew that we had to find a way to mint from our own website, because minting from Etherscan can be daunting (they have to enter the price to a form, etc, whereas we can have a big 'MINT' button on the website that does all the work in the background). That's when I came across Web3.

### Adding web3 to our website
Web3 is a library that connects a web app with the blockchain. It turns the browser into a blockchin browser that can interact with a contract and perform transaction. To call a contract, one would simply load the abi file (which is like a schema of all functions that the contract provides). There's a button in Remix where you can download this after it's compiled.

The rest is within my expertise (finally working with familiar JS React code 😅). There's a [Web3-react library](https://www.npmjs.com/package/web3-react), which is just an interface to the original web3 library so you'd still need to refer to [the web3 docs](https://web3js.readthedocs.io/en/v1.5.2/).
Web3-react also provides multiple ways you can connect your wallet to the browser ([codesandbox examples](https://codesandbox.io/s/github/NoahZinsmeister/web3-react/tree/v6/example?fontsize=14&hidenavigation=1&theme=dark&file=/pages/index.tsx)). One that I used was the injected provider which launches the metamask extention. However,  I tested this on my phone and it won't launch the metamask app. So I had to add in some logic to use WalletConnect provider (need to setup [infura](https://blog.infura.io/getting-started-with-infura-28e41844cc89/) for this) as a fallback.

### The contract
When writing contracts in solidity, you don't code from scratch, so really.. No need to panic. I think the barrier to entry to writing your first contract isn't too big. Most of the code is standardized, and you simply extend off that by overriding a few methods (e.g. _mint(), balance(), transfer(), etc). You can always search up what these methods are supposed to do and carve the path for your own implementation (refer to the [Openzepplin docs](https://docs.openzeppelin.com/contracts/2.x/api/token/erc721) for ERC721 or any standards you chose to use).

Furthermore, there's lots of examples out there. Remember the thing about dApps is that it's meant to be transparent. Most contract codes are publicly available and I found myself a good sample to learn from:
  - https://etherscan.io/address/0xbea8123277142de42571f1fac045225a1d347977#code
  - https://etherscan.io/address/0x18c7766a10df15df8c971f6e8c1d2bba7c7a410b#code

The standard I used was ERC-721 (just because it was used in the opensea starter code), but I think there are newer ones like ERC-1155 now that claims to be an improvement.

I started using VSCode to write the contract, but discovered that it's so much better to code in an online IDE called [Remix](https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null). It has all the right environment out of the box (e.g. neat GUI for deploying, viewing the cost, specifying the compiler version, security checks, configuring the deployment environment, etc). ✨

You can also get creative since there's no one to tell you what your contract should provide or how it's implemented. For example, I added multiple public (an access modifier in solidity) and ownable (an [access control](https://docs.openzeppelin.com/contracts/2.x/access-control)) function so that the contract's owner (aka. Me) can pause/resume the contract sales on demand, mint multiple tokens or do a giveaway to multiple addresses without paying a cent accept for gas fees.

However, I do tend to avoid adding too much complexity because this is my first experience so I really don't want any room for mistakes 🙈. For ex, I 'considered' using [delayed minting](https://betterprogramming.pub/creating-generative-art-nfts-with-python-solidity-a95eaeea515e):
  - Basically the contract stores a map of tokenID=>MetadataURI. When the user mints, the metadataURI points to some placeholder, and the owner can then set the real metadataURI manually through a contract method. This way users won't know the image before they mint, which is ideal if the concept is like opening a pokemon card or a mystery box.
  - In comparison, our current approach is just to increment a number which maps to a metadataURI. The disadvantage is that users could actually go grab the link and see what the upcoming token look like before minting it. I thought that was a flaw, but it seems like a lot of NFT collectibles does that anyway 🤷‍♂️.
  - Why we didn't go with the delayed minting approach? It'll definitely add complexity and extra cost for storing it in the contract. I don't want to risk that going wrong.
  - Also found a [good discussion here](https://forum.openzeppelin.com/t/erc721-development-should-you-write-metadata-for-tokens-before-or-after-minting/14111/13) regarding solutions to this random minting concern.

### Price
Deploying an application in the Ethereum network requires some fee that depend on the computation power needed to run your smart contract. So every transaction which runs the contract code will cost some amount. How much?

> Total gas fee = gas unit * gas price

Note: Units are typicaly in gwei. 1 gwei = 0.000000001 ether.

Gas price is something you can't control. The busier the network the higher the gas price. The more you pay, the faster it gets picked up by the miners for the next transaction block. If gas price is too low, it can take hours, days, or even stuck in the mempool until eventually dropped (you lost some money). I tried to find out how long is the TTL is but it doesn't seem to be determinitic. It's just whenever the mempool runs out of memory and they clear out the queue.

The gas unit however, is something you can control and is fixed. The more complex your computation is, the more expensive it will cost for it to run. There are some best practices in the internet, to try and reduce this (e.g. small things like using > instead of >=). It's interesting to see how the little computation cost affects your code not for performance reason but 💸.

As a newbie approach I just look at other people's contract code as a start. I know there are even calculation to how much gas unit we expect for certain types of assembly operation ([here](https://docs.google.com/spreadsheets/d/1KeWKkn0BYhOt1p6lM6BDQAWLin-2JQmGpwswU3kPw9c/edit#gid=0) and [here](https://docs.google.com/spreadsheets/d/1n6mRqkBz3iWcOlRem_mO09GtSKEKrAsfO7Frgx18pNU/edit#gid=0). I found those from some forum or Reddit). That.. Doesn't look too fun..


Some resources:
  - Check gas prices https://ethgasstation.info/
  - Get notified when price goes below threshold https://ethgas.watch/


### Etherscan
Once the contract is deployed onto the chain, we get a contractID and we can search that on Etherscan. You would need to first do some verification in Etherscan (providing it the source code, the compiler version used, arguments used for the contract initializer - which you need [to encode](https://abi.hashex.org/) to abi, etc). It then verifies if the code matches with the information you gave. Once verification is done, you would be able to see the code and R/W functions in Etherscan.

The R/W functions is critical in interacting with the contract. These functions are ones defined in the contract (e.g.  ERC-721 standards or ones you define yourself).

![Etherscan interface](dropping-nft/etherscanRW.png "=400x400")

You can also provide a token/profile information in Etherscan by submitting a formal request through a form ([guide](https://info.etherscan.com/token-update-guide/)). They'll get back to you by email after a few weeks.

### If I were to do things differently
  1. Testing:

  I think the simplest approach to testing solidity code is by doing blackbox unit testing in JS. You can use Truffle to interact with the contract from JS, JS test frameworks like Mocha, and mocking the wallet account using Ganache. I've skimmed through a youtube video on it and it seems to be another learning curve to cover.

  I was lazy and thought it was unecessary since I worked on the contract alone (had all of the context in my head 🧠). But I knew I would be less anxious if the code and features was formally tested. Tests would also benefit the team or potentially me in the future by keeping a single source of truth.
  2. Learn to use other Ecosystems available in developing dApps
      - Ganache is personal blockchain network that runs on your machine for testing. You can simulate different wallet accounts.
      - Truffle is suite of tools to develop and deploy smart contracts (used to compile do migration, interact with solidity in the console..)

### Deploying the contract was super scary
I believe contracts are permanent and there's no way to alter it once it's deployed. There are dirty ways to 'update' the contract such as adding some delegation magic to route transaction coming in your old contract to a new contract ([source](https://medium.com/ethereum-developers/can-a-smart-contract-be-upgraded-modified-1393e9b507a)), but I don't want to think about having to do that.

Price was super volatile, I saw it at 0.28 eth and then the next second it jumps to 0.4 eth. Luckily it only took about 15 minutes before our deployment gets picked up eventually. In the end deploying the contract costed us CAD $1192.

The scary part was that I was solely responsible for the contract code. I was literally (digitally) holding my team's money. I did some QA testing for a few days to really make sure that the functions work and nothing could go wrong. And let's just say I was glad that we didn't see anything wrong come up in our final deployment to mainnet.

### Overall
Super glad that we took on this project. I personally learned a lot the past 2 months and is a good foot on the door to the whole blockchain space. I am quite curious how developing dApp would look like for a different use case, because right now I dislike the non-agile procedures of this whole contract deployment process. Excited to see what this process will look like say 2-3 years from now, because despite how cool tools like Etherscan, Remix, Web3, and Truffle is, I think they are still all over the place, there's lack of a general framework, and doesn't look like it has fully matured yet.
