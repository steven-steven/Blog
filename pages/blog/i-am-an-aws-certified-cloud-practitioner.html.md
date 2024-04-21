---
title: I am an AWS Certified Cloud Practitioner
publish_at: October 31, 2020
layout: post
---

![Download Demo](/assets/blogAssets/i-am-an-aws-certified-cloud-practitioner/ccp_cert.png "=400x400")

My first actual use of AWS was 8 months ago when i tried to provision a RDS MySQL DB instance for a course project ([ECE 356](/blog/when-the-storm-ends#4.-database-sql---ece-356)). I had to import ~2 GB of sanitized Yelp data which was painfully slow locally (hours). But to my surprise, it took less than 5 min in RDS! 

With the ability to scale compute, network, and storage resources the cloud is undeniably necessary for complex software applications today to grow. And its a no-brainer to utilize services like AWS (or gcp) which benefits from the economics of scale to give you the greatest price you can get. 

AWS had a few certifications, and CCP being the most basic exam, I thought that it'd be a reasonable starting point for my journey to understanding more about the cloud. Walk 4 weeks forward, today (also Halloween 🎃) at 3.15 pm EST i sat through a proctored exam in the confort of my home. Tbh it wasn't bad at all..

## Prep
I actually began by watching this 4h '[AWS CCP Training 2020](https://www.youtube.com/watch?v=3hLmDS179YE)' video by *freeCodeCamp* on Youtube (x1.5 speed). It was a great compilation of essential information as well as a few hands-on walk-through on setting the services up on AWS.

But after doing some exam practice problems, that video's coverage felt 'incomplete' and didn't go through some important services like Route53, CloudFormation, and security group / NACL firewalls, and how they work/might be useful in the job.
So I spent another few weeks skimming through the [Exam Study Guide book](https://github.com/mohankumarbm/aws-ccp-certification/blob/master/Ben%20Piper_%20David%20Clinton%20-%20Aws%20Certified%20Cloud%20Practitioner%20Study%20Guide_%20Clf-C01%20Exam-Sybex%20(2019).pdf) which talk about all the essential services in greater depth. The chapter quizzes in that book covers even more depth compared to the actual exam questions tbh. But it was entertaining to read even for someone not taking the exam. Here is an example of a snippet about 'AWS Trusted Advisor' from the book😄:

> "... So, don't think you have to blindly follow all the suggestions you're shown. This is an _advisor_, after all, not your mother."

I spent 4 weeks in total (maybe 3h everyday on average). From a reliable source called Reddit, it seems like some people passed the exam only after 1 week of studying. Now that I completed the exam, I can see why. But when preparing, it felt quite overwhelming because there's certainly a lot of information (it could either be broad and ask you different services, or go deep into what each service entails like pricing, and configurations). I also did a few sample questions people post online for free (which I don't think are official past papers). Some sources are very hard, while some really goes easy. So walking in on that exam I really had no clue what to expect.

## The exam itself
The exam costs $100. On the day, you go to the link on the scheduled exam time. It'd ask you to check-in, take pictures of your table/room from all 4 sides, verify your face and ID, close all apps on your computer except for the exam software, and finally you can take the 65 multiple-choice questions exam while your face/voice are recorded during the entire session. After the exam, I'm given a 'status: passed' page (which I forgot to screenshot). Besides that I see no confirmation that I finished the exam (not even on the AWS account nor an email) but you're told to wait 5 business days probably for them to verify the exam.

Edit: A day later, I was emailed the certificate! (passed with a grade of 917/1000 whatever that means)

For most parts, the questions was extremely straight-forward and basic. There were a few (like ~8) questions which was either vague or I didn't know the answer to. For example, one of the questions asked me about the text-to-speech Amazon Polly service which wasn't covered at all in the prep video nor the study guide.

## Worth
Not sure how much employers value this cert, but it was definitely valuable for my own curiosity. I personally didn't really enjoy learning about the pricings, trusted advisor, and AWS support plan stuff. But I did enjoy understanding how AWS services work under the hood (regions, AZ, VPC, subnets, EC2 instances, EBS, etc) as well as services like CloudWatch (which was similar to diagnostic services like Google Stackdriver which I had used in my previous intern at Loblaws), Cloud formation (provisioning infrastructure as code), and also the different storage types. Some of it also serves as a review of school courses I had taken like Networks and Distributed system.

But $100 for 3 years… I don't think I'm going to redo the exam just to renew the cert once it expires. Might try the more advanced AWS certs like Associate, Professional or Specialty level one day in the future if I'd ever need it.

P.S. Also realize that I now have 50% voucher for my next AWS certs. Poggerss
