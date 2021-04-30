---
title: Ontario Election Analysis
date: 2018-08-07
description: |
  Analyzing the 2018 Ontario Election Results and 2016 Census data to determine the
  plausibility of claims made about the election.
thumbnail: /assets/images/projects/ont-elect/ont-elect-thumb.png
redirect_from:
  - /oea
---

Poltical landscapes all across the world seem to be changing, or at least that is what I have heard. Everyone seems to be talking about the current state of politics and everyone seems to have their own explanation for every victory and loss.

On June 7, 2018 Ontario had a provincial election that dramatically shifted the balance of power in Queen's Park. The Progressive Conservative Party (PCP), led by Doug Ford, won a majority government. The Liberal Party (LIB), which had been in power since 2003, lost official party status and was reduced to only 7 seats. The New Democratic Party (NDP) became the official opposition. This was also the first election in which a Green Party (GPO) candidate was elected in Ontario. In the graph below you can see the election results.

![Election Results](/assets/images/projects/ont-elect/election-results.svg){:.short}

I wanted to see if any of the claims and explanations I have heard about elections are true. Using the election data and the 2016 census data, I analyzed the results using to determine the plausability of each claim. I used Python, Pandas, Scipy, Pyplot and Seaborn to clean, analyze and visualize the data. The scripts and Jupyter Notebooks I used can be found on my [github](https://github.com/robbiemeyer/OntarioElectionAnalysis2018).

For questions regarding demographics, I generally wanted to see if each party's election results data exhibited differences in central tendancy. One measure of central tendancy that I used often below is a 'vote weighted average.' When I use this term, I am refering to taking the mean of data point for each riding (ex. mean household income) and weighting the mean by the number of votes a party got in each riding.

## Claim: The Progressive Conservatives would not have won a majority government if the Green Party did not split the vote

My dad supports the Green Party.  However, he believes that the Green Party hurts their goals when they siphon votes from a party that shares some of their goals (the NDP) and allow a party that does not share their goals (the PCP) to win the riding. He believes that the Green Party needs to be more strategic in where they campaign to avoid splitting the vote.

There are eight ridings in which a Progressive Conservative candidate won with a vote margin of fewer votes than the Green candidate. The results for these ridings are detailed in the table below.

{:.table .table-hover .table-sm}
| Riding                   | Winner                                               | Runner up                                         | Vote Margin | Green Candidate                                |
| ------------------------ | ---------------------------------------------------- | ------------------------------------------------- | ----------- | ---------------------------------------------- |
| Brampton West            | [PCP] Amarjot Sandhu <br>(14 951 votes)              | [NDP] Jagroop Pangli <br>(14 461 votes)           | 490         | [GPO]  Julie Guillemet-Ackerman<br>(999 votes) |
| Brantford—Brant          | [PCP] Willem Bouma <br>(24 437 votes)                | [NDP] Alexandra Felsky <br>(23 802 votes)         | 635         | [GPO] Ken Burns<br>(2 741 votes)               |
| Cambridge                | [PCP] Belinda Karahalios<br> (17 793 votes)          | [NDP] Marjorie Knight<br> (15 639 votes)          | 2154        | [GPO] Michele Braniff<br>(3 018 votes)         |
| Eglinton—Lawrence        | [PCP] Robin Martin<br> (19 999 votes)                | [LIB] Michael Colle <br>(19 042 votes)            | 957         | [GPO] Reuben DeBoer<br>(1 190 votes)           |
| Kitchener—Conestoga      | [PCP] Michael Harris <br>(17 005 votes)              | [NDP] Kelly Dick <br>(16 319 votes)               | 686         | [GPO] Wubbo Jonkman<br>(2 853 votes)           |
| Kitchener South—Hespeler | [PCP] Amy Fee <br>(16 511 votes)                     | [NDP] Fitzroy Vanderpool <br>(15 741 votes)       | 770         | [GPO] David Weber<br>(3 198 votes)             |
| Ottawa West—Nepean       | [PCP] Jeremy Roberts<br> (16 590 votes)              | [NDP] Chandra  Pasma <br>(16 415 votes)           | 175         | [GPO] Patrick Freel<br>(1 937 votes)           |
| Sault Ste. Marie         | [PCP] Rosario Romano <br>(13 498 votes)              | [NDP] Michele McCleave-Kennedy <br>(13 084 votes) | 414         | [GPO] Kara Flannigan<br>(1 044 votes)          |
| Scarborough—Rouge Park   | [PCP] Vijayadhithyan Thanigasalam <br>(16 224 votes) | [NDP] Felicia Samuel<br>(15 261 votes)            | 963         | [GPO]  Priyan De Silva<br> (1 014 votes)       |

If every Green vote in these ridings was redistributed to the runner-up, the election results would look like this:

![Election Results](/assets/images/projects/ont-elect/alt-results-no-green.svg){:.short}

While the Progressive Conservatives may have lost nine seats, they still hold a majority government. Even in the extremely unlikely event that every vote for the Green Party was redistributed to be as unfavourable to the PCP as possible, the PCP would still hold a majority government. Therefore, the Green Party did not hurt their goals by splitting the vote as the balance of power would have been unchanged.

## Claim: Older voters prefer the PCs and younger voters prefer the NDP

The vote weighted average of each party's age demographics can be seen in the graph below. Note that the percentages for each age range are independant averages and therefore do not sum to 100%. 

![Election Results](/assets/images/projects/ont-elect/party-age-demo.svg){:.med}

While the averages for each party are similar, there are a few notable differences. The NDP and Liberals have a higher average for the 20-39 ranges while the PCs have higher averages in the 40-59 and 60-79 age ranges. This would indicate that younger voters are more likely to vote for left-leaning parties and older voters are more likely to vote for right-leaning parties. 

As the voting age in Ontario is 18, the higher PC 0-19 average does not contridict this trend as it likely only indicates that the PCs are more successful in ridings with more families.

Of course, the differences in the graph are small, but the results are consistant with pre-election [polls](http://onpulse.ca/blog/ndp-holds-onto-lead-over-pcs-as-outcome-is-uncertain-at-this-point) (that can track the age of each polled individual) and my own experience as a young person in Ontario. I therefore do believe that it is plausible that younger voters prefer left-leaning parties.

## Claim: Conservative parties struggle in urban ridings

Below are each party's vote weighted averages for population density. There is a clear difference between each party's average population density. The NDP have a significantly higher average population density than the PCP. This would support the claim that left-wing parties are more successful in urban areas.

![Election Results](/assets/images/projects/ont-elect/party-pop-density.svg){:.short}

If we look at a scatter plot of votes and population density for elected candidates, we can see that almost all the seats the NDP won were in high density ridings. Please note that the x-axis of the plot uses a logarithmic scale (to allow all the data points to be visible). In this election it looks like it was not the PCP that struggled in high density ridings, but every other party struggled in low-density ridings.

![Election Results](/assets/images/projects/ont-elect/pop-density-scatter.svg){:.short}

## Claim: Lower-income individuals are more likely to vote for the NDP

Looking at the vote weighted average for household income, the PCP, LIB and GPO all have fairly similar averages, but the NDP have an vote weighted average of median household income about $5 000 less than the PCP. This may support the claim that lower income voters are more likely to support the NDP. It may also indicate that younger voters, who are more likely to have a lower personal income and be unmarried support the NDP.

![Election Results](/assets/images/projects/ont-elect/party-average-income.svg){:.short}

If we look specifically at the PCP and the NDP's data. We can see that there is a weak positive correlation between PCP votes and median household income and a weak negative correlation between NDP votes and median household income. It does look like the PCP see more success in wealthier ridings while the NDP see more success in less wealthy ridings. 

![Election Results](/assets/images/projects/ont-elect/income-v-votes.svg)

## The Liberals lost this election. Badly

One thing I noticed while looking through the data was that the Liberal Party did not just lose a lot of seats, they only barely won the seats they did declare victory in. The Liberal's average vote margin is much lower than any other major party's. It will be interesting to see if the Liberal party can rebound from this crushing defeat.

![Election Results](/assets/images/projects/ont-elect/win-margin.svg){:.short}

## Conclusion

People are complicated and difficult to predict. Yet we try anyway. The common claims made about voting patterns may not be strong predictors of voting behaviour, but they do seem to be grounded in reality. While Ontario's political landscape may have drastically changed, the underlying voting patterns have not changed. 

##### Data Sources

- [Ontario Election Results](https://www.elections.on.ca/en/resource-centre/elections-results.html)
- [2016 Canada Census](https://www12.statcan.gc.ca/census-recensement/2016/dp-pd/prof/details/page_Download-Telecharger.cfm?Lang=E&Tab=1&Geo1=PR&Code1=01&Geo2=PR&Code2=01&Data=Count&SearchText=Canada&SearchType=Begins&SearchPR=01&B1=All&TABID=1)
