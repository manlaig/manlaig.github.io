---
path: "/bktree"
date: "2019-01-22T18:47:43.962Z"
title: "Awesome Data Structures, BK-Tree"
excerpt: "BK-Tree is a data structure used to perform spell checks based on the edit distance (Levenshtein Distance) between two strings. The application of BK-Trees is approximate string matching."
---

## BK-Tree

BK-Tree or Burkhard Keller Tree is a data structure used to perform spell checks. In other words, a data structure used to return the closest match to a certain word. For example, suppose your tree consists of words "hello, helllo". Then, if searched for "helo", it would return "hello."

[Here](https://repl.it/@manlai1025/BK-Tree) is the finished implementation in C++.

### Edit Distance (Levenshtein Distance)

BK-Trees work based on the edit distance algorithm. The edit distance problem is as follows: If you're allowed to append/delete a character or replace a character with another, find the minimum number of transforms required to transform one string into the other.

[Here](https://repl.it/@manlai1025/Levenshtein-Distance-algorithm) are implementations of the Levenshtein distance algorithm using the efficient dynamic programming approach and the inefficient recursion approach. I have documented it well, so it's helpful to go through it.

### Adding a new node

Suppose you want to add the word `str` to the tree, knowing the `root`.

First, compute the Levenshtein Distance between `str` and `root.str`. This value tells you the edit distance between the word you want to add and the value of the root. 
