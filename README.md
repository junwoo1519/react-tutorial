# react-tutorial
mac에서 깃오류가 장난 아니다 차근차근 하나씩 장리를 해보자
유저 네임과 유저 이메일을 등록시켜도 클론이나 푸쉬할때 다시 깃허브 아이디를 물어보는데 모든 아이디를 쳐봐도 안된다...
프로젝트에서 git remote -v 를 입려하고 https인지 git.github.com인지 확인한다.
만약 https로 되어있으면
git remote remove origin 기존 리모트를 제거하고
https복사 말고 SSH를 복사해 git@github.com:user.name/repo.git 방식을 입력한다.
그 후 터미널에서 ssh-keygen -t rsa -C "git이메일을 여기에 써주세요." 입력
비밀번호 생성후 한번 더 확인차 재입려 (비밀번호 기억)
cat ~/.ssh/id_rsa.pub 입력
ssh-rsa 부터 이메일 까지 복사
git hub setting > SSH > Add key 복사한 것 등록
그 다음 git push OR git clone 해보기
안되거나 매번 입력하기 귀찮으면
터미널 > eval $(ssh-agent) 입력
ssh-add 입력
위에 기억한 ssh key 비밀번호 입력
agent pid "숫자" 나오면 성공
git push 해보기
