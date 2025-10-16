# Node.js 기반 이미지 사용
FROM node:18-alpine

# 앱 폴더 생성
WORKDIR /app

# package.json 복사 및 설치
COPY app/package*.json ./
RUN npm install

# 앱 코드 복사
COPY app/. .

# 포트 오픈
EXPOSE 3000

# 실행 명령
CMD ["npm", "start"]
