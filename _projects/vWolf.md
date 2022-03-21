---
title: vWolf
date: 2017-05-04
description: |
  An online moderator for the game of Werewolf built with Firebase.
  Replaces human moderators for in-person Werewolf games.
thumbnail: /assets/images/projects/vwolf/vwolf-thumb.png
published: false
---

<img alt='vWolf Login' class='float-right' style='max-width: 300px; padding: 20px' src="/assets/images/projects/vwolf/vwolf-phone.png"/>

vWolf is a virtual moderator for the game of Werewolf. In a traditional game of werewolf a player must sit out to moderate. Using vWolf, all players can participate. It can be played at vwolf.robbiemeyer.com. The project's code can be found on my github.

## Features
Currently players can:

- Create rooms
- Decide on the number of werewolves
- Have their roles randomly selected
- Vote out losing players
- Automatically know when the game is ended

As the game is web based, users can connect from any device. The game was designed from the ground up to accommodate all types of devices so no one would have to sit out.

## Technology 

vWolf is built using HTML/CSS, Javascript and Firebase. I wanted the application to run fully client-side to allow for easy web hosting.

I chose to use web technologies for the sake of portability. It was important to me that everyone should be able to use vWolf. To achieve this goal I targeted browsers from IE 9 and newer.

Firebase's real-time database allowed for easy transference of data between different clients. The application was designed to asynchronously retrieve data from the Firebase server. The communication is fast and responsive. This effect is most noticeable when changing role counts on multiple devices at the same time. The website is also hosted using Firebase.

## The Interface

![vWolf Interface](/assets/images/projects/vwolf/vwolf-ingame.png)

I designed the vWolf interface to be simple and non-intrusive. It is responsive and can function well on all screen sizes.

Each page features a large action button that indicates the action the player can currently take. Once game events begin, a log appears to keep track of past events. Roles are hidden under a menu to defeat wandering eyes. Every player sees the same information - no player is given an unfair advantage.

I initially used wireframes to design the interface. I then coded and tested a 'rough' interface. The interface was then polished and refined. The design shifted from an interface centered upon interacting with player names, to a design focused on a single action button. This change simplified the interface by providing a common interaction model for the user throughout the whole app. At this point the colour-scheme was finalized and I designed the logo. vWolf's interface was finished.
