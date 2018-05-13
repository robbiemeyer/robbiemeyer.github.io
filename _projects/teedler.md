---
---

# Teedler

Teedler is a command line tool to summarize text. It is not intended for
real-world use as it is only an experiment. Teedler works by reversing an
anomaly detection algorithm to find the sentences that are most representative
of the whole passage. Teedler was coded using Ruby. I was working with Ruby on
Rails for a coop placement at the time, so Ruby was what I was most comfortable
with at that moment. Ruby was also quick to code in and more than capable of
handling this type of program with ease.

In Teedeer's algorithm, each word in each sentence is used as a feature. Using
the word counts of the most common words, the means for each selected word and
the covariance matrix are calculated. Using this information, a multivariate
Gaussian distribution is created. Every sentence is then inputted into the
distribution. Finally, the highest scoring sentences are printed to the user.

The algorithm is fairly hit or miss. For some texts it outputs too much text
and for others it outputs too little. Sometimes it does produce a good summary
of the text. While it is not very useful on its own, this approach could be
useful as part of a larger more complex system.

The source code for teedler can be found on my [github](github.com/robbiemeyer).
