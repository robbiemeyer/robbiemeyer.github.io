---
title: Apollo
date: 2021-04-30
description: |
  A browser extension that assists users in the fact checking process on
  Twitter to combat misinformation. My fourth-year design project.
thumbnail: /assets/images/projects/apollo/apollo-thumb.png
redirect_from:
  - /apollo
---

From September 2020 to April 2021, I worked on Apollo with Charmaine Wang,
Eason Gao and Ryan Mok. Professor Alexander Wong was our project advisor.
Apollo is our fourth-year design project. It is an extension for Google Chrome
that helps users to identify false or misleading information on Twitter.

![Apollo Screenshot](/assets/images/projects/apollo/apollo-overview.png){:.med}

At the start of the project, we identified misinformation on social media as
our problem space. We researched the problem space and explored different
approaches to managing misinformation to identify an approach that we believed
could actually address the problem. Ultimately, we decided to create a solution
that presented additional information to help users identify false and
misleading information. We identified three objectives for the project:
assisting users in identifying misinformation, encouraging users to think
critically and preventing users from spreading misinformation. We did not want
to simply tell users if information was true as we did not want users to become
dependent on our solution and we did not believe it was possible to create a
fully objective automated fact-checker. As our timeline was limited, we decided
to focus on creating a solution for desktop Twitter users.

Apollo was the result of our efforts. Apollo is a browser extension that
presents additional information about articles posted on Twitter to help users
fact-check. Apollo adds a button under each linked article in Twitter. When the
button is clicked the Apollo sidebar opens and information about the article
will load.

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/KmdFc58FucQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

The final Apollo prototype presents three types of information in the sidebar:
basic article information, article sentiment and related articles. The user can
use this information to make an informed decision about the article quickly and
easily.

![Apollo Features](/assets/images/projects/apollo/apollo-features.png){:.med}

When the user clicks the Apollo button to open the sidebar, a connection is
established with the Apollo server. The server makes a request to get the
article, parses the article and then processes the text to extract all the
Apollo features. As a Chrome extension, the Apollo extension is written in
JavaScript. The Apollo server is an Express server written in Node.js. For the
related article system, I created a simple Flask service written in Python to
utilize the PositionRank algorithm from the
[PyTextRank](https://github.com/DerwenAI/pytextrank) package.
[Datanews](https://datanews.io/) is used to search for relevant articles. The
sentiment analysis feature uses Google's Natural Language API. Apollo was run
on the Google Cloud Platform App Engine.

![Apollo Architecture](/assets/images/projects/apollo/apollo-arch.png){:.short}

I helped plan the project, analyze testing results and develop features for
Apollo. The features I worked on included the related article system, the
interface and the back-end server. The tasks I worked on were varied and
included evaluating keyword extraction algorithms, tweaking styling and
performing statistical tests on survey results.

*Links to the Apollo code will be added soon.*
