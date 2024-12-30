---
title: Code Breakdown - Maze Generator (by Mike Bostock)
publish_at: October 20, 2019 01:40
layout: post
tags: tech
---

<script type="text/javascript" src="https://d3js.org/d3.v5.min.js"></script>

<script
    type="text/javascript"
    src="code-brakedown-maze-generator/mazeGenerators.js"
></script>

Last week I came across '[Visualizing Algorithms](https://bost.ocks.org/mike/algorithms/)', an article by Mike Bostock (creator of D3.js). He wrote about visualizing different algorithms for sampling, shuffling, sorting, and maze generation. Aside from all technical complexities and use cases of these algorithms, I was equally curious about how Mike was able to create those stunning visualizations.

> "Visualization leverages the human visual system to augment human intellect" - Mike Bostock

After skimming the article, I grabbed myself a :banana: and I sneaked into the code. Surprisingly it was shorter than I expected. I didn't know a lot about D3 but the short code encourages me that it wasn't going to be a huge learning curve, and probably not as complex as I thought it'd be.
In this post I will breakdown one of Mike's maze generator visuals - "Randomized Depth-First". Here is a link to his [code and his pleasing visualization](https://bl.ocks.org/mbostock/1ef3b1fb9eb35ca8ffff).

:construction: Please reload this page if you can't see the maze (or change browser). You can click it over & over again.

<center>
    <Canvas id="originalMaze"></Canvas>
</center>

I enjoyed reading this algorithm. It's like analyzing poetry; takes a while until it clicks. And like any poetry, there's a lot of freedom in expressing the work, so it was also interesting to see the implementation approach chosen by the writer. Anyhow that's my motivation; and although this post is long, I hope you would enjoy it.

Side note: Along with this post, I have snippets of the code; but please be reminded that all of it belong to the original ~~poet~~ programmer.

## Table of Contents

