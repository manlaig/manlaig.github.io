---
path: "/pong"
date: "2018-10-09T17:12:33.962Z"
title: "Teaching a neural network to play Pong"
excerpt: "Using Tensorflow to build a LSTM network that can play Pong"
---

## LSTM network to play Pong

A neural network trained to play Pong.

## Project Status
Currently trying to train the network using multiple frames and use the trained model to predict a move by feeding it with multiple frames at the same time.

## Current network performance
The right side is the neural network predicting moves
<a href="https://imgflip.com/gif/2ih1r3"><img src="https://i.imgflip.com/2ih1r3.gif" title="Human vs. Bot"/></a>

## Installation
You will need the following installed on your machine: `tensorflow`, `PIL`, `numpy`, `pygame`

I suggest you install `miniconda3` and create a new environment.

Installation:

`conda create -n name`

`conda install tensorflow`

`conda install PIL`

`conda install numpy`

`pip install pygame` 

## Reflection

This is a project for me to learn more about Deep Learning and especially get familiar with Recurrent Neural Networks and train neural networks with sequensive data.  

Originally I wanted to train a neural network that can make accurate move predictions by looking at game screenshots

One of the main challenges I ran into was collecting data and preparing it to train the network. Also, training the network to take into account the ball's velocity. Later, I will train the network again, but with multiple subsequent frames, so that it can learn the velocity of the ball.

In the future, I want to use Reinformencement Learning instead of Supervised Learning.