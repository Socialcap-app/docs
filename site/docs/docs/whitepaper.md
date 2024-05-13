# The Social Consensus layer

**Abstract**: 

In the era of modular blockchain technologies, where specific layers are designed to serve distinct functions, such as data availability or restaking, Socialcap introduces a novel component—the "social consensus layer." 

This layer addresses a critical gap in the digital ecosystem, where traditional consensus mechanisms primarily focus on objective, transactional agreements. Socialcap’s social consensus layer extends beyond these confines, facilitating subjective, community-driven decision-making processes that reflect the collective will while ensuring fairness, transparency, and inclusivity—qualities essential for dynamic and diverse community governance.

This paper explores the sociological roots of 'social consensus,' examines how various voting systems can explicitly build or formalize 'social consensus,' illustrates how credentials can serve as formal 'proof' of community-based decisions, delves into the intricacies of the social consensus layer, and discusses how Socialcap, as a versatile and integrable module, can enhance a wide range of platforms. 

We finally demonstrate how Socialcap provides the necessary tools to significantly enhance decision-making processes and agreements within digital communities. In an era increasingly dominated by sophisticated technologies like deep-fakes, it is crucial to ensure that real humans remain in control, making informed decisions that reflect the collective will of their communities.

## Introduction

In the blockchain space, the term 'consensus' is widely recognized and acknowledged; however, it refers to a very specific and deterministic method of achieving coordinated outcomes through a set of clearly defined and rigid logical rules.

By contrast, in societies, communities, and organizations, the term 'consensus' assumes a broader and more subjective meaning. It is qualitative, relying on human interactions and subjective judgments. This form of consensus focuses on achieving unity and shared understanding among group members, which are essential for maintaining social order and facilitating effective group functioning.

We delve into the current state of the art, definitions, architecture and  forecoming challenges in the following sections:

**A sociological perspective**: 'Social consensus' has been largely studied in Sociology and here we briefly present current status and definitions . We also analyze the differences between "direct" and "delegated" consensus. 

**Explicit consensus and voting systems**: We study how voting systems have been used and are currently used to explicitly build or express "social consensus" in a society or community.

**A scoped definition of social consensus**: We finally derive a more clearly scoped definition for 'social consensus', specially targeted for digital and decentralized communities (the focus of Socialcap).

**Credentials and formalized decisions**: We continue by defining credentials, how they can be used within a voting system and as a "proved formalized outcome" of a "social consensus" decision.



## Conclusions

From the previous work we can extract the following conclusions:

We established that **social consensus is never total and neither is it static. We might say that social consensus should be thought of as a series of dynamic social relations . In particular, in "reduced" communities or social groups organized around common interests, unlike a society in broad terms, being part of these communities implies a high degree of awareness in accepting the norms by its members** 

We asserted that **the validity of any voting system is founded in the social and never in the individual. Any voting system, no matter how imperfect or irrational, will be valid if a community accepts it as a tool to express the will of a group of people regarding an issue or candidate**.

We derived a scoped definition for Socialcap consensus as: **a community-based agreement on an issue or candidate, achieved through either a direct or delegated voting process. This process employs any of the voting strategies available on the platform, specifically tailored for the particular issue or candidate. The consensus is then formalized by issuing an immutable blockchain-based credential, ensuring transparency and permanence of the agreement.**





## A sociological perspective

Since the beginnings of Sociology, the tension between "the individual and the social," "integration and conflict," has been among the main inquiries among those theories we can recognize as "founding" the social field. Notable theorists include Emile Durkheim, Karl Marx, Max Weber, and George Simmel, to name a few. 

Subsequently, several theoretical currents of the 20th century (P. Bourdieu, A. Giddens, C. Wright Mills) contributed to the development of theories that integrate both perspectives, recognizing both individual action and agency, as well as structures and social conflict.

Using these currents as a starting point, **we can affirm that there is a certain degree of "social consensus" in being part of a society or community with certain norms and rules of operation. While an individual does not choose to be born into a particular society with specific norms, what actually happens is that these agreements are accepted to a greater or lesser extent, in order to develop a reasonably harmonious life**.

