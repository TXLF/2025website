---
host:
  image: NW.jpg
  name: Nathan Willis
int:
  image: TC.jpg
  name: Thomas Cameron
date: 2025-09-23
description : "Texas Linux Fest 2025 - Interview: Thomas Cameron x Nathan Willis"
draft : false
layout: "interview"
ignore_header: true
---

# Thomas Cameron on automation, community, and asking questions

It's hardly a surprise that [Thomas Cameron](https://2025.texaslinuxfest.org/speakers/thomas-cameron/) is a regular fixture at Texas Linux Fest; he's a lifelong Austin-area resident, he's spent the bulk of his career thus far with Red Hat and other high-profile FOSS vendors, and — as he told me on a recent video chat — he thrives on in-person events. But you might be surprised at what aspects of tech conferences like TXLF he considers "can't miss" ... it's not just the sessions and the exhibitor booths, it's the opportunities for asking questions and learning what you don't know.

I asked Thomas what attendees could expect from his TXLF 2025 talk, "Getting started with Ansible on Linux", but we ended up talking about a lot more. The talk abstract [which you can read here](https://2025.texaslinuxfest.org/talks/getting-started-with-ansible-on-linux/) gives an overview of the scope, from installing Ansible on Linux systems to troubleshooting to interacting with the community and adjacent projects.


<br /><br />
### Interview

<br /><br />
__Nate:__ "In 'sneak peek' terms, what sorts of things people will want to
learn in a first Ansible session like this?"

__Thomas:__ "So I've never been a developer; I've always just been an old
sysadmin — I started out with Novell Netware, to date myself. Then I
became a Microsoft Certified Systems Engineer, a Sun certified
sysadmin, and I became a Red Hat Certified Engineer.

I was exposed to Ansible when I re-upped my Red Hat Certified Engineer
certification. And it was fairly new. I'll be honest, my first
blush was like, 'I'm never going to be able to do this: it's all
writing YAML. But it's not like I have to write code and compile
stuff.... So I learned YAML, and the more I learned it, the more I was
like 'holy cow, this is cool.' 

The thing that I want to talk about is the fundamentals, like 'how
do I make sure that Ansible can talk to my target servers?' or a
simple ping process. Then I want to move up from there to simple stuff
like, 'hey, it would be great if I could make sure that all my
patches were applied, right?' And then we'll move on from that and
say 'well, now that you've installed software, how do you make sure
that the service is running and it's set to run when the system
reboots? '

So my whole goal is to start super small, then add a little more, then
say 'oh, don't forget about this.' The goal is to try to build on
everything to where it becomes less and less overwhelming."

__Nate:__ "That's really interesting to me because, when I first looked at
your abstract, I noticed that you mention there that you had struggles
with Ansible at the beginning. Why was it deliberate or important for
you to say that in the abstract to the talk?"

__Thomas:__ "Yeah! Absolutely. One of the things that I
really love when I'm presenting is that I understand
where people are coming from if they've never been exposed
something before. Like, I get it: all of a sudden there's this
wall of information that you've got to figure out, and you've got to
understand the syntax and the spacing and the tabs and all that
stuff.

And I get it! I hate going to presentations where people are like,
'and you can see from the code here, this is intuitively obvious....'

You know, it's like, 'No. It's not.' The thing is that I have
always done sessions where I'm like, 'I understand,
especially when you're new, how overwhelming this can be.' So,
let's take little bitty bite-sized pieces and we'll get there.
And I prefer that.

Even today, I'll do something with, say, Ansible Automation Platform,
where you build containerized execution environments. Dude... trying
to figure out how to build the container the right way, so that it
actually does what you expect it to, was a challenge. Then (and I'm
kind of embarrassed to say this) within the last, I don't know, month
or so I learned something about formatting and all of a sudden all my
EEs started building flawlessly and I was like 'I got it now.'

So I always I always start out my talk by saying when I started doing
this, it was overwhelming. I didn't get it; I didn't understand. So if
you're feeling that way, you're in the right place."

__Nate:__ "Sounds great. I've looked at it, but I'm not an Ansible guy at
home ... it's on the list, but a long list. As in, I only forced
myself to learn Docker a couple years ago when I had something that
<em>had</em> to have it."

__Thomas:__ "Oh, one hundred percent. Dude, I was people like that; I
really was. As I said, for me getting started, it was all about
doing my sysadmin tasks as a Linux guy. It was just 'how do I
format it?' But, Ansible can configure network equipment — like
turning on or off ports on an Ethernet switch, or BGP on a
router. Ansible works with Windows! I was like, 'wait a minute, this
is an  open-source Linux thing,' but it actually works phenomenally
well with Windows.

And that's one of the things that I really love about Ansible, that
everybody who's writing playbooks had an itch to scratch. The cool
thing is, because of the community and the open-source nature of it,
people are like 'hey, I had this itch to scratch; here's my playbook'
or 'my Ansible role is on this GitHub repo.'"

__Nate:__ "So what I'm hearing is: people should ask you questions!"

__Thomas:__ "I cannot recommend it highly enough. <em>Not</em> that I'm
saying <em>I'm</em> an amazing person to talk to, but me or any other
presenter: don't think for a second that anyone's going to think, you
know, 'I'm in this rarified air.' No, come on up. Let's  talk about
stuff. Don't ever hesitate to ask questions, because that's what this
community is for. My passion is how do I teach people? How do I get
folks fired up about open source, or whatever it is I'm talking about?
I am never going to turn my nose up if someone comes up and says,
'Hey,  I'm so-and-so and this is what I'm working on.' Man, there are
no silly questions."

__Nate:__ "Yeah; that's great to hear. As conference organizers, you're
always wanting to encourage people to ask more questions. Let me throw
you the softball questions about Texas Linux Fest itself. Have you
been every year?"

__Thomas:__ "Wow; I don't remember if it was year one, but if it wasn't
then it was year two."

__Nate:__ "How about as a speaker? I was trying to remember, but do you
know how many times you've given a talk?"

__Thomas:__ "Oh my gosh. I typically will submit several talks per year,
so almost every year? "

__Nate:__ "It's become a blur to me at this point — in a good way. But what
I wanted to ask you was what stands out to you as highlights out of
those years?"

__Thomas:__ "You know, one of the coolest things that happens at pretty
much every Linux fest I go to is there are folks in the community
that I haven't seen since the last one. So, for me, the highlight is
always the catching up with folks, you know — shaking a hand, hugging
someone, seeing somebody that I may have communicated with a hundred
times over the year, but I haven't physically gotten to sit down and
have coffee or something like that.

The other thing that I absolutely adore about Texas Linux Fest
specifically is, because we've got so many high-tech companies in
Austin, the quality of the speakers. You'll see somebody bobbing up to
the stage that you haven't met before and they will say 'here's what
we're doing at Major Chip Manufacturer to manage, you know, these
10,000 servers' or something like that. How amazing and how varied the
speakers are."

__Nate:__ "I was going to ask what you'd suggest that a hypothetical new
attendee look for in the program...."

__Thomas:__ "I mean, obviously you're going to want to go with the sessions
that um affect you or interest you or whatever. But what I would
also say is be present and be involved. The hallway track, the time
when you're out in the hallway talking to other attendees: I get as
much out of that as I do from the sessions."

__Nate:__ "Definitely. And that was going to be the next softball question:
what do you look for outside the program?"

__Thomas:__ "Yeah, put yourself out there, introduce yourself
to folks. And I know, man, it's hard, especially for a lot
of us in the open source community, reaching out and
saying, 'Hi, my name is ____ and like ____.' That's tough, but you're
among friends. This is this is my extended family. So, don't hesitate.

So, go to the booths. Go introduce yourself to folks. I guarantee you
there is not a single speaker who will cringe if you come up and
say, 'Hey, I work at such and such or I'm doing such and such ... 
thanks for your talk or let me ask you this question about it.'

The big thing that I would tell folks on any number of levels being at
an open source conference — specifically being at Texas Linux Fest —
is that it's a safe space; you can ask questions no one's going to give you
a hard time about it. The old saw about 'come on in, the water's fine'
is 100% true. Um, it's a fantastic group of people. The organizers are
amazing. They do so much to drive inclusivity, to drive helping
folks. So don't hesitate, and don't think 'oh, I have to be quiet.'
No, come on in!"

__Nate:__ "Awesome. Last but not least, where should people have l"unch?

__Thomas:__ "Ooh, where is it this year? ... That's actually really close
to my house. I got a grill."

__Nate:__ Folks, you heard it here first.

__Thomas:__ "No, no; there are so many good restaurants around there. That
is the other thing that I really love every time I go to one of these
things: I will get introduced to someone because they'll be hanging
around after someone's talk and someone will say, 'Hey, you ready for
lunch?' 'Yeah, let's go to lunch. Who are you? Let's go.' ... and uh
and it's amazing and I have formed friendships that I have had for
literally 30 years doing that."

<br />
<br />

<h4>You can hear Thomas's introduction to using Ansible on Linux — and ask
him questions — at Texas Linux Fest 2025, October 3 to 4.</h4>
