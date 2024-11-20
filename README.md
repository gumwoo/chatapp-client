# Real-time Chat Application

카카오톡과 유사한 UI/UX를 가진 실시간 채팅 웹 애플리케이션입니다.

## 주요 기능
- 실시간 1:N 채팅
- 사용자 입/퇴장 시스템 메시지
- 프로필 이미지 및 사용자 이름 표시
- 자동 스크롤
- 연속 메시지 시 프로필 숨김 처리
- 메시지 전송 상태 표시

## 기술 스택
### Frontend
- React.js
- Material-UI Components
- Socket.io-client
- CSS Flexbox/Grid

### Backend
- Node.js
- Express
- Socket.io
- MongoDB
- Mongoose

## 설치 및 실행 방법

1. MongoDB 설치 및 실행

# MongoDB 실행
mongod
2. 서버 설치 및 실행

# 프로젝트 루트 디렉토리에서
npm install
node index.js
3. 클라이언트 설치 및 실행

# chatapp-client 디렉토리에서
npm install
npm start

# 주요 기능 설명
1. 실시간 통신
-Socket.io를 사용한 양방향 실시간 통신 구현
-메시지 전송/수신 이벤트 처리
-연결 상태 관리
2. 사용자 관리
-MongoDB를 통한 사용자 정보 저장
-접속 상태 관리
-중복 이름 처리
3. 채팅 기능
-실시간 메시지 전송/수신
-시스템 메시지 처리
-메시지 저장 및 불러오기
-프로필 이미지 및 사용자 이름 표시
4. UI/UX
-반응형 디자인
-사용자 친화적 인터페이스
-자동 스크롤
-메시지 상태 표시
5. 향후 개선 사항
-채팅방 기능 추가
-파일 전송 기능
-이모티콘 지원
-읽음 확인 기능
-메시지 검색 기능
-알림 기능