In the book “A new dictionary of the Social Sciences,” some guiding definitions and characteristics about social consensus are provided: “_Consensus is a necessary component of macro-social order, meaning by order a combination of relatively harmonious collaboration in the execution of agreed or accepted tasks, widespread acceptance of the allocation of rewards, and the relatively or mainly peaceful resolution of conflicts between corporate bodies, strata, and individuals. The importance of consensus to order does not mean that order is possible only on the basis of complete consensus. For one thing, order depends on other factors as well as consensus. But even the fullest consensus is never complete._” (Duncan Mitchell, 2010).  

Following this idea, **while total consensus would be impossible, it is a necessary factor for the development of any society or community**.

**Dynamic consensus**

Consensus is also not static; what is accepted at one moment can be questioned in the future. To question certain consensuses or “norms,” it would not be enough for an individual to disagree. Nor could several disorganized individuals generate a significant structural change. 

Throughout history, it has been observed that to generate profound changes, the organization of these wills around certain ideas different from the established ones was necessary. We refer not only to "the social question" and the organization of the labor movement but also to various social movements, collectives, and groups organized around a common interest axis. For example, environmentalist, feminist, ethnic organizations, among others, have been setting topics on the agenda and public opinion, achieving, with greater or lesser success, the modification of some of the established norms or consensuses. In these cases, while a social movement may achieve some change in certain consensuses, there is another foundational consensus that remains. For example, when the feminist movement achieved women's suffrage, this implied that the democratic system itself was not being questioned, but rather an aspect of that system. 

In this regard, following the definitions compiled by Duncan Mitchell, it is established that “What is essential for order is that there should be sufficient consensus about the legitimacy of the central institutional system, about the legitimacy of the mode of access of the incumbents of the major roles of the central institutional system, about the general rules and particular commands which they promulgate (...)” (Duncan Mitchell, 2010)

In summary, we can establish some preliminary conclusions: Social consensus is never total and neither is it static. We might say that social consensus should be thought of as a series of dynamic social relations. (Durkheim, Foucault…).

**Reduced communities and social groups**

What happens with more "reduced" communities or social groups organized around common interests?

So far, we have referred to consensus in "macro-social" terms, referring to the broad concept of "society." We will now focus on observing the "microsocial" level, that is, the more "reduced" or specific communities, such as a political party, a civil association, a sports club, a cooperative, and decentralized autonomous organizations (DAOs).

These communities usually organize around certain interests or common characteristics that act as the element that unites those who are part of them. In these cases, we find that there are also certain "norms" of operation, but unlike a society in broad terms, being part of these communities implies a higher degree of awareness in accepting the norms by its members. 

DAOs, in particular, utilize blockchain technology to ensure that these norms are enforced transparently and autonomously, allowing for democratic decision-making processes that reflect the collective will of their members.

**Direct and Delegated Consensus**

In addition to the dynamic nature of social consensus, it is important to distinguish between direct and delegated forms of consensus within communities. 

**Direct consensus** is achieved when all members of a community actively participate in the decision-making process, reflecting a pure form of democracy. This model is often seen in small, closely-knit groups where direct communication is feasible. 

On the other hand, **delegated consensus** involves electing representatives who make decisions on behalf of the group. This form is more common in larger communities or organizations where direct consensus is impractical due to the scale of the population or the complexity of the issues being addressed.

Both forms have their merits and limitations. Direct consensus ensures that all voices are heard and can strengthen communal bonds by involving everyone in the governance process. However, it can be time-consuming and may slow down decision-making in urgent situations. Delegated consensus, while more efficient, can lead to issues of representation and may dilute the direct influence of community members on decisions.

By comparing these models, we can better understand the mechanisms that underpin decision-making in both traditional and blockchain-based communities, such as DAOs. For instance, DAOs often blend these models, using blockchain technology to facilitate direct consensus on some issues while relying on elected or algorithmically selected delegates for others. This hybrid approach aims to leverage the benefits of both direct and delegated consensus, ensuring efficient yet inclusive decision-making processes.

## Explicit consensus and voting systems

**Can we “explicitly” show consensus?**

“_Many political offices are determined by voting, but so are the most popular songs in song contests, the sportsmen of the year, the winners of beauty contests, etc. The range of situations in which voting is used to determine which one among a group of individuals is considered as the best candidate is vast._” (Hannu Nurmi, 2012) 

Following this idea, in different social life situations, we face the challenge of manifesting the will of several people, or of making a consensus explicit. For this purpose, both societies in a broad sense and communities or organizations have resorted to different voting systems through which the will of a group of people can be expressed.

