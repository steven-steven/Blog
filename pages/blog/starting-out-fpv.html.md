---
title: Starting out FPV
publish_at: November 10, 2020
layout: post
---

![FPV Take Off](starting-out-fpv/fpv1.gif "=400x400")

> "When you fly, nothing else matter"

The past month I have been introduced to the world of FPV. Not having a mentor hasn't seem like too much of a burden as the FPV community on the internet (especially on youtube) had been extremely friendly for new players like me trying to get started in this hobby. In this post, I just wanted to uncover things I did to get started, my first impressions, and mistakes I've made as an incompetent pilot. If you happen to fly FPV as well, feel free to hit me up or drop in some tips. If not, hopefully you'd consider giving this hobby a try!

## My bitter history with drones
The first and last drone I owned was the DJI Phantom 4. I had it for about 2 years and had flew to few placed like Tangerang (where I lived), Vancouver and Bali. 24 August 2017, was the date when that drone crashed into a wall of rock, fell, and washed away by the rough merciless waves; after an attempt to sneak pass under a rock bridge in Bali. After that event the drone was never again seen and I'm left with an unused remote controller and a few batteries and accessories lying around without purpose.

![Crash Site](starting-out-fpv/crashSite.jpg "=400x400")

Another (potential) encounter I had with drones was when I saw the UW Aerial Robotics Group and considered joining. I remembered reading their wiki as well as some processes and roles they had with building drones. Unfortunately, I gave up on it knowing that I had no clue what I was reading. I really wished I had started researching on FPV early on those days…

## Purchasing the equipment

![FPV Equipments](starting-out-fpv/equipment.png "=400x400")
Seems like there was just one distributor that ships a lot of these FPV stuff worldwide. Which was Bangood.com.

