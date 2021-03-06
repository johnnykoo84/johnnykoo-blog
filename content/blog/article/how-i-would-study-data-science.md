---
title: "How I Would Learn Data Science (If I Had to Start Over)"
date: "2020-06-22"
tags: ["DATA", "LEARN"]
featuredImage: ../../assets/data-has-better-idea.jpg
---

> 이 글은 원문 [How I Would Learn Data Science (If I Had to Start Over) by Ken Jee](https://towardsdatascience.com/how-i-would-learn-data-science-if-i-had-to-start-over-f3bf0d27ca87)을 저자의 동의 하에 번역한 글 입니다. 흔쾌히 번역에 동의해 주신 저자 Ken Jee님께 감사의 말씀을 드립니다.
> 어려웠던 부분에서 번역에 도움을 주신 김창준 님, 김영웅 님, 김홍식님, 김형찬님, 문규리 님께 감사의 말씀을 드립니다.

![AI](../../assets/data-has-better-idea.jpg)
_Photo by Franki Chamaki on Unsplash_

나의 데이터사이언스 학습 여정은 꽤나 옛날 방식이었던 것 같다. 대학교 학부에서 경제학을 전공하고 석사과정에서 국제 통상(global commerce) 과 컴퓨터공학을 전공으로 선택하여 머신러닝과 AI 공부에 집중했다. commerce 학위를 공부하며 비지니스에 대한 감각을 익혔고, 석사과정에서 컴공을 전공하며 대부분의 기술적인 부분들을 배웠다. 그리고 나서 데이터 사이언스 인턴쉽을 하게 되었고 지금의 길을 걷게 되었다.
돌이켜보면, 내가 택했던 길에 크게 문제는 없어 보인다. 하지만 현재 내가 하고 있는 일에 대해 꽤 잘 알고 있는 현재에서 보면, 나의 학습 여정에 대해 어떤 변화를 줄 수 있을까? 이런 종류의 질문은 이제 막 이 필드에 들어서길 희망하는 학습자들에게 도움이 되는 질문들일 것이다. 내가 공부를 시작했을 때와 비교해보면, 너무 많은 것들이 변해버렸다. 데이터 사이언티스트로 포지션으로의 경쟁은 훨씬 심해졌고, 학습에 있너 훨씬 더 많은 옵션들이 생겨났다. 이 글에서의 나의 경험들이 독자들에게 더 효과적이고, 더 좋은 방법의 학습 여정의 그림을 제공하며, 더 나아가 데이터 사이언티스트로 구직에 도움이 되길 희망한다.

글을 쓰기 전에 먼저 무엇을 배우든 방법과 방향은 사람마다 다를 수 있다는 점을 말해야 할 것 같다. 이 글의 내용이 절대적으로 옳지 않을 수 있으며, 실제 이 글을 읽는 당신의 학습 방법은 따라서 조금씩 다를 수 있다는 말이다. 그럼에도 불구하고 이 글은 데이터 사이언스 학습에 있어 좋은 시작점이 될 것이라 생각한다. 데이터 사이언스 공부에 있어 우선순위 측면에서의 큰 그림을 그리는데 이 글이 도움이 되면 좋겠다. 이 글은 데이터 사이언스를 어느 곳에서 (어느 코스, 부트캠프, 대학/대학원 학위 등) 배우느냐 보다는 어떻게(how) 배우는가에 초점이 맞춰져 있다. 아래 두 개의 블로그 아티클을 읽어보길 추천한다.

## Lesson 1: Break it down

내가 처음 데이터 사이언스 공부를 시작했을 때, 학습의 범위가 너무 넓고 어디서부터 시작해야할지 몰라 상당히 당황스러웠다. 프로그래밍 언어 뿐 아니라 통계, 선형대수, 미적분 등을 배워야했고 도저히 어디서부터 시작해야 할지 감이 오질 않았다.

운좋게도 나는 코스워크를 통해 학습 가이드를 받을 순 있었는데 왜냐하면 학위를 위한 공부 과정에서 이 모든 컨셉들은 소화할 수 있는 양의 작은 단위 수업들로 나뉘어져 있었기 때문이다. 나의 경우와 달리, 요즘 보면 한 가지 딱 정해진 커리큘럼으로 데이터사이언스를 교육하는 학교들도 있는 것 같다. 그러나 이런 과정을 보면 실제 데이터 사이언스 공부를 위해 불필요한 과정도 함께 들어가 있다. (역주: 만들어져 있는 데이터 사이언스 커리큘럼에 동의하지 않는다는 의미로 보임) 만약 내가 과거로 돌아가 다시 공부한다면, 나에게 맞는 청크 단위로 데이터 사이언스 학습을 더 잘 나누어 공부할 수 있을 것 같다.
데이터 사이언스라는 세계로 들어가기 전에, 이 업계에서 다뤄지는 컴포넌트들에 무엇들이 있는지 살펴보면 좋겠다. 이 컴포넌트들을 곧바로 수업 단위로 나누기 보다 더욱 작은 단위로, 더욱 소화할 수 있는 단위로 쪼개볼 수 있다.

- 프로그래밍 - Python 그리고/혹은 R 에 익숙해 지기
- 변수(Variables)
- 루프(Loops)
- 함수(Functions)
- 객체(Objects)
- 패키지(Packages) e.g. pandas, numpy, matplotlib, sklearn, tensorflow, pytorch, etc
- 수학(Math)
- 통계(Statistics)
- 확률이론(Probability theory)
- 회귀(Regression) e.g. linear, multiple linear, ridge, lasso, random forest, svm, etc
- 분류(Classificatino) e.g. naive bayes, knn, decision tree, random forest, svm, etc
- 클러스터링(Clustering) e.g. k means, hierarchical
- 선형대수(Linear Algebra)
- 미적분(calculus)

데이터사이언스를 이렇게 컴포넌트 단위로 나눠보면, 추상적인 개념에서 구체적이도 단계적으로 학습을 접근해 볼 수 있다.

## Lesson 2: Start somewhere

처음 데이터 사이언스 공부를 시작할 때 즘, 나는 올바른 순서로 공부하는 것에 고민하고 집착했다. 업계에 들어오니, 이 업계의 많은 사람들이 다 각기 다른 순서로 공부해 온 것을 알게 되었다. 수학을 먼저 공부하고 프로그래밍을 부트캠프에서 공부했던 박사 출신 동료도 있었고 엄청난 실력의 소프트웨어 엔지니어가 이후 혼자 수학과 어플리케이션 공부를 했던 동료도 보았다.

이제서 알게된 사실은 어디선가 당신이 흥미를 가지는 토픽에서 일단 무조건 시작을 하는게 제일 중요하다는 것이다. 하나를 배우게 되면, 다른 쪽 공부도 자연스럽게 이어질 것이다.

만약 과거로 돌아간다면, 그 당시 내가 가장 흥미를 가지는 개념부터 공부할 것 같다. 한 가지 개념을 이해하게 되면, 다른 개념들은 이미 사전에 이해했던 개념의 도움을 받아 공부할 수 있다. 예를 들어, 간단한 Linear Regression(선형 회귀) 을 배운다면, multiple linear regression을 이해하는 것은 어렵지 않다.

하지만 과거로 돌아간다해도, 바로 딥러닝부터 배우는 것은 좋은 생각이 아닐 것 같다. 작고 간단한 것부터 시작해서 튼튼한 기본(foundation) 위에 빌드업 해 나가는 것이 더 낫다.

## Lesson 3: Build Minimum Viable Knowledge (MVK)

시간이 지나면서 데이터사이언스 학습에 있어 얼만큼의 기본 지식이 필요한지에 대한 생각이 달라졌다. 스스로 여러 다른 방법의 공부 방식을 경험해 가며 확실하게 알게된 사실은, 데이터 사이언스 공부에 있어 가장 효과적인 방법은 실제 있을법한 문제를 직접 풀어가며 배우는 학습방식이다. 일단은 `해보면서 배우기`가 가능할 수준까지만 배우기를 하는 거로 시작해야 한다. 자 여기서 minimum viable knwoledge (MVK), 최소 가용 지식 개념이 들어오게 된다. 즉, 일 또는 프로젝트를 직접 진행하면서 배울 수 있는 만큼의 공부를 시작하면 된다.

이 스테이지까지 오는 것은 어렵지 않다. 온라인 개론 코스들로 충분히 이 정도 레벨까지 갈 수 있다. Kaggle.com에 있는 마이크로 코스 들을 추천한다. 이 스텝까지 오기 위해 필요한 것은 python 혹은 R 기본과 사용되는 패키지(package)들에 익숙해지면 된다. 수학 공부는 추후 실제 데이터들에 몇몇 알고리즘을 적용하면서 하면 된다.

나는 데이터 사이언스를 배우는 최고의 방법은 데이터 사이언스를 하면서 배우는 것이라는 것이라 확신한다. 이론은 굉장히 중요하다. 하지만 사용하기 전에 모든 이론들을 이해해야할 필요는 없다. 이론은 해당 알고리즘의 기능적인 이해를 가진 이후에 돌아가서 들여다봐도 충분하다. 나의 경우, 실제 현장의 데이터 예제를 접했을 때 언제나 이런 이론들에 대한 이해가 와 닿았었따. 당신 역시 프로젝트를 통해 현장의 데이터 예제들로 시작한다면, 이론이 와 닿는데 있어 훨씬 도움이 될거라 생각한다.

## Lesson 4: Learn from other people's code

또한 프로젝트는 드넓은 데이터 사이언스의 영역을 구체적으로 좀 더 작게 만들어주는 힘이 있다. 새로 이 학문을 공부하는 분들에게 있어 가장 큰 도전(challenge)는 공부할 게 너무 많아 어디서부터 시작해야 할지 모른다는 것이다. 이런 큰 배움의 청크들을 당신만의 작은 프로젝트 사이즈에 제한시켜보면, Lesson 1에서보다 훨씬 더 작은 단위 배움의 내용들로 정리해 볼 수 있다.

또한 프로젝트는 당신의 학습에 있어 어느 부분에 개선이 필요한지 바로 피드백을 받을 수 있는 유익이 있다. 만약 당신의 프로젝트에서 특정 패키지, 알고리즘 혹은 시각화등에 어려움을 겪고 있다면, 어느 영역의 공부를 더 해야하는지 바로 알 수 있게 된다.

## Lesson 5: Learn from other people's code

여러분들만의 프로젝트를 수행하는 것은 좋지만, 종종 여러분들은 여러분들이 무엇을 모르는지 모를 때가 있다. 언제나 다른 숙련된 데이터 사이언티스트들의 코드 및 작업물을 읽어보며 다음에 무엇을 공부해야 하는지, 혹은 logic과 syntax에 대한 이해도를 높이길 추천한다. Kaggle과 GitHub에는 사람들이 데이터 분석에 사용했던 수천(혹은 수백만)건의 작업물(kernels)들이 있다.
이런 내용들을 공부해보는 것은 여러분들의 프로젝트를 보완하는데 큰 도움을 준다.

사용되고 있는 패키지, 알고리즘, 그리고 시각화 자료들을 리스트로 정리해 보자. 이후 각각의 공식 문서들을 살펴보며 이해의 범위를 넓혀보자. 언제나 해당 문서에는 이 것들이 어떻게 사용되어야 하는지 예제들을 가지고 있을 것이다. 이런 방법은 여러분들의 새로운 프로젝트 아이디어와 실험에 도움이 된다.

## Lesson 6: Build algorithms from scratch

데이터 사이언티스트들에게 이것은 통과의례와도 같다. 알고리즘 적용 후, 이것이 실제에서 어떻게 동작되는지 이해한다면, 이 알고리즘을 처음부터 한 번 작성해 보길 추천한다. 이런 시도는 알고리즘 저변에 있는 수학과 다른 매커니즘들을 더 잘 이해하는데 도움이 된다. 이 때, 자연스럽게 해당 이론을 배울 수 있는 것은 의심의 여지가 없다.
개인적으론 이론을 먼저 빠삭하게 공부한 후 적용해보는 것보다 위 방법이 훨씬 더 직관적이라고 생각한다. 이 방법이 바로 fastai(역주: AI 교육 기관)가 free mooc(무료 mooc강의) 에서 사용한 접근 방법이다. 딥러닝에 관심이 있다면 이 fastai 강의를 적극 추천한다.

나는 선형회귀(linear regression)부터 학습을 시작하길 추천한다. 왜냐하면 gradient descent 개념이 굉장히 중요한데 이 개념에 대해 빌드업 하는데 있어 도움이되기 때문이다. 데이터 사이언스 커리어를 계속 진행할 수록, 이론의 영역은 훨씬 더 중요해진다. 진짜로 중요한 것은 어떤 문제를 푸는데 있어 적합한 알고리즘을 매칭하는 것이기 때문이다. (역주 추가: 특정 모델 튜닝으로 컴퓨팅 파워를 높여가며 문제를 풀어내기보다는, 문제를 풀기에 좋은 알고리즘을 적용하는 것이 중요하다는 것으로 해석됨) 알고리즘과 이론간의 이 관계를 알면 이 선택의 과정을 가능하게 해 준다.

## Lesson 7: Never stop learning

데이터 사이언스 여정의 아름다움은, 끝이 없다는 것이다. 업계의 발전과 새로운 패키지들에 대해 계속 노출되고 공부해나가야 한다. 그럼 어떻게 계속 노출되고 공부를 할 수 있을까? (이제는 알 것이라 생각한다). 그렇다. 프로젝트를 멈추지 않고 계속 해 나가야 한다. 발행된 새로운 연구 논문과 코드리뷰를 계속 하는 것 역시 추천한다. 이는 실행적인 조언이라기 보단, 일종의 사고방식 및 습관에 대한 조언이다. 만약 데이터 사이언스 학습에 끝이 있다고 생각했다면 그것은 큰 착각이다.