Next, we will develop different voting systems with some examples: Majoritarian systems. Simple majority or absolute majority.
Proportional systems.
Qualified voting systems
Weighted voting. 

However, considering some ideas developed by the economist Kenneth Arrow, it would be impossible, from the point of view of logical consensus, to establish a perfect voting system:
“_The Impossibility Theorem of Arrow (...) establishes that there is no fair voting system that meets certain reasonable criteria when choosing a representative, showing that when you have a group of individuals with individual preferences over a set of alternatives, it is impossible to find a voting system that:
a) Respects the individual preferences of each voter.
b) Is free from dictatorships, i.e., does not allow one person to impose their preferences over others.
c) Is independent of irrelevant alternatives, i.e., does not change the outcome of the vote if irrelevant alternatives are changed._” (Rojas Satián, 2023)

From the point of view of social consensus, we have also seen that there is no "total" or perfect consensus. 

**So, what gives validity to any voting system?**

We can affirm, in line with the development we have made so far, that what gives validity to any type of voting system is the community, that is, that "previous consensus" that exists in accepting certain norms of operation with their respective decision-making systems, which somewhat detracts from the search for a "logical consensus." 

To expand on this idea, we can return to Hannu Nurmi: “_In the theory of voting and representation, we encounter approaches that would most naturally be classified as individualistic in the sense that the starting point of the theorizing is the human individual or, more precisely, some specific aspects of human individuals. However, there are grounds for arguing that just the opposite is the case, viz, the theory shows that the collectivities of individuals have properties that clearly indicate the untenability of the individualistic view._” (Hannu Nurmi, 2012)

Thus, according to our approach, **the validity of any voting system is founded in the social and never in the individual. Any voting system, no matter how imperfect or irrational, will be valid if a community accepts it as a tool to express the will of a group of people regarding an issue or candidate**. 

Furthermore, we can add that the same community can make use of different voting systems depending on the case and its specifics. For example, in an academic community that must elect a chairperson according to competition, qualified voting might be used. But the same community might want to choose the best co-worker, and possibly in that election, people who could not participate in the first case would be allowed to vote. 

Following this example, it will be necessary to establish who is eligible to vote in each specific case, what conditions/credentials they must accredit to access the vote, and participate in the election, the latter implying implicitly that there is agreement with the system to be applied and its results.

In all these systems, there are some considerations to address:

- Who Can Vote? Determining who is eligible to vote is fundamental. The characteristics or credentials that individuals must possess to participate should be clearly defined, accessible, and justifiable to ensure that all eligible community members can vote without undue barriers.
- Equity of Information: It's essential to ascertain whether all voters have the same level of information when casting their votes. Information asymmetry can significantly affect decision-making, benefiting those with more comprehensive knowledge or access to information.
- Influence and Fairness: Addressing the influence that certain voters or groups might exert over others is critical. A valid voting system must manage and mitigate undue influences that could skew the fairness of the electoral process.
- Transparency in Vote Handling: Ensuring transparency in how votes are counted and the results are reported is paramount for maintaining trust in the electoral process. Transparency helps verify that the system is free from manipulation and that all votes are treated equally.
- Security and Integrity: Protecting the integrity of each vote involves robust security measures to prevent fraud and ensure that every vote is counted accurately and faithfully.
- Adaptability and Resilience: A robust voting system must also be adaptable, capable of adjusting to new challenges and resilient in the face of disruptions to maintain its validity and reliability.

**"One man, one vote" principle**

The principle of "one man, one vote" is crucial to modern democracies and was established after significant historical struggles for equal representation. This voting criterion insists that each individual's vote should have equal weight in the electoral process, a concept that emerged strongly during the civil rights movements, particularly in the United States during the 1960s.

Historically, this principle was fought for to address and correct inequalities in voting systems where some people's votes were counted more significantly than others, such as systems based on property ownership, race, or gender. 

This doctrine has been essential for ensuring that each citizen has an equal voice in electing representatives, making it a fundamental element of fairness and equality in democratic systems. It has also paved the way for more inclusive and representative governance, reinforcing the democratic principle that government should be of the people, by the people, and for the people.


