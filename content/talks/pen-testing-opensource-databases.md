---
title: "Pen-testing opensource databases (MySQL and PostgreSQL)"
description: "Texas Linux Fest 2024"
page_header_bg: "images/background/page-title-bg.jpg"
format: "Presentation"
when: "Saturday, April 13, 2:30 PM - 3:15 PM"
where: "Room 4"

speakers:
  - name: "Alexander Rubin"
    image: "images/speakers/alexander-rubin.jpg"
    link: "speakers/alexander-rubin/"
---

Are your database(s) secure? No, not the application, the database! Usually,
everyone is focused on the application security and consider the database
server to be "protected" by the network firewalls. But what if the first layer
of defense fails and your database is exposed from the internet or via SQL
injection? Will a bad actor be able to escape from the database and get root
shell or exfiltrate other database tenants data? Penetration tester's goal is
to pretend to be a "bad actor" and try to find all the week spots in a
simulated scenarios. I will show a number of "week spots" when dealing with
opensource relational databases (MySQL and PostgreSQL) and how to protect from
them.

I will follow the typical attack vector, starting with sql injection example
and demonstrate a number of methods how an attacker can "escape" the database,
get shell, etc.
