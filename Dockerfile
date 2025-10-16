# Node.js 기반 이미지
FROM node:18-alpine

# 작업 디렉터리 생성
WORKDIR /app

# package.json, package-lock.json 복사
COPY app/package*.json ./

# 종속성 설치
RUN npm install

# 앱 코드 전체 복사
COPY app/. .

# 포트 오픈
EXPOSE 3000

# 앱 실행
CMD ["npm", "start"]