But the significance of the "one man, one vote" principle can be traced back to 1844 within the cooperative movement. In 1844, the Rochdale Pioneers established the Rochdale Society of Equitable Pioneers in England, which is often considered the birth of the modern cooperative movement. **They introduced a number of revolutionary ideas which included democratic control by the cooperative's members, encapsulated in the principle of "one member, one vote".** This was significant because it ensured that control of the cooperative was maintained equally among all members, regardless of how much capital each contributed.

This principle differed from other types of governance in businesses at the time, which typically weighted voting rights according to the amount of capital invested, thus favoring wealthier members. The Rochdale Pioneers’ approach was foundational in promoting equality and democratic governance within cooperatives, influencing the development of cooperatives worldwide.

The implementation of "one member, one vote" by the Rochdale Pioneers was an early and influential application of democratic equality principles in economic enterprises, predating many political applications of similar principles.

**"One identity, one vote"** 

!!! TODO !!! -> Identity voting 

**Token Voting**

In addition to traditional voting systems, token voting represents a novel approach enabled by blockchain technology. This method involves the distribution of tokens to community members, who then use these tokens to cast votes on various decisions. The weight of each vote is often determined by the number of tokens a member holds, which can theoretically align voting power with stakeholder investment in the community.

However, token voting (as opposed to the "one member, one vote" schema), comes with its own set of challenges and limitations:

- Inequality in Voting Power: The primary concern is the potential for significant inequalities in voting power. Members with more financial resources can acquire more tokens, potentially dominating decision-making processes.
- Short-term Focus: Token holders may be incentivized to vote in ways that increase the short-term value of their tokens rather than in the best long-term interest of the community or platform.
- Voter Apathy: As with traditional systems, there can be a disparity in participation. Those with fewer tokens might feel that their votes have little impact, leading to lower voter turnout and engagement.
- Security Risks: Like any blockchain-based system, token voting is susceptible to security risks such as hacking and vote manipulation, especially if the underlying technology is not robustly designed.

Despite these challenges, token voting can still be an effective tool when integrated into a broader framework of social consensus. It requires careful design to ensure that it complements existing decision-making structures and adheres to the principles of fairness and inclusivity. For instance, mechanisms such as delegating voting rights or introducing caps on the influence of large token holders can help mitigate some of the issues associated with direct token voting.

As has been already pointed, the community's acceptance of the voting mechanism is crucial. It implies a preliminary consensus on the norms and rules of the election process, which in turn validates the use of token voting as a legitimate method to express collective will.

## A scoped definition of social consensus

We finally define "social consensus" for the specific scope and applications of Socialcap as:

***A community-based agreement on an issue or candidate, achieved through either a direct or delegated voting process. This process employs any of the voting strategies available on the platform, specifically tailored for the particular issue or candidate. The consensus is then formalized by issuing an immutable blockchain-based credential, ensuring transparency and permanence of the agreement.***

This definition implies the following assumptions:

1. Community-Based: The community is clearly defined, with all participants recognized as part of this collective fully understanding and agreeing to engage in the consensus process. This implies a high level of organization where individuals are acknowledged and active within the collective framework.
2. Direct or Delegated Voting: The system supports two main forms of engagement—direct, where each member votes directly on issues, and delegated, where representatives are chosen to vote on behalf of others. This flexibility ensures that users can select the most suitable method for each situation.
3. Tailored Voting Strategies: The platform must be adaptable to various decision-making scenarios, equipped with a sophisticated system that offers multiple customizable voting strategies to meet the specific needs of each issue or candidate.
4. Immutable Credentials: Blockchain technology is employed not just for record-keeping but also to guarantee the transparency and permanence of the consensus. This reliance on blockchain suggests trust in its capability to secure data and provide an unalterable record of decisions.
5. Transparency and Permanence:  It is assumed that blockchain inherently brings about transparency and permanence, potentially overlooking challenges such as scalability, consensus management on the blockchain, and environmental impacts of the technology.
6. Community Acceptance: There is an assumed consensus within the community regarding not only the outcomes but also the process itself, including the use of blockchain-based credentials to validate and formalize decisions. This assumes a significant level of digital literacy and acceptance of digital technologies among all community members.
7. Secret Voting and Privacy: By using Zero-Knowledge Proofs, the voting process remains confidential and private, enabling the verification of votes without revealing the voter's choices. This preserves the secrecy and privacy of the process, protecting voter information from coercion, influence, or external scrutiny, and ensuring a genuinely free and fair voting environment while maintaining robust security measures.

## Credentials and formalized decisions









---

