---
path: "/vm"
date: "2018-11-05T17:22:43.962Z"
title: "Virtual Memory"
excerpt: "All modern OS have virtual memory implemented. I came across virtual memory when I was worried something was wrong with my RAM and I found it to be interesting. It gives a program the illusion of continuous and infinite memory."
---

Two months ago, I tried to run a neural network on my computer. I had the batch size too big and the model wasn’t running. So, I checked the memory consumption and saw that python was taking 30GB in memory. I only have 8GB of RAM on my computer, so I knew something was wrong. Did some research and found about something called **Virtual Memory**. I thought it was interesting, so I decided to write about it.

Look at this diagram I found from online:

![](/static/images/memory_layout.png?raw=true "Memory Layout")

This is a diagram of a program’s memory space. We can see that the memory is *continuous* from low to high address. We'll get back to this image shortly.

For the OS, it wants to use memory efficiently. It doesn't want to give a process too much memory, instead giving more memory as a program needs it is much more efficient, in terms of memory management. Then, the memory layout of a program cannot be represented in the physical memory as one whole continuous block of memory (like in the previous image) because that limits the program's memory to a fixed size. Better approach would be to map this continuous block into many fixed size memory blocks (**pages**) that sits somewhere in memory. Shown in the below image:

>**The purpose of virtual memory is to use memory efficiently and give programs more memory than is physically available.**

![Virtual Memory Diagram](/static/images/virtual_memory_diagram.png?raw=true "Virtual Memory Diagram")

One interesting thing to note here is the *Disk*. We can see some memory of this process is from the Disk. This is one of the benefits of virtual memory. **The OS can keep a process running even if there’s no RAM left because it can allocate memory from the Disk**.

If you remember the story in the beginning of this writing, the reason python had used 30GB of memory was because of the Disk. The OS was keep allocating memory from the Disk. This resulted in more memory for the process, but much slower to fetch and write data to memory.