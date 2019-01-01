---
path: "/bst"
date: "2018-11-19T18:47:43.962Z"
title: "Binary Search Tree in C++"
excerpt: "Binary Search Trees are very interesting data structures. It's a tree where each node of the tree has up to 2 nodes, left and right. What makes a binary tree a binary 'search' tree is how the left and right nodes are added."
---

Binary Tree is a tree where each node of the tree has up to 2 nodes, left and right. The difference between a binary tree and a binary search tree is how the nodes in a binary search tree is added.

>In a binary search tree (BST), the **left** node's value is **smaller** than the current node's value while the **right** node's value is **bigger or equal to**.

So, the structure of a BST will look like this:

<img src="/static/images/bst.png" width="40%" height="50%">

Let's implement a BST in C++ that looks identical to the image above.

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

Our `node` data structure has an integer value and left and right pointers. That means each node will contain 2 pointers that points to other nodes somewhere in memory.

Now that `node` is defined, we need an `add` function that adds nodes to our tree. The `add` function starts from the root of the tree and compares the current node's value to our value parameter. If the value of the current node is bigger, then it visits the left child, and vice versa. It does this until the current node is `null`.

The `add` function can be implemented with loops or with recursion. I personally think recursive solutions are more fun than loops, so here's the implementation done with recursion.

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

The header of this function might look weird, the data type of root is `node*&`. What it's doing is getting a pointer to the root as a reference. By doing this, we can directly change the pointers of our tree. If we don't do this, `root` will not be changed when the function returns.

Different ways of accomplishing the same thing include: getting a double pointer to the root or returning the updated root from the function.

At this point, we can build a BST using our `add` function. But, we need a function to display the tree. Some ways to traverse a BST are inorder, preorder, postorder, breadth-first, and depth-first traversals. We will implement inorder traversal, which will display the values in an ascending order.

Inorder traversal first visits the left-most node of the tree, then the parent of that node, and finally the right node of that parent. It prints the value of each node it visits.

![](/static/images/inOrderTraversal.gif?raw=true "Binary Search Tree")

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