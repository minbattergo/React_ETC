===== React 2일차 =====

javascript
 - core
 - dom api
 - bom

npmjs global javascript 저장소
 - https://www.npmjs.com/search?q=lodash

package-json : devDependencies
^ : 메이저 버전이 최대인거까지 install
~ : 마이너 버전이 최대인거까지 install 
  : 동일한 버전으로 install
  
CommonJS(자바스크립트 모듈화) 스펙의 모듈 가져오기 : require => import, 배포하기: export => export

webpack : 
 - entry point(default : src/index.js) 에서 가져와서 complie 한다.
 
 - 출력(default : dist/main.js) complie 한 결과물을 만들어 놓는다.
 
 - require 부분을 브라우저가 인식이 안되기때문에 컴파일을 수행함
 
 npm run build
  - package-json  의 "build" script를 실행한다.
  
  test: /\.css$/, => .css로 끝나면(정규식) => if(*.css) 

cheapter: git
 - https://github.com
 working -> staging -> 저장소
  (local)   (git add)  (git commit)
  
  
git config –global user.name “ssun”
git config –global user.email “pros5018@nate.com”
git push origin master

git remote -v : 원격 저장소 view
git clone : 원격의 있는걸 통째로 로컬로 복사(로컬에 없는상태)
git pull : 원격의 commit된 내용 가져오기

ex) 예전방식
npm install -g create-react-app
create-react-app scoreboard

ex) 최신버전을 서버에서 가져와서 사용함
npx create-react-app

https://github.com/eastflag/scoreboard.git

부모에서 콜백평션을 작성 props로 콜백평션을 내려준다. 자식에서 콜백평션을 호출하는 방식 : 

VCS -> Git -> Clone : 저장소 통째로 내려받기
NEW -> Edit File Template -> 추가 : 새로운 파일 템플릿 만들기

