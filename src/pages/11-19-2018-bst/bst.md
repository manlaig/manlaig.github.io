---
path: "/bst"
date: "2018-11-19T18:47:43.962Z"
title: "Binary Search Tree in C++"
excerpt: "Binary Search Trees are very interesting data structures. It's a tree where each node of the tree has up to 2 nodes, left and right. What makes a binary tree a binary 'search' tree is how the left and right nodes are added."
---

Binary Tree is a tree where each node of the tree has up to 2 nodes, left and right. The difference between a binary tree and a binary search tree is how the nodes in a binary search tree is added.

>In a binary search tree (BST), the **left** node's value is **smaller or equal** to the current node's value while the **right** node's value is **bigger**.

Thinking of BSTs like the image below is very helpful.

<img src="/static/images/bst.png" width="40%" height="50%">

In this writing, I will implement a BST in C++ that looks identical to the image above.

First, we will define a node of our BST,

```cpp
struct node
{
  int val;
  node *left, *right;

  node(int v)
  {
    val = v;
    left = right = 0;
  }
};
```

Our `node` data structure has an integer value and left and right pointers. This is because each node will contain a value and also 2 pointers that points to other nodes somewhere in memory.

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

This function traverses through the tree to find the correct spot for the value and creates a new node when it reaches the correct spot.

The header of this function might look weird, the data type of root is `node*&`. What it's doing is **getting a pointer to the root as a reference.** If we don't do this, `root` will not be changed when the function returns.

Another way to make it work is to change the header of `add` to accept root as `node**`, but then we need to dereference root.

At this point, we can build a BST using our `add` function. But, we need a function to display the tree. Some ways to traverse a BST include: inorder, preorder, postorder, breadth-first, and depth-first traversals. We will implement inorder traversal, which will display the values in an ascending order.

Inorder traversal first prints the value of the left node, then the value of the current node, finally the value of the right node.

![](/static/images/inOrderTraversal.gif?raw=true "Binary Search Tree")

Implementation of an inorder traversal will look this:

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