-   [Goals](#goals)
-   [D3, SVG, and Canvas](#d3-svg-and-canvas)
-   [Algorithm](#algorithm)
-   [Core Components](#core-components)
    -   [cellSize and cellSpacing](#cellsize-and-cellspacing)
    -   [direction](#direction)
    -   [cells[]](#cells)
    -   [frontier[]](#frontier)
-   [Getting into the code](#getting-into-the-code)
    -   [Setting up the canvas](#setting-up-the-canvas)
    -   [Starting point for traversal](#starting-point-for-traversal)
    -   [Traversee!](#traversee)
    -   [Breaking down exploreFrontier()](#breaking-down-explorefrontier)
-   [Thoughts](#thoughts)
-   [What I learned](#what-i-learned)
-   [Diffculties with Client-side JS](#difficulties-with-client-side-js)

## Goals

-   Introduce myself to D3.js
-   Learn one maze generator algorithm

## D3, SVG, and Canvas

I went over a great [D3 tutorial series by Vienno](https://www.youtube.com/playlist?list=PL6il2r9i3BqH9PmbOf5wA5E1wOG3FT22p) which covers how to load and bind data, enter-exit-update selections, path generators, layout generators, transition, scales, etc. That I thought was enough to get me started with the code.

Then I realize.. the code didn't use D3's SVG, but HTML5 Canvas. I asked Google and it turns out, the browser can vomit :dizzy_face: if it tries to handle too much SVG under its DOM (:book: ​"[D3 and Canvas in 3 steps](https://www.freecodecamp.org/news/d3-and-canvas-in-3-steps-8505c8b27444/)" by Iars verspohl). So for animations like this, Canvas is more preferable. When using Canvas, the DOM would only see the canvas, and any (virtual DOM) elements added into the canvas will be stored only in the memory and invisible to the browser; therefore the browser won't be stressed from overwork. We can then use D3 to interact with these virtual elements.

I decided not to dig too deep, so I'll leave it for another time/space.

## Algorithm

I won't go in too much depth on the algorithm, but its pretty much depth-first search using a stack. It pops the stack to visit a cell, and push into the stack all the possible paths from that cell. There is at most 4 possible paths from a cell (North, East, West, South). The 2 base (terminating) cases are when a path that goes off the canvas or when the path already has an existing cell.

Overall, the time complexity remains O(n) since every cell is visited exactly once.

## Core Components

### cellSize and cellSpacing

One thing that confuses me in the beginning was the structure. I keep forgetting that the cells are separated by spaces. These spaces can be colored either black or white, depending whether there is a path between the two cells.
![Maze Cell Layout](code-brakedown-maze-generator/cell_layout.png "=400x400")
Above is a 7x7 maze cell. The `cellSize=12` and `cellSpacing=8`. The cells are always a square, while the spacings are a rectangular block with size cellSize x cellSpacing.

### direction

```javascript
var N = 1 << 0,
    S = 1 << 1,
    W = 1 << 2,
    E = 1 << 3;
```

The directions are labeled as N, W, S, E and each is represented by a bit. N is bit 0, S is bit 1, W is bit 2, and E is bit 3.

Why? now each and every cell only needs to store 4 bits to keep track of all of its connected paths.

### cells[]

`cells[]` is an 1D array of size 49 (for a 7x7 maze) to keep track of each cell. It stores a 4-bit value that marks the 4 paths that it may/may not be currently connected. For example, if bit 0 is 0 it means that the current cell is not connected to its neighbor in the North (recall that direction N represented by bit 0).

### frontier[]

this is the stack for the DFS. It stores an object `{cellIndex, direction}`

-   cellIndex is index in the `cell[]` array for the visited cell
-   direction indicates a possible path from that cell. (possible values are N, S, W, E)

## Getting into the code

### Setting up the canvas

```javascript
var width = 150,
    height = 150;

var N = 1 << 0,
    S = 1 << 1,
    W = 1 << 2,
    E = 1 << 3;

var cellSize = 12,
    cellSpacing = 8,
    cellWidth = Math.floor((width - cellSpacing) / (cellSize + cellSpacing)),
    cellHeight = Math.floor((height - cellSpacing) / (cellSize + cellSpacing)),
    cells = new Array(cellWidth * cellHeight),
    frontier = [];

var canvas = d3
    .select("body")
    .append("canvas")
    .attr("width", width)
    .attr("height", height);

var context = canvas.node().getContext("2d");

//translate by [leftover_canvas_space/2].
//leftover_canvas_space = [width - TotalCellSize - TotalCellSpacing]
context.translate(
    Math.round(
        (width - cellWidth * cellSize - (cellWidth + 1) * cellSpacing) / 2
    ),
    Math.round(
        (height - cellHeight * cellSize - (cellHeight + 1) * cellSpacing) / 2
    )
);
```

Here we define `width` and `height` of the canvas, the direction values, the `cellSize` and `cellSpacing`, the `cells[]`, and the `frontier[]` like discussed earlier. `cellWidth` is the number of columns in the maze while `cellHeight` is the number of rows (I don't understand why its named that way).

Then it create a `<canvas>` within the body, and get a reference to the 2d context of the canvas. This context is your tools/paint-brush you use to draw things onto the canvas.
We then translate/move the context to the middle of the canvas. Translating the context simply moves the coordinate system so now (0,0) is shifted by a few pixels.

Note that the number of spacing is one more than the number of cells in a row or column. For example, picture a 7x7 maze. The number of cell rows is 7 while the number of spacing rows is 8.

### Starting point for traversal

Like any DFS, push the starting element onto the stack.

```javascript
context.fillStyle = "white";

var start = (cellHeight - 1) * cellWidth;
cells[start] = 0;
fillCell(start);
frontier.push({ index: start, direction: N });
frontier.push({ index: start, direction: E });
```

```javascript
function fillCell(index) {
    var i = index % cellWidth, //column index
        j = (index / cellWidth) | 0; //row index
    context.fillRect(
        i * cellSize + (i + 1) * cellSpacing,
        j * cellSize + (j + 1) * cellSpacing,
        cellSize,
        cellSize
    );
}
```

We define the start index as the first cell in the last row. Then we use `fillCell()` function to draw a white square for the cell. This function recieves the index of the cell, and draw a rectangle at the specific pixels.
After filling the cell, it push all the possible paths (N and E) onto the `frontier[]` stack.

### Traversee!

```javascript
d3.timer(function() {
    var done,
        k = 0;
    while (++k < 50 && !(done = exploreFrontier()));
    return done;
});
```

`exploreFrontier()` will do all of our operations at each iteration (visiting a new cell each time). It uses the [D3 timer API](https://github.com/d3/d3-timer) to keep doing this repeatedly until it returns true (no more items to pop)

```javascript
function exploreFrontier() {
    if ((edge = frontier.pop()) == null) return true;

    var edge,
        i0 = edge.index,
        d0 = edge.direction,
        i1 =
            i0 +
            (d0 === N ? -cellWidth : d0 === S ? cellWidth : d0 === W ? -1 : +1),
        x0 = i0 % cellWidth,
        y0 = (i0 / cellWidth) | 0,
        x1,
        y1,
        d1, //direction of previous block from i1's POV
        open = cells[i1] == null; // opposite not yet part of the maze

    //fill i1 according to d0 (this is for the spacing in between)
    context.fillStyle = open ? "white" : "black";
    if (d0 === N) fillSouth(i1), (x1 = x0), (y1 = y0 - 1), (d1 = S);
    else if (d0 === S) fillSouth(i0), (x1 = x0), (y1 = y0 + 1), (d1 = N);
    else if (d0 === W) fillEast(i1), (x1 = x0 - 1), (y1 = y0), (d1 = E);
    else fillEast(i0), (x1 = x0 + 1), (y1 = y0), (d1 = W);

    //fill magenta fontier (if open)
    if (open) {
        fillCell(i1);
        (cells[i0] |= d0), (cells[i1] |= d1); //fill cell with direction 1111
        context.fillStyle = "magenta";

        var m = 0;
        if (y1 > 0 && cells[i1 - cellWidth] == null)
            fillSouth(i1 - cellWidth),
                frontier.push({ index: i1, direction: N }),
                ++m;
        if (y1 < cellHeight - 1 && cells[i1 + cellWidth] == null)
            fillSouth(i1), frontier.push({ index: i1, direction: S }), ++m;
        if (x1 > 0 && cells[i1 - 1] == null)
            fillEast(i1 - 1), frontier.push({ index: i1, direction: W }), ++m;
        if (x1 < cellWidth - 1 && cells[i1 + 1] == null)
            fillEast(i1), frontier.push({ index: i1, direction: E }), ++m;
        shuffle(frontier, frontier.length - m, frontier.length);
    }
}

function fillCell(index) {
    var i = index % cellWidth, //horizontal index (divide over row size and see what's left)
        j = (index / cellWidth) | 0; //vertical index (which row)
    context.fillRect(
        i * cellSize + (i + 1) * cellSpacing,
        j * cellSize + (j + 1) * cellSpacing,
        cellSize,
        cellSize
    );
}

function fillEast(index) {
    var i = index % cellWidth,
        j = (index / cellWidth) | 0;
    context.fillRect(
        (i + 1) * (cellSize + cellSpacing),
        j * cellSize + (j + 1) * cellSpacing,
        cellSpacing,
        cellSize
    );
}

function fillSouth(index) {
    var i = index % cellWidth,
        j = (index / cellWidth) | 0;
    context.fillRect(
        i * cellSize + (i + 1) * cellSpacing,
        (j + 1) * (cellSize + cellSpacing),
        cellSize,
        cellSpacing
    );
}

function shuffle(array, i0, i1) {
    var m = i1 - i0,
        t,
        i,
        j;
    while (m) {
        i = (Math.random() * m--) | 0;
        (t = array[m + i0]),
            (array[m + i0] = array[i + i0]),
            (array[i + i0] = t);
    }
    return array;
}
```

Here is the fantastic 5 helper functions! At its core, is the exploreFrontier(). So I'll quickly go over the other 4:

-   `fillCell()` - I explained this before, but it just draws a cell onto the screen.
-   `fillEast()` and `fillSouth()` - this draws the spacings, so a rectangle of size cellSize x cellSpacing. Note that when this function is called, the color can be either white or black. It's white when there is a connected cell path, and black otherwise. Also, there isn't fillNorth() or fillWest() because you can always reuse the the existing function to achieve the same result. For example, to draw the spacing on the north side of the block, just call fillSouth() on the index that's above the block.
-   `shuffle()` - This uses the "Fisher-Yates shuffling algorithm". Mike also explains this algorithm in [his article](https://bost.ocks.org/mike/algorithms/#shuffling). What this does is shuffle the `m` top elements of the stack to add randomness. `m` is the amount of potential paths that we pushed onto the stack in the current iteration.

### Breaking down exploreFrontier()

```javascript
if ((edge = frontier.pop()) == null) return true;

var edge,
    i0 = edge.index,
    d0 = edge.direction,
    i1 =
        i0 +
        (d0 === N ? -cellWidth : d0 === S ? cellWidth : d0 === W ? -1 : +1),
    x0 = i0 % cellWidth,
    y0 = (i0 / cellWidth) | 0,
    x1,
    y1,
    d1, //direction of previous block from i1's POV
    open = cells[i1] == null; // opposite not yet part of the maze
```

-   In the beginning, it pops an edge (this is an object {cellIndex, direction}).
-   We initialize i0 as the old visited index (parent cell) and d0 as the direction of the new path from that cell.
-   i1 indicates the index of the new cell to be visited. Depending on the direction d0, it will find this new cell by adding some amount to i0.
-   x0 and y0 is the row and column index of the parent. While x1 and y1 will be for the new cell.
-   d1 will be the direction to the parent cell from i1's (the new cell) point-of-view. This is opposite to d0. For example, if d0 is west, d1 will be east.
-   open indicates if there is a valid path to the cell at i1. For example, if there already exist a cell in i1, then it's not a valid path.

```javascript
//fill i1 according to d0 (this is for the spacing in between)
context.fillStyle = open ? "white" : "black";
if (d0 === N) fillSouth(i1), (x1 = x0), (y1 = y0 - 1), (d1 = S);
else if (d0 === S) fillSouth(i0), (x1 = x0), (y1 = y0 + 1), (d1 = N);
else if (d0 === W) fillEast(i1), (x1 = x0 - 1), (y1 = y0), (d1 = E);
else fillEast(i0), (x1 = x0 + 1), (y1 = y0), (d1 = W);
```

-   This section colors the spacing between the parent cell to cell at i1. Based on whether i1 is an open/valid path, it would color the spacing either black/white.

```javascript
//fill cell and fill magenta fontier (if open)
if (open) {
    fillCell(i1);
    (cells[i0] |= d0), (cells[i1] |= d1); //set 4-bit direction
    context.fillStyle = "magenta";

    var m = 0;
    if (y1 > 0 && cells[i1 - cellWidth] == null)
        fillSouth(i1 - cellWidth),
            frontier.push({ index: i1, direction: N }),
            ++m;
    if (y1 < cellHeight - 1 && cells[i1 + cellWidth] == null)
        fillSouth(i1), frontier.push({ index: i1, direction: S }), ++m;
    if (x1 > 0 && cells[i1 - 1] == null)
        fillEast(i1 - 1), frontier.push({ index: i1, direction: W }), ++m;
    if (x1 < cellWidth - 1 && cells[i1 + 1] == null)
        fillEast(i1), frontier.push({ index: i1, direction: E }), ++m;
    shuffle(frontier, frontier.length - m, frontier.length);
}
```

-   If i1 is a open path, then `fillCell(i1)` is called to draw the white cell.
-   Then we use bitwise OR to update the 4 bit stored in `cell[]` at index i0 and i1, to mark the new connected path between them.
-   We now check all frontiers (4 directions) to see if it is a valid path (condition: i1 is within the canvas and doesn't contain an existing cell). If it is a possible path, color the spacing with a magenta color.
-   `m` counts the number of valid frontiers added on the stack. This is used to then shuffle the `m` top elements on the stack, so the maze will randomly move in any of those `m` directions in the next iteration.

Here is an example if I removed `shuffle()`. It would just pop the last added item, and the maze becomes... predictable.

<center>
    <Canvas id="noShuffle"></Canvas>
</center>

## Thoughts

This DFS algorithm is quite simple. There is only a single head and we choose the next path from the most recently added item in the `frontier[]` array using a stack.

Even with this, there are so much variations of this algorithm. For example, if instead of shuffling the `m` top most items, we shuffle all items; then the maze traverse from all possible paths like a sweep across the canvas.

## What I learned

I honestly didn't expect the implementation to be this straight-forward. Of course, I'm just reading this code and I imagine designing this visualization in and on itself can be quite difficult.

But aside from rendering the rectangles and the timer API, most of it is just plain Javascript! I've heard a lot about the steep learning curve of D3, but it seems like you don't have to be super familiar with D3 to create stunning visualizations like this. I found that 90% of the complexity was probably on the algorithm itself, and D3 provides a pretty lightweight solution for displaying this on HTML5 canvas.

I'm not undermining the difficulty of D3 because I have little clue at this point on the full capabilities of D3. But I'm confident to say that the barrier to entry isn't that rough. You can make great visualizations by utilizing just the basics. Just start with a rect.

## Difficulties with Client-side JS

I spent a lot of time trying to figure out how to display D3 and Canvas on this next-MDX post. I used a simple `<script>` tag to load the code but it only works on SSR.

If you load this page with Next/Link I think it would bundle things and the page wouldn't recognize the D3 code imported from the `<script>` tag.

I wish there was a better way to import this client-side js asset and have it run with Next. But at this point Next's prefetching, window.onLoad(), and bundling is still all alien :alien: to me.

In the end I was still not successful. So as you can see, the maze simulations only appears after a full reload (SSR). Please do reach out to me if you have any clue.
