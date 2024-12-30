---
title: Indexing with Spatial Search Algorithm
subtitle: "Have you ever spent your whole afternoon searching for an eraser... I have."
publish_at: March 12, 2020
layout: post
tags: tech
---

Indexing is such a fascinating field that we all take for granted. When we lookup the nearest restaurants, the funniest cat videos, your favorite tv shows, or your idol's social media profile - we want it to be instant. Delays are unacceptable, and we shall continuously punch in billions off searches - there shall be no rest. Computers are treated inhumanely, but at the end of the day computers are computers. They have their limitation.

I learned indexing in my Database course recently. I came across how data records typically span over multiple blocks in your disk and that is time expensive to search. Disk latency is around 13ms, and RAM latency is around 83 ns. At our scale of comparison I think that'd be like the speed of taking a book next to you, versus walking (on your feet) to the national library in Ottawa and back. But that is the inevitable limitation of reading disks. There's no way around it but to minimize the number of disk reads as much as possible. So that's where indexing comes in. It comes down not only to how the data is stored and organized, but also the techniques we use to refer to the data during a lookup.

<largeImg src="indexing-with-spatial-search-algorithm/comic1.jpg" alt="Comic by commitstrip"/>

There is no magic nor a silver bullet. Like all things in life, the solution depends on what you want to search for. For example, to search for your favorite book by name, maybe you should arrange the books alphabetically in your shelf. But if you're looking to search by genre, maybe put them in categorical buckets instead. Whether your index is dense, or sparse, or whether you store them in B+ Trees or implement dynamic hashing, there a whole lot of ways and each comes at an expense and its own benefits.

## Table of Contents

- [Indexing with Spatial Search Algorithm](#indexing-with-spatial-search-algorithm)
  * [Table of Contents](#table-of-contents)
  * [Spatial Indexing](#spatial-indexing)
    + [Use Cases](#use-cases)
    + [I Created a Visualization](#i-created-a-visualization)
  * [Conclusion](#conclusion)

## Spatial Indexing

While I was reviewing for a database course, at home, on my chair, eating yogurt and safe from Coronavirus, I procrastinated and saw an article by a Mapbox Engineer, Vladimir Agafonkin, called "[A dive into spatial search algorithms](https://blog.mapbox.com/a-dive-into-spatial-search-algorithms-ebd0c5e39d2a)". I was intrigued. He was explaining a concept I hadn't before dared to ask - How are maps able to quickly return all buildings in your area? Say there's a huge database of building coordinates (by huge, I mean probably all the buildings in the world), how do you go about calculating distances between you and all the buildings to find the 'closest' one. That's insane amount of work (for the computer, not you).

That's where 'Spatial Indexing' comes in. As quoted from the article,

>  Spatial indices are a family of algorithms that arrange geometric data for efficient search.

The article coherently explains about 2 techniques - the *R-tree* and *K-d tree*. I'd definitely recommend a read for satisfaction. But simply, say you have coordinates (lots of 'em) in a 2D space. We split the space into 9 rectangles of equal distribution of points, then within each rectangles is another set of 9 rectangles, and so on until final boxes contain at most 9 points. You end up with a 9-way tree that branch of until the leaf nodes contain at most 9 coordinates. That was the R-tree; and with such a tree, you can quickly find coordinates in some range or k-nearest neighbors.

### Use Cases

It definitely broaden my perspective of indexing in general. Lots of applications - like locating places on maps, live navigation, querying against huge traffic and network data, an automated snake/pacman game where it eats closest snack in its area (?), ~~finding the closest dragon ball~~, ~~finding your closest friends~~... sorry my imagination stops working for a sec.

### I Created a Visualization

With this new interesting concept, I thought of something fun to code over night. A visualization where users plot coordinates in canvas, and then index those points in space. Once the coordinates are indexed, you can specify the range of the area to search and it will then search those points closest to your cursor in real time (by hovering over the points).

A simple concept, and it didn't take me long because there's already a javascript library called [kdbush](https://github.com/mourner/kdbush) doing the indexing for me using a k-d-tree. Simply give it the array of coordinates, and it'll return an indexed structure that you can query to.

![My Spatial Search Visualization](indexing-with-spatial-search-algorithm/spatialsearchvis.png "=400x400")

Check it out yourself! -> https://steven-steven.github.io/spatialsearch/

I used:

- [create-react-app]( https://github.com/facebook/create-react-app ) for initial react boilerplate
- HTML5 Canvas to plot the points ([Amazing tutorial article]( https://itnext.io/using-react-hooks-with-canvas-f188d6e416c0 )).
- [react-cursor-position]( https://www.npmjs.com/package/react-cursor-position ) - a library to obtain cursor locations quickly as a prop
- styled-components
- gh-pages to host

## Conclusion

Indexing in general is an interesting space to get into. I think there's a lot of other fun stuff I will explore in the future like:

- Indexing 3D Space
- Text based search
- Mutual friends suggestions (or any type of data analytics)
- Indexing in [Graph Database]( https://en.wikipedia.org/wiki/Graph_database )
- Look into [ElasticSearch]( https://www.elastic.co/ ). I kind of want a search engine for this blog. I can index my entries and it'd be cool to be able to search up keywords