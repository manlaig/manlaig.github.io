---
path: "/bst"
date: "2018-11-19T18:47:43.962Z"
title: "Binary Search Tree Implementation"
excerpt: "Binary Search Trees are very interesting data structures. It's a tree where each node of the tree has up to 2 nodes, left and right. What makes a binary tree a binary 'search' tree is how the left and right nodes are added."
---

## Binary Search Tree

Binary Tree is a tree where each node of the tree has up to 2 nodes, left and right. The difference between a binary tree and a binary search tree is how the nodes in the tree are added.

>In a binary search tree (BST), the **left** node's value is **smaller** than its' parent node's value while the **right** node's value is **bigger or equal**.

Here is an illustration of how to think about BSTs.

![](./bst.png?raw=true "Binary Search Tree")

In this writing, I will implement a BST in C++ that looks identical to the image above. [Here] (https://repl.it/@manlai1025/Binary-Search-Tree-delete) is the finished implementation.

First, we will define a node of our BST,

```cpp
struct node
{
  int val;
  node *left, *right;

  node(int v) : val(v)
  {
    left = right = 0;
  }
};
```

Our `node` structure has an integer value and left and right pointers. This is because each node will contain a value and also 2 pointers that points to 2 child nodes stored somewhere in memory.

Our tree will consist of nodes, right now we have the node defined. Now, we need a function that connects nodes of our tree. This function will get a value and add a new node to our tree with that value.

```cpp
void add(node*& root, int val)
{
  if(!root)
  {
    root = new node(val);
    return;
  }
  if(val > root->val)
    add(root->right, val);
  else
    add(root->left, val);
}
```

This recursive function traverses through the tree to find the correct spot for the value and creates a new leaf node when it reaches the correct spot, which is when root=null.

The header of this function might look weird, the data type of root is `node*&`. What this is doing is getting a pointer to the root as a **reference.** Another way can be to get the root as a **double pointer**. By doing this, we can edit where the pointers of our tree is pointing to.

With the `add` function, we can now build a BST. But, we need a function to print sthe tree. Some algorithms to traverse a tree include: inorder, preorder, postorder, breadth-first, and depth-first traversals. We will implement inorder traversal, which will display the values of our tree in an ascending order.

Inorder traversal first prints the value of the left node, then the value of the current node, finally the value of the right node.

![](./inOrderTraversal.gif?raw=true "Binary Search Tree")

Implementation of an inorder traversal will look like this:

```cpp
void printInOrder(node* root)
{
  if(!root)
    return;
  printInOrder(root->left);
  cout << root->val << " ";
  printInOrder(root->right);
}
```

Now, we have everything we need to build and traverse a BST.

Here's an example of a BST using our `add` and `printInOrder` functions.

```
node* root = 0;
add(root, 10);
add(root, 15);
add(root, 8);
add(root, 18);
printInOrder(root);
```

>Output: `8 10 15 18`

As we can see, the `add` function adds new nodes to the tree and `printInOrder` function traverses the tree starting from the left-most node.