### 1. Drone + battery + charger + radio controller + goggles
Normally one would buy these parts separately, but I cheated a bit because I bought the ['ready to fly' kit](https://www.banggood.com/EMAX-Tinyhawk-II-Freestyle-2_5-Inch-115mm-Wheelbase-FPV-Racing-Drone-RTF-Frsky-D8-Runcam-Nano-2-Camera-200mW-VTX-5A-ESC-p-1718751.html). It was however a good choice and something I'd recommend for starters, as it comes in a relatively much cheaper initial investment. It also saves lots of time researching and configuring the individual peripherals to get it working.
The EMAX Freestyle 2 actually just came out this year and the reviews seems to be pretty positive. The only thing worth noting I'd say was that the goggles in the kit cannot record any footages. You could buy a separate DVR module to manually attach on the goggles, or simply purchase a new goggles that comes with it out of the box.  I did the latter since I thought it's worth the investment in the long term.
### 2. New goggles + batteries + chargers
For the reasons mentioned earlier I decided to upgrade my goggles to the more fancy [Skyzone02c](https://www.banggood.com/SKYZONE-SKY02C-5_8Ghz-48CH-Diversity-FPV-Goggles-Support-DVR-HDMI-With-Head-Tracker-Fan-For-RC-Racing-Drone-p-1466958.html). The goggle comes with a lot of ports like the HDMI and SD card slot, 2  anthennas, AV cables, power cables that connects to an XT60 port (common connection for FPV batteries), but NO BATTERIES! I actually didn’t see that coming so as of the time I'm writing this, I'm still patiently waiting for my order to arrive.

When it comes to batteries there are soo much options! I spent a night researching and seems like if I was to get LIPO batteries I'd also need one of [these chargers](https://www.banggood.com/ISDT-Q8-BattGo-500W-20A-High-Power-Battery-Balance-Charger-Discharger-for-1-8S-Lipo-Battery-p-1596875.html), and had to pay much attention to the capacity and the series of the battery (determines how much Amp you need to charge it with). I think these are pretty advanced and requires lots of care. (ie. Charging at the wrong chemistry could cause the battery to swell or blow up.  Make sure you have an insurance for your house :smirk:)
In the end I decided to go with a [7.4V LI-ION batteries](https://www.banggood.com/1pcs-NCR18650B-3400mAH-3_7-V-Unprotected-Rechargeable-li-ion-Battery-p-72906.html) with a [FatShark battery case](https://www.banggood.com/Fatshark-7_4V-18650-Li-ion-Cell-Battery-Case-Box-DC5_5+2_5-For-FPV-Goggles-Video-Headset-without-Battery-p-1133893.html). I also need the [LI-ION charger](https://www.banggood.com/Liitokala-lii-202-5V-2A-18650266501634014500-Micro-USB-Battery-Charger-p-1141175.html) which looks to me like the simplest option compared with having to deal with the different settings in most FPV battery chargers. Not sure if this was the right choice, but the only real way to know is to try it out myself I guess. Note that this was only to charge the goggles. Maybe buying an actual standard 4-button charger would be preferable for someone looking to charge different types of batteries (like the LIPO to charge the drone).
### 3. Simulation
The simulation doesn't come free and I think it's a good investment to purchase some of the common ones, since you ideally wanna get the physics similar to flying the actual drone. I purchased '[Velocidrone](https://www.velocidrone.com)' for 20 pounds. There are multiplayer races, and different types of drone and maps to try out. I bind my FPV controllers with the game and hopefully could connect my new headgear in the future through HDMI or DVI (once the battery arrives).
### 4. Betaflight Configurator
[Betaflight Configurator](https://github.com/betaflight/betaflight) is an open source software used to configure your drone, goggles or controller. Although the ready-to-fly package came preconfigured, there's definitely some stuff you wanna customize like the widgets you see on the goggles display, calibration, testing the motors, and assigning commands on the controller. There's definitely a huge amount of advanced setting like (tuning the PID controllers, the sensors, etc) and would be the go-to tool to debug if things go wrong.

## Few Basics

There's 4 propellers. That means that you can have at most 4 degrees of freedom (roll, pitch, yaw and throttling the propeller to move vertically). With a FPV you can control all 4 of those unlike the cinematic DJI drones I flew in the past which constraints some of these movements for stability. Afaik the standard DJI drones also have GPS features allowing for stable flight, but it'll be difficult to fly indoors. That's why controlling the FPV is extremely hard since the pilot is given full manual control - but you also get more freedom to perform tricks like the 360 flip or rolls.

There are also 3 flying modes (acro, angle, and horizon). The angle is the easiest since it auto-levels and won't let you rotate above certain angle limits. The horizon auto-levels like angle mode but if you keep push the joystick all the way, it allows full rotations like the acro. The acro mode has no constraints and won't auto-level. Some people suggests going straight to acro so you don't have to relearn some of the habits you developed down the road.

## Learning Experience

It’s like riding a bike. Knowing the theory won't help you as much as actually doing them and crashing. Then one day, the neurons in your brain just find the connections on their own. That pattern certainly occurred to me as I played the simulation for the first couple of weeks. I started out not being able to hover properly especially in the indoor maps, and had a hard time making sharp turns. Few weeks later, my fingers move on their own with minimal conscious effort. Amazing how the brain works!

Once I felt comfortable enough, I went to the park to test it out. My first few flights was awful. Going from simulation I didn't really know what to expect. Some of my mistakes were:
- Realizing that after you arm and your propeller joystick is all the way down, the propellers will spin, but won't fly until you actually increase its speed/throttle. So pushing the joystick down midair is like letting it go on freefall.
- Not to fly above concrete.. Especialy when you haven't learned to properly hover.
- Start with training your hovering and simple movements. When I started, I focus too much on wanting to move around which didn't go well at all. I found it helpful to plan my flights or to train with specific milestones in mind. (start with the small wins!)
- Pay attention to the cables in the way of the propeller (secure it with tape or a zip tie).

## Conclusion

FUN is an understatement. I still feel extreme anxiety when I fly but at the same time it feels exhilarating to move around and through objects with so much agility. I am still riding that learning curve and it is a pretty advanced and dangerous sport, but I'd still recommend this hobby to anyone in a heartbeat.

As a bonus, here's my first ever flip :)
![FPV flip](starting-out-fpv/fpvflip.gif "=400x